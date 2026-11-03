"""
An XBlock for key point glossary.
"""

import logging

from collections import defaultdict
from importlib.resources import files

from pydantic import ValidationError
from web_fragments.fragment import Fragment
from webob.response import Response
from xblock.core import XBlock
from xblock.exceptions import JsonHandlerError
from xblock.fields import List, Scope, String

from exemplar_common.utils import strip_html_for_search, loc_to_dot_sep
from exemplar_common.xblock_config import get_xblock_config, XBlockView
from .types import WorkbenchScenario, KeyPointBlockData

logger = logging.getLogger(__name__)


class KeypointXBlock(XBlock):
    display_name = String(
        display_name="Display Name",
        default="Key Points",
        scope=Scope.settings,
        help="Name of the component in the studio",
    )
    header = String(
        display_name="Main header",
        default="My Course Section",
        scope=Scope.content,
        help="Main header for the section name.",
    )
    # This is a list of dictionary which is of the shape:
    # [{
    #   "keypoint": "John Doe",
    #   "description": "A simple person"
    # }]
    keypoints = List(
        display_name="Key Points",
        scope=Scope.content,
        help="Key Points is a list of dictionary",
    )
    summary = String(
        display_name="Summary",
        default="",
        scope=Scope.content,
        help="Optional summary text displayed below the key points.",
    )
    button_text = String(
        display_name="Text for the action button",
        scope=Scope.content,
        help="Text on the action button at the bottom of the page",
    )
    button_link = String(
        display_name="Button Link",
        scope=Scope.content,
        help="The link that bottom button points to.",
    )
    background_color = String(
        display_name="Background Color",
        default="#FFFFFF",
        scope=Scope.content,
        help="HTML hex-code to be used as the background color.",
    )

    def resource_string(self, path):
        """Handy helper for getting resources from our kit."""
        return files(__package__).joinpath(path).read_text(encoding="utf-8")

    def student_view(self, context=None):
        """
        Create primary view of the KeypointXBlock, shown to students when viewing courses.
        """
        html = self.resource_string("static/html/keypoint.html")
        frag = Fragment(html)
        frag.add_javascript(self.resource_string("static/js/student.js"))
        frag.initialize_js(
            "KeyPointXBlock",
            {
                "url": self.runtime.local_resource_url(
                    self, "public/keypointBlockStudent.js"
                ),
                "data": {
                    "header": self.header,
                    "keypoints": self.keypoints,
                    "summary": self.summary,
                    "button_text": self.button_text,
                    "button_link": self.button_link,
                    "background_color": self.background_color,
                },
                "config": get_xblock_config(self.context_key, XBlockView.STUDENT),
            },
        )
        return frag

    @XBlock.handler
    def json_schema(self, request, suffix=""):
        return Response(
            json=KeyPointBlockData.model_json_schema(),
            content_disposition='attachment; filename="keypoint-block-schema.json"',
        )

    @XBlock.json_handler
    def studio_save(self, data, suffix=""):
        """Save configuration data from the studio editor."""
        try:
            valid_data = KeyPointBlockData.model_validate(data)
        except ValidationError as e:
            logger.exception("Invalid data received from studio.")
            issues = defaultdict(list)
            for item in e.errors():
                issues[item["msg"]].append(loc_to_dot_sep(item["loc"]))
            raise JsonHandlerError(400, issues)

        self.header = valid_data.header
        self.keypoints = [k.model_dump() for k in valid_data.keypoints]
        self.summary = valid_data.summary
        self.button_text = valid_data.button_text
        self.button_link = valid_data.button_link
        self.background_color = valid_data.background_color
        return {"result": "success"}

    def index_dictionary(self):
        """
        Return dictionary prepared with block content and type for indexing.
        """
        xblock_body = super().index_dictionary()
        parts = [self.header, self.summary, self.button_text]
        for keypoint in self.keypoints or []:
            parts.extend([keypoint.get("keypoint"), keypoint.get("description")])

        index_body = {
            "display_name": self.display_name,
            "keypoint_block_content": strip_html_for_search(
                " ".join(part for part in parts if part)
            ),
        }
        if "content" in xblock_body:
            xblock_body["content"].update(index_body)
        else:
            xblock_body["content"] = index_body
        xblock_body["content_type"] = "Key Points"
        return xblock_body

    def studio_view(self, context=None):
        """
        The studio view for the XBlock, which loads a component to edit and generate the data.
        """

        html = self.resource_string("static/html/keypoint_edit.html")
        frag = Fragment(html)
        frag.add_javascript(self.resource_string("static/js/studio.js"))
        frag.add_css(self.resource_string("static/css/studio.css"))
        frag.initialize_js(
            "KeyPointEditor",
            {
                "url": self.runtime.local_resource_url(
                    self, "public/keypointBlockStudio.js"
                ),
                "data": {
                    "header": self.header,
                    "keypoints": self.keypoints,
                    "summary": self.summary,
                    "button_text": self.button_text,
                    "button_link": self.button_link,
                    "background_color": self.background_color,
                },
                "config": get_xblock_config(self.context_key, XBlockView.STUDIO),
            },
        )
        return frag

    @staticmethod
    def workbench_scenarios() -> list[WorkbenchScenario]:
        """A canned scenario for display in the workbench."""
        return [
            (
                "KeypointBlock with example data",
                """
                <keypoints
                    header="Key Concepts to Explore"
                    keypoints='[
                        {"keypoint": "Fluid balance", "description": "The regulation of fluids within the body to maintain homeostasis and support cellular function."},
                        {"keypoint": "Neural signaling", "description": "The process by which neurons transmit electrical and chemical signals across synapses."},
                        {"keypoint": "Membrane potential", "description": "The difference in electrical charge between the interior and exterior of a cell."}
                    ]'
                    summary="These concepts form a connected sequence. Learners identify the main ideas, compare how they relate, and use the pattern across contexts."
                    button_text="Glossary"
                    button_link="https://example.com/glossary"
                    background_color="#CCCCCC"
                />
                """,
            ),
            (
                "KeypointBlock with default data",
                "<keypoints />",
            ),
        ]
