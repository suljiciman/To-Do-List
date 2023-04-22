import React, {useState} from 'react'

const Task = () => {
    const [status,setStatus]=useState(false);
    const handleSetStatus = () =>{
        setStatus(!status);
    }
  return (
   <div className="flex max-w-md m-auto border shadow-md rounded-md p-2 mb-3">
        <h2 className=''>Task</h2>
        <button 
        onClick={handleSetStatus}
        className={active ? "bg-black" : "bg-blue"}></button>
   </div>
  )
}

export default Task;
