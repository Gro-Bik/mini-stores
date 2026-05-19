import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "./global.css";

let page = document.getElementById("root")

if (page){
  ReactDOM.createRoot(page).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
