import React, { useState } from "react";
import Data from "./Data";
import MyAccordian from "./MyAccordian";
import "./Accordian.css";

const Accordian = () => {
  const [data, setData] = useState(Data);
  return (
    <>
      <section className="main_div">
        <h1>React Questions</h1>
        {data.map((element, index) => {
          return <MyAccordian key={element.id} {...element} />;
        })}
      </section>
    </>
  );
};

export default Accordian;
