import { useContext } from "react";
import { CounterContext } from "./CounterContextApi";

function ParentCounter(props) {
  const { count, setCount } = useContext(CounterContext);

  return (
    <div className="counter">
      <h3 className="counter-title">{props.cno}</h3>
      <p className="counter-count">Count: <span>{count}</span></p>

      <div className="btn-group">
        <button className="btn btn--primary" onClick={() => setCount(count + 1)}>Increase</button>
        <button className="btn btn--secondary" onClick={() => setCount(count - 1)}>Decrease</button>
      </div>
    </div>
  );
}

export default ParentCounter;
