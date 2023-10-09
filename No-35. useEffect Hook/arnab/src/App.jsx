import React, { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [counts, setCounts] = useState(0);
  useEffect(() => {
    alert("Value Changed");
  }, [count]);

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click ME {count}
      </button>
      <br />
      <button
        onClick={() => {
          setCounts(counts + 1);
        }}
      >
        Click ME {counts}
      </button>
    </>
  );
}

export default App;
