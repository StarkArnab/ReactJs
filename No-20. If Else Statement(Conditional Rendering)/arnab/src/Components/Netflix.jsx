import React from "react";
import Sdata from "../Sdata";
import Card from "../Card";

const Netflix = () => {
  return (
    <Card
      key={Sdata[1].id}
      imgsrc={Sdata[1].image}
      title={Sdata[1].title}
      name={Sdata[1].name}
      link={Sdata[1].link}
    />
  );
};

export default Netflix;
