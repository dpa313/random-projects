import React from 'react'
import { useState } from 'react'

const Range = () => {
  const [maxPrice,setMaxPrice] = useState(1000)
  return (
    <div>
      <h2 className='text-2xl text-center mb-2 font-semibold'>Price Range</h2>
      <div className='flex items-center gap-1'>
      <span>0</span>
      <input type="range" min={0} max={1000} onChange={e=>setMaxPrice(e.target.value)}/>
      <span>{maxPrice}</span>
      </div>
    </div>
  )
}

export default Range