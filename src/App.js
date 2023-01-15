import React, {useEffect, useState} from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(
    () => {
      fetch("http://localhost:3000/todos")
      .then(resp => resp.json())
      .then(data => setTodos(data))
    }
    ,[]
  );

  function addTodo(newTodo) {
    const updatedTodos = [...todos, newTodo]
    setTodos(updatedTodos);
  }
  
  function deleteTodo(id) {
      const updatedTodos = todos.filter(todo => todo.id !== id)
      setTodos(updatedTodos)
  }

  // console.log(todos)
  
  function updateTodo(id, completed) {
      console.log(id, completed)
      const updatedTodos = todos.map(todo => {
          if (todo.id === id) {
              return { ...todo, completed }
          } else {
             return todo 
          }
      })
      setTodos(updateTodo)
  }
  return (
    <div className="App">
      <NewTodo onAddTodo={addTodo} />
      <TodoList todos={todos} onDeleteTodo={deleteTodo} onUpdateTodo={updateTodo}/>
    </div>
  );
}

export default App;
