import React, { useState } from 'react'

const TaskForm = ({onTaskCreation}) => {
    const[enteredTask,setEnteredTask] = useState("");
  
    const submitTaskHandler = (e) =>{
    e.preventDefault()
        const task={
            id: Math.random().toString(),
            title: enteredTask,
        }
        onTaskCreation(task);
        setEnteredTask("");
    }

  return (
    <form onSubmit={submitTaskHandler}
    className='text-center max-w-md m-auto flex flex-col border-gray-100 border rounded px-12 shadow-md py-4'>
        
        <input type="text" className='border rounded border-gray-300 mb-4 mt-3 p-2'
        value={enteredTask}
        onChange={(e) => setEnteredTask(e.target.value)}/>
        <button className=" mb-3  border text-white border-gray-200 rounded bg-gray-200 hover:bg-gray-300 transition outline-gray-300"
        > Add Task</button>
    </form>
  )
}

export default TaskForm;
