import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskList from './Components/TaskList'
import Add from './Components/Add'

function App() {

  return (
    <>
      <Add/>
    <TaskList/>
    </>
  )
}

export default App
