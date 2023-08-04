const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const Todo = require('./models/todoSchema')


//connect to express
const app = express()

//connect to mongoDB
const dbURI = 'mongodb+srv://<USERNAME>:<PASSWORD>@cluster15.ksa3xvs.mongodb.net/<DATABASE NAME>?retryWrites=true&w=majority'
mongoose
.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    app.listen(3001, () => {
        console.log('Server is successfully connected to port 3001 and MongoDB is connected')
    })

})
.catch((error) => {
    console.log('Server and MongoDB failed to connect')
})

//middleware
app.use(cors())
app.use(bodyParser.json())



//Routes
//GET tasks
app.get('/tasks', (req, res) => {
    const tasks = Todo.find()
    .then((tasks) => {
        res.json(tasks)
    })
    .catch((error) => {
        res.json({ message: 'Unable to get tasks' })
    })
})

//POST tasks
app.post('/tasks', (req, res) => {
    const { accomplish } = req.body
    const task = new Todo({ accomplish })
    task.save()
    .then((task) => {
        res.json({ message: 'Task successfully CREATED' })
    })
    .catch((error) => {
        res.json({ message: 'Unable to create task:', error })
    })
})


//UPDATE tasks
app.put('/tasks/:id', (req, res) => {
    const { id } = req.params
    const { accomplish } = req.body
    const updatedTask = Todo.findByIdAndUpdate(id, 
        { accomplish },
        { value: true })
        .then((updatedTask) => {
            res.json({ message: 'Task was successfully UPDATED' })
        })
        .catch((error) => {
            res.json({ message: 'Unable to update task:', error })
        })
})


//DELETE Tasks
app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params
    const { accomplish } = req.body
    const deletedTask = Todo.findByIdAndDelete(id, 
        { accomplish },
        { value: true })
        .then((deletedTask) => {
            res.json({ message: 'Task was successfully DELETED' })
        })
        .catch((error) => {
            res.json({ message: 'Unable to delete task:', error })
        })
})






// Create // POST
// Read // GET
// Update // PUT
// Delete // DELETE







