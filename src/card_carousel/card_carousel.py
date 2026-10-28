"""
Main module of the "Card Carousel" XBlock.
"""

from collections import defaultdict
import logging
import json

from pathlib import Path

from pydantic import ValidationError
from web_fragments.fragment import Fragment
from webob.response import Response
from xblock.core import XBlock
from xblock.exceptions import JsonHandlerError
from xblock.fields import Scope, String, List, Boolean
from xblock.utils.resources import ResourceLoader
from xblock.utils.settings import XBlockWithSettingsMixin

from exemplar_common.xblock_config import get_xblock_config, XBlockView
from exemplar_common.card_types import (
    CardType,
    ContentHighlightData,
    Orientation,
)
from exemplar_common.utils import loc_to_dot_sep, strip_html_for_search
from .types import CarouselCardData, InitData


logger = logging.getLogger(__name__)
resource_loader = ResourceLoader(__name__)

DEFAULT_CARD = CarouselCardData(
    id=1,
    name="Placeholder Card",
    orientation=Orientation.HORIZONTAL,
    title="Carousel Card",
    subtitle=(
        "Use the 'Edit' button to change the contents of this card and add more "
        "cards to the carousel."
    ),
    description=(
        "P.S: Cards have a 'Call to action' button that can link to any content "
        "on the course or anywhere else on the web."
    ),
    secondaryContent=ContentHighlightData(
        kind=CardType.CONTENT_HIGHLIGHT,
        title="Layouts",
        subtitle="💡",
        description="The card carousel supports multiple layouts.",
    ),
)


