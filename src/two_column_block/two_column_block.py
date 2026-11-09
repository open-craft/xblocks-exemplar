"""Main Two Column Block code module. Provides the XBlock for import by the studio."""

import json
import logging

from pydantic import ValidationError
from web_fragments.fragment import Fragment
from xblock.core import XBlock
from xblock.exceptions import JsonHandlerError
from xblock.fields import Dict, Scope, String
from xblock.utils.resources import ResourceLoader
from xblock.utils.studio_editable import StudioEditableXBlockMixin

from exemplar_common.xblock_config import get_xblock_config, XBlockView
from .types import (
    Alignment,
    BottomRowOrder,
    ColumnData,
    ColumnOrder,
    Data,
    FontSize,
    ImageGridLayoutData,
    ImageInfo,
    ImageGridText,
    Ratio,
    WorkbenchScenario,
    TextLayoutData,
)
from exemplar_common.utils import generate_attrs, strip_html_for_search

log = logging.getLogger(__name__)

resource_loader = ResourceLoader(__name__)

DEFAULT_COLUMN_DATA = ColumnData(
    left=TextLayoutData(
        kind="text",
        content='<h1>Paths through nature</h1>\n<p><strong>Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <span style="color: #169179;">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id <em>est laborum</em>.</p>',
        verticalAlignment=Alignment.Center,
    ),
    right=ImageGridLayoutData(
        kind="imageGrid",
        featuredImage=ImageInfo(
            url="https://picsum.photos/id/993/800/400",
            decorative=True,
            alt="",
            onClickUrl="",
        ),
        bottomImage=ImageInfo(
            url="https://picsum.photos/id/767/400",
            decorative=False,
            alt="A road extending into the distance, lined by tall trees.",
            onClickUrl="https://example.com/",
        ),
        text=ImageGridText(
            content="Which path will you take?",
            alignment=Alignment.Center,
            fontSize=FontSize.Large,
            backgroundColor="#FFFAF0",
            color="#045e2e",
        ),
        bottomRowOrder=BottomRowOrder.TextImage,
    ),
    ratio=Ratio.SixSix,
    order=ColumnOrder.rightAboveLeft,
)


class TwoColumnBlock(StudioEditableXBlockMixin, XBlock):
    """Provides an aesthetically pleasing two column block for displaying content."""

    has_author_view = True

    display_name = String(
        display_name="Display name",
        default="Two-column Block",
        scope=Scope.settings,
        help="Name of the component in the studio",
    )
    column_data = Dict(
        display_name="Column data",
        default=DEFAULT_COLUMN_DATA.model_dump(),
        scope=Scope.settings,
        help="",
    )
    background_color = String(
        display_name="Background Color",
        default="#FFFFFF",
        scope=Scope.settings,
    )
    editable_fields: tuple[str, ...] = (  # type: ignore
        "display_name",
        "column_data",
        "backgroundColor",
    )

    def _render_preview(self, *, is_studio: bool):
        html = resource_loader.load_unicode("static/html/two_column_block.html")
        frag = Fragment(html)

        frag.add_javascript(resource_loader.load_unicode("static/js/entrypoint.js"))
        view = XBlockView.STUDENT
        if is_studio:
            frag.add_css(resource_loader.load_unicode("static/css/studio.css"))
            view = XBlockView.STUDIO

        frag.initialize_js(
            "TwoColumnXBlock",
            {
                "url": self.runtime.local_resource_url(
                    self,
                    "public/twoColumnBlockStudent.js",
                ),
                "data": {
                    "displayName": self.display_name,
                    "columns": self.column_data,
                    "backgroundColor": self.background_color,
                },
                "config": get_xblock_config(self.context_key, view=view),
            },
        )
        return frag

    def student_view(self, context=None):
        """The primary view of this block, shown to students
        when viewing courses.
        """
        return self._render_preview(is_studio=False)

    def author_view(self, context=None):
        return self._render_preview(is_studio=True)

    def studio_view(self, context=None):
        """Studio edit view."""
        html = resource_loader.load_unicode("static/html/two_column_block_editor.html")
        frag = Fragment(html)
        frag.add_css(resource_loader.load_unicode("static/css/studio.css"))
        frag.add_javascript(resource_loader.load_unicode("static/js/entrypoint.js"))

        try:
            validated_data = Data(
                displayName=self.display_name,
                columns=self.column_data,
                backgroundColor=self.background_color,
            )
        except ValidationError as e:
            log.error(
                "Error validating data for %s: %s",
                self.display_name,
                json.dumps(e.errors()),
            )
            raise JsonHandlerError(500, json.dumps(e.errors()))

        frag.initialize_js(
            "TwoColumnXBlock",
            {
                "url": self.runtime.local_resource_url(
                    self,
                    "public/twoColumnBlockStudio.js",
                ),
                "data": {
                    "displayName": validated_data.displayName,
                    "columns": validated_data.columns.model_dump(),
                    "backgroundColor": validated_data.backgroundColor,
                },
                "config": get_xblock_config(self.context_key, XBlockView.STUDIO),
            },
        )

        return frag

    @XBlock.json_handler
    def studio_save(self, data, suffix=""):
        """Save data from the studio editor."""
        try:
            validated_data = Data(**data)
        except ValidationError as e:
            raise JsonHandlerError(400, json.dumps(e.errors()))

        self.display_name = validated_data.displayName
        self.column_data = validated_data.columns.model_dump()
        self.background_color = validated_data.backgroundColor
        # TODO: clean/delete empty values - eg. empty lessons in a lesson list
        return {"result": "success"}

    def index_dictionary(self):
        """
        Return dictionary prepared with block content and type for indexing.
        """
        xblock_body = super().index_dictionary()
        two_column_content = ""
        try:
            columns = ColumnData(**self.column_data)
            two_column_content = columns.searchable_text()
        except (ValidationError, TypeError):
            log.warning(
                "Skipping malformed content while indexing block %s",
                self.scope_ids.usage_id,
            )
        index_body = {
            "display_name": self.display_name,
            "two_column_content": strip_html_for_search(two_column_content),
        }
        if "content" in xblock_body:
            xblock_body["content"].update(index_body)
        else:
            xblock_body["content"] = index_body
        xblock_body["content_type"] = "Two-column Block"
        return xblock_body

    # Alias needed for client's "Data Bricks" indexer project.
    student_view_data = index_dictionary

    @staticmethod
    def workbench_scenarios() -> list[WorkbenchScenario]:
        """Static scenarios for display in the workbench."""
        # To add/edit scenarios, edit the ./static/workbench_scenarios.json file
        data = json.loads(
            resource_loader.load_unicode("static/workbench_scenarios.json"),
        )

        return [
            (
                block_data["scenario_name"],
                f"<two_column {generate_attrs(block_data['attributes'])} />",
            )
            for block_data in data
        ]
