import React from 'react'
import Todo from './Todo'

const Todos = (props) => {
  // console.log(props);
  return (
    <>
        {
            props.todos.map(todo=>(
                <Todo todo={todo.todo} id={todo.id} onRemoveTodo={props.onRemoveTodo} />
            ))
        }
    </>
  )
}

export default Todos