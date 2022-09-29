
import './App.css';
import { useEffect, useState } from 'react';
import ToDo from './To-Do';
import ToDoForm from './To-Do-Fotm';



function App() {
const [todos, setTodos] = useState([]);

const addTask = (userInput) => {
   if(userInput) {
    const newItem = {
      id:Math.random().toString(30).substring(2,8),
      task:userInput,
      complete:false
    };
    setTodos([...todos,newItem])
   }
}

const removeTask = (id) => {
setTodos([...todos.filter(elem=>elem.id!==id)])
}
const handleToggle = (id) => {
  setTodos([
    ...todos.map(elem=>elem.id===id?{...elem,complete:!elem.complete}:{...elem})
  ])
}


  return (
      <div className='App'> 
       <header>
        <h1> Список задач: {todos.length}</h1>
       </header>
       <ToDoForm addTask ={addTask}/>
       {todos.map(todo => {
        return (
          <ToDo
          key = {todo.id}
          todo = {todo}
          removeTask = {removeTask}
          toggleTask = {handleToggle}/>
        )
       })}
      
      
      </div>
  );
}

export default App;
