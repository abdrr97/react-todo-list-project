import React, { useContext, useEffect } from 'react'
import TodoList from '../components/TodoList'
import { TodosContext } from '../context/context'

const Tomorrow = () => {
  const { todosList, filterTodos } = useContext(TodosContext)

  // on load of todos
  useEffect(() => {
    filterTodos('', 'TOMORROW')
  }, [])

  return (
    <>
      <h1>Tomorrow</h1>
      <TodoList todos={todosList} />
    </>
  )
}

export default Tomorrow
