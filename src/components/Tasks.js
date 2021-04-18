import Task from "./Task"


const Tasks = ({tasks, onDelete, onTaskDoubleClick}) => {

    

    return (
        <>
            {tasks.map((task) => (
            <Task 
                key={task.id} 
                task={task} 
                onDelete={onDelete} 
                onDoubleClick={onTaskDoubleClick}/>))}
        </>
    )
}

export default Tasks
