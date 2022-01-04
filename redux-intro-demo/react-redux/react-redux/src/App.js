import React from "react";
import FirstCounter from "./FirstCounter";
import SecondCounter from "./SecondCounter";
import ColorHeader from "./ColorHeader";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FirstCounter />
        <SecondCounter />
        <ColorHeader />
      </header>
    </div>
  );
}

export default App;
