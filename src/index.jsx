import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

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
