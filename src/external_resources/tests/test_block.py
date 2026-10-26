import json
from typing import Literal

from webob import Request
from webob.response import Response
from xblock.field_data import DictFieldData
from xblock.fields import ScopeIds
from xblock.test.toy_runtime import ToyRuntime

from external_resources import ExternalResourcesXBlock
from external_resources.external_resources import DEFAULT_RESOURCES
from external_resources.types import Resource

VALID_RESOURCES = [
    {
        "id": "resource-1",
        "url": "https://www.heart.org/article",
        "title": "How arteries respond to changes in blood pressure",
        "publisher": "American Heart Association",
        "expectedMinutes": 7,
        "fileType": "ARTICLE",
    },
    {
        "id": "resource-2",
        "url": "https://www.khanacademy.org/video",
        "title": "Blood flow and the circulatory system",
        "publisher": "Khan Academy",
        "expectedMinutes": 9,
        "fileType": "VIDEO",
    },
]


def make_request(method: Literal["GET", "POST", "PUT", "DELETE"], data) -> Request:
    """Make a webob JSON Request"""
    request = Request.blank("/")
    request.method = method
    data = json.dumps(data).encode("utf-8") if data is not None else b""
    request.body = data
    return request


def make_block(**fields) -> ExternalResourcesXBlock:
    """Build a block with specific fields set."""
    scope_ids = ScopeIds("1", "2", "3", "4")
    return ExternalResourcesXBlock(
        ToyRuntime(),
        scope_ids=scope_ids,
        field_data=DictFieldData(data=fields),
    )


def get_student_content(block: ExternalResourcesXBlock) -> str:
    """Get the contents of a student render for a block."""
    frag = block.student_view()
    as_dict = frag.to_dict()
    return as_dict["content"]


def get_studio_content(block: ExternalResourcesXBlock) -> str:
    """Get the contents of a studio render for a block."""
    frag = block.studio_view()
    as_dict = frag.to_dict()
    return as_dict["content"]


def set_read(block: ExternalResourcesXBlock, data) -> Response:
    """Call the set_read handler with the given JSON data."""
    return block.handle("set_read", make_request("POST", data))


def test_block_html():
    """Test that the block with defaults renders as expected."""
    block = make_block()
    content = get_student_content(block)
    assert "external_resources_block" in content


def test_block_html_studio():
    """Test that the studio view with defaults renders as expected."""
    block = make_block()
    content = get_studio_content(block)
    assert "editor-with-buttons" in content


def test_block_default_data():
    """A new block has the example resources, and they are valid."""
    block = make_block()

    assert block.display_name == "External Resources"
    assert block.resources == [r.model_dump() for r in DEFAULT_RESOURCES]
    assert [r["id"] for r in block.resources] == ["example-article", "example-video"]
    for resource in block.resources:
        Resource.model_validate(resource)
    assert block.read_resources == []


def test_author_view_is_used_in_studio():
    """Studio uses author_view, which adds the studio CSS to the student render."""
    block = make_block()

    student_frag = block.student_view()
    author_frag = block.author_view()

    assert block.has_author_view is True
    assert author_frag.to_dict()["content"] == student_frag.to_dict()["content"]
    assert any(r.mimetype == "text/css" for r in author_frag.resources)
    assert not any(r.mimetype == "text/css" for r in student_frag.resources)


def test_views_send_read_resources_without_removed_ids():
    """The learner's read resources are sent, without IDs of removed resources."""
    block = make_block(
        resources=VALID_RESOURCES,
        read_resources=["resource-2", "removed-resource"],
    )

    for frag in (block.student_view(), block.author_view()):
        assert frag.json_init_args["data"]["readResources"] == ["resource-2"]

    # Rendering only filters what is sent; the stored state is left unchanged.
    assert block.read_resources == ["resource-2", "removed-resource"]


