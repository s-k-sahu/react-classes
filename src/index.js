import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
// import './input.css'
import App from "./App";
// if (process.env.NODE_ENV === 'development') {
//   import('react-error-overlay').then(m => {
//     m.stopReportingRuntimeErrors();
//   });
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
