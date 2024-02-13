import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/App/App";

const root = document.getElementById("root");

const renderApp = () => {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

// Render your app using createRoot
renderApp();
