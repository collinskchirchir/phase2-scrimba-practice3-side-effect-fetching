// import React from "react"
import React from "react"

function TodoItem({ todo, onUpdateTodo, onDeleteTodo }) {
    const { description, id, completed } = todo
    
    function handleCompleted(completed) {
        // persist changes on server
        // prevent infinite re-rerender
        
          fetch(`http://localhost:3000/todos/${id}`, {
            method: "PATCH",
            header: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({completed: completed})

          })
            .then(resp => resp.json())
            .then(data => onUpdateTodo(data.id, data.completed))
       
        // then use onUpdateTodo to update todo in state
    }
    
    function handleDelete() {
        // persist changes on server
        fetch(`http://localhost:3000/todos/${id}`, {
          method: "DELETE"
        })
        // then use onDeleteTodo to remove todo from state
        onDeleteTodo(id)
    }
    
    return (
        <li>
            <strong>{description}</strong>
            <label>
                Completed?
                <input
                    type="checkbox"
                    onChange={e => handleCompleted(e.target.checked)}
                    checked={completed}
                />
            </label>
            <button onClick={handleDelete}>Delete</button>
        </li>
    )
}

export default TodoItem