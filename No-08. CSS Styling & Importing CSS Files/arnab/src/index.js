import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const img1 = "https://picsum.photos/200/300";
const links = "https://www.google.com/";
ReactDOM.render(
  <>
    <h1 className="heading">Some Heading</h1>
    <div className="box">
      <img src={img1} alt="Some random image" />
      <img src={img1} alt="Some random image" />
      <a href={links} target="_blank">
        <img src={img1} alt="Some random image" />
      </a>
    </div>
  </>,
  document.getElementById("root")
);
