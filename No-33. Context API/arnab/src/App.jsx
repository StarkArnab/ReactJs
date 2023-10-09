import React, { createContext } from "react";
import CompA from "./CompA";

const fName = createContext();
const lName = createContext();
function App() {
  return (
    <>
      <fName.Provider value={"Arnab"}>
        <lName.Provider value={"Dey"}>
          <CompA />
        </lName.Provider>
      </fName.Provider>
    </>
  );
}

export default App;
export { fName, lName };
