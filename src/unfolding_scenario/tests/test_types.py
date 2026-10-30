import re

import pytest
from pydantic import ValidationError

from unfolding_scenario.types import Data, ScenarioData

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


def test_data_validation():
    """Basic test for data validation for the root pydantic model."""
    validated_data = ScenarioData(**VALID_DATA)

    # test the round trip from dictionary -> model -> dictionary
    assert validated_data.model_dump() == VALID_DATA


def test_data_validation_fail():
    """Extra inputs are rejected."""
    with pytest.raises(
        ValidationError,
        match=re.compile(
            r"^1 validation error for ScenarioData.*Extra inputs are not permitted .*'baz'.*$",
            re.DOTALL,
        ),
    ):
        ScenarioData(**VALID_DATA, foobar="baz")


def test_data_validation_fail_missing_answer_field():
    """Answers missing required fields are rejected."""
    with pytest.raises(ValidationError):
        ScenarioData(
            **{
                **VALID_DATA,
                "scenarios": [
                    {
                        **VALID_DATA["scenarios"][0],
                        "options": [{"value": "Do this", "icon": "placeholder"}],
                    }
                ],
            }
        )


def test_unfolding_scenario_fields_validation():
    """The full studio payload validates, including the background colour."""
    input_data = {
        "displayName": "test",
        "scenarioData": VALID_DATA,
    }

    validated_data = Data(**input_data)

    assert validated_data.displayName == "test"
    assert validated_data.scenarioData.model_dump() == VALID_DATA


def test_searchable_text():
    """All the learner-visible text is included in the search index text."""
    validated_data = ScenarioData(**VALID_DATA)

    text = validated_data.searchable_text()

    for expected in (
        "Introduction",
        "An introduction to the scenario.",
        "Scenario 1",
        "What would you do next?",
        "Do that",
        "That's right!",
        "Outcome",
        "You have completed all the scenarios.",
    ):
        assert expected in text
