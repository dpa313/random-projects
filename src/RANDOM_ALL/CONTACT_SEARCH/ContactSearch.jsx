import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
const ContactSearch = () => {
  const [contacts,setContacts] = useState([])
  const [search,setSearch] = useState('')

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const handleSearch = (searchValue) => {
    let value = searchValue.toLowerCase()
    const newContact = contacts.filter((contact)=> {
      const contactName = contact.first_name.toLowerCase()
      return contactName.startsWith(value)
    })
    setContacts(newContact)
  }

  useEffect(()=>{
    const fetchData = async() =>{
      const res = await fetch('ContactData.json')
      const data = await res.json()
      setContacts(data)
    }
    fetchData()
  },[])

  useEffect(()=>{
    handleSearch(search)
  }
  ,[search])
  return (
    <>
    <div className='w-80 h-[480px] p-4 bg-white text-black rounded  overflow-auto'>
      <div className='w-full shadow-lg'>
          <form action="">
            <input className='w-full h-12 p-2 text-black outline-none shadow-inner rounded' type="text" value={search} onChange={handleChange} placeholder='Search...' />
          </form>
      </div>
      {
        contacts.map(contact=> (
            <div key={contact.id} className='border-b-[1px] mt-4'>
              <div className='flex justify-between'>
                <h3 className=''>{contact.first_name}</h3>
                <p><small>{contact.phone}</small></p>
              </div>
            </div>
        )
        )
      }
    </div>
    </>
    
  )
}

export default ContactSearch