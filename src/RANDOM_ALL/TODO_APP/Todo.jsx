import React from 'react'

const Todo = (props) => {
  // console.log(props);
    const {title} = props.todo
    const handleClick =(id) =>{
      props.onRemoveTodo(id)
    }
  return (
    <>
        <div className='flex  items-center justify-between mt-5 w-full h-full bg-slate-400'>
            <h3 className='text-xl '>{title}</h3>
            <button className='py-2 px-6 bg-red-600' onClick={()=>handleClick(props.id)}>Delete</button>
        </div>
    </>
  )
}

export default Todo