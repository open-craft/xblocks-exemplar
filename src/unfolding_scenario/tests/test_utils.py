from unfolding_scenario.utils import sanitise_simple_html_body


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
