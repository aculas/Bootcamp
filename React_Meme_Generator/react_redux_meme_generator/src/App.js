import React from "react";
import NewMemeForm from "./NewMemeForm.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NewMemeForm addMeme={addMeme} />
      <hr />
      {memeComps}
    </div>
  );
}

export default App;
