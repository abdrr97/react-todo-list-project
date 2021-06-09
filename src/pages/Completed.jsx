import React, { useContext, useEffect } from 'react'
import TodoList from '../components/TodoList'
import { TodosContext } from '../context/context'

const Completed = () => {
  const { todosList, filterTodos } = useContext(TodosContext)

  // on load of todos
  useEffect(() => {
    filterTodos('DONE')
  }, [])

  return (
    <>
      <TodoList todos={todosList} />
    </>
  )
}

export default Completed
