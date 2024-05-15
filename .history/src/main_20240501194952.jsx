import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import DefaultLayout from "./layouts/DefaultLayout.jsx";
import "./css/style.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DefaultLayout>
      <App />
    </DefaultLayout>
  </React.StrictMode>
);
