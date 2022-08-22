import Form from './components/Form'
import './App.css';
import List from './components/List'
import React, {useState} from 'react';
function App() {
	const [input,setInput] = useState("")
	const [todo,setTodo] = useState ([])

  return (
    <div className="App">
		<div className = "MainBox">
		<header>
			<h1>To Do List</h1>
		</header>
		<Form setInput = {setInput} setTodo = {setTodo} todo = {todo} input = {input}/>
		<List todo ={todo} setTodo = {setTodo}/>
		</div>
    </div>
  );
}

export default App;
