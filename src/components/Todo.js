import React from "react";
function Todo({text,todo,setTodo,todo_single})  {
    function deletion () {
        setTodo(todo.filter((element) => element.id !== todo_single.id))
    }
    function completion () {
        setTodo(todo.map(item => {
            if (item.id === todo_single.id){
                return {
                    ...item, completed: !item.completed
                }
            }
            return item
        }))
    }
    return(
        <div className = "todo">
            <li className = {`todo-item ${todo_single.completed ? "completed" : ""}`}>{text}</li>
            <button onClick ={completion} className = "complete-btn"><i>Complete</i></button>
            <button onClick={deletion} className = "trash-btn"><i>Delete</i></button>
        </div>
    )
}
export default Todo; 