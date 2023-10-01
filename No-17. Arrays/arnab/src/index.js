import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Card from "./Card";
import reportWebVitals from "./reportWebVitals";
import Sdata from "./Sdata";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <h1 className="heading_style"> List of top 5 netflix </h1>
    <Card
      imgsrc={Sdata[0].image}
      title={Sdata[0].title}
      name={Sdata[0].name}
      link={Sdata[0].link}
    />
    <Card
      imgsrc={Sdata[1].image}
      title={Sdata[1].title}
      name={Sdata[1].name}
      link={Sdata[1].link}
    />
    <Card
      imgsrc={Sdata[2].image}
      title={Sdata[2].title}
      name={Sdata[2].name}
      link={Sdata[2].link}
    />
    <Card
      imgsrc={Sdata[3].image}
      title={Sdata[3].title}
      name={Sdata[3].name}
      link={Sdata[3].link}
    />
    <Card
      imgsrc={Sdata[4].image}
      title={Sdata[4].title}
      name={Sdata[4].name}
      link={Sdata[4].link}
    />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
