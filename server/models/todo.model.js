const mongoose = require('mongoose')

const Schema = mongoose.Schema

const TodoSchema = new Schema({
  description: {
    type: String
  },
  responsible: {
    type: String
  },
  priority: {
    type: String
  },
  completed: {
    type: Boolean
  }
}, { collection: 'todos', timestamps: true })

module.exports = mongoose.model('Todo', TodoSchema)
