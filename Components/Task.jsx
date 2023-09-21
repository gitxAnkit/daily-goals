import React from 'react'
import '@/Components/Task.css'
const Task = ({title,description}) => {
  return (
    <div className="task">
        <div >
            <p>{title}</p>
            <span>{description}</span>
        </div>
        <button>-</button>
    </div>
  )
}

export default Task