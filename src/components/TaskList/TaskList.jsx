import TaskItem from '../TaskItem/TaskItem'
function TaskList({ tasks, deleteTask, onComplete }) {
  return (
    <>
      {tasks.length === 0 ? (
        <div className='empty'>No hay tareas</div>
      ) : (
        <ul className='taskList'>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              onComplete={onComplete}
            />
          ))}
        </ul>
      )}
    </>
  )
}

export default TaskList