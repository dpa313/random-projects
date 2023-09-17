import React, { useEffect } from 'react'
import Accordian from './ACCORDIAN/Accordian'
import BirthdayReminder from './BIRTHDAY_REMINDER/BirthdayReminder'
import Calculator from './CALCULATOR/Calculator'
// import ContactSearch from './CONTACT_SEARCH/ContactSearch'
import ContactSearchALT from './CONTACT_SEARCH/ContactSearchALT'
import DarkMode from './DARK_MODE/DarkMode'
import DigitalClock from './DIGITAL_CLOCK/DigitalClock'
import Form from './FORM/Form'
import RandomMeme from './MEME_GEN/RandomMeme'
import Range from './RANGE/Range'
import Quiz from './QUIZ_APP/Quiz'
import RandomQuote from './RANDOM_QUOTE_GEN/RandomQuote'
import Slider from './SLIDER/Slider'
import TemperatureControll from './TEMP_CONTROLL/TemperatureControll'
import TodoApp from './TODO_APP/TodoApp'
import WeatherApp from './WEATHER_APP/WeatherApp'
// import Weather_App from './WEATHER_APP/WeatherApp'

const Home = () => {


  return (
    <>
    <div className='main-div'>
      <div className='container '>
        {/* <h1 className='text-center text-5xl font-bold text-gray-500 pt-8 pb-10 '>Random React Projects</h1> */}
        <div className= 'box'>
          <div className='content'>
            <DigitalClock />
          </div>  
        </div>      
        <div className="box">
          <div className='content'>
            <RandomQuote />
          </div> 
        </div>
          <div className="box">
            <div className='content'>
              <TemperatureControll />
            </div>
          </div>
          <div className="box">
            <div className='content'>
              <ContactSearchALT />
            </div>
          </div>
           <div className="box">
            <div className='content'>
              <Quiz />
            </div>  
           </div>  
           <div className="box">
            <div className='content'>
              <Accordian />
            </div>  
           </div>
           <div className="box">
            <div className='content'>
              <Range />
            </div>  
           </div>         
           <div className="box">
            <div className='content'>
              <Form />
            </div>  
           </div>         
           <div className="box">
            <div className='content'>
              <RandomMeme />
            </div>  
           </div>         
           <div className="box">
            <div className='content'>
              <DarkMode />
            </div>  
           </div>         
           <div className="box">
            <div className='content'>
              <Calculator />
            </div>  
           </div>         
           <div className="box">
            <div className='content'>
              <WeatherApp />
            </div>  
           </div>         
           <div className="box">
            <div className='content'>
              <BirthdayReminder />
            </div>  
           </div>         
           <div className="box">
            <div className='content'>
              <TodoApp />
            </div>  
           </div>         
           <div className="box">
            <div className='content relative overflow-hidden'>
              <Slider />
            </div>  
           </div>         
        </div>
      </div>
    </>
  )
}

export default Home