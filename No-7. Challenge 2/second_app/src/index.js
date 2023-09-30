import React from "react";
import ReactDOM from "react-dom";

const fname = "Arnab";
const lname = "Dey";
const curDate = new Date().toLocaleDateString();
const curTime = new Date().toLocaleTimeString();
ReactDOM.render(
  <>
    <h1>
      My name is {fname} {lname}
    </h1>
    <p>Current Date - {curDate}</p>
    <p>Current Time - {curTime}</p>
  </>,
  document.getElementById("root")
);
