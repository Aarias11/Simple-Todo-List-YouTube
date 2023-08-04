import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Home() {
    const [tasks, setTasks] = useState([])
    const [accomplish, setAccomplish] = useState('')




    useEffect(() => {
        fetchTasks()
    }, [])

    const fetchTasks = () => {
        axios
        .get('http://localhost:3001/tasks')
        .then((res) => {
            setTasks(res.data)
            console.log(res.data)
        })
        .catch((error) => {
            console.log('Unable to fetch tasks')
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
        .post('http://localhost:3001/tasks', { accomplish })
        .then(() => {
            setAccomplish('')
            fetchTasks();
        })
        .catch((error) => {
            console.log('Unable to post task')
        })
    }

    const handleDelete = (id) => {
        axios
        .delete(`http://localhost:3001/tasks/${id}`)
        .then(() => {
            fetchTasks()
        })
        .catch((error) => {
            console.log('Unable to delete task')
        })
    }
    



  return (
    <div className='text-center'>
        <h1 className='text-2xl'>Todo App</h1>
        <div>
            <form onSubmit={handleSubmit}>
                <br />
                <label>Task:</label>
                <br />
                <input className='w-[300px] h-[50px] border border-black p-2'
                value={accomplish}
                placeholder='Type todo here...'
                onChange={(e) => setAccomplish(e.target.value)}/>
                
                <br />
                <br />
                <button className='w-[300px] h-[50px] border border-black hover:bg-teal-600 hover:text-white'
                type='submit'>Submit Todo</button>
            </form>
                <br />
                <br />
                <hr className='border-black' />
                <br />
                <br />
                <h2>Todo List:</h2>
                <br />
                <br />
                <div>
                {
                    tasks.map(task =>
                        <div key={task._id}>
                            <li className='list-none'>{task.accomplish}
                            <button className='translate-x-[40px]'
                            onClick={() => handleDelete(task._id)}>X</button>
                            </li>
                        </div>)
                }
                </div>

        </div>
    </div>
  )
}

export default Home