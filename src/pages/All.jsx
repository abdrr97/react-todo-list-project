import React, { useContext } from 'react'
import TodoList from '../components/TodoList'
import { TodosContext } from '../context/context'

const All = () => {
  const { todos } = useContext(TodosContext)
  return (
    <>
      <TodoList todos={todos} />
    </>
  )
}

export default All
