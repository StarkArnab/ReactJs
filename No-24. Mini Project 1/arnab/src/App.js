import React from "react";
import { useState } from "react";

const App = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const Update = () => {
    setTime(new Date().toLocaleTimeString());
  };
  setInterval(Update, 1000);
  return (
    <>
      <div>
        <h1>{time}</h1>
      </div>
    </>
  );
};

export default App;
