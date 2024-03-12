import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./Store/Store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>

    {/* <toast/> */}
  </React.StrictMode>
);
