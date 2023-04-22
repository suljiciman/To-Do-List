import React from 'react'
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const ToDoPage = () => {
  return (
    <div className='max-w-md m-auto'> 
        <h1 className='text-xl m-7 text-center'>TO-DO LIST</h1>
      <TaskForm/>
      <TaskList/>
    </div>
  )
}

export default ToDoPage;
