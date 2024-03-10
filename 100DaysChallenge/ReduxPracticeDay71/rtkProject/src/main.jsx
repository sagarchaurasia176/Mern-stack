import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from './Redux/Store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    {/* as a props we passed this */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
