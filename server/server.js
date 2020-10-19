const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dbConfig = require('./database/db')

const todoRoute = require('./routes/todo.route')

mongoose.Promise = global.Promise
mongoose.connect(dbConfig.db, { useNewUrlParser: true })
  .then(() => {
    console.log('Database successfully connected!')
  }, err => {
    console.log(`Could not connect to database: ${err}`)
  })

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/todos', todoRoute)

const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
