import React from 'react'
import Task from './Task';

const TaskList = ({tasks}) => {
    const taskList = tasks.map((task) => <Task key={task.id} task={task}/>)

  return (
    <ul className='mt-10'>
     {taskList} 
    </ul>
  )
}

export default TaskList;
