import { useState } from "react";

export default function LocalCounter(props) {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  return (
    <div className="counter">
      <h3 className="counter-title">{props.cno}</h3>
      <p className="counter-count">Local Count: <span>{count}</span></p>

      <div className="btn-group">
        <button className="btn btn--primary" onClick={increaseCount}>Increase</button>
        <button className="btn btn--secondary" onClick={decreaseCount}>Decrease</button>
      </div>
    </div>
  );
}
