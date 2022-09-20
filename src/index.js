// Core Component
import React from "react";
import ReactDOM from "react-dom/client";



import "./index.css"; // CSS
import App from "./App"; // Custom Component

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
