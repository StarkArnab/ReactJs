import React from "react";
import ReactDOM from "react-dom";

// This is in JSX
// ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root"));

// This is what Babel converts it to
ReactDOM.render(
  React.createElement("h1", null, "Hello World!"),
  document.getElementById("root")
);

// This is what I can do if I want to write it in pure JS
var h1 = document.createElement("h1");
h1.innerText = "Hello World! from JS";
document.getElementById("root").append(h1);
