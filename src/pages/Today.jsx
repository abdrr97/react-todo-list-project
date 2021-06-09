import React, { useContext, useEffect } from 'react'
import TodoList from '../components/TodoList'
import { TodosContext } from '../context/context'

const Today = () => {
  const { todosList, filterTodos } = useContext(TodosContext)

  // on load of todos
  useEffect(() => {
    filterTodos('', 'TODAY')
  }, [])

  return (
    <>
      <h1>Today</h1>
      <TodoList todos={todosList} />
    </>
  )
}

export default Today
