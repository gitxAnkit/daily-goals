import React from 'react'
import '@/Components/Task.css'
const Task = ({title,description,deleteTask,index}) => {
  return (
    <div className="task">
        <div >
            <p>{title}</p>
            <span>{description}</span>
        </div>
        {/* here deleteTask(index) is passed as parameter in arrow function  
            if written as onClick={deleteTask(index)}*/}
        <button onClick={()=>deleteTask(index)}>-</button> 
    </div>
  )
}

export default Task