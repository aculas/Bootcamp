import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import VendingMachine from "./VendingMachine";
import Sardines from "./Sardines";
import Chips from "./Chips";
import Soda from "./Soda";

function App() {
  return (
    <div className="App">
      <VendingMachine />
    </div>
  );
}

export default App;
