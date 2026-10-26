import pytest
from pydantic import ValidationError

from external_resources.types import Resource

VALID_RESOURCE = {
    "id": "resource-1",
    "url": "https://www.heart.org/article",
    "title": "How arteries respond to changes in blood pressure",
    "publisher": "American Heart Association",
    "expectedMinutes": 7,
    "fileType": "ARTICLE",
}


def make_resource(**fields) -> Resource:
    """Build a resource from the valid one, overriding some fields."""
    return Resource.model_validate({**VALID_RESOURCE, **fields})


@pytest.mark.parametrize(
    "url",
    [
        "javascript:alert(1)",
        "JaVaScRiPt:alert(1)",
        "  javascript:alert(1)",
        "data:text/html,<script>alert(1)</script>",
        "mailto:library@example.com",
        "/asset-v1:WGU+C123+2026+type@asset+block@guide.pdf",
        "https://",
    ],
)
def test_resource_url_rejects_non_http_urls(url):
    """Only absolute http(s) URLs are allowed for the resource link."""
    with pytest.raises(ValidationError):
        make_resource(url=url)


@pytest.mark.parametrize(
    "url", ["https://example.com/a?b=c", "http://example.com", "HTTPS://example.com"]
)
def test_resource_url_accepts_http_urls(url):
    """Absolute http(s) URLs are stored unchanged."""
    assert make_resource(url=url).url == url


def test_resource_url_is_stripped():
    """Surrounding whitespace is removed from the resource link."""
    assert make_resource(url="  https://example.com  ").url == "https://example.com"


@pytest.mark.parametrize("minutes", [0, -1])
def test_resource_expected_minutes_must_be_positive(minutes):
    """The expected time is at least one minute."""
    with pytest.raises(ValidationError):
        make_resource(expectedMinutes=minutes)


def test_resource_custom_file_type_required():
    """A CUSTOM file type needs the custom type text."""
    with pytest.raises(ValidationError):
        make_resource(fileType="CUSTOM")


def test_resource_custom_file_type():
    """The custom type text is kept for CUSTOM resources."""
    resource = make_resource(fileType="CUSTOM", customFileType="Podcast")

    assert resource.customFileType == "Podcast"


def test_resource_custom_file_type_cleared_for_other_types():
    """The custom type text is dropped when the file type isn't CUSTOM."""
    resource = make_resource(fileType="VIDEO", customFileType="Podcast")

    assert resource.customFileType == ""


def test_searchable_text():
    """The title, publisher and alt text are indexed."""
    resource = make_resource(thumbnailAltText="Red blood cells")

    text = resource.searchable_text()

    for expected in (
        "How arteries respond to changes in blood pressure",
        "American Heart Association",
        "Red blood cells",
    ):
        assert expected in text


def test_searchable_text_excludes_non_readable_fields():
    """The URL, ID, file type (predefined or custom) and icon are not indexed."""
    resource = make_resource(
        url="https://example.com/secret-path",
        fileType="CUSTOM",
        customFileType="Podcast",
        thumbnailIcon="menu_book",
    )

    text = resource.searchable_text()

    assert "example.com" not in text
    assert "resource-1" not in text
    assert "CUSTOM" not in text
    assert "Podcast" not in text
    assert "menu_book" not in text
