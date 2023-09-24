import React from "react";
import ReactDOM from "react-dom";

const name = "Some";
const fname = "Arnab";
const lname = "Dey";
ReactDOM.render(
  <>
    <h1>
      {name} random number {Math.random()}
    </h1>
    <p>{`My name is ${fname} ${lname}`}</p>
  </>,
  document.getElementById("root")
);

// Only expressions and variable names can be used in line 8, not statements.
