import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let curTime = new Date().getHours();
const cssStyle = {};
let greeting = "";
if (curTime >= 1 && curTime < 12) {
  greeting = "Good Morning";
  cssStyle.color = "green";
} else if (curTime >= 12 && curTime < 20) {
  greeting = "Good Afternoon";
  cssStyle.color = "orange";
} else {
  greeting = "Good Night";
  cssStyle.color = "black";
}
ReactDOM.render(
  <>
    <div>
      <h1>
        Hello Sir, <span style={cssStyle}>{greeting}</span>
      </h1>
    </div>
  </>,
  document.getElementById("root")
);
