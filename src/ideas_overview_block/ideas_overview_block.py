"""Main Ideas Overview Block code module. Provides the XBlock for import by the studio."""

import json
import logging

from pydantic import ValidationError
from web_fragments.fragment import Fragment
from xblock.core import XBlock
from xblock.exceptions import JsonHandlerError
from xblock.fields import Dict, Scope, String
from xblock.utils.resources import ResourceLoader
from xblock.utils.studio_editable import StudioEditableXBlockMixin

from exemplar_common.xblock_config import get_xblock_config, XBlockView
from exemplar_common.utils import strip_html_for_search
from .types import (
    Data,
    Content,
    Idea,
    WorkbenchScenario,
)
from exemplar_common.utils import generate_attrs


log = logging.getLogger(__name__)

resource_loader = ResourceLoader(__name__)

DEFAULT_CONTENT = Content(
    header="<p><b>Ideas in this section</b></p><p>There are some ideas covered in this section.",
    footer="<p>Consider these <b>important ideas</b> as you begin the course.</p>",
    ideas=[
        Idea(
            title="Idea 1",
            points=[
                "<b>First:</b> the first point",
                "<b>Second:</b> the second point",
            ],
        ),
        Idea(
            title="Idea 2",
            points=[
                "<b>First:</b> the first point",
                "<b>Second:</b> the second point",
            ],
        ),
    ],
)


class IdeasOverviewBlock(StudioEditableXBlockMixin, XBlock):
    """Provides an aesthetically pleasing ideas overview block for displaying content."""

    has_author_view = True

    display_name = String(
        display_name="Display name",
        default="Ideas Overview",
        scope=Scope.settings,
        help="Name of the component in the studio",
    )
    content = Dict(
        display_name="Content",
        default=DEFAULT_CONTENT.model_dump(),
        scope=Scope.settings,
        help="",
    )
    background_color = String(
        display_name="Background Color",
        default="#FFFFFF",
        scope=Scope.settings,
    )
    editable_fields: tuple[str, ...] = (  # type: ignore
        "display_name",
        "content",
        "background_color",
    )

    def _render_preview(self, *, is_studio: bool):
        frag = Fragment()

        frag.add_javascript(resource_loader.load_unicode("static/js/entrypoint.js"))
        view = XBlockView.STUDENT
        if is_studio:
            frag.add_css(resource_loader.load_unicode("static/css/studio.css"))
            view = XBlockView.STUDIO

        frag.initialize_js(
            "IdeasOverviewXBlock",
            {
                "url": self.runtime.local_resource_url(
                    self,
                    "public/ideasOverviewBlockStudent.js",
                ),
                "data": {
                    "displayName": self.display_name,
                    "content": self.content,
                    "backgroundColor": self.background_color,
                },
                "config": get_xblock_config(self.context_key, view),
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
        """Studio edit view."""
        html = resource_loader.load_unicode(
            "static/html/ideas_overview_block_editor.html"
        )
        frag = Fragment(html)
        frag.add_css(resource_loader.load_unicode("static/css/studio.css"))
        frag.add_javascript(resource_loader.load_unicode("static/js/entrypoint.js"))

        try:
            validated_data = Data(
                displayName=self.display_name,
                content=self.content,
                backgroundColor=self.background_color,
            )
        except ValidationError as e:
            log.error(
                "Error validating data for %s: %s",
                self.display_name,
                json.dumps(e.errors()),
            )
            raise JsonHandlerError(500, json.dumps(e.errors()))

        frag.initialize_js(
            "IdeasOverviewXBlock",
            {
                "url": self.runtime.local_resource_url(
                    self,
                    "public/ideasOverviewBlockStudio.js",
                ),
                "data": {
                    "displayName": validated_data.displayName,
                    "content": validated_data.content.model_dump(),
                    "backgroundColor": validated_data.backgroundColor,
                },
                "config": get_xblock_config(self.context_key, XBlockView.STUDIO),
            },
        )

        return frag

    @XBlock.json_handler
    def studio_save(self, data, suffix=""):
        """Save data from the studio editor."""
        try:
            validated_data = Data(**data)
        except ValidationError as e:
            raise JsonHandlerError(400, json.dumps(e.errors()))

        self.display_name = validated_data.displayName
        self.content = validated_data.content.model_dump()
        self.background_color = validated_data.backgroundColor
        return {"result": "success"}

    def index_dictionary(self):
        """
        Return dictionary prepared with block content and type for indexing.
        """
        xblock_body = super().index_dictionary()
        ideas_overview_content = ""

        try:
            content = Content(**self.content)
            ideas_overview_content = content.searchable_text()
        except (ValidationError, TypeError):
            log.warning(
                "Skipping malformed content while indexing block %s",
                self.scope_ids.usage_id,
            )

        index_body = {
            "display_name": self.display_name,
            "ideas_overview_content": strip_html_for_search(ideas_overview_content),
        }
        if "content" in xblock_body:
            xblock_body["content"].update(index_body)
        else:
            xblock_body["content"] = index_body
        xblock_body["content_type"] = "Ideas Overview"
        return xblock_body

    # Alias needed for client's "Data Bricks" indexer project.
    student_view_data = index_dictionary

    @staticmethod
    def workbench_scenarios() -> list[WorkbenchScenario]:
        """Static scenarios for display in the workbench."""
        # To add/edit scenarios, edit the ./static/workbench_scenarios.json file
        data = json.loads(
            resource_loader.load_unicode("static/workbench_scenarios.json"),
        )

        return [
            (
                block_data["scenario_name"],
                f"<ideas_overview {generate_attrs(block_data['attributes'])} />",
            )
            for block_data in data
        ]
