import React from "react";
import { useSelector, useDispatch } from "react-redux";

function SecondCounter() {
  // let's pull in the value of count from the store
  // I want store.count this is what we want returned.
  // I added color to the initial state in rootreducer and then update const.
  // This is a functional component
  const count = useSelector((store) => store.count);
  const dispatch = useDispatch();
  const increment = () => dispatch({ type: "INCREMENT" });
  const decrement = () => dispatch({ type: "DECREMENT" });
  const reset = () => dispatch({ type: "RESET" });
  console.log("I AM THE SECOND COUNTER", count);

  return (
    <div>
      <h2>The count is: {count}.</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}> Reset</button>
    </div>
  );
}

export default SecondCounter;
