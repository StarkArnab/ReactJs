import React from "react";
import Card from "../Card";
import Sdata from "../Sdata";

const Amazon = () => {
  return (
    <Card
      key={Sdata[6].id}
      imgsrc={Sdata[6].image}
      title={Sdata[6].title}
      name={Sdata[6].name}
      link={Sdata[6].link}
    />
  );
};

export default Amazon;
