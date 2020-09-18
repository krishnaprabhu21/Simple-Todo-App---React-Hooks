import React, { useEffect } from "react"

const TodoItem = props => {
    const completedStyle = {
        fontStyle: "italic",
        color: "#d35e0f",
        opacity: 0.4,
        textDecoration: "line-through",
    };
    const { todo: { completed, id, title }, handleChangeProps, deleteTodoProps } = props;

    useEffect(() => {
        return () => {
            alert("Item about to be deleted!")
        }
    }, [])

    return (
        <li className="todo-item">
            <input
                type="checkbox"
                checked={completed}
                onChange={() => handleChangeProps(id)}
            />
            <button onClick={() => deleteTodoProps(id)}>Delete</button>
            <span style={completed ? completedStyle : null}>{title}</span>
        </li>
    )
}

export default TodoItem