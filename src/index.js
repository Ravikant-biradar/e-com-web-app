import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Context from "./Context";
import Cartcontext from "./Cartcontext";
import { Store } from "./Storage/Store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context>
    <Cartcontext>
      <Provider store={Store}>
        <App />
      </Provider>
    </Cartcontext>
  </Context>
);
