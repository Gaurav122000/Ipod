import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/index.css";
import App from "./components/stateful/App";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <>
//     <App />
//   </>
// );

// Rendering the React App into the HTML DOM Element "root"
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
