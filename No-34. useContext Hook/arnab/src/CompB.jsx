import React, { useContext } from "react";
import CompC from "./CompC";

import { fName, lName } from "./App";

function CompB() {
  const fname = useContext(fName);
  const lname = useContext(lName);

  return (
    <h1>
      My name is {fname} {lname}
    </h1>
  );
}

export default CompB;
