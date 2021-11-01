import React from "react";
import "./style.css";

export default function TodoItem(props) {
  return (
    <div>
      <li className="todoItem">
        <h4>{props.task.task}</h4>
        <div className="editTask">
          <h4
            className="deleteBtn"
            onClick={() => props.deleteTask(props.task.id)}
          >
            X
          </h4>
          <h4
            className="changeBtn"
            onClick={() => props.changeTask(props.task.id)}
          >
            change
          </h4>
        </div>
      </li>
    </div>
  );
}
