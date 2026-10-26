"""Types for the External Resources Block"""

from enum import StrEnum
from urllib.parse import urlsplit

from pydantic import BaseModel, ConfigDict, Field, field_validator, model_validator

ALLOWED_URL_SCHEMES = {"http", "https"}


class FileType(StrEnum):
    """
    The type of an external resource. CUSTOM means the author typed their own
    type in ``customFileType`` because none of the predefined ones fit.
    """

    ARTICLE = "ARTICLE"
    VIDEO = "VIDEO"
    PDF = "PDF"
    TEXTBOOK = "TEXTBOOK"
    VIRTUAL_MACHINE = "VIRTUAL_MACHINE"
    INTERACTIVE_ACTIVITY = "INTERACTIVE_ACTIVITY"
    WGU_LIBRARY = "WGU_LIBRARY"
    CUSTOM = "CUSTOM"


class Resource(BaseModel):
    """
    An external resource shown as a card to learners.
    """

    model_config = ConfigDict(use_enum_values=True, extra="forbid")

    id: str
    url: str
    title: str
    publisher: str
    expectedMinutes: int = Field(ge=1)
    fileType: FileType
    # Only used when fileType is CUSTOM.
    customFileType: str = ""
    thumbnailUrl: str = ""
    # Empty means the thumbnail is decorative.
    thumbnailAltText: str = ""
    # Material icon name shown when there is no thumbnail, as in the card
    # blocks. Empty means the file type icon is used.
    thumbnailIcon: str = ""

    @field_validator("url")
    @classmethod
    def validate_url(cls, value: str) -> str:
        """
        Only allow absolute http(s) URLs.
        """
        value = value.strip()
        parts = urlsplit(value)
        if parts.scheme.lower() not in ALLOWED_URL_SCHEMES or not parts.netloc:
            raise ValueError(f"{value!r} is not an absolute http(s) URL.")
        return value

    @model_validator(mode="after")
    def validate_custom_file_type(self) -> "Resource":
        """
        Require a custom type for CUSTOM resources, and drop it otherwise.
        """
        if self.fileType == FileType.CUSTOM:
            if not self.customFileType:
                raise ValueError("customFileType is required when fileType is CUSTOM.")
        else:
            self.customFileType = ""
        return self

    def searchable_text(self) -> str:
        """
        Learner-visible text for search indexing.

        The URL, ID, file type, icon and expected time are deliberately excluded.
        """
        return " ".join([self.title, self.publisher, self.thumbnailAltText])


class Data(BaseModel):
    """
    Full payload sent by the studio editor when saving the block.
    """

    model_config = ConfigDict(extra="forbid")

    displayName: str
    resources: list[Resource]
