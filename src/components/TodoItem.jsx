import React from "react"

function TodoItem({ todo, onUpdateTodo, onDeleteTodo }) {
    const { description, id, completed } = todo
    
    function handleCompleted(e) {
        // persist changes on server
        // then use onUpdateTodo to update todo in state
    }
    
    function handleDelete() {
        // persist changes on server
        fetch(`http://localhost:3000/todos/${id}`, {
          method: "DELETE"
        })
        // then use onDeleteTodo to remove todo from state
        // onDeleteTodo(id)
    }
    
    return (
        <li>
            <strong>{description}</strong>
            <label>
                Completed?
                <input
                    type="checkbox"
                    onChange={handleCompleted}
                    checked={completed}
                />
            </label>
            <button onClick={handleDelete}>Delete</button>
        </li>
    )
}

export default TodoItem