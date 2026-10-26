"""
External Resources XBlock's main module.
"""

import logging

from pydantic import ValidationError
from web_fragments.fragment import Fragment
from xblock.core import XBlock
from xblock.exceptions import JsonHandlerError
from xblock.fields import List, Scope, String
from xblock.utils.resources import ResourceLoader

from external_resources.types import Data, FileType, Resource
from exemplar_common.utils import strip_html_for_search
from exemplar_common.xblock_config import get_xblock_config, XBlockView

logger = logging.getLogger(__name__)
resource_loader = ResourceLoader(__name__)

DEFAULT_RESOURCES = [
    Resource(
        id="example-article",
        url="https://openedx.org/",
        title="Open edX Article",
        publisher="Open edX",
        expectedMinutes=5,
        fileType=FileType.ARTICLE,
    ),
    Resource(
        id="example-video",
        url="https://www.youtube.com/watch?v=QHj6o6gCGsU",
        title="Open edX platform: Verawood Release",
        publisher="Open edX",
        expectedMinutes=10,
        fileType=FileType.VIDEO,
    ),
]


class ExternalResourcesXBlock(XBlock):
    """
    External Resources XBlock lets course authors curate external learning
    resources, and lets learners mark each resource as read.
    """

    has_author_view = True

    display_name = String(
        display_name="Display Name",
        default="External Resources",
        scope=Scope.settings,
        help="Name of the component, also shown to learners as the block title",
    )
    resources = List(
        display_name="Resources",
        default=[resource.model_dump() for resource in DEFAULT_RESOURCES],
        scope=Scope.content,
        help="The external resources shown to learners, in order",
    )
    read_resources = List(
        display_name="Read resources",
        default=[],
        scope=Scope.user_state,
        help="IDs of the resources the learner has marked as read",
    )

    def _resource_ids(self) -> set[str]:
        """
        IDs of the resources currently in the block.
        """
        return {resource.get("id") for resource in self.resources}

    def _current_read_resources(self) -> list[str]:
        """
        The learner's read resources, without IDs of resources that were removed.
        """
        resource_ids = self._resource_ids()
        return [
            resource_id
            for resource_id in self.read_resources
            if resource_id in resource_ids
        ]

    def _render_preview(self, *, is_studio: bool) -> Fragment:
        """
        Student view for the External Resources XBlock.
        """
        html = resource_loader.load_unicode("static/html/external_resources.html")
        frag = Fragment(html)

        frag.add_javascript(resource_loader.load_unicode("static/js/entrypoint.js"))
        view = XBlockView.STUDENT

        if is_studio:
            frag.add_css(resource_loader.load_unicode("static/css/studio.css"))
            view = XBlockView.STUDIO

        frag.initialize_js(
            "ExternalResourcesXBlock",
            {
                "url": self.runtime.local_resource_url(
                    self, "public/externalResourcesStudent.js"
                ),
                "data": {
                    "displayName": self.display_name,
                    "resources": self.resources,
                    "readResources": self._current_read_resources(),
                },
                "config": get_xblock_config(self.context_key, view=view),
            },
        )
        return frag

    def student_view(self, context=None):
        """The primary view of this block, shown to students
        when viewing courses.
        """
        return self._render_preview(is_studio=False)

    def author_view(self, context=None):
        return self._render_preview(is_studio=True)

    def studio_view(self, context=None):
        """
        Authoring editor view for the External Resources XBlock.
        """
        html = resource_loader.load_unicode(
            "static/html/external_resources_editor.html"
        )
        frag = Fragment(html)
        frag.add_css(resource_loader.load_unicode("static/css/studio.css"))
        frag.add_javascript(resource_loader.load_unicode("static/js/entrypoint.js"))

        frag.initialize_js(
            "ExternalResourcesXBlock",
            {
                "url": self.runtime.local_resource_url(
                    self, "public/externalResourcesStudio.js"
                ),
                "data": {
                    "displayName": self.display_name,
                    "resources": self.resources,
                },
                "config": get_xblock_config(self.context_key, XBlockView.STUDIO),
            },
        )
        return frag

    @XBlock.json_handler
    def studio_save(self, data: dict, suffix=""):
        """
        JSON handler that saves the studio editor data.
        """
        try:
            block_data = Data.model_validate(data)
        except ValidationError as e:
            logger.exception("Invalid data received from studio.")
            message = "\n".join(
                f"Field: {err['loc']}. Error: {err['msg']}" for err in e.errors()
            )
            raise JsonHandlerError(400, message)

        self.display_name = block_data.displayName
        self.resources = [resource.model_dump() for resource in block_data.resources]

        logger.info("Successfully saved External Resources data.")
        return {"result": "success"}

    @XBlock.json_handler
    def set_read(self, data: dict, suffix=""):
        """
        JSON handler that marks a resource as read or unread for the learner.

        Takes an explicit ``read`` value instead of toggling on the server, so
        that repeated requests (eg. a double click) give the same result.
        """
        resource_id = data.get("resourceId")
        read = data.get("read")
        if not isinstance(resource_id, str) or not isinstance(read, bool):
            raise JsonHandlerError(
                400, "Expected a string 'resourceId' and a boolean 'read'."
            )
        if resource_id not in self._resource_ids():
            raise JsonHandlerError(400, f"Unknown resource: {resource_id!r}.")

        # Remove the resource (and IDs of deleted resources), then add it back
        # only when marking it as read.
        read_resources = [
            existing_id
            for existing_id in self._current_read_resources()
            if existing_id != resource_id
        ]
        if read:
            read_resources.append(resource_id)
        self.read_resources = read_resources

        return {"readResources": read_resources}

    def index_dictionary(self):
        """
        Return a dictionary prepared with block content for indexing
        learner facing content used in search.
        """
        xblock_body = super().index_dictionary()
        searchable_text = ""
        try:
            searchable_text = " ".join(
                Resource.model_validate(resource).searchable_text()
                for resource in self.resources
            )
        except (ValidationError, TypeError):
            logger.warning(
                "Skipping malformed content while indexing block %s",
                self.scope_ids.usage_id,
            )

        index_body = {
            "display_name": self.display_name,
            "external_resources_content": strip_html_for_search(searchable_text),
        }

        if "content" in xblock_body:
            xblock_body["content"].update(index_body)
        else:
            xblock_body["content"] = index_body

        xblock_body["content_type"] = "External Resources"
        return xblock_body

    @staticmethod
    def workbench_scenarios():
        """A set of workbench scenarios."""

        return [
            ("ExternalResourcesXBlock", "<external_resources />"),
        ]
