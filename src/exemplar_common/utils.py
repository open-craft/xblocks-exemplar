import json
import re
from typing import Any, Union
from xml.sax.saxutils import quoteattr

import nh3

# Applied in order: comments and CDATA sections first, script/style elements
# with their contents, then any remaining well-formed tags.
_HTML_STRIP_PATTERNS = (
    re.compile(r"<!--.*?-->", re.DOTALL),
    re.compile(r"<!\[CDATA\[.*?\]\]>", re.DOTALL),
    re.compile(r"<(script|style)\b[^>]*>.*?</\1\s*>", re.DOTALL | re.IGNORECASE),
    re.compile(r"<[^>]*>"),
)

COLOR_REGEX = re.compile("^#[a-fA-F0-9]{6}$")


def strip_html_for_search(text: str | None) -> str:
    """
    Reduce HTML to plain text suitable for search indexing.

    Use this for text going into a search index.

    Tags are removed, script/style contents are dropped, and whitespace is
    collapsed.
    """
    text = text or ""
    for pattern in _HTML_STRIP_PATTERNS:
        text = pattern.sub(" ", text)
    return " ".join(text.replace("&nbsp;", " ").split())


def sanitise_simple_html(value: str) -> str:
    """
    Sanitise html for text content where we want to allow some simple styling (eg. colours, headings, bold/italics),
    but nothing that would mess up the designs or layouts.
    docs for nh3: https://nh3.readthedocs.io/en/latest/#nh3.clean

    Use this for text that will be rendered as HTML; use
    ``strip_html_for_search`` instead for text going into a search index.
    """
    cleaner = nh3.Cleaner(
        tags={"h1", "h2", "h3", "h4", "h5", "p", "strong", "em", "span"},
        attributes={"*": {"style"}},
        filter_style_properties={"color"},
    )
    return cleaner.clean(value)


def generate_attrs(attrs: dict[str, Any]) -> str:
    """Generate xml name=value attributes given a dictionary of name:values."""
    return " ".join(
        f"{name}={quoteattr(value if isinstance(value, str) else json.dumps(value))}"
        for (name, value) in attrs.items()
    )


def is_color(value: str) -> str:
    """
    Validates that a string is a valid color per HTML color picker specifications.
    """
    if not value:
        return value
    if COLOR_REGEX.match(value):
        return value
    raise ValueError(f"{repr(value)} is not a valid HTML hex color.")


def loc_to_dot_sep(loc: tuple[Union[str, int], ...]) -> str:
    """Converts Pyndantic error `loc` tuples into user-friendly string notation.

    >>> loc_to_dot_sep(('cards', 0, 'title',))
    'cards[0].title'
    """
    path = ""
    for i, x in enumerate(loc):
        if isinstance(x, str):
            if i > 0:
                path += "."
            path += x
        elif isinstance(x, int):
            path += f"[{x}]"
        else:
            raise TypeError("Unexpected type")
    return path
