import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import store from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ToastContainer
          theme="light"
          position="top-right"
          autoClose={2000}
          closeOnClick
          pauseOnHover={false}
        />
        <ToastContainer />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
