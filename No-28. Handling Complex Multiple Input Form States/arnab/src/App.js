import React, { useState } from "react";

const App = () => {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  const inputEvent = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
        };
      } else {
        return {
          fName: prevValue.fName,
          lName: value,
        };
      }
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    alert("Data Submited");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <h1>
            Hello {fullName.fName} {fullName.lName}
          </h1>
          <input
            type="text"
            placeholder="Enter your First Name"
            name="fName"
            onChange={inputEvent}
            value={fullName.fName}
          />
          <input
            type="text"
            placeholder="Enter your Last Name"
            name="lName"
            onChange={inputEvent}
            value={fullName.lName}
          />

          <button type="submit">submit</button>
        </div>
      </form>
    </>
  );
};

export default App;
