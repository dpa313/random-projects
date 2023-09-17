import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {RiDeleteBin6Line} from 'react-icons/ri'

const ContactSearchALT = () => {
  const [contacts,setContacts] = useState([])
  const [search,setSearch] = useState('')

  // const handleClick =(id) => {
  //   setContacts(prevContacts => {
  //     const filteredContacts = prevContacts.map((contact)=> contact.id ===id)
  //     return filteredContacts;
  //   })
  // }
  useEffect(()=>{
    const fetchData = async() =>{
      const res = await fetch('ContactData.json')
      const data = await res.json()
      setContacts(data)
    }
    fetchData()
  },[])


  return (
    <>
    <div className='w-80 h-[480px] p-4 bg-white text-black rounded  overflow-auto'>
      <div className='w-full shadow-lg'>
          <form action="">
            <input className='w-full h-12 p-2 text-black outline-none shadow-inner rounded' type="text" onChange={(e)=>setSearch(e.target.value)} placeholder='Search...' />
          </form>
      </div>
      {
        contacts.filter(contact=>{
            return search.toLowerCase()===''? contact: contact.first_name.toLowerCase().includes(search)
        }).map(contact=> (
            <div key={contact.id} className='border-b-[1px] mt-4'>
              <div className='flex justify-between'>
                <h3 className=''>{contact.first_name}</h3>
                <p><small>{contact.phone}</small></p>
                <button className='' onClick={()=>handleClick(contact.id)}><RiDeleteBin6Line className='text-xl text-red-500' /></button>
              </div>
            </div>
        )
        )
      }
    </div>
    </>
    
  )
}

export default ContactSearchALT