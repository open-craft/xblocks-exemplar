"""
Type definitions for the Keypoint Block.
"""

from pydantic import BaseModel, Field

WorkbenchScenario = tuple[str, str]


class KeyPoint(BaseModel):
    keypoint: str
    description: str


class KeyPointBlockData(BaseModel):
    """
    Model that defines the complete data stored on the XBlock.
    """

    header: str
    keypoints: list[KeyPoint] = Field(min_length=1)
    summary: str
    button_text: str
    button_link: str
    background_color: str
