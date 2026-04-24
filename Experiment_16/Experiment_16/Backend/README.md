### Experiment No. 16: Performing Unit Tests on Frontend and Backend Elements

## Goal

The aim is to implement unit testing for backend APIs using Flask and Pytest, and to investigate frontend unit testing ideas with JavaScript testing frameworks.

## Context

### Importance of Testing

- Enhances application reliability
- Avoids problems after code changes
- Ensures code functions correctly

### Types of Testing

- Unit Testing
- Integration Testing
- System Testing
- Acceptance Testing

### Backend Testing (Flask)

Flask provides a test client to simulate HTTP requests without starting the server.

## 🛠️ Tools and Technologies

- Python
- Flask
- Pytest
- Pytest-Cov
- Virtual Environment (venv)

## 📂 Directory Structure

```
Experiment_16/
├── routes/
│ └── student_routes.py
├── Screenshots/
├── venv/
├── app.py
├── run.py
├── test_app.py
├── requirements.txt
└── README.md
---

## Steps to Execute the Project

```bash
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python run.py
````

Server runs at:

```
http://localhost:5000
```

---

## API Endpoints

| Method | Endpoint       | Description       |
| ------ | -------------- | ----------------- |
| POST   | /students      | Create student    |
| GET    | /students      | Get all students  |
| GET    | /students/<id> | Get student by ID |
| PUT    | /students/<id> | Update student    |
| DELETE | /students/<id> | Delete student    |

---

## Learning Outcomes

- Understood unit testing for backend APIs using Flask
- Learned how to write and execute test cases using Pytest
- Gained knowledge of debugging techniques in Python
- Learned importance of code coverage and test automation
- Understood frontend testing concepts using Jest
- Improved understanding of software testing lifecycle
