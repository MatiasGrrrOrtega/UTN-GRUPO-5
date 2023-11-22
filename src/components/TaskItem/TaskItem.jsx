import './TaskItem.css'
function TaskItem({ task, deleteTask, onComplete }) {
    return (
        <li className='task'>
            <input className='checkboxItem' 
                    type="checkbox" 
                    checked={task.completed}
                    onChange={()=> onComplete(task.id)}/>
            <p className={task.completed ? 'complete' : 'titleTask'}>{task.title}</p>
            <button className='buttonDelete' onClick={()=>deleteTask(task.id)}>Delete</button>
        </li>
    )
}

export default TaskItem