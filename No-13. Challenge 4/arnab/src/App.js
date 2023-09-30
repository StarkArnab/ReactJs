import React from "react";

function App() {
  let cssStyle = {};
  let curTime = new Date().getHours();
  let greeting = "";
  if (curTime >= 1 && curTime < 12) {
    greeting = "Good Morning";
    cssStyle.color = "green";
  } else if (curTime >= 12 && curTime < 20) {
    greeting = "Good Afternoon";
    cssStyle.color = "orange";
  } else {
    greeting = "Good Night";
    cssStyle.color = "black";
  }
  return (
    <>
      <div>
        <h1>
          Hello Sir, <span style={cssStyle}>{greeting}</span>
        </h1>
      </div>
    </>
  );
}

export default App;
