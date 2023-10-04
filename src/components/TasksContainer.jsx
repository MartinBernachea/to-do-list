import { useState } from 'react'

import {
    IconCircle,
    IconCircleCheck,
    IconEdit,
    IconTrashFilled
} from '@tabler/icons-react'

export default function TaskContainer({ taskArray, setTaskArray }) {

    const [editing, setEditing] = useState(null)

    function toggleComplete(id) {
        setTaskArray(prevTask => (
            prevTask.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        ))
    }

    function editTask(id) {
        setEditing(id)
    }

    function deleteTask(id) {
        setTaskArray(prevTask => (
            prevTask.filter(prevTask => prevTask.id !== id)
        ))
    }

    function handleChange(e, id) {
        const updatedTasks = taskArray.map(task => {
            if (task.id === id) {
                return { ...task, text: e.target.value };
            }
            return task;
        });
        setTaskArray(updatedTasks);
    }

    function handleSubmit(e, id) {
        e.preventDefault();
        setEditing(null);
    }

    const color = '#ff5945'

    return (
        <div className='tasks-container w100 center'>
            {taskArray.map((task) => (
                <div
                    className={`task center ${task.completed ? 'completed' : ''}`}
                    key={task.id}
                >
                    {task.completed ? <IconCircleCheck color={color} onClick={() => toggleComplete(task.id)}/> : <IconCircle onClick={() => toggleComplete(task.id)}/>}
                    {editing === task.id ? (
                        <form className='editing center' onSubmit={e => handleSubmit(e, task.id)}>
                            <input
                                autoFocus
                                value={task.text}
                                onChange={e => handleChange(e, task.id)}
                            />
                        </form>
                    ) :
                        <p onClick={() => toggleComplete(task.id)}>
                            {task.text}
                        </p>
                    }
                    <div className='btn-container center'>
                        <IconEdit
                            className='icon'
                            onClick={() => editTask(task.id)}
                        />
                        <IconTrashFilled
                            className='icon'
                            onClick={() => deleteTask(task.id)}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
