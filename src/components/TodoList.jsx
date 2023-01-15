import React from "react";
import TodoItem from "./TodoItem"

function TodoList({ todos, onDeleteToDo, onUpdateTodo}) {
    
  return (
    <div>
      <h2>My Todos</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteToDo} onUpdateTodo={onUpdateTodo}/>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;