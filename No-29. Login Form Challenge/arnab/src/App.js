import React, { useState } from "react";

const App = () => {
  const [data, setData] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
  });

  const inputEvent = (event) => {
    const { value, name } = event.target;
    setData((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email,
          phone: prevValue.phone,
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email,
          phone: prevValue.phone,
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value,
          phone: prevValue.phone,
        };
      } else if (name === "phone") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: prevValue.email,
          phone: value,
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
            Hello {data.fName} {data.lName}
          </h1>
          <p>{data.email}</p>
          <p>{data.phone}</p>
          <input
            type="text"
            placeholder="Enter your First Name"
            name="fName"
            onChange={inputEvent}
            value={data.fName}
          />
          <input
            type="text"
            placeholder="Enter your Last Name"
            name="lName"
            onChange={inputEvent}
            value={data.lName}
          />
          <input
            type="email"
            placeholder="Enter your Email"
            name="email"
            onChange={inputEvent}
            value={data.email}
          />
          <input
            type="tel"
            placeholder="Enter your Mobile Number"
            name="phone"
            onChange={inputEvent}
            value={data.phone}
          />
          <button type="submit">submit</button>
        </div>
      </form>
    </>
  );
};

export default App;
