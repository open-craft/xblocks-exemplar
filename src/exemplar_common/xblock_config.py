from enum import Enum

from django.conf import settings


class XBlockView(Enum):
    """
    Enumeration representing different XBlock views.

    Attributes:
        STUDENT: The student view as rendered for the LMS/Learning MFE.
        STUDIO: Studio view, used for editing and configuring the XBlock.
        AUTHOR: Authoring view, rendered for authors in studio.
    """

    STUDENT = "student"
    STUDIO = "studio"
    AUTHOR = "author"


def get_xblock_config(context_key: str, view: XBlockView | None = None):
    config: dict[str, str | bool] = {
        "mfe_config_api": f"{settings.LMS_ROOT_URL}/api/mfe_config/v1?mfe=learning",
    }

    if view == XBlockView.STUDIO:
        config["enable_json_editing"] = bool(
            getattr(settings, "ENABLE_XBLOCK_JSON_EDITING", False)
        )
        if getattr(settings, "ENABLE_XBLOCK_FILE_PICKER", False):
            config["file_picker_url"] = (
                f"{settings.COURSE_AUTHORING_MICROFRONTEND_URL}/file_picker/{context_key}"
            )
    return config
