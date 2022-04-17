const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  isCompleted: { type: Boolean, default: false},
  createdAt: { type: mongoose.Schema.Types.Date, default: () => Date.now()}
})

const Todo = mongoose.model('Todo', schema);

module.exports = Todo