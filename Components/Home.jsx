import React from 'react'
import "./Home.css"
import Task from './Task'

const Home = () => {
  return (
    <div className='container'>
      <h1>DAILY GOALS</h1>
      <form >
        <input type="text" placeholder="Title" />
        <textarea placeholder="Description"></textarea>

        <button type="submit">ADD</button>
      </form>
      <Task />
    </div>
  )
}

export default Home