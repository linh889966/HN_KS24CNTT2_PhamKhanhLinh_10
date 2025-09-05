import { useEffect, useMemo, useState } from "react";
import TodoInput from "./components/WordInput";
import TodoList from "./components/WordList";
import type { Todo } from "./types";
import { loadTodos, saveTodos } from "./utils/storage";
import "./index.css";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>(() => loadTodos());

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const stats = useMemo(() => {
    const total = todos.length;
    const done = todos.filter((t) => t.completed).length;
    return { total, done };
  }, [todos]);

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title,
      completed: false,
      createdAt: Date.now(),
    };
    setTodos((prev) => [newTodo, ...prev]);
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="container">
      <TodoInput onAdd={addTodo} />

      <div className="list-wrapper">
        <TodoList items={todos} onToggle={toggleTodo} onDelete={deleteTodo} />

        <p className="counter">
          <strong>{stats.done}</strong> / <strong>{stats.total}</strong>{" "}
          Liên hệ đã thêm
        </p>
      </div>
    </div>
  );
}
