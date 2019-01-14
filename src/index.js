import "bootstrap/dist/css/bootstrap.min.css";
import { combineReducers } from "redux";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";

import Login from "./containers/Authorize";

function App() {
  return <div className="App" />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Login />
  </Provider>,
  rootElement
);