def test_block_update_data():
    """Test that we can update data via the studio_save handler"""
    block = make_block()

    response = block.handle(
        "studio_save",
        make_request("POST", {"displayName": "test", "resources": VALID_RESOURCES}),
    )

    assert response.status == "200 OK"
    assert b"success" in response.body

    assert block.display_name == "test"
    assert block.resources[1]["publisher"] == "Khan Academy"


def test_block_update_data_without_resources():
    """A block with no resources can be saved."""
    block = make_block()

    response = block.handle(
        "studio_save",
        make_request(
            "POST",
            {"displayName": "test", "resources": []},
        ),
    )

    assert response.status == "200 OK"
    assert block.resources == []


def test_block_update_data_reject_invalid():
    """Test that updating invalid data via the studio_save handler fails and does not update data."""
    block = make_block()

    response = block.handle(
        "studio_save",
        make_request(
            "POST",
            {
                "displayName": "test",
                "resources": [{**VALID_RESOURCES[0], "url": "javascript:alert(1)"}],
            },
        ),
    )

    assert response.status == "400 Bad Request"

    # assert the changes haven't been persisted
    assert block.display_name == "External Resources"
    assert block.resources == [r.model_dump() for r in DEFAULT_RESOURCES]


def test_set_read_marks_and_unmarks():
    """A resource can be marked as read and then unmarked."""
    block = make_block()

    response = set_read(block, {"resourceId": "example-article", "read": True})

    assert response.status == "200 OK"
    assert json.loads(response.body) == {"readResources": ["example-article"]}
    assert block.read_resources == ["example-article"]

    response = set_read(block, {"resourceId": "example-article", "read": False})

    assert response.status == "200 OK"
    assert json.loads(response.body) == {"readResources": []}
    assert block.read_resources == []


def test_set_read_is_idempotent():
    """Repeating a request (eg. a double click) gives the same result."""
    block = make_block()

    for _ in range(2):
        set_read(block, {"resourceId": "example-article", "read": True})
    assert block.read_resources == ["example-article"]

    for _ in range(2):
        set_read(block, {"resourceId": "example-article", "read": False})
    assert block.read_resources == []


def test_set_read_removes_ids_of_removed_resources():
    """Saving the learner's state drops IDs of resources that no longer exist."""
    block = make_block(read_resources=["example-article", "removed-resource"])

    response = set_read(block, {"resourceId": "example-video", "read": True})

    assert json.loads(response.body) == {
        "readResources": ["example-article", "example-video"]
    }
    assert block.read_resources == ["example-article", "example-video"]


def test_set_read_unknown_resource():
    """Resources that aren't in the block are rejected."""
    block = make_block()

    response = set_read(block, {"resourceId": "unknown", "read": True})

    assert response.status == "400 Bad Request"
    assert block.read_resources == []


def test_set_read_invalid_payload():
    """The resource ID must be a string and the read flag a boolean."""
    block = make_block()

    for data in (
        {"resourceId": "example-article", "read": "yes"},
        {"resourceId": 1, "read": True},
        {"read": True},
        {"resourceId": "example-article"},
    ):
        response = set_read(block, data)
        assert response.status == "400 Bad Request"

    assert block.read_resources == []


def test_workbench_scenarios():
    """Basic test to verify workbench scenario loading doesn't raise an error."""
    scenarios = ExternalResourcesXBlock.workbench_scenarios()
    assert scenarios == [("ExternalResourcesXBlock", "<external_resources />")]


def test_index_dictionary():
    """Learner-visible text from the block content is indexed as plain text."""
    block = make_block(display_name="Week 1 reading", resources=VALID_RESOURCES)

    result = block.index_dictionary()

    assert result["content_type"] == "External Resources"
    assert result["content"]["display_name"] == "Week 1 reading"
    content = result["content"]["external_resources_content"]
    assert "How arteries respond to changes in blood pressure" in content
    assert "Khan Academy" in content
    assert "https://" not in content


def test_index_dictionary_malformed_content():
    """Malformed data is ignored rather than breaking indexing."""
    block = make_block(resources=[{"invalid": "data"}])

    result = block.index_dictionary()

    assert result["content"]["external_resources_content"] == ""
