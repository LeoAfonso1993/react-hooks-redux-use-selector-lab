import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { createStore } from "redux";
import usersReducer from "./features/users/usersSlice";

// add imports and code
const store = createStore(usersReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  // add imports and code
  document.getElementById("root")
);
