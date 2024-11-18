import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Clock from "./Clock";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>{/* <App /> */}</React.StrictMode> //두번정도 에러를 검출함
// );
setInterval(() => {
  root.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode> //두번정도 에러를 검출함
  );
}, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
