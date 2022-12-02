import { useState } from "react";
import TodoList from "./TodoList";
import TodoEntryForm from "./TodoEntryForm";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: "Meet Masao for Udon" },
    { id: 2, content: "Fix up these horrible React notes" }
  ]);
  function deleteTodo(id) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }

  function addTodo(todo) {
    setTodos((todos) => [...todos, todo]);
  }

  function submit(e) {
    e.preventDefault();
    if (content.trim()) {
      adder({ id: Math.random(), content });
    }
    setContent("");
  }

  return (
    <div className="App">
      <h1>Things To Do</h1>
      <TodoList todos={todos} deleter={deleteTodo} />
      <TodoEntryForm adder={addTodo} />
    </div>
  );
}
