import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./pages";
import "./styles/globalStyles.scss";

const root = document.getElementById("root")!;

const StrictApp = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

ReactDOM.createRoot(root).render(StrictApp);
