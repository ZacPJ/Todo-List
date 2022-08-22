import React from 'react'


function Form({setInput,todo,setTodo,input}) {
  const getText = (event) =>{
    setInput(event.target.value)
  }
  function submitTodo (event) {
    event.preventDefault()
    setTodo([
      ...todo,{text: input, completed: false, id: Math.random() * 100000}
    ])
    setInput("")
  }

    return (
        <form>
      <input onChange = {getText} type="text" className="todo-input" value = {input}/>
      <button onClick = {submitTodo} >
        <i>Submit</i>
      </button>
    </form>
    );
}
export default Form;