@XBlock.needs("settings")
class CardCarouselXBlock(XBlock, XBlockWithSettingsMixin):
    """
    The CardCarouselXblock presents content as a list of "cards" in a carousel.

    Each card content is defined by a set of primary content attributes and a
    "secondaryContent" object. The cards support the following templates:
        1. IMAGE - Secondary content is an image covering half the card.
        2. RICH_LIST - Secondary content is a list of items with an icon, title & description.
        3. HOVER_LIST - Secondary content is a list of items that have 2 text blocks. The
                        blocks are flipped on hover or click.
        4. CONTENT_HIGHLIGHT - Secondary content is just some content with title and description.
    """

    has_author_view = True
    block_settings_key = "card_carousel"

    display_name = String(default="Card Carousel")
    # Legacy field: keep the original scope/default for stored courses and OLX.
    orientation = String(
        display_name="Orientation of the Card Content",
        help="Horizontal for side-by-side content, Vertical for top and bottom content.",
        default=Orientation.HORIZONTAL,
        values=[
            {"display_name": "Horizontal", "value": "HORIZONTAL"},
            {"display_name": "Vertical", "value": "VERTICAL"},
        ],
    )
    cards = List(
        help="List of Cards",
        # An implicit placeholder must inherit an old block's orientation too.
        default=[DEFAULT_CARD.model_dump(exclude={"orientation"})],
        scope=Scope.content,
    )
    disable_numbering = Boolean(
        display_name="Disable Numbering",
        help="Disable position labels (eg., 1/3) on the cards",
        default=False,
        scope=Scope.content,
    )
    background_color = String(
        display_name="Background Color",
        help="HTML hex-code to be used as the background color.",
        default="#FFFFFF",
        scope=Scope.content,
    )

    def resource_string(self, path: str | Path) -> str:
        """Handy helper for getting resources from our kit."""
        return resource_loader.load_unicode(path)

    def _normalized_card(self, card):
        """Resolve legacy layout without writing to the XBlock's stored fields."""
        return CarouselCardData.model_validate(
            card, context={"orientation": self.orientation}
        )

    def _card_view_data(self):
        return {
            # Data model was changed between versions 0.6 and 0.7.
            # The parsing and dumping of card data here ensures any old data
            # is migrated to the new per-card orientation format.
            "cards": [self._normalized_card(card).model_dump() for card in self.cards],
            "displayName": self.display_name,
            "disableNumbering": self.disable_numbering,
            "backgroundColor": self.background_color,
        }

    def _render_student_view(self, is_author_view: bool = False):
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
            "CardCarouselXBlock",
            {
                "url": self.runtime.local_resource_url(
                    self, "public/cardCarouselStudent.js"
                ),
                "data": self._card_view_data(),
                "config": get_xblock_config(self.context_key, XBlockView.STUDENT),
            },
        )
        return frag

    def student_view(self, context=None):
        """
        The primary view of the CardCarouselXBlock, shown to students
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
        Editor View for the CardCarouselXBlock, show to content authors.
        """
        html = self.resource_string("static/html/card_carousel_editor.html")
        frag = Fragment(html)
        frag.add_resource_url(
            "https://fonts.googleapis.com/icon?family=Material+Icons+Outlined",
            "text/css",
            "head",
        )

        frag.add_javascript(self.resource_string("static/studio.js"))
        frag.add_css(self.resource_string("static/css/studio.css"))
        frag.initialize_js(
            "CardCarouselEditor",
            {
                "url": self.runtime.local_resource_url(
                    self, "public/cardCarouselStudio.js"
                ),
                "data": self._card_view_data(),
                "config": get_xblock_config(self.context_key, XBlockView.STUDIO),
            },
        )
        return frag

    @XBlock.handler
    def json_data(self, request, suffix=""):
        """Return the JSON data or schema of the Pydantic model as a file download."""
        res = Response()
        data_type = request.GET.get("type", "data")
        if data_type == "data":
            res.json = self._card_view_data()
            filename = "card-carousel-component.json"
        else:
            res.json = InitData.model_json_schema()
            filename = "card-carousel-schema.json"
        res.content_disposition = f'attachment; filename="{filename}"'
        return res

    @XBlock.json_handler
    def studio_save(self, data: dict, suffix=""):
        """
        Get the data from the Studio Editor and save it on the XBlock.
        """
        try:
            carousel = InitData.model_validate(
                data, context={"orientation": self.orientation}
            )
        except ValidationError as e:
            logger.exception("Invalid data received from studio.")
            issues = defaultdict(list)
            for item in e.errors():
                issues[item["msg"]].append(loc_to_dot_sep(item["loc"]))
            raise JsonHandlerError(400, issues)

        self.display_name = carousel.displayName
        self.cards = [c.model_dump() for c in carousel.cards]
        # Once cards have per-card orientation, remove the legacy root field from
        # persisted data. If it was never stored, deletion is a no-op.
        del self.orientation
        self.disable_numbering = carousel.disableNumbering
        self.background_color = carousel.backgroundColor
        logger.info("Successfully saved Card Carousel data.")
        return {"result": "success"}

    def index_dictionary(self):
        """
        Return dictionary prepared with block content and type for indexing.
        """
        xblock_body = super().index_dictionary()
        parts = []
        for card in self.cards or []:
            # Parsing through CardData applies the same normalisation and
            # data migration as the render paths, so the index can never
            # disagree with what learners see on the page.
            try:
                card_data = self._normalized_card(card)
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
            "card_carousel_content": strip_html_for_search(" ".join(parts)),
        }
        if "content" in xblock_body:
            xblock_body["content"].update(index_body)
        else:
            xblock_body["content"] = index_body
        xblock_body["content_type"] = "Card Carousel"
        return xblock_body

    @staticmethod
    def workbench_scenarios():
        """A canned scenario for display in the workbench."""
        demo_data = json.loads(resource_loader.load_unicode("static/demo.json"))
        demo_cards = json.dumps(demo_data["horizontal"])
        vertical_cards = json.dumps(demo_data["vertical"])

        return [
            (
                "CardCarouselXBlock (Horizontal Cards)",
                f"""<card_carousel display_name="CardCarousel (Horizontal)" cards='{demo_cards}' />
                """,
            ),
            (
                "CardCarouselXblock (Vertical Cards - Content Highlight only)",
                f"""<card_carousel display_name="CardCarousel (Vertical)" cards='{vertical_cards}' disable_numbering="true" />
                """,
            ),
            (
                "CardCarouselXblock (Vertical - All cards)",
                f"""<card_carousel display_name="CardCarousel (Vertical)" cards='{vertical_cards}' />
                """,
            ),
            (
                "Multiple CardCarouselXBlock",
                f"""<vertical_demo>
                <card_carousel display_name="CardCarousel (Default)" cards='{demo_cards}' />
                <card_carousel display_name="CardCarousel (Vertical)" cards='{vertical_cards}' />
                <card_carousel display_name="CardCarousel (Horizontal)" cards='{demo_cards}' />
                </vertical_demo>
                """,
            ),
        ]
