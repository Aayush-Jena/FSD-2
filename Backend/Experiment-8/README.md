# Experiment 8 – Sansio Utilities

> Framework‑agnostic helper code for Flask-compatible applications

## Overview

This experiment demonstrates a collection of Python utilities that are
intentionally decoupled from Flask internals. The goal is to show how a
project can be architected so that the same logic may be reused with
alternative Flask-style web frameworks such as **Quart** or **FastAPI**.

## Key Principles

- ✋ **No I/O** – The modules perform zero input/output operations (file
  access, network calls, etc.).
- 🛣️ **Outside I/O Paths** – Code is kept out of the request/response
  execution path to avoid blocking or side effects.
- 🚫 **No Flask Globals** – There are no references to `flask.request`,
  `g`, `current_app`, or other context-specific objects.

Following these rules keeps the components portable and easily
unit-testable.

## Contents

```
Experiment-8/
├── app.py               # Flask entry point (example)
├── run.py               # Simple server launcher
├── requirements.txt     # Dependencies
└── routes/
    ├── __init__.py
    └── student_routes.py # Example blueprint with sansio logic
```

## Getting Started

1. **Create a virtual environment** (Python 3.11+ recommended):
   ```bash
   python -m venv .venv
   .\.venv\Scripts\activate  # Windows
   pip install -r requirements.txt
   ```
2. **Run the application**:
   ```bash
   python run.py
   ```
3. **Browse** to `http://127.0.0.1:5000/students` to see sample output.

## Usage Notes

You can import and reuse the helpers in this directory from a Quart
project simply by including the package on `sys.path` and invoking the
same functions; no Flask-specific setup is required.
