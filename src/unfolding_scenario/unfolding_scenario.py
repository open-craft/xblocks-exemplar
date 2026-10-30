"""
Unfolding Scenario XBlock's main module.
"""

import logging

from pydantic import ValidationError
from web_fragments.fragment import Fragment
from xblock.core import XBlock
from xblock.exceptions import JsonHandlerError
from xblock.fields import Scope, String, Dict
from xblock.utils.resources import ResourceLoader

from unfolding_scenario.types import Data, ScenarioData, InteractionType
from exemplar_common.utils import strip_html_for_search
from exemplar_common.xblock_config import get_xblock_config, XBlockView

logger = logging.getLogger(__name__)
resource_loader = ResourceLoader(__name__)

DEFAULT_SCENARIO_DATA = ScenarioData(
    name="Unfolding Scenario",
    introduction={
        "heading": "An example scenario",
        "description": (
            "Work through the scenarios one by one, making a decision at each "
            "step, to see how the situation unfolds."
        ),
        "imageURL": "https://picsum.photos/id/82/300/500",
    },
    scenarios=[
        {
            "heading": "Scenario 1",
            "description": "The first scenario in the sequence.",
            "instructionTitle": "What you need to do",
            "instructionDescription": "Choose one of the options below.",
            "prompt": "What would you do next?",
            "options": [
                {"value": "Do this", "feedback": "Not quite.", "type": "Incorrect"},
                {
                    "value": "Do that",
                    "feedback": "That's right!",
                    "type": "Correct",
                },
            ],
        },
        {
            "heading": "Scenario 2",
            "description": "The second scenario in the sequence.",
            "instructionTitle": "What you need to do",
            "instructionDescription": "Choose one of the options below.",
            "prompt": "What would you do next?",
            "options": [
                {"value": "Do this", "feedback": "Not quite.", "type": "Incorrect"},
                {
                    "value": "Do that",
                    "feedback": "That's right!",
                    "type": "Correct",
                },
            ],
        },
        {
            "heading": "Scenario 3",
            "description": "The third scenario in the sequence.",
            "instructionTitle": "What you need to do",
            "instructionDescription": "Choose one of the options below.",
            "prompt": "What would you do next?",
            "options": [
                {"value": "Do this", "feedback": "Not quite.", "type": "Incorrect"},
                {
                    "value": "Do that",
                    "feedback": "That's right!",
                    "type": "Correct",
                },
            ],
        },
    ],
    outcome={
        "heading": "Outcome",
        "description": "You have completed all the scenarios.",
        "displaySelectedOptions": False,
    },
    interactionType=InteractionType.Explore,
)


class UnfoldingScenarioXBlock(XBlock):
    """
    Unfolding Scenario XBlock is an interactive XBlock providing a multi-step
    decision-based practice activities.
    """

    display_name = String(
        display_name="Display Name",
        default="Unfolding Scenario",
        scope=Scope.settings,
        help="Name of the component in the studio",
    )
    scenario_data = Dict(
        display_name="Data",
        default=DEFAULT_SCENARIO_DATA.model_dump(),
        scope=Scope.content,
        help="All the content of the block: the introduction, scenarios and outcome",
    )

    def _render_preview(self, *, is_studio: bool) -> Fragment:
        """
        Student view for the Unfolding Scenario XBlock.
        """
        html = resource_loader.load_unicode("static/html/unfolding_scenario.html")
        frag = Fragment(html)

        frag.add_javascript(resource_loader.load_unicode("static/js/entrypoint.js"))
        view = XBlockView.STUDENT

        if is_studio:
            frag.add_css(resource_loader.load_unicode("static/css/studio.css"))
            view = XBlockView.STUDIO

        frag.initialize_js(
            "UnfoldingScenarioXBlock",
            {
                "url": self.runtime.local_resource_url(
                    self, "public/unfoldingScenarioStudent.js"
                ),
                "data": {
                    "displayName": self.display_name,
                    "scenarioData": self.scenario_data,
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
        Authoring editor view for the Unfolding Scenario XBlock.
        """
        html = resource_loader.load_unicode(
            "static/html/unfolding_scenario_editor.html"
        )
        frag = Fragment(html)
        frag.add_css(resource_loader.load_unicode("static/css/studio.css"))
        frag.add_javascript(resource_loader.load_unicode("static/js/entrypoint.js"))

        frag.initialize_js(
            "UnfoldingScenarioXBlock",
            {
                "url": self.runtime.local_resource_url(
                    self, "public/unfoldingScenarioStudio.js"
                ),
                "data": {
                    "displayName": self.display_name,
                    "scenarioData": self.scenario_data,
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
        self.scenario_data = block_data.scenarioData.model_dump()

        logger.info("Successfully saved Unfolding Scenario data.")
        return {"result": "success"}

    def index_dictionary(self):
        """
        Return a dictionary prepared with block content for indexing
        learner facing content used in search.
        """
        xblock_body = super().index_dictionary()
        searchable_text = ""
        try:
            searchable_text = ScenarioData.model_validate(
                self.scenario_data
            ).searchable_text()
        except (ValidationError, TypeError):
            logger.warning(
                "Skipping malformed content while indexing block %s",
                self.scope_ids.usage_id,
            )

        index_body = {
            "display_name": self.display_name,
            "unfolding_scenario_content": strip_html_for_search(searchable_text),
        }

        if "content" in xblock_body:
            xblock_body["content"].update(index_body)
        else:
            xblock_body["content"] = index_body

        xblock_body["content_type"] = "Unfolding Scenario"
        return xblock_body

    @staticmethod
    def workbench_scenarios():
        """A set of workbench scenarios."""

        return [
            (
                "UnfoldingScenarioXBlock",
                """
                <unfolding_scenario
                    display_name="Unfolding Scenario Demo"
                />
                """,
            ),
        ]
