import { useState } from 'react'

export default function TaskBox({ taskArray, setTaskArray }) {

    const [task, setTask] = useState('')
    const [nextId, setNextId] = useState(1)

    if (!taskArray) {
        taskArray = []
    }

    function handleChange(e) {
        setTask(e.target.value)
    }

    function addTask() {
        if (task !== "") {
            setTaskArray(prevTasks => {
                return (
                    [...prevTasks, { id: nextId, text: task, completed: false }]
                )
            })
            setNextId(prevId => prevId + 1)
            setTask('')
        } else (alert("Completa el campo de la tarea"))
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            addTask()
        }
    }

    return (
        <div className='create-task-box w100 center'>
            <input
                type='text'
                value={task}
                placeholder='Create task...'
                onChange={handleChange}
                onKeyDown={handleKeyDown}
            />
            <button onClick={addTask}>Add Task</button>
        </div>
    );
}
