import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthUserProvider } from "./firebase/auth";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthUserProvider>
      <App />
      <ToastContainer />
    </AuthUserProvider>
  </React.StrictMode>
);

