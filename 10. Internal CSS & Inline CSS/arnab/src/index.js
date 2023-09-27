import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const fname = "Arnab";
const lname = "Dey";
const img1 = "https://picsum.photos/200/300";

// .heading {
//   color: red;
//   font-family: "Montserrat", sans-serif;
//   text-align: center;
// }

const heading = {
  color: "red",
  textAlign: "center",
  fontFamily: '"Montserrat",sans-serif',
};
ReactDOM.render(
  <>
    <h1 style={heading}>
      My name is {fname} {lname}
    </h1>
    <div className="box">
      <img src={img1} alt="Random" />
      <img src={img1} alt="Random" />
      <img src={img1} alt="Random" />
    </div>
  </>,
  document.getElementById("root")
);
