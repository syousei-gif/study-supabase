import {supabase}  from "./supabase"

export const getAlltodos = async ()=>{
const todos = await supabase.from("todo").select("*");
return todos.data;
};


