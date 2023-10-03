import React, { useState } from "react";

const App = () => {
  const [text, setText] = useState("");
  const [fullName, setFullName] = useState("Hello");
  // const ShowData = () => {
  //   setText(document.getElementsByTagName("input").value);
  // };
  const inputEvent = (event) => {
    setText(event.target.value);
  };
  const onSubmit = () => {
    setFullName(text);
  };
  return (
    <>
      <div>
        <h1>{fullName}</h1>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={inputEvent}
          value={text}
        />
        <button onClick={onSubmit}>submit</button>
      </div>
    </>
  );
};

export default App;
