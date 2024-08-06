import { useState } from 'react';
import React from 'react';

function App() {


  const [todoList, setTodoList] = useState<string[]>([]);
  const [todo, setTodo] = useState("");

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodoList([...todoList, todo]);
    setTodo("");
  }

  const deleteTodo = (deleteValue: string) => {
    const newTodoList = [...todoList.filter((val: string) => {
      return val !== deleteValue
    }),
  ];
  setTodoList(newTodoList);
  };

  return <div className="bg-gray-300 w-full h-screen flex items-center">
    <div className="w-[500px] mx-auto text-center bg-white p-5"> 
      <h1 className="text-4xl font-bold mb-8"> Todo List </h1>
      <form onSubmit={handleForm}> 
        <input className="border-2 placeholder:text-gray-500 rounded-lg 
        border-black w-full p-5 mb-5 text-black" 
          type="text" 
          placeholder="Add Todo" 
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button 
        type="submit" 
        className="bg-red-600 text-white py-3 px-8 rounded-lg mb-5"> Add Todo </button>  
      </form>
      <div className="todo-show-area">
        <ul>
          {todoList.map((todo, index) => {
            return (<li 
              key = {index}
              className="bg-black mb-5 flex justify-between text-white py-5
              rounded-lg text-3xl px-5">
              {todo}{" "}
              <span onClick={() => deleteTodo(todo)} className="text-red-600 cursor-pointer">x</span>
            </li>)
          })}
        </ul>
      </div>
    </div>
  </div>
}

export default App
