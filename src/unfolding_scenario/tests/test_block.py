import json
from typing import Literal

from webob import Request
from xblock.field_data import DictFieldData
from xblock.fields import ScopeIds
from xblock.test.toy_runtime import ToyRuntime

from unfolding_scenario import UnfoldingScenarioXBlock

VALID_DATA = {
    "name": "Example Scenario",
    "introduction": {
        "heading": "Introduction",
        "description": "An introduction to the scenario.",
        "imageURL": "https://picsum.photos/200",
    },
    "scenarios": [
        {
            "heading": "Scenario 1",
            "description": "The first scenario.",
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
    "outcome": {
        "heading": "Outcome",
        "description": "You have completed all the scenarios.",
        "displaySelectedOptions": False,
    },
    "interactionType": "Explore",
}


def make_request(method: Literal["GET", "POST", "PUT", "DELETE"], data) -> Request:
    """Make a webob JSON Request"""
    request = Request.blank("/")
    request.method = method
    data = json.dumps(data).encode("utf-8") if data is not None else b""
    request.body = data
    return request


def make_block(**fields: str) -> UnfoldingScenarioXBlock:
    """Build a block with specific fields set."""
    scope_ids = ScopeIds("1", "2", "3", "4")
    return UnfoldingScenarioXBlock(
        ToyRuntime(),
        scope_ids=scope_ids,
        field_data=DictFieldData(data=fields),
    )


def get_student_content(block: UnfoldingScenarioXBlock) -> str:
    """Get the contents of a student render for a block."""
    frag = block.student_view()
    as_dict = frag.to_dict()
    return as_dict["content"]


def get_studio_content(block: UnfoldingScenarioXBlock) -> str:
    """Get the contents of a studio render for a block."""
    frag = block.studio_view()
    as_dict = frag.to_dict()
    return as_dict["content"]


def test_block_html():
    """Test that the block with defaults renders as expected.

    The rendering is very barebones; most of the UI is built with react.
    """
    block = make_block()
    content = get_student_content(block)
    assert "unfolding_scenario_block" in content


def test_block_html_studio():
    """Test that the studio view with defaults renders as expected.

    The rendering is very barebones; most of the UI is built with react.
    """
    block = make_block()
    content = get_studio_content(block)
    assert "editor-with-buttons" in content


def test_block_default_data():
    """The block has valid default data."""
    block = make_block()

    assert block.scenario_data["introduction"]["heading"] == "An example scenario"
    assert block.display_name == "Unfolding Scenario"


def test_block_update_data():
    """Test that we can update data via the studio_save handler"""
    block = make_block()

    response = block.handle(
        "studio_save",
        make_request(
            "POST",
            {
                "displayName": "test",
                "scenarioData": {
                    **VALID_DATA,
                    "interactionType": "SelectOne",
                },
            },
        ),
    )

    assert response.status == "200 OK"
    assert b"success" in response.body

    assert block.display_name == "test"
    assert block.scenario_data["introduction"]["heading"] == "Introduction"
    assert block.scenario_data["interactionType"] == "SelectOne"


def test_block_update_data_reject_invalid():
    """Test that updating invalid data via the studio_save handler fails and does not update data."""
    block = make_block()

    response = block.handle(
        "studio_save",
        make_request(
            "POST",
            {
                "displayName": "test",
                "scenarioData": {
                    "introduction": VALID_DATA["introduction"],
                    "scenarios": [
                        {
                            **VALID_DATA["scenarios"][0],
                            "options": "not-a-list",
                        }
                    ],
                    "outcome": VALID_DATA["outcome"],
                },
            },
        ),
    )

    assert response.status == "400 Bad Request"

    # assert the changes haven't been persisted
    assert block.display_name == "Unfolding Scenario"
    assert block.scenario_data["introduction"]["heading"] == "An example scenario"


def test_workbench_scenarios():
    """Basic test to verify workbench scenario loading doesn't raise an error."""
    scenarios = UnfoldingScenarioXBlock.workbench_scenarios()
    assert isinstance(scenarios, list)
    assert len(scenarios) > 0


def test_index_dictionary():
    """Learner-visible text from the block content is indexed as plain text."""
    block = make_block(scenario_data=VALID_DATA)

    result = block.index_dictionary()

    assert result["content_type"] == "Unfolding Scenario"
    assert result["content"]["display_name"] == "Unfolding Scenario"
    content = result["content"]["unfolding_scenario_content"]
    assert "Introduction" in content
    assert "What would you do next?" in content
    assert "That's right!" in content
    assert "Outcome" in content


def test_index_dictionary_malformed_content():
    """Malformed data is ignored rather than breaking indexing."""
    block = make_block(scenario_data={"invalid": "data"})

    result = block.index_dictionary()

    assert result["content"]["unfolding_scenario_content"] == ""
