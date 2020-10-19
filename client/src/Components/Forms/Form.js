import React, { useEffect, useState } from 'react'

export const CustomForm = ({ fields, onSubmit, btnTitle }) => {
  const [data, setData] = useState(null)
  
  const handleInputChange = (e) => {
    const { name, value } = e.target
    
    setData(prev => ({ ...prev, [name]: value }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
  
    onSubmit(data)
  
    setData(null)
  }
  
  useEffect(() => {
    fields.forEach(field => {
      setData(prev => ({ ...prev, [field.name]: field.type === 'checkbox' ? '' : field.defaultValue }))
    })
  }, [])
  
  console.log(data)
  
  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 280, margin: '0 auto' }}>
      {data && Object.keys(data).length > 0 && fields.map((field, index) => {
        
        switch (field.type) {
          case 'text':
            return (
              <div key={index} className="form-group">
                <label htmlFor={field.id}>{field.label}</label>
                <input
                  id={field.id}
                  type={field.type}
                  name={field.name}
                  className="form-control"
                  value={data[field.name]}
                  onChange={handleInputChange}
                />
              </div>
            )
          case 'checkbox':
            return (
              <div key={index} className="form-group">
                <label htmlFor={field.id}>{field.label}</label>
                <input
                  id={field.id}
                  name={field.name}
                  type={field.type}
                  className="form-control"
                  value={field.defaultValue}
                  onChange={handleInputChange}
                  checked={data[field.name] === field.defaultValue}
                />
              </div>
            )
          default: return null
        }
      })}
      <div className="form-group">
        <button type="submit" className="btn btn-primary">{btnTitle}</button>
      </div>
    </form>
  )
}

