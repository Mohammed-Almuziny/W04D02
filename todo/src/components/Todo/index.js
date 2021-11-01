import React, { useState } from "react";
import TodoItem from "../TodoItem";
import "./style.css";

export default function Todos() {
  const [todos, setTodos] = useState([
    { id: 1, task: "wake up" },
    { id: 2, task: "code" },
  ]);

  const addTask = (event) => {
    event.preventDefault();
    if (event.target.task.value) {
      const newTask = {
        id: todos.length + 1,
        task: event.target.task.value,
      };

      setTodos([...todos, newTask]);
      event.target.task.value = "";
    }
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const changeTask = (id) => {
    const newTask = prompt("plase enter new task name");
    if (newTask) {
      setTodos(
        todos.map((todo) => {
          if (todo.id === id) {
            return { id: id, task: newTask };
          } else {
            return todo;
          }
        })
      );
    } else {
      alert("name cant be empty");
    }
  };

  return (
    <div>
      <div className="todo">
        <form onSubmit={addTask}>
          <input type="text" name="task" />
          <button>Add Task</button>
        </form>
        <ul className="todoUl">
          {todos.map((todo, i) => (
            <TodoItem
              task={todo}
              key={i}
              deleteTask={deleteTask}
              changeTask={changeTask}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
