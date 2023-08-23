import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// redux
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./store";
import { Provider } from "react-redux";

// redux
const store = configureStore({ reducer });

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
