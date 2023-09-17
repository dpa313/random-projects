import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import style from "./digitalclock.module.css"

const DigitalClock = () => {
  const [time,setTime] = useState('')

  useEffect(()=>{
    setInterval(()=>{
      setTime(new Date().toLocaleTimeString())
    },1000)
  },[])
  
  // const updateTime = () => {
  //   const currentTime = new Date().toLocaleTimeString()
  //   setTime(currentTime)
  // }
  // setInterval(updateTime,1000)
  return (
      <div className={`${style.digitalClock} bg-gradient-to-r from-[#485563] to-[#29323c] `}>
         <div className={style.screen}>
         <h1 className={style.time}>{time}</h1>
         </div>
      </div>
  )
}

export default DigitalClock