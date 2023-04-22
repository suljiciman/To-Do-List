import React,{useState} from 'react'

const Task = ({task}) => {
    const [status,setStatus]=useState(false);
    const handleSetStatus = () =>{
        setStatus(!status);
    }
  return (
   <div className="flex max-w-md m-auto border shadow-md rounded-md p-2 mb-3">
        <h2 className={status? "line-through italic" : ""}>{task.title}</h2>
        <button 
        onClick={handleSetStatus}
        className={status? "ml-auto border w-5 h-5 rounded bg-gray-300" : "ml-auto border w-5 h-5 rounded hover:bg-gray-100 transition"}></button>
   </div>
  )
}

export default Task;
