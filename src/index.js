import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

// you'll need this for older browsers
require("es6-promise").polyfill();

const styles = {
  root: {
    fontFamily: '"Roboto", sans-serif',
    background: "#fff",
    display: "flex",
    alignItems: "center"
  }
};

ReactDOM.render(
  <div style={styles.root}>
    <App />
  </div>,
  document.getElementById("app")
);
