import React, { useContext, useState } from 'react'
import { TodosContext } from '../context/context'
import { DATE, PROGRESS } from '../data'

const TodoForm = () => {
  const { createTodo } = useContext(TodosContext)
  const [todo, setTodo] = useState({
    id: Date.now(),
    title: '',
    description: '',
    progress: 'TODO',
    date: 'TODAY',
  })

  const clickHandler = (e) => {
    e.preventDefault()
    createTodo(todo)
    console.log(todo)
    //
  }
  return (
    <>
      <form>
        <input
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          placeholder='title'
          type='text'
          className='mb-3  form-control'
        />
        <textarea
          value={todo.description}
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
          placeholder='description'
          className='mb-3  form-control'
        ></textarea>

        <select
          value={todo.progress}
          onChange={(e) => setTodo({ ...todo, progress: e.target.value })}
          className='mb-3  form-select'
        >
          <option value={PROGRESS.TODO}>{PROGRESS.TODO}</option>
          <option value={PROGRESS.DOING}>{PROGRESS.DOING}</option>
          <option value={PROGRESS.DONE}>{PROGRESS.DONE}</option>
        </select>
        <select
          value={todo.date}
          onChange={(e) => setTodo({ ...todo, date: e.target.value })}
          className='mb-3 form-select'
        >
          <option value={DATE.TODAY}>{DATE.TODAY}</option>
          <option value={DATE.TOMORROW}>{DATE.TOMORROW}</option>
        </select>
        <button onClick={(e) => clickHandler(e)} className='btn btn-primary'>
          Add Todo
        </button>
      </form>
    </>
  )
}

export default TodoForm
