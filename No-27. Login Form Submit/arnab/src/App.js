import React, { useState } from "react";

const App = () => {
  const [text, setText] = useState("");
  const [fullName, setFullName] = useState("Hello");
  const [pass, setPass] = useState("");
  // const ShowData = () => {
  //   setText(document.getElementsByTagName("input").value);
  // };
  const inputEvent = (event) => {
    setText(event.target.value);
  };
  const inputEvent1 = (event) => {
    setPass(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setFullName(text + " " + pass);
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <h1>{fullName}</h1>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={inputEvent}
          />
          <input
            type="password"
            placeholder="Enter your password"
            onChange={inputEvent1}
          />
          <button type="submit">submit</button>
        </div>
      </form>
    </>
  );
};

export default App;
