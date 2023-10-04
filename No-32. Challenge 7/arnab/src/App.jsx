import React from "react";
import { useState } from "react";
import "./App.css";
const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    count === 0 ? setCount(0) : setCount(count - 1);
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>{count}</h1>
          <br />
          <div className="button">
            <button onClick={increment} id="inc">
              +
            </button>
            <button onClick={decrement} id="dec">
              -
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
