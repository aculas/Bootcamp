import React from "react";
import { useSelector } from "react-redux";

function FirstCounter() {
  // let's pull in the value of count from the store
  // I want store.count this is what we want returned.
  // I added color to the initial state in rootreducer and then update const.
  // This is a functional component
  const count = useSelector((store) => store.count);
  console.log("I AM THE FIRST COUNTER", count);

  return (
    <div>
      <h2>The count is: {count}.</h2>
    </div>
  );
}

export default FirstCounter;
