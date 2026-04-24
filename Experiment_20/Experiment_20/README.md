## Deployment (CI/CD with GitHub Actions)

This initiative employs **GitHub Actions** for automatic testing and continuous integration across backend and frontend components.

### Workflow Summary

- Activation: On each `push`
- Workflow configuration: `.github/workflows/ci.yml`
- Tasks:
  - Backend Testing (Python)
  - Frontend Testing (Node.js + Vitest)

---

### Successful CI Execution

![CI Summary](./Screenshots/1.png)

---

### Backend Test Performance

![Backend Test](./Screenshots/2.png)

**Stages:**
- Establish Python setup
- Add required packages
- Execute backend tests
- All tests completed successfully ✅

---

### Frontend Test Performance

![Frontend Test](./Screenshots/3.png)

**Stages:**
- Establish Node.js
- Add required packages
- Execute frontend tests with Vitest
- All tests completed successfully ✅

---

### Test Results

- Total Test Files: 1
- Outcome: Passed
- Duration: Approximately 20 seconds

---

## Learning Outcome
- Understood the concept and importance of Continuous Integration (CI) in software development.
- Learned how to configure and use GitHub Actions for automating workflows.
- Gained experience in running automated backend and frontend tests.