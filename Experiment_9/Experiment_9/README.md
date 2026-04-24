# Experiment 9: Implementing JWT Authentication

## Summary

This project showcases how to set up authentication systems in a Flask backend app. It examines various authentication techniques, emphasizing JWT (JSON Web Tokens) for secure, sessionless user verification.

## Folder Organization

```
Experiment_9/
├── venv/
│   ├── Include/
│   ├── Lib/
│   └── Scripts/
├── requirements.txt
├── app.py
└── README.md
```

## Comparison of Authentication Approaches

| Authentication Approach | Header Employed       | Sessionless | Security Strength |
| ----------------------- | ---------------------- | ----------- | ----------------- |
| Basic Auth              | Authorization          | Yes         | Low              |
| Base64 Token            | x-auth-token           | Yes         | Very Low         |
| JWT Bearer Token        | Authorization: Bearer  | Yes         | High             |

## API Routes

| Method | Route            | Purpose                                      |
| ------ | ---------------- | -------------------------------------------- |
| GET    | /                | Check API status and list available routes   |
| GET    | /basic-protected | Secured endpoint with Basic Authentication   |
| POST   | /token-login     | Create a Base64-encoded token                |
| GET    | /token-protected | Secured endpoint using `x-auth-token` header |
| POST   | /jwt-login       | Issue a JWT access token                     |
| GET    | /jwt-protected   | Secured endpoint with JWT Bearer token       |

## Core Ideas

### JWT Token Validation

JWT tokens are validated via the Bearer token system, utilizing the `Authorization: Bearer` header for reliable, stateless user authentication.

## Educational Goals

- Gained knowledge of backend technologies and how to apply them
- Mastered setting up Python virtual environments with venv
- Investigated various authentication techniques and their security implications
- Acquired understanding of JWT (JSON Web Tokens) and their benefits
- Gained hands-on experience coding with Flask
- Understood Flask framework fundamentals and routing mechanisms
