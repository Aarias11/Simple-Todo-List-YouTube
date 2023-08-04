const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({ 
    accomplish: String
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo






// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

// function Home() {
//     const [tasks, setTasks] = useState([])
//     const [accomplish, setAccomplish] = useState('')




//     useEffect(() => {
//         fetchTasks()
//     }, [])

//     const fetchTasks = () => {
//         axios
//         .get('http://localhost:3001/tasks')
//         .then((res) => {
//             setTasks(res.data)
//             console.log(res.data)
//         })
//         .catch((error) => {
//             console.log('Unable to fetch tasks')
//         })
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         axios
//         .post('http://localhost:3001/tasks', { accomplish })
//         .then(() => {
//             setAccomplish('')
//             fetchTasks();
//         })
//         .catch((error) => {
//             console.log(error)
//         })
//      }


//      const handleDelete = (id) => {
//         axios
//         .delete(`http://localhost:3001/tasks/${id}`)
//         .then(() => {
//             fetchTasks();
//         })
//         .catch(error => {
//             console.log('Error deleting task', error)
//         })
//      }
    

//   return (
//     <div className="text-center">
//         <h1>Todo App</h1>
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label>Task</label>
//                 <br />
//                 <input className='w-[300px] h-[50px] border border-black p-2'
//                 type='text'
//                 value={accomplish}
//                 onChange={(e) => setAccomplish(e.target.value)}/>
//                 <br />
//                 <br />
//                 <button className='w-[300px] h-[50px] border border-black p-2' type='submit'>Submit Form</button>
//                 <br />
//                 <br />
//             </form>
//             <hr className='border-black' />
//             <br />
//             <br />
//             <h2>Todo-List</h2>
//             <br />

//             {
//                 tasks.map(task => 
//                     <li>{task.accomplish}<button onClick={() => handleDelete(task._id)}>X</button></li>)
//             }

//         </div>
//     </div>
//   )
// }

// export default Home