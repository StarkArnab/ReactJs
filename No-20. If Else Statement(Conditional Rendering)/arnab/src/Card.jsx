import React from "react";
import Heading from "./Components/Heading";
import Images from "./Components/Images";
import Span from "./Components/Span";
import Anchor from "./Components/Anchor";
import Button from "./Components/Button";

function Card(props) {
  return (
    <div className="cards">
      <div className="card">
        <Images imgsrc={props.imgsrc} />
        <div className="card_info">
          <Span stitle={props.title}></Span>
          <Heading sname={props.name} />
          <Anchor slink={props.link}>
            <Button />
          </Anchor>
        </div>
      </div>
    </div>
  );
}

export default Card;
