import React from 'react'
import { FaTimes } from "react-icons/fa";

const Task = ({task, onDelete, onDoubleClick}) => {
    return (
        <div 
            className={task.reminder ? "task reminder" : "task"} 
            onDoubleClick={() => onDoubleClick(task.id)}
            >
                <h3>{task.title} <FaTimes style={{color: "red", cursor: "pointer"}} onClick={() => onDelete(task.id)} /></h3>
                <p>{task.date}</p>
        </div>
    )
}

export default Task
