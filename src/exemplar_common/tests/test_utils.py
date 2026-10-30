import pytest

from exemplar_common.utils import (
    generate_attrs,
    sanitise_simple_html,
    sanitise_simple_html_body,
    strip_html_for_search,
)


def test_html_sanitiser():
    """Basic test for the html sanitiser"""
    user_html = "<h1>hello</h1><script>evil();</script><p>this is safe text</p>"
    expected_safe_html = "<h1>hello</h1><p>this is safe text</p>"
    assert sanitise_simple_html(user_html) == expected_safe_html


def test_html_sanitiser_attributes_and_styles():
    """Test for removing unwanted attributes and styles (only color style should be allowed)"""
    user_html = '<h1 onclick="evil();" style="color:red; background-color:brown; font-size:1px;">hello</h1>'
    expected_safe_html = '<h1 style="color:red">hello</h1>'
    assert sanitise_simple_html(user_html) == expected_safe_html


def test_html_body_sanitiser_attributes_and_styles():
    """Test for removing unwanted attributes and styles"""
    user_html = '<h1 onclick="evil();" style="color:red; background-color:brown; font-size:1px;">hello</h1>'
    expected_safe_html = "hello"
    assert sanitise_simple_html_body(user_html) == expected_safe_html


def test_html_body_sanitiser_attributes_and_styles_2():
    """Another test for removing unwanted attributes and styles"""
    user_html = '<strong onclick="evil();" style="color:red; background-color:brown; font-size:1px; text-align: right;">hello</strong>'
    expected_safe_html = '<strong style="text-align:right">hello</strong>'
    assert sanitise_simple_html_body(user_html) == expected_safe_html


@pytest.mark.parametrize(
    ("raw", "expected"),
    [
        # Tags are stripped, their text content is kept.
        ("Card <strong>description</strong>", "Card description"),
        # A stray "<" that never closes stays literal text instead of
        # swallowing the rest of the field.
        ("Use x<y to compare the two values", "Use x<y to compare the two values"),
        ("5<10 and a<b and c<d", "5<10 and a<b and c<d"),
        ("Broken markup <b here", "Broken markup <b here"),
        # Entity references stay escaped; they never become live markup.
        (
            "&lt;script&gt;alert(1)&lt;/script&gt;",
            "&lt;script&gt;alert(1)&lt;/script&gt;",
        ),
        # Script/style elements are dropped along with their contents.
        ("<script>document.evil()</script>", ""),
        ("<style>.x{color:red}</style>Visible", "Visible"),
        # Comments, CDATA and non-breaking spaces are removed or collapsed.
        ("keep1 <!-- c1 --> keep2 <!-- c2 --> keep3", "keep1 keep2 keep3"),
        ("before <![CDATA[ raw ]]> after", "before after"),
        ("a&nbsp;b", "a b"),
        ("  spaced \n out  ", "spaced out"),
        (None, ""),
        ("", ""),
    ],
)
def test_strip_html_for_search(raw, expected):
    """The stripping helper keeps learner-visible text and nothing else."""
    assert strip_html_for_search(raw) == expected


def test_generate_attrs():
    """Basic test for the xml attrs generation function."""
    assert (
        generate_attrs({"name": "test>", "data": {"nested": "value's"}})
        == '''name="test&gt;" data="{&quot;nested&quot;: &quot;value's&quot;}"'''
    )
