import React, { useContext } from 'react'
import { TodosContext } from '../context/context'
import { useLocation } from 'react-router-dom'

const TodoItem = ({ id, title, progress, date }) => {
  const { deleteTodo } = useContext(TodosContext)
  const { pathname } = useLocation()
  console.log(pathname)
  return (
    <>
      <li className='list-group-item d-flex justify-content-between align-items-center'>
        {title}
        <div className=''>
          <span className='badge bg-primary'>{progress}</span>
          <span className='badge bg-success'>{date}</span>
          {pathname === '/all' && (
            <button
              onClick={() => deleteTodo(id)}
              className='btn btn-sm btn-link'
            >
              remove
            </button>
          )}
        </div>
      </li>
    </>
  )
}

export default TodoItem
