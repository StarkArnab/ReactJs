import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  // This method also works
  // <React.Fragment>
  //   <h1>Heading</h1>
  //   <p>Paragraph</p>
  //   <button>Button</button>
  // </React.Fragment>

  // This method also works
  <>
    <h1>Heading</h1>
    <p>Paragraph</p>
    <button>Button</button>
  </>,
  document.getElementById("root")
);
