import React from "react";

const Anchor = (props) => {
  return (
    <a href={props.link} target="_blank">
      {props.children}
    </a>
  );
};

export default Anchor;
