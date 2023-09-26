"use client"
import React, { useEffect,useState } from 'react'
import TodoList from './TodoList'
import { getAlltodos } from '../utils/supabaseFunctions'




const TodoApp = () => {
  const [todos, setTodos] = useState([]);

useEffect(() => {
  const getTodos =async() => {
const todos = await getAlltodos();
setTodos(todos);
console.log(todos);
};
  getTodos();
}, []);

  return (
<section className="text-center mb-2 text-2xl font-medium">
<h3 className="text-red-700">Supabase Todo App</h3>
    <form>
      <input type="text" className="mr-2 shadow-lg p-1 outline-none"/>
      <button className="shadow-md border-2 px-1 py-1 rounded-lg bg-green-200">Add</button>
    </form>
    <TodoList /> 
    </section>
  );
};

export default TodoApp