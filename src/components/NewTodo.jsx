import React, { useState } from "react"

function NewTodo({ onAddTodo }) {
    const [description, setDescription] = useState("");
    
    function handleSubmit(e) {
        e.preventDefault()
        
        // persist todo on server
        // then use onAddTodo to add todo to state
    }
  
    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Todos</h2>
            <label htmlFor="description">Description:</label>
            <input
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Add todo</button>
        </form>
    )
}

export default NewTodo;