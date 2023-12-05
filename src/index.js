import React from "react";
import ReactDOM from "react-dom";

import TaskList from "./App";
import { TASKS } from "./json";
import "./styles.css";
import { Provider } from "react-redux";

import store from "./store/index";

function App() {
  return (
    <div className="App">
      <TaskList tasks={TASKS} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />{" "}
  </Provider>,
  rootElement
);
