import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import { CustomForm } from '../Forms'
import { TodoFields } from './CreateTodo'

export const EditTodo = (props) => {
  const H = useHistory()
  console.log(props.location.state.todo)
  const handleSubmit = (data) => {
    axios
      .post(`http://localhost:4000/todos/update/${props.location.state.todo._id}`, data)
      .then(() => {
        H.push('/')
      })
  }
  
  return (
    <div>
      <h1>Edit todo</h1>
      
      <CustomForm fields={TodoFields({ field: props.location.state.todo })} onSubmit={handleSubmit} btnTitle="Update todo"/>
    </div>
  )
}
