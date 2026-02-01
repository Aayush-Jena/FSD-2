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

## Notes
- This project is intentionally minimal and focused on teaching state patterns — feel free to experiment by adding new counters or swapping implementations.
- If you want a theme toggle or additional UI polish, tell me and I can add it. 💬
