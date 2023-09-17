import React from 'react'
import { useState } from 'react'

const Form = () => {
  const [formData,setFormData] = useState({
    userName: "" ,
    password: "",
    rememberMe: true
  })
  const handleChange = (event) => {
    const {name,value,type,checked} = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name] : type === 'checkbox'? checked :  value
      }
      
    })
  }
  const handleSubmit = (event) =>{
    event.preventDefault()
    // Here write the function to send data to api
    console.log(formData);
  }
  return (
    <div>
      <div className='w-96 p-6 text-black bg-white rounded-sm shadow-lg'>
        <h1 className='text-3xl text-center block font-semibold'>Log In</h1>
        <form onSubmit={handleSubmit} >
          <div className='mt-3'>
              <label htmlFor="username" className='font-semibold '>Username</label>
              <input type="text" id='username' className='border w-full text-base mt-1 px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded' placeholder='Enter username...' onChange={handleChange} name="userName" value={formData.userName} />
          </div>
          <div className='mt-3'>
              <label htmlFor="password" className='font-semibold'>Password</label>
              <input type="password" id='password' className='border mt-1 w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600 rounded' placeholder='Enter password...' onChange={handleChange} name="password" value={formData.password} />
          </div>
          <div className='flex mt-2 justify-between items-center'>
            <div >
              <input type="checkbox" name="rememberMe" id="rememberMe" onChange={handleChange} className='mr-2' checked={formData.rememberMe} />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
            <div>
              <a href="#" className='text-indigo-800'>Forgot Password?</a>
            </div>
          </div>
          <div className='mt-5'>
            <button className='bg-indigo-600 py-1 px-5 w-full rounded border-2 border-indigo-600 text-lg font-semibold text-white hover:bg-transparent hover:text-indigo-700'>Log In</button>
          </div>
        </form>
        <h1>{formData.userName}</h1>
      </div>
    </div>
  )
}

export default Form