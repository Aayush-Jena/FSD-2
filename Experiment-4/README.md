# Experiment 4 — Data Flow Management Patterns (React)

A lightweight showcase of three distinct approaches to managing shared data in React:
- **Component-Level State** using `useState` (restricted to individual component scope)
- **Provider Pattern** leveraging Context API for straightforward centralized state administration
- **Predictable State Architecture** employing Redux for dependable, expandable state governance

This codebase features interactive counter utilities that let you directly evaluate each technique's pros and cons.

## ✨ Highlights
- Side-by-side implementation showcase: Individual counters, Provider-based counters, and Redux-driven counters
- Engineered with **React + Vite** for lightning-fast development workflow
- Flexible interface design with minimal, straightforward CSS customization

## 📁 Key files
- `src/App.jsx` — primary layout and feature sections
- `src/components/contextapi/*` — Provider setup and counter logic
- `src/components/Redux/*` — Redux-connected counter implementations
- `src/store/Store.jsx` & `src/store/CounterReducer.jsx` — centralized state and transformation rules
- `src/main.jsx` — app initialization (activates all providers)

## 🚀 Quick start
1. Obtain dependencies:

```bash
npm install
```

2. Activate development environment:

```bash
npm run dev
```

3. Browse to http://localhost:5173/ in your web browser

4. Prepare for release:

```bash
npm run build
```

## Notes
- By design, this implementation is lightweight and centered on demonstrating fundamental patterns — feel free to customize by implementing additional counters or updating logic approaches.
- If you'd like interface enhancements or visual theme switching, let me know and I'll incorporate them. 💬
