"use client";
import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "./store";
import ReduxTodoForm from "./ReduxTodoForm";
import ReduxTodoItem from "./ReduxTodoItem";
import type { ReduxTodo } from "./todosReducer";

export default function ReduxTodos() {
  const { todos } = useSelector((state: RootState) => state.todosReducer);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState("");

  const handleEdit = (todo: ReduxTodo) => {
    setEditingId(todo.id);
    setEditTitle(todo.title);
  };

  return (
    <div id="wd-redux-todos">
      <h3>Redux Todo List</h3>
      <ReduxTodoForm
        editingId={editingId}
        setEditingId={setEditingId}
        editTitle={editTitle}
      />
      <ul className="m-0 max-w-lg list-none p-0">
        {todos.map((todo) => (
          <ReduxTodoItem key={todo.id} todo={todo} onEdit={handleEdit} />
        ))}
      </ul>
    </div>
  );
}