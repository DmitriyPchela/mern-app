import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { CreateTodo, EditTodo, TodosList } from './Components'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">
          <img src="/assets/images/logo512.png" width="30" height="30" alt="CodingTheSmartWay.com"/>
        </a>
        <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Todos</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Create Todo</Link>
            </li>
          </ul>
        </div>
      </nav>
      
      <div className="container">
        <Route path="/" exact component={TodosList}/>
        <Route path="/edit/:id" component={EditTodo}/>
        <Route path="/create" component={CreateTodo}/>
      </div>
    </BrowserRouter>
  )
}

export default App
