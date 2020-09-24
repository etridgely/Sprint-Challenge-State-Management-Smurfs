import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./reducers/index";

const store = createStore(reducer, applyMiddleware(thunk));
const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement 
);
