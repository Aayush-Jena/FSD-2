import './App.css';
import CounterReduxParent from "./components/Redux/CounterGlobalReduxParent";
import LocalCounter from "./components/contextapi/CounterState";
import ParentCounter from "./components/contextapi/CounterParent";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Experiment 4: State Management</h1>
        <p className="subtitle">Compare Local, Context API and Redux counters</p>
      </header>

      <main className="sections">
        <section className="section section--local">
          <h2>Local State</h2>
          <div className="cards">
            <div className="card"><LocalCounter cno="Counter 1" /></div>
            <div className="card"><LocalCounter cno="Counter 2" /></div>
          </div>
        </section>

        <section className="section section--context">
          <h2>Context API</h2>
          <div className="cards">
            <div className="card"><ParentCounter cno="Counter 1" /></div>
            <div className="card"><ParentCounter cno="Counter 2" /></div>
          </div>
        </section>

        <section className="section section--redux">
          <h2>Redux</h2>
          <div className="cards">
            <div className="card"><CounterReduxParent cno="Counter 1" /></div>
            <div className="card"><CounterReduxParent cno="Counter 2" /></div>
          </div>
        </section>
      </main>

      <footer className="app-footer"></footer>
    </div>
  );
}

export default App;