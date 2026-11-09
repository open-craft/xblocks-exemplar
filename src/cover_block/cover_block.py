"""
Main Cover Block code module. Provides the XBlock for import by the studio.
"""

import logging

from django.conf import settings
from django.template import Context, Template
from pydantic import ValidationError
from web_fragments.fragment import Fragment
from xblock.core import XBlock
from xblock.exceptions import JsonHandlerError
from xblock.fields import Scope, String
from xblock.utils.resources import ResourceLoader

from exemplar_common.utils import strip_html_for_search
from exemplar_common.xblock_config import get_xblock_config, XBlockView
from .types import CoverBlockFields, ImagePosition, WorkbenchScenario

logger = logging.getLogger(__name__)
resource_loader = ResourceLoader(__name__)


UNSET_SENTINEL_VALUE = "__UNSET__"


def default_media_url() -> str:
    """
    Get the default media URL if set in the Django settings. Otherwise, use
    picsum photo.
    """
    return getattr(
        settings,
        "COVERBLOCK_DEFAULT_MEDIA_URL",
        "https://picsum.photos/2000/2000",
    )


def media_with_fallback(target: str) -> str:
    """
    Used for handling the default value in the media URL field, since the default
    is a function.
    """
    if target == UNSET_SENTINEL_VALUE:
        return default_media_url()
    return target


