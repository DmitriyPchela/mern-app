import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Todos = ({ list, update }) => {
  const handleDelete = (id) => async () => {
    const res = await axios.delete(`http://localhost:4000/todos/${id}`)
    
    if (res.status === 200) {
      update()
    }
  }
  
  return list.length > 0 && (
    list.map((todo, index) => {
      return (
        <tr key={index}>
          <td>{todo.description}</td>
          <td>{todo.responsible}</td>
          <td>{todo.priority}</td>
          <td>
            <Link to={{ pathname: `/edit/${todo._id}`, state: { todo } }} style={{ marginRight: 20 }}>Edit</Link>
            <button type="button" className="btn btn-primary" onClick={handleDelete(todo._id)}>Delete</button>
          </td>
        </tr>
      )
    })
  )
}

export const TodosList = () => {
  const [todos, setTodos] = useState([])
  
  const getTodos = async () => {
    const res = await axios.get('http://localhost:4000/todos')
  
    if (res.status === 200) {
      setTodos(res.data)
    }
  }
  
  useEffect(() => {
    getTodos()
  }, [])
  
  return (
    <div>
      <h3>Todos List</h3>
      
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
        <tr>
          <th>Description</th>
          <th>Responsible</th>
          <th>Priority</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
          <Todos list={todos} update={getTodos}/>
        </tbody>
      </table>
    </div>
  )
}
