import nh3


def sanitise_simple_html_body(value: str) -> str:
    """
    Sanitise html for text body content where we want to allow some simple styling (eg. bold, italics),
    but block anything that could mess up the layout, add headings, etc.
    docs for nh3: https://nh3.readthedocs.io/en/latest/#nh3.clean

    The allowed tags and attributes are based on how TinyMCE implements the various styles.

    Use this for text that will be rendered as HTML; use
    ``strip_html_for_search`` instead for text going into a search index.
    """
    cleaner = nh3.Cleaner(
        tags={"p", "strong", "em", "span", "ul", "ol", "li", "pre", "blockquote"},
        attributes={"*": {"style"}},
        filter_style_properties={
            "text-decoration",  # underline
            "text-align",  # align left/right/center/justify
            "padding-left",  # indent paragraph
        },
    )
    return cleaner.clean(value)
