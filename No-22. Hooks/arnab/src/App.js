import React from "react";
import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const Inc = () => {
    setCounter(counter + 1);
  };
  const Dec = () => {
    if (counter == 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <div>
        <h1>Left-Click for Increment.</h1>
        <h1>Right-Click for Decrement</h1>
        <h1>{counter}</h1>
        <button onClick={Inc} onContextMenu={Dec}>
          Click Me
        </button>
      </div>
    </>
  );
};

export default App;
