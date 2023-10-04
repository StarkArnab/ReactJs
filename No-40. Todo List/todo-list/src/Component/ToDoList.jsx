import React from "react";
import "./ToDoList.css";
const ToDoList = (props) => {
  return (
    <>
      <div className="todo_style">
        <button
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          x
        </button>
        <li>
          {props.element}
          {props.children}
        </li>
      </div>
    </>
  );
};

export default ToDoList;
