import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

function mount(el) {
  ReactDOM.render(<App />, el);
}

if (process.env.NODE_ENV === "development") {
  const devContainer = document.getElementById("dev-marketing");
  if (devContainer) {
    mount(devContainer);
  }
}

export { mount };
