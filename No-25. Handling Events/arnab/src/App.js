import React from "react";
import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("rgb(235, 160, 204)");
  const [count, setCount] = useState(0);
  const [text, setText] = useState("click me");

  const BgChange = () => {
    setCount(count + 1);
    if (count === 0) {
      setText("clicked");
    } else if (count === 1) {
      const bg = "purple";
      setColor(bg);
      setText("yay");
    } else if (count === 2) {
      const bg = "yellow";
      setColor(bg);
      setText("wassup");
    } else if (count === 3) {
      const bg = "brown";
      setColor(bg);
      setText("ayo");
    } else {
      setColor("rgb(235, 160, 204)");
      setText("refresh");
    }
  };

  return (
    <>
      <div style={{ backgroundColor: color }}>
        <button onClick={BgChange}>{text}</button>
      </div>
    </>
  );
};

export default App;
