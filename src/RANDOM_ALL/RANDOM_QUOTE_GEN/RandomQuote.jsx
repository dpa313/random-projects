import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const RandomQuote = () => {
  const [quotes,setQuotes] = useState({content : '', author : ''})

    const fetchData = async() =>{
      try{
        const res = await fetch('https://api.quotable.io/random')
        const data = await res.json()
      setQuotes(data)
      }catch(error){
        console.error('Error fetching data :', error)
      }
    }

  useEffect(()=>{
    fetchData() // Fetch and display a quote when the component first loads
  },[])

  const getNewQuotes = () => {
    fetchData() //Fetch and display new quotes when the "New Quote" button is clicked
  }
    
  return (
    
      <>
        <div className='
        bg-gradient-to-r from-[#4b6cb7] to-[#182848] 
        rounded-sm w-96  p-4 '>
          <div className='grid h-48 justify-center items-center  '>
            <h1 className=''>{`"${quotes.content}"`}</h1>
            <p className='text-right italic'>__{quotes.author}</p>
          </div>
          <div className='flex justify-center items-center h-10'>
            <button className='transition duration-300 ease-in-out bg-white text-black hover:bg-indigo-900 hover:text-white w-40 h-10 font-semibold rounded-sm justify-center' onClick={getNewQuotes}>New Quotes</button>
          </div>
        </div>
      </>
  )
}

export default RandomQuote