import React, {useState} from 'react'
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const ToDoPage = () => {
    const[tasks,setTasks]=useState([])
    
    const onTaskCreation = (task) => {
    setTasks((prevState)=>{
        return [...prevState,task]
})
    }
  return (
    <div className='max-w-md m-auto'> 
        <h1 className='text-xl m-7 text-center'>TO-DO LIST</h1>
      <TaskForm onTaskCreation={onTaskCreation}/>
      <TaskList tasks={tasks}/>
    </div>
  )
}

export default ToDoPage;
