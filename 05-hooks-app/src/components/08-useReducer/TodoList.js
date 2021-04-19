import React from 'react'
import { TodoListItem } from './TodoListItem'

export const TodoList = ({todos, handleDelete, handleToggle}) => {
    // Se deberia poner siemprer proptypes
    return (
        <ul className="list-group list-group-flush">
        {
            todos.map((todo, idx) => (
                // TodoListItem todo idx handleDelete handleToggle
                <TodoListItem 
                    key = {todo.id}
                    todo={todo} 
                    idx={idx} 
                    handleDelete={handleDelete} 
                    handleToggle={handleToggle}
                />
                ))
        }
        </ul>
    )
}
