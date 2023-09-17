import React from 'react'
import { useState } from 'react'
import style from './temp.module.css'


const TemperatureControll = () => {
  const [tempValue,setTempValue] = useState(20)
  const [tempColor,setTempColor] = useState('neutral')

  const increaseValue = () => {
    if(tempValue >= 25){
      setTempColor('hot')
    }else {
      setTempColor('neutral')
    }
    setTempValue(prevValue => prevValue+1)
  }

  const decreaseValue = () => {
    if(tempValue <= 15) {
      setTempColor('cold')
    }else{
      setTempColor('neutral')
    }
    setTempValue(prevTemp => prevTemp-1)
  }
  return (
    <>
      <div className={`${style.tempMainDiv} bg-gradient-to-r from-[#136a8a] to-[#267871] `}>
        <div className={style.appContainer}>
          <div className={style.temperatureDisplayContainer}>
            <div  className={`${style.temperatureDisplay} ${style[tempColor]}`}>{tempValue}°C</div>
          </div>
          <div className={style.buttonContainer}>
            <button className={style.tempButton} onClick={increaseValue}>+</button>
            <button className={style.tempButton} onClick={decreaseValue}>-</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default TemperatureControll