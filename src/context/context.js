import React, { useState, useEffect, createContext } from 'react'
import { data } from '../data'

const TodosContext = createContext()

const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState(data)
  const [todosList, setTodosList] = useState([])

  // this function create a new todo to todos list array
  const createTodo = (todo) => {
    setTodos([todo, ...todos])
  }

  // this function delete a new todo to todos list array
  const deleteTodo = (id) => {
    const newList = todos.filter((todo) => todo.id !== id)
    setTodos(newList)
  }

  const filterTodos = (progress, date) => {
    const newList = todos.filter(
      (todo) => todo.progress === progress || todo.date === date
    )
    setTodosList(newList)
  }

  const values = { todos, createTodo, deleteTodo, todosList, filterTodos }
  return <TodosContext.Provider value={values} children={children} />
}

export { TodosContext, TodosProvider }
