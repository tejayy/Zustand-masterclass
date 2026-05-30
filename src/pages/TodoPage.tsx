import { useState } from "react";
import { useTodoStore } from "../stores/todoStore";
import toast from "react-hot-toast";
import type { Todo } from "../types/todo";

const TodoPage = () => {
  const [title, setTitle] = useState("");
  const todos = useTodoStore((state) => state.todos);
  const addTodo = useTodoStore((state) => state.addTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);

  const handleAdd = () => {
    if (!title.trim()) return;
    const todoTitle = title;

    addTodo(title);
    setTitle("");
    toast.success(`${todoTitle} Added`);
  };

  const handleDelete = (todo: Todo) => {
    deleteTodo(todo.id);
    toast.success(`${todo.title} deleted successfully`);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      {/* INPUTS AND BUTTONS  */}
      <div className="flex gap-2">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 flex-1 "
        />
        <button
          onClick={handleAdd}
          className="bg-black text-white px-4 border rounded-xl "
        >
          Add
        </button>
      </div>

      <div>
        {todos.map((todo) => (
          <div key={todo.id} className="flex justify-between border p-2 mt-2">
            <span onClick={() => toggleTodo(todo.id)}>
              {todo.completed ? "✅" : "⬜"}
              {""}
              {todo.title}
            </span>
            <button onClick={() => handleDelete(todo)}>❌</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoPage;
