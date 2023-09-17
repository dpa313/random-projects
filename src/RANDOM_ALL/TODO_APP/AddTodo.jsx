import React from 'react'
import { useState } from 'react'

const AddTodo = (props) => {
    const [todoData,setTodoData] = useState({title : " "})

    const handleChange = (e) =>{
        const {name,value} = e.target
        setTodoData(prevData => {
            return {
                ...prevData,
                [name] : value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onAddTodo(todoData)
        setTodoData({title : " "})
    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <div>
                <input className='text-black py-2 px-4' type="text" id='title' 
                name='title'
                value={todoData.title}
                onChange={handleChange}
                />
                <button className='py-2 px-4 bg-lime-400'>Add</button>
            </div>
        </form>
    </>
  )
}

export default AddTodo