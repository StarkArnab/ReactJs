import React from "react";
import ReactDOM from "react-dom";
import per, { person2, myName, myNames } from "./App";

ReactDOM.render(
  <>
    <ol>
      <li>On index.js</li>
      <li>{per}</li>
      <li>{person2}</li>
      <li>{myName()}</li>
      <li>{myNames()}</li>
    </ol>
  </>,
  document.getElementById("root")
);
