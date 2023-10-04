import { useState } from 'react'

import TaskBox from './components/TaskBox'
import TaskContainer from './components/TasksContainer'

import './styles/App.css'


export default function App() {

  const [taskArray, setTaskArray] = useState([
    // {id: "", text: "", completed: ""},
  ])

  return (
    <section className='container center'>
      <h1 className='w100 center'>To-Do List!</h1>
      <TaskBox
        taskArray={taskArray}
        setTaskArray={setTaskArray}
      />
      <TaskContainer
        taskArray={taskArray}
        setTaskArray={setTaskArray}
      />
    </section>
  );
}
