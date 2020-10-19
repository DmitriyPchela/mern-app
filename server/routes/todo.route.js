const express = require('express')
const router = express.Router()

const Todo = require('../models/todo.model')

router.route('/').get(function (req, res, next) {
  Todo.find({}, null, { sort: '-createdAt' }, (err, todos) => {
    if (err) {
      return next(err)
    } else {
      res.json(todos)
    }
  })
})

router.route('/:id').get(function (req, res) {
  let id = req.params.id
  
  Todo.findById(id, (err, todo) => {
    res.json(todo)
  })
})

router.route('/add').post(function (req, res) {
  let todo = new Todo(req.body)
  
  todo.save()
    .then(todo => {
      res.status(200).json({ data: todo, status: 'success' })
    })
    .catch(err => {
      res.status(400).send({ error: 'adding new todo failed' })
    })
})

router.route('/update/:id').post(function (req, res) {
  Todo.findById(req.params.id, function (err, todo) {
    if (!todo) {
      res.status(404).send('data is not found')
    } else {
      todo.description = req.body.description
      todo.responsible = req.body.responsible
      todo.priority = req.body.priority
      todo.completed = req.body.completed
  
      todo.save().then(todo => {
        res.json({ status: 'success' })
      })
        .catch(err => {
          res.status(400).send('Update not possible')
        })
    }
  })
})

router.route('/:id').delete(function (req, res) {
  Todo.findByIdAndRemove(req.params.id, function (err) {
    if (!err) {
      res.json({ status: 'success' })
    } else {
      res.json({ error: 'Error while deleting' })
    }
  })
})

module.exports = router
