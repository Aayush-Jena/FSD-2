import { useDispatch, useSelector } from "react-redux";

export default function CounterReduxParent(props) {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div className="counter">
      <h3 className="counter-title">{props.cno}</h3>
      <p className="counter-count">Count: <span>{count}</span></p>

      <div className="btn-group">
        <button className="btn btn--primary" onClick={() => dispatch({ type: "INCREMENT" })}>Increase</button>
        <button className="btn btn--secondary" onClick={() => dispatch({ type: "DECREMENT" })}>Decrease</button>
      </div>
    </div>
  );
}
