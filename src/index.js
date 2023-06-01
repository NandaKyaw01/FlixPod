import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./dashboard.css";
import App from "./App";
import "react-indiana-drag-scroll/dist/style.css";
import AppLayout from "./Layouts/AppLayout";
import { BrowserRouter } from "react-router-dom";
import PhotoGallery from "./components/basic/PhotoGallery";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
