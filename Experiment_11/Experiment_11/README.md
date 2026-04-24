# Experiment 11 – Backend System Using Microservices

## Goal

To build a **backend architecture based on microservices** with Flask, featuring:

- A service dedicated to **Customer information**
- A separate service for **Order information**
- Inter-service communication via **HTTP calls**

## Directory Layout

```
micro-services-lab/
│
├── customer-service/
│   ├── customer_app.py
│   └── requirements.txt
│
├── order_service/
│   ├── order_app.py
│   └── requirements.txt
│
└── README.md
```

## ⚙️ Tools and Technologies

- Python (Flask framework)
- Requests module
- Postman for API testing
- Render for hosting

## Microservices Summary

### 1. Customer Service

- Manages customer information (stored in memory)
- Provides access to customer details
- Connects to Order Service to get order data

**Endpoint:** GET /customers/<user_id>/orders

### 2. Order Service

- Handles order information (stored in memory)
- Fetches orders for a specific user
- Modifies order status

**Endpoints:**

- GET /orders/user/<user_id>
- PUT /orders/<order_id>/status

## Working Flow

1. Client sends request:

   ```
   /customers/101/orders
   ```

2. Customer Service fetches customer data
3. Calls Order Service API
4. Combines response and returns JSON

## Learning Outcomes

- Understood Microservices Architecture
- Implemented Service-to-Service Communication
- Built REST APIs using Flask
- Learned GET and PUT methods
- Worked with in-memory data storage
- Deployed services using Render
- Tested APIs using Postman
- Learned error handling in APIs
