import React, { useState } from "react";
import chipsImg from "./ChipImg";
import { Link } from "react-router-dom";
import Message from "./Mesage";
import "./Chips.css";

function Chips() {
  const [bags, setBags] = useState([]);

  function handleClick() {
    const x = windows.innerWidth * Math.random();
    const y = windows.innerHeight * Math.random();
    setBags((prevBags) => [...prevBags, { x, y }]);
  }

  const b = bags.map((bag, i) => (
    <img
      key={i}
      src={chipsImg}
      className="bag"
      style={{ top: `${bag.y}px`, left: `${bag.x}px` }}
      alt="bag of lay's chips"
    />
  ));
  return (
    <div className="Chips">
      <Message>
        <h1>bags eaten: {bags.length}</h1>
        <button onClick={handleClick}>nom nom nom</button>
        <h1>
          <Link to="/">go back</Link>
        </h1>
      </Message>
      {b}
    </div>
  );
}

export default Chips;
