import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Card from "./Card";
import reportWebVitals from "./reportWebVitals";
import Sdata from "./Sdata";

const root = ReactDOM.createRoot(document.getElementById("root"));

// function ncard(value) {
//   return (
//     <Card
//       imgsrc={value.image}
//       title={value.title}
//       name={value.name}
//       link={value.link}
//     />
//   );
// }
root.render(
  <>
    <h1 className="heading_style"> List of top 5 netflix </h1>
    {Sdata.map((value, index) => {
      console.log(index);
      return (
        <Card
          imgsrc={value.image}
          title={value.title}
          name={value.name}
          link={value.link}
        />
      );
    })}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
