import { useTodosContext } from "./todosContext";

export default function ReactContextTodoList() {
  const { todos, todo, setTodo, addTodo, updateTodo, deleteTodo } =
    useTodosContext();
  return (
    <div id="wd-context-todo-list">
      <h3>React Context Todo List</h3>
      <div className="mb-3 flex flex-wrap gap-2">
        <input
          className="rounded border border-neutral-300 px-3 py-1.5"
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          id="wd-context-todo-title"
        />
        <button
          type="button"
          onClick={() => addTodo(todo)}
          id="wd-context-add-todo-click"
          className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
        >
          Add
        </button>
        <button
          type="button"
          onClick={() => updateTodo(todo)}
          id="wd-context-update-todo-click"
          className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
        >
          Update
        </button>
      </div>
      <ul className="m-0 max-w-lg list-none p-0">
        {todos.map((t) => (
          <li
            key={t.id}
            id={`wd-context-todo-${t.id}`}
            className="mb-1 flex items-center justify-between rounded border border-neutral-200 px-3 py-1"
          >
            <span>{t.title}</span>
            <span className="flex gap-2">
              <button
                type="button"
                onClick={() => setTodo(t)}
                className="rounded bg-yellow-400 px-2 py-0.5 text-sm"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => deleteTodo(t.id)}
                className="rounded bg-red-600 px-2 py-0.5 text-sm font-medium text-white"
              >
                Delete
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}