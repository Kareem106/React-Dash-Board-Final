import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import LogInProvider from "./Context/LogInProvider";
import { Provider } from "react-redux";
import { store } from "./app/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
  <LogInProvider>
      <App />
  </LogInProvider>
  </Provider>
);
