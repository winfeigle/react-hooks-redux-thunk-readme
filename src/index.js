import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// Added applyMiddleware
import { createStore, applyMiddleware } from "redux";
import App from "./App";
import rootReducer from "./reducer";
// Adding redux-thunk middleware
import ThunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const composedEnhancer = composeWithDevTools(applyMiddleware(ThunkMiddleware));

const store = createStore(rootReducer, composedEnhancer);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