class CoverBlock(XBlock):
    """
    Provides an aesthetically pleasing cover block for the top of a section.
    """

    display_name = String(
        display_name="Display Name",
        default="Cover",
        scope=Scope.settings,
        help="Name of the component in the studio",
    )
    variant = String(
        display_name="Variant",
        default="section",
    )
    top_header = String(
        display_name="Top header",
        default="Section N",
        scope=Scope.content,
        help="Top header, for annotating the section number.",
    )
    top_header_color = String(
        display_name="Top header color",
        default="",
        scope=Scope.content,
        help="Top header text color",
    )
    main_header = String(
        display_name="Main header",
        default="My Course Section",
        scope=Scope.content,
        help="Main header for the section name.",
    )
    main_header_color = String(
        display_name="main header color",
        default="",
        scope=Scope.content,
        help="Main header color",
    )
    subheader = String(
        display_name="Subheader",
        default="A section about sectional things.",
        scope=Scope.content,
        help="Sub-header, shown under the section name.",
    )
    subheader_color = String(
        display_name="Subheader color",
        default="",
        scope=Scope.content,
        help="Subheader color",
    )
    description = String(
        display_name="Description",
        default="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        "Etiam elementum massa a ligula aliquam suscipit. Maecenas bibendum "
        "ultrices fermentum. Nam justo orci, dapibus vitae ex commodo, "
        "efficitur commodo diam.",
        scope=Scope.content,
        help="A descriptive paragraph for this section's content.",
    )
    description_color = String(
        display_name="Description color",
        default="",
        scope=Scope.content,
        help="Description text color",
    )
    media_url = String(
        display_name="Cover image URL",
        default=UNSET_SENTINEL_VALUE,
        scope=Scope.content,
        help="Cover image URL for the block.",
    )
    media_alt_text = String(
        display_name="Cover image alt text",
        default="",
        scope=Scope.content,
        help=(
            "Alt text for the cover image. Include if the image is not merely "
            "decorative to meet accessibility standards."
        ),
    )
    image_position = String(
        display_name="Image position",
        default=ImagePosition.RIGHT.value,
        scope=Scope.content,
        help="Position of image relative to text for section covers.",
    )

    @property
    def dev_mode(self) -> bool:
        """
        Return a boolean indicating whether we're in the workbench. Needed for some
        CSS to look right when developing the block.
        """
        return "Workbench" in self.runtime.__class__.__name__

    def student_view(self, context=None) -> Fragment:
        """
        The primary view of the CoverBlock, shown to students
        when viewing courses.
        """
        html = resource_loader.load_unicode("static/html/cover_block.html")
        frag = Fragment(Template(html).render(Context({"self": self})))
        if self.dev_mode:
            frag.add_css(resource_loader.load_unicode("static/css/workbench.css"))
        frag.add_javascript(resource_loader.load_unicode("static/js/src/student.js"))
        frag.initialize_js(
            "CoverBlock",
            {
                "url": self.runtime.local_resource_url(
                    self, "public/coverBlockStudent.js"
                ),
                "data": self.field_data(),
                "config": get_xblock_config(self.context_key, XBlockView.STUDENT),
            },
        )
        return frag

    def field_data(self):
        """
        Return values of all the fields.
        """
        return CoverBlockFields(
            display_name=self.display_name,
            variant=self.variant,
            top_header=self.top_header,
            top_header_color=self.top_header_color,
            main_header=self.main_header,
            main_header_color=self.main_header_color,
            subheader=self.subheader,
            subheader_color=self.subheader_color,
            description=self.description,
            description_color=self.description_color,
            media_url=media_with_fallback(self.media_url),
            media_alt_text=self.media_alt_text,
            image_position=self.image_position,
        ).model_dump(mode="json")

    def studio_view(self, context=None) -> Fragment:
        """
        The authoring view for this block.
        """
        html = resource_loader.load_unicode("static/html/cover_edit.html")
        frag = Fragment(html)
        frag.add_javascript(resource_loader.load_unicode("static/js/src/studio.js"))
        frag.add_css(resource_loader.load_unicode("static/css/studio.css"))
        frag.initialize_js(
            "CoverEditor",
            {
                "url": self.runtime.local_resource_url(
                    self, "public/coverBlockStudio.js"
                ),
                "data": self.field_data(),
                "config": get_xblock_config(self.context_key, XBlockView.STUDIO),
            },
        )
        return frag

    @XBlock.json_handler
    def studio_save(self, data, suffix=""):
        """Save configuration data from the studio editor."""
        try:
            model_data = CoverBlockFields.model_validate(data)
        except ValidationError as e:
            logger.exception("Invalid data received from studio.")
            message = "\n".join(
                f"Field: {err['loc']}. Error: {err['msg']}" for err in e.errors()
            )
            raise JsonHandlerError(400, message)
        for field, value in model_data.model_dump(mode="json").items():
            setattr(self, field, value)
        return {"result": "success"}

    def index_dictionary(self) -> dict:
        """
        Return dictionary prepared with block content and type for indexing.
        """
        xblock_body = super().index_dictionary()
        cover_block_content = strip_html_for_search(
            " ".join([self.main_header, self.subheader, self.description])
        )
        index_body = {
            "display_name": self.display_name,
            "cover_block_content": cover_block_content,
        }
        if "content" in xblock_body:
            xblock_body["content"].update(index_body)
        else:
            xblock_body["content"] = index_body
        xblock_body["content_type"] = "Cover"
        return xblock_body

    # Alias needed for client's "Data Bricks" indexer project.
    student_view_data = index_dictionary

    @staticmethod
    def workbench_scenarios() -> list[WorkbenchScenario]:
        """A canned scenario for display in the workbench."""
        return [
            (
                "CoverBlock with default data",
                "<cover />",
            ),
            (
                "CoverBlock Section cover",
                # This scenario matches the design.
                """
                <cover
                    top_header="Section 3"
                    main_header="Neural Function"
                    subheader="How neurons communicate, and the early signs when
                               that communication starts to fail."
                    description="Every thought, movement, and sensation depends on
                                 precise neural signaling. In this Section, you’ll
                                 learn the core mechanisms of neural communication
                                 and the early dysfunction patterns that lead to
                                 clinical symptoms."
                    media_url="https://picsum.photos/2200/2200"
                    media_alt_text="Decorative image"
                />
                """,
            ),
            (
                "CoverBlock Course cover",
                """
                <cover
                    variant="course"
                    top_header="Section 3"
                    top_header_color="#ffffff"
                    main_header="Neural Function"
                    subheader="How neurons communicate, and the early signs when
                               that communication starts to fail."
                    description="Every thought, movement, and sensation depends on
                                 precise neural signaling. In this Section, you’ll
                                 learn the core mechanisms of neural communication
                                 and the early dysfunction patterns that lead to
                                 clinical symptoms."
                    media_url="https://picsum.photos/id/124/2200/2200"
                    media_alt_text="Decorative image"
                />
                """,
            ),
            (
                "CoverBlock Separator",
                """
                <cover
                    variant="separator"
                    top_header="When a quiet symptom demands attention"
                    main_header="Acute vascular concern"
                    subheader=""
                    description=""
                    media_url="https://picsum.photos/id/124/2200/2200"
                    media_alt_text="Decorative image"
                />
                """,
            ),
        ]
