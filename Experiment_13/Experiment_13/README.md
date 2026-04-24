# 🧪 Experiment 13

## Linking Backend to Database and Adding CRUD Functions with Validation

## 📌 Aim

The aim is to develop a Flask-based backend server, connect it to a database, and incorporate CRUD operations (Create, Read, Update, Delete) with appropriate validation and testing using Postman.

## Concepts

### Flask Backend

Flask is a lightweight Python web framework used for creating REST APIs. It enables the creation of routes (endpoints) to handle HTTP requests such as GET, POST, PUT, and DELETE.

### Database Connection

We employ SQLAlchemy ORM to integrate Flask with a database (PostgreSQL on Render or SQLite for local use). It maps Python classes to database tables.

### Model (Student Table)

- id → Primary Key
- uid → Unique Identifier
- name → Student Name
- age → Student Age

### Validation

Employing Marshmallow:

- Name must be at least 2 characters long
- Age should range from 1 to 120
- UID must be unique

### CRUD Operations

| Operation | Method | Endpoint       |
| --------- | ------ | -------------- |
| Create    | POST   | /students      |
| Read All  | GET    | /students      |
| Read One  | GET    | /students/<id> |
| Update    | PUT    | /students/<id> |
| Delete    | DELETE | /students/<id> |

---

## 📂 Folder Layout

│── app.py
│── requirements.txt
│── Procfile
│── README.md
│── screenshots/

---

## ⚙️ Features

✔ CRUD APIs  
✔ Database Integration  
✔ Validation using Marshmallow  
✔ Error Handling  
✔ Pagination  
✔ Deployment

---

## 🎯 Learning Outcomes

- Built REST APIs using Flask
- Connected backend with database
- Performed CRUD operations
- Implemented validations
- Tested APIs using Postman
- Deployed backend on Render
