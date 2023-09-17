import React from 'react'
import { useState } from 'react'
import AddTodo from './AddTodo'
import Todos from './Todos'
import {v4 as uuidv4} from "uuid"

const TodoApp = () => {
  const [todos,setTodos] = useState([])
  
  const handleAddTodo = (todo) => {
    setTodos(prevTodos => {
      return [
        ...prevTodos,
        {id: uuidv4(),todo}
      ]
    })
  }

  const handleReemoveTodo = (id) => {
    setTodos(prevTodos=> {
      const filteredTodos = prevTodos.filter((todo => todo.id !== id ))
      return filteredTodos;
    })
    
  }
  return (
    <>
      <AddTodo onAddTodo={handleAddTodo} />
      <Todos todos = {todos} onRemoveTodo={handleReemoveTodo}/>
    </>
    
  )
}

export default TodoApp