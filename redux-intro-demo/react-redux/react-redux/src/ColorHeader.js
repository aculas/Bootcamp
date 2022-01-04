import React from "react";
import { useSelector } from "react-redux";

function ColorHeader() {
  // This function only uses a piece of the store and only relies on color from the store
  const color = useSelector((store) => store.color);
  console.log("COLOR HEADER", color);
  return <h1 style={{ color }}> The color is {color}.</h1>;
}

export default ColorHeader;
