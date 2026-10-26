"""
Types for the Card Carousel XBlock.

Developer Note [IMPORTATNT]
---------------------------
These need to be in sync with the frontend types. Update the corresponding
types in the `frontend/src/card/card-crousel/types.ts` file, when making changes here.
"""

from typing import Any

from pydantic import BaseModel, Field, ValidationInfo, model_validator
from exemplar_common.card_types import CardData, Orientation


def normalize_card_orientation(data: Any, fallback: Any = None) -> Any:
    """Copy legacy input without mutating stored data; validate values afterwards."""
    if isinstance(data, dict) and data.get("orientation") is None:
        return {
            **data,
            "orientation": fallback if fallback is not None else Orientation.HORIZONTAL,
        }
    return data


class CarouselCardData(CardData):
    """
    Card data for carousel cards, including each card's layout orientation.
    """

    orientation: Orientation

    @model_validator(mode="before")
    @classmethod
    def resolve_orientation(cls, data: Any, info: ValidationInfo) -> Any:
        return normalize_card_orientation(data, (info.context or {}).get("orientation"))


class InitData(BaseModel):
    """
    Model that defines the complete data that's passed to the frontend.
    """

    # List of cards in the carousel
    cards: list[CarouselCardData] = Field(min_length=1)

    # Title shown on top of the carousel
    displayName: str

    # Deprecated: accepted as a legacy migration fallback, but not dumped/saved.
    orientation: Orientation | None = Field(default=None, exclude=True)

    @model_validator(mode="before")
    @classmethod
    def normalize_legacy_cards(cls, data: Any, info: ValidationInfo) -> Any:
        if not isinstance(data, dict):
            return data
        fallback = data.get("orientation")
        if fallback is None:
            fallback = (info.context or {}).get("orientation")
        if fallback is None:
            fallback = Orientation.HORIZONTAL
        cards = data.get("cards")
        if not isinstance(cards, list):
            return data  # Let normal validation report malformed input.
        return {
            **data,
            "cards": [normalize_card_orientation(card, fallback) for card in cards],
        }

    # Flag to disable the pagination numbers on the cards
    disableNumbering: bool = False

    # Background color for the block
    backgroundColor: str = "#FFFFFF"
