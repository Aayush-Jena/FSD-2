This repo provides small interactive counters so you can compare how each approach shares and updates state.

## ✨ Highlights
- Clear, side-by-side examples: Local counters, Context-based counters, and Redux counters
- Built with **React + Vite** for a fast dev experience
- Responsive layout with simple, easily customizable styles

## 📁 Key files
- `src/App.jsx` — app layout and sections
- `src/components/contextapi/*` — Context provider and counters
- `src/components/Redux/*` — Redux-connected counter components
- `src/store/Store.jsx` & `src/store/CounterReducer.jsx` — Redux store and reducer
- `src/main.jsx` — app entry (wraps providers)

## 🚀 Quick start
1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Open http://localhost:5173/ in your browser

4. Build for production:

```bash
npm run build
```
Implement State Management in Single Page Applications (SPA)

After successfully completing this experiment, the learner is able to:

Understand the need for state management in modern Single Page Applications and identify common issues such as prop drilling and tightly coupled components. 


Differentiate between local state, Context API, and Redux Toolkit, and select an appropriate state management solution based on application complexity and update frequency. 


Implement React Context API to manage simple global state such as user authentication, theme toggling, and preferences without introducing external dependencies. 


Design and integrate Redux Toolkit for complex application state by creating slices, reducers, actions, and configuring a centralized store.
