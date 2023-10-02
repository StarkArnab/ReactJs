import React, { useState } from "react";

const App = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const Get = () => {
    setTime(new Date().toLocaleTimeString());
  };
  return (
    <>
      <div>
        <h1>{time}</h1>
        <button onClick={Get}>Get Time</button>
      </div>
    </>
  );
};

export default App;
