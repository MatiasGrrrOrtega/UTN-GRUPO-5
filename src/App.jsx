import { useState } from 'react'
import TaskForm from './components/TaskForm/TaskForm'
import TaskList from './components/TaskList/TaskList'
import './App.css'

function App() {  
  const [tasks, setTasks] = useState([]);

  // Esta funcion se encarga de crear una nueva tarea
  // y añadirla al estado de tareas
  // Recibe como parametro un objeto con la siguiente forma:
  // {title: string, completed: boolean}
  const createTask = (task) => {
    const newTask = {
      id: tasks.length + 1,
      title: task.title,
      completed: task.completed
    }
    setTasks([...tasks, newTask])
  }

  // Esta funcion se encarga de eliminar una tarea
  // Recibe como parametro el id de la tarea a eliminar
  // y actualiza el estado de tareas
  const deleteTask = (id) => {
    const newTasks = [...tasks].filter(task => task.id !== id)
    setTasks(newTasks)
  }

  // Esta funcion se encarga de cambiar el estado de la tarea
  // Recibe como parametro el id de la tarea a cambiar de estado
  // y actualiza el estado de tareas
  const onComplete = (id) => {
    const newTasks = [...tasks].map(task => task.id === id ? {...task,
      completed: !task.completed} : {...task})
    setTasks(newTasks);
  }

  return (
    <>
      <h1>Lista de Tareas</h1>
      <TaskForm createTask={createTask}/>
      <TaskList tasks={tasks} deleteTask={deleteTask} onComplete={onComplete}/>
    </>
  )
}

export default App
