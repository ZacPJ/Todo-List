import React from "react";
import Todo from "./Todo"
function List({todo, setTodo}){
    return(
    <div className="todo-container">
        <ul className="todo-list">
            {todo.map((todo_single) => (
                <Todo text = {todo_single.text} key = {todo_single.id} todo = {todo} setTodo = {setTodo} todo_single = {todo_single}/>
            ))}
        </ul>
    </div>
    )
} 
export default List 