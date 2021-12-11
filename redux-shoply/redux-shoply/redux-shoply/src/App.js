import React from "react";
import { Provider } from "react-redux";
import rootReducer from "./rootReducer";
import { createStore } from "redux";
import "./App.css";

const store = createStore(rootReducer);

function App() {
  return <Provider store={store}></Provider>;
}

export default App;
