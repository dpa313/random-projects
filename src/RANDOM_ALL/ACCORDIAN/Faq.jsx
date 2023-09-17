import React from 'react'
import { useState } from 'react'

const Faq = ({id,title,desc}) => {
    const [toggle,setToggle] = useState(false)
  return (
    <article>
        <div className='flex justify-between'>
            <h3>{title}</h3>
            <button onClick={()=>setToggle(!toggle)}>{toggle? '-' : '+'}</button>
        </div>
        {
            toggle && <p>{desc}</p>
        }
    </article>
  )
}

export default Faq