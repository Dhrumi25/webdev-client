"use client";
import { createContext, useContext, useState, type ReactNode } from "react";

export type Todo = {
  id: string;
  title: string;
};

type TodosContextValue = {
  todos: Todo[];
  todo: Todo;
  setTodo: (todo: Todo) => void;
  addTodo: (todo: Todo) => void;
  updateTodo: (todo: Todo) => void;
  deleteTodo: (id: string) => void;
};

const emptyTodo: Todo = { id: "-1", title: "" };

const TodosContext = createContext<TodosContextValue | null>(null);

export function TodosProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", title: "Learn HTML" },
    { id: "2", title: "Learn CSS" },
    { id: "3", title: "Learn JavaScript" },
  ]);
  const [todo, setTodo] = useState<Todo>(emptyTodo);

  const addTodo = (newTodo: Todo) => {
    setTodos([...todos, { ...newTodo, id: crypto.randomUUID() }]);
    setTodo(emptyTodo);
  };

  const updateTodo = (updated: Todo) => {
    setTodos(todos.map((t) => (t.id === updated.id ? updated : t)));
    setTodo(emptyTodo);
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  return (
    <TodosContext.Provider
      value={{ todos, todo, setTodo, addTodo, updateTodo, deleteTodo }}
    >
      {children}
    </TodosContext.Provider>
  );
}

export function useTodosContext() {
  const value = useContext(TodosContext);
  if (!value) {
    throw new Error("useTodosContext must be used inside TodosProvider");
  }
  return value;
}