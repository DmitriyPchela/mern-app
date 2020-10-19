import React from 'react'
import axios from 'axios'
import { useHistory } from 'react-router'
import { CustomForm } from '../Forms'

export const TodoFields = ({ field }) => [
  {
    type: 'text',
    name: 'description',
    label: 'Description:',
    defaultValue: field?.description ?? ''
  },
  {
    type: 'text',
    name: 'responsible',
    label: 'Responsible:',
    defaultValue: field?.responsible ?? ''
  },
  {
    label: 'Low:',
    type: 'checkbox',
    name: 'priority',
    defaultValue: 'Low'
  },
  {
    defaultValue: 'Medium',
    label: 'Medium:',
    type: 'checkbox',
    name: 'priority'
  },
  {
    defaultValue: 'High',
    label: 'High:',
    type: 'checkbox',
    name: 'priority'
  }
]
  
export const CreateTodo = () => {
  const H = useHistory()
  
  const handleSubmit = (data) => {
    axios
      .post('http://localhost:4000/todos/add', data)
      .then(() => {
        H.push('/')
      })
  }
  
  return (
    <div style={{ marginTop: 10 }}>
      <h3>Create New Todo</h3>
      
      <CustomForm fields={TodoFields({ field: null })} onSubmit={handleSubmit} btnTitle="Create todo"/>
    </div>
  )
}
