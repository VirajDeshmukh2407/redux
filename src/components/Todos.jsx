import React from "react";
import { useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";
function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      {/* <div>Todos</div> */}
      <ul className="list-none px-5 py-3">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-gray-700 px-4 py-2 rounded hover:bg-gray-800"
            key={todo.id}
          >
            <div className="text-white">{todo.text}</div>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-red-500 border-0 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6  cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L6 8M10 18L10 8M14 18L14 8M18 18L18 8M4 6L20 6M9 6L9 4.5A1.5 1.5 0 0110.5 3h3A1.5 1.5 0 0115 4.5V6"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
