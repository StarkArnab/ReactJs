import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked me ${count}`;
  }, [count]);
  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me
      </button>
    </>
  );
}

export default App;
