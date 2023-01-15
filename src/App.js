import React, {useState} from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(newTodo) {
    const updatedTodos = [...todos, newTodo]
    setTodos(updatedTodos);
  }
  
  function deleteTodo(id) {
      const updatedTodos = todos.filter(todo => todo.id !== id)
      setTodos(updatedTodos)
  }
  
  function updateTodo(id, completed) {
      const updatedTodos = todos.map(todo => {
          if (todo.id === id) {
              return { ...todo, completed }
          } else {
             return todo 
          }
      })
  }
  return (
    <div className="App">
      <NewTodo onAddTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
