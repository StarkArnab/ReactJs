import React from "react";
import { fName, lName } from "./App";
function CompC() {
  return (
    <fName.Consumer>
      {(fname) => {
        return (
          <lName.Consumer>
            {(lName) => {
              return (
                <h1>
                  My name is {fname} {lName}
                </h1>
              );
            }}
          </lName.Consumer>
        );
      }}
    </fName.Consumer>
  );
}

export default CompC;
