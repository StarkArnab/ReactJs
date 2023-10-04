import React, { useState } from "react";
import ToDoList from "./Component/ToDoList";
import "./App.css";

const App = () => {
  const [inputItem, setInputItem] = useState("");
  const [item, setItem] = useState([]);
  const deleteItem = (id) => {
    setItem((prevItem) => {
      return prevItem.filter((curItem, index) => {
        return index !== id;
      });
    });
    // console.log("del");
  };
  const inputEvent = (event) => {
    setInputItem(event.target.value);
  };
  const addItem = () => {
    setItem((prevValue) => {
      return [...prevValue, inputItem];
    });
    setInputItem("");
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add an Item"
            onChange={inputEvent}
            value={inputItem}
          />
          <button onClick={addItem}>+</button>
          <ol>
            {item.map((element, index) => {
              return (
                <ToDoList
                  key={index}
                  id={index}
                  element={element}
                  onSelect={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
