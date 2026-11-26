"""
Main module defining the Card Grid XBlock
"""

import logging

from pathlib import Path

from exemplar_common.card_types import ImageData
from pydantic import ValidationError
from web_fragments.fragment import Fragment
from webob.response import Response
from xblock.core import XBlock
from xblock.exceptions import JsonHandlerError
from xblock.fields import List, Scope, String
from xblock.utils.resources import ResourceLoader

from exemplar_common.xblock_config import get_xblock_config, XBlockView
from exemplar_common.utils import strip_html_for_search
from .types import CardData, InitData, Orientation

logger = logging.getLogger(__name__)
resource_loader = ResourceLoader(__name__)

DEFAULT_CARD = CardData(
    id=1,
    name="Placeholder Card",
    title="Card #1 on the Grid",
    description="This is an Image Card with image on top and text on bottom.",
    secondaryContent=ImageData(
        location="https://picsum.photos/512/512/", altText="Placeholder Image"
    ),
)


class CardGridXBlock(XBlock):
    """
    The CardGridXBlock presents content as a list of card in a grid.

    This is very similar to the CardCarouselXBlock and shared the data
    model for the cards and their properties. Look at CardCarouselXBlock
    for details on supported card types.
    """

    has_author_view = True

    display_name = String(default="Card Grid")
    description = String(
        display_name="Description",
        help="Text above the card grid.",
        default="",
        scope=Scope.content,
    )
    orientation = String(
        display_name="Orientation of the Card Content",
        help="Horizontal for side-by-side content, Vertical for top and bottom content.",
        default=Orientation.VERTICAL,
        values=[
            {"display_name": "Horizontal", "value": "HORIZONTAL"},
            {"display_name": "Vertical", "value": "VERTICAL"},
        ],
    )
    cards = List(
        help="List of Cards", default=[DEFAULT_CARD.model_dump()], scope=Scope.content
    )
    background_color = String(
        display_name="Background Color",
        help="HTML hex-code to be used as the background color.",
        default="#FFFFFF",
        scope=Scope.content,
    )
    footer_description = String(
        display_name="Footer Description",
        help="Text that is presented below the cards.",
        default="An optional footer description.",
        scope=Scope.content,
    )

    def resource_string(self, path: str | Path) -> str:
        """Handy helper for getting resources from our kit."""
        return resource_loader.load_unicode(path)

    def _render_student_view(self, is_author_view: bool = False):
        """Helper function to render the student view in both LMS & CMS."""
        frag = Fragment()
        frag.add_resource_url(
            "https://fonts.googleapis.com/icon?family=Material+Icons+Outlined",
            "text/css",
            "head",
        )
        frag.add_javascript(self.resource_string("static/student.js"))
        if is_author_view:
            frag.add_css(self.resource_string("static/css/studio.css"))
        frag.initialize_js(
            "CardGridXBlock",
            {
                "url": self.runtime.local_resource_url(
                    self, "public/cardGridStudent.js"
                ),
                "data": {
                    "orientation": self.orientation,
                    "description": self.description,
                    "cards": self.cards,
                    "displayName": self.display_name,
                    "backgroundColor": self.background_color,
                    "footerDescription": self.footer_description,
                },
                "config": get_xblock_config(self.context_key, XBlockView.STUDENT),
            },
        )
        return frag

    def student_view(self, context=None):
        """
        The primary view of the CardGridXBlock, shown to students
        when viewing courses.
        """
        return self._render_student_view()

    def author_view(self, context=None):
        """
        Renders the student view in the Studio for Authors to preview the content.
        """
        return self._render_student_view(is_author_view=True)

    def studio_view(self, context=None):
        """
        Editor View for the CardGridXBlock - shown to content authors.
        """
        html = self.resource_string("static/html/card_grid_editor.html")
        frag = Fragment(html)
        frag.add_resource_url(
            "https://fonts.googleapis.com/icon?family=Material+Icons+Outlined",
            "text/css",
            "head",
        )

        frag.add_javascript(self.resource_string("static/studio.js"))
        frag.add_css(self.resource_string("static/css/studio.css"))
        frag.initialize_js(
            "CardGridEditor",
            {
                "url": self.runtime.local_resource_url(
                    self, "public/cardGridStudio.js"
                ),
                "data": {
                    "orientation": self.orientation,
                    "description": self.description,
                    "cards": self.cards,
                    "displayName": self.display_name,
                    "backgroundColor": self.background_color,
                    "footerDescription": self.footer_description,
                },
                "config": get_xblock_config(self.context_key, XBlockView.STUDIO),
            },
        )
        return frag

    @XBlock.handler
    def json_schema(self, request, suffix=""):
        """Return the JSON data or schema of the Pydantic model as a file download."""
        res = Response()
        res.json = InitData.model_json_schema()
        filename = "card-grid-schema.json"
        res.content_disposition = f'attachment; filename="{filename}"'
        return res

    @XBlock.json_handler
    def studio_save(self, data: dict, suffix=""):
        """
        Get the data from the Studio Editor and save it on the XBlock.
        """
        try:
            validated = InitData.model_validate(data)
        except ValidationError as e:
            logger.exception("Invalid data received from studio.")
            message = "\n".join(
                f"Field: {err['loc']}. Error: {err['msg']}" for err in e.errors()
            )
            raise JsonHandlerError(400, message)

        self.display_name = validated.displayName
        self.description = validated.description
        self.orientation = validated.orientation
        self.cards = [c.model_dump() for c in validated.cards]
        self.background_color = validated.backgroundColor
        self.footer_description = validated.footerDescription
        logger.info("Successfully saved Card Grid data.")
        return {"result": "success"}

    def index_dictionary(self):
        """
        Return dictionary prepared with block content and type for indexing.
        """
        xblock_body = super().index_dictionary()
        parts = [self.description, self.footer_description]
        for card in self.cards or []:
            try:
                card_data = CardData(**card)
            except (ValidationError, TypeError):
                logger.warning(
                    "Skipping malformed card while indexing block %s",
                    self.scope_ids.usage_id,
                )
                continue
            if card_text := card_data.searchable_text():
                parts.append(card_text)

        index_body = {
            "display_name": self.display_name,
            "card_grid_content": strip_html_for_search(" ".join(parts)),
        }
        if "content" in xblock_body:
            xblock_body["content"].update(index_body)
        else:
            xblock_body["content"] = index_body
        xblock_body["content_type"] = "Card Grid"
        return xblock_body

    # Alias needed for client's "Data Bricks" indexer project.
    student_view_data = index_dictionary

    @staticmethod
    def workbench_scenarios():
        """A canned scenario for display in the workbench."""
        return [
            (
                "CardGridXBlock",
                """<card_grid/>
             """,
            ),
            (
                "Multiple CardGridXBlock",
                """<vertical_demo>
                <card_grid/>
                <card_grid/>
                <card_grid/>
                </vertical_demo>
             """,
            ),
        ]
