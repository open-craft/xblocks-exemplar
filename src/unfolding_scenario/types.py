"""Types for the Unfolding Scenario Block"""

from enum import Enum
from typing import Annotated

from pydantic import AfterValidator, BaseModel, ConfigDict

from exemplar_common.utils import sanitise_simple_html_body


class InteractionType(Enum):
    # Users only need to select a single option in a scenario to continue.
    # They may change their mind though, and click as many as they like.
    # With this type, authors have the option to display an outcome that shows which options the user locked in.
    SelectOne = "SelectOne"

    # Users must click through all options before they can continue in each scenario.
    # Only a general outcome will be displayed.
    Explore = "Explore"


class FeedbackType(Enum):
    Correct = "Correct"
    Incorrect = "Incorrect"
    Warning = "Warning"


class Outcome(BaseModel):
    """
    An optional "outcomes" slide at the end of scenarios.
    """

    model_config = ConfigDict(use_enum_values=True, extra="forbid")

    heading: str
    description: Annotated[str, AfterValidator(sanitise_simple_html_body)]
    displaySelectedOptions: bool

    def searchable_text(self) -> str:
        """Learner-visible text for search indexing."""
        return f"{self.heading} {self.description}"


class Option(BaseModel):
    """
    Options presented in a scenario.
    """

    model_config = ConfigDict(use_enum_values=True, extra="forbid")

    value: str
    feedback: str
    type: FeedbackType

    def searchable_text(self) -> str:
        """Learner-visible text for search indexing."""
        return f"{self.value} {self.feedback}"


class Scenario(BaseModel):
    """
    Scenario presented as an interactive slide.
    """

    model_config = ConfigDict(use_enum_values=True, extra="forbid")

    heading: str
    description: Annotated[str, AfterValidator(sanitise_simple_html_body)]
    instructionTitle: str
    instructionDescription: Annotated[str, AfterValidator(sanitise_simple_html_body)]
    prompt: str
    options: list[Option]

    def searchable_text(self) -> str:
        """Learner-visible text for search indexing."""
        return " ".join(
            [
                self.heading,
                self.description,
                self.instructionTitle,
                self.instructionDescription,
                self.prompt,
                *[option.searchable_text() for option in self.options],
            ]
        )


class Introduction(BaseModel):
    """
    Introduction content that's presented by default by the XBlock.
    """

    model_config = ConfigDict(use_enum_values=True, extra="forbid")

    heading: str
    description: Annotated[str, AfterValidator(sanitise_simple_html_body)]
    imageURL: str

    def searchable_text(self) -> str:
        """Learner-visible text for search indexing."""
        return " ".join([self.heading, self.description])


class ScenarioData(BaseModel):
    """
    All the learner-facing content of the Unfolding Scenario block.
    """

    model_config = ConfigDict(use_enum_values=True, extra="forbid")

    name: str
    introduction: Introduction
    scenarios: list[Scenario]
    outcome: Outcome
    interactionType: InteractionType

    def searchable_text(self) -> str:
        """
        Learner visible text for the search index.
        """
        parts = [
            self.introduction.searchable_text(),
            self.outcome.searchable_text() if self.outcome else "",
        ]
        for scenario in self.scenarios:
            parts.append(scenario.searchable_text())
        return " ".join(parts)


class Data(BaseModel):
    """
    Full payload sent by the studio editor when saving the block.
    """

    model_config = ConfigDict(use_enum_values=True, extra="forbid")

    displayName: str
    scenarioData: ScenarioData
