import pytest 
from app import app

@pytest.fixture
def client():
    app.testing = True 
    return app.test_client()

def test_create_student(client):
    response = client.post("/students", json={"name": "Student-1"})
    assert response.status_code == 201
    assert response.json["name"] == "Student-1"

def test_get_students(client):
    response = client.get("/students")
    assert response.status_code == 200
    assert isinstance(response.json, list)

def test_get_student(client):
    # First, create a student to ensure there is one to retrieve
    create_response = client.post("/students", json={"name": "Student-2"})
    student_id = create_response.json["id"]

    # Now, retrieve the student by ID
    response = client.get(f"/students/{student_id}")
    assert response.status_code == 200
    assert response.json["name"] == "Student-2"

def test_update_student(client):
    # First, create a student to ensure there is one to update
    create_response = client.post("/students", json={"name": "Student-3"})
    student_id = create_response.json["id"]

    # Now, update the student's name
    response = client.put(f"/students/{student_id}", json={"name": "Student-3 Updated"})
    assert response.status_code == 200
    assert response.json["name"] == "Student-3 Updated"

def test_delete_student(client):
    # First, create a student to ensure there is one to delete
    create_response = client.post("/students", json={"name": "Student-4"})
    student_id = create_response.json["id"]

    # Now, delete the student
    response = client.delete(f"/students/{student_id}")
    assert response.status_code == 200

    # Verify the student has been deleted
    get_response = client.get(f"/students/{student_id}")
    assert get_response.status_code == 404


# Test Cases contains -- Input, Expected Output, Actual output