const express = require('express');
const mongoose = require('mongoose')

require('dotenv').config()

const Todo = require('./models/todo');
const router = express.Router();

const app = express()
mongoose.connect(process.env.MONGODB_URI)
  .catch(function (e) {
    console.log('failed to connect to database', e)
  })


app.use(express.json())

app.post('/todos', async function (req, res) {
  const todo = await Todo.create(req.body)
  return res.status(200).json(todo)
})

app.get('/todos', async (req, res) => {
  return res.json(await Todo.find().exec())
})

app.put('/todos/:id', async (req, res) => {
  await Todo.findByIdAndUpdate(req.params.id, req.body).exec()

  return res.json({
    message: "Todo updated successfully"
  })
})

app.delete('/todos/:id', async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id).exec()

  return res.json({
    'message': 'Delete successfully'
  }) 
})

app.listen(8000, function () {
  console.log('app listening on port 8000!');

})