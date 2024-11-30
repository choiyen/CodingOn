import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./store";
import { Provider } from "react-redux";
import App2 from "./App2";

const root = ReactDOM.createRoot(document.getElementById("root"));
// store 정의 : 전역 상태를 관리하는 하나의 공간(하나의 프로젝트에서 하나만!)
const store = configureStore({ reducer: rootReducer });
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <br />
      <br />
      <br />
      <hr />
      <App2 />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
