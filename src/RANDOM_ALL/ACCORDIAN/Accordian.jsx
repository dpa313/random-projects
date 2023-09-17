import React from 'react'
import { useState } from 'react'
import { faqsData } from './Data' 
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md'
// import Faq from './Faq'

const Accordian = () => {
    const [faqs,setFaqs] = useState(faqsData)
    // const [toggle,setToggle] = useState(false)
    const handleToggle = (id) => {
        setFaqs(prevFaqs => prevFaqs.map(faq=>{
            if(faq.id===id){
                return {...faq, open: !faq.open}
                // If the id matches, we create a new object using the spread operator ({ ...faq }) to copy all properties of the current FAQ
                // Set the "open" property to the opposite value of its current state. 
            }
            return faq
        }))
    }
  return (
    <main className='w-[375px] h-[250px] p-4 flex items-center justify-center  bg-white'>
        <section className='w-full text-black'>
            {
                // faqs.map(faq=> <Faq key={faq.id} {...faq}/>)
                faqs.map(faq=> (
                    <article className='border rounded p-2 mb-3'>
                        <div className='flex justify-between'>
                            <h4 className='font-medium'>{faq.title}</h4>
                            <button className='' onClick={()=>handleToggle(faq.id)}>{faq.open ?<MdKeyboardArrowUp/> : <MdKeyboardArrowDown/>}</button>
                        </div>
                        <div>
                                {
                                faq.open && <p className=''>{faq.desc}</p>
                                }
                            </div>
                    </article>
                )
                    )
            }
        </section>
    </main>
  )
}

export default Accordian