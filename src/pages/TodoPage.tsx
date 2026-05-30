import { useState } from "react";
import { useTodoStore } from "../stores/todoStore";
import toast from "react-hot-toast";
import type { Todo } from "../types/todo";

const TodoPage = () => {
  const [title, setTitle] = useState("");

  const todos = useTodoStore((state) => state.todos);
  const addTodo = useTodoStore((state) => state.addTodo);
  const updateTodo = useTodoStore((state) => state.updateTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);

  const handleAdd = () => {
    if (!title.trim()) return;

    const todoTitle = title;
    addTodo(title);
    setTitle("");

    toast.success(`${todoTitle} Added`);
  };

  const handleUpdate = (todoId: string) => {
    const newTitle = prompt("Enter new title");

    if (!newTitle?.trim()) return;

    updateTodo(todoId, newTitle);
    toast.success(`Updated to "${newTitle}"`);
  };

  const handleDelete = (todo: Todo) => {
    deleteTodo(todo.id);
    toast.success(`${todo.title} deleted`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black p-6 flex justify-center items-start">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white">Todo List</h1>
          <p className="text-slate-400 mt-2">Organize your day efficiently</p>
        </div>

        {/* Main Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
          {/* Input */}
          <div className="flex gap-3 mb-6">
            <input
              type="text"
              placeholder="What needs to be done?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAdd()}
              className="flex-1 bg-slate-900/70 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 outline-none focus:border-blue-500 transition"
            />

            <button
              onClick={handleAdd}
              className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all duration-200 hover:scale-105"
            >
              Add
            </button>
          </div>

          {/* Stats */}
          <div className="flex justify-between text-sm text-slate-400 mb-4">
            <span>Total: {todos.length}</span>
            <span>
              Completed: {todos.filter((todo) => todo.completed).length}
            </span>
          </div>

          {/* Todos */}
          <div className="space-y-3">
            {todos.length === 0 ? (
              <div className="text-center py-10 text-slate-500">
                No todos yet 🚀
              </div>
            ) : (
              todos.map((todo) => (
                <div
                  key={todo.id}
                  className="group flex items-center justify-between bg-slate-900/60 border border-slate-800 rounded-xl px-4 py-3 hover:border-slate-600 transition-all"
                >
                  <div
                    onClick={() => toggleTodo(todo.id)}
                    className="flex items-center gap-3 cursor-pointer flex-1"
                  >
                    <span className="text-xl">
                      {todo.completed ? "✅" : "⭕"}
                    </span>

                    <span
                      className={`transition ${
                        todo.completed
                          ? "line-through text-slate-500"
                          : "text-white"
                      }`}
                    >
                      {todo.title}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition">
                    <button
                      onClick={() => handleUpdate(todo.id)}
                      className="p-2 rounded-lg bg-yellow-500/20 hover:bg-yellow-500/30"
                    >
                      ✏️
                    </button>

                    <button
                      onClick={() => handleDelete(todo)}
                      className="p-2 rounded-lg bg-red-500/20 hover:bg-red-500/30"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
