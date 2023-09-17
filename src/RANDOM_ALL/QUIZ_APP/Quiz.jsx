import React from 'react'
import { useState } from 'react'
import style from './quiz.module.css'
const Quiz = () => {
  const [score,setScore] = useState(0)
  const [currentQuestions,setCurrentQuestions] = useState(0)
  const [finalResults,setFinalResults] = useState(false)
  const [progressBarBg,setProgressBarBg] = useState('progress-width-20')
  // const [progWidth,setProgWidth] = useState('progress-width-20')


  // const progressBar = () => {
  //   if(currentQuestions +1 <questions.length) {
  //     setProgWidth('progress-width-20')
  //   }else if (currentQuestions +2 <questions.length){
  //     setProgWidth('progress-width-40')
  //   }else if (currentQuestions +3 < questions.length){
  //     setProgWidth('progress-width-60')
  //   }else if(currentQuestions +4 <questions.length){
  //     setProgWidth('progress-width-80')
  //   }else {
  //     setProgWidth('progress-width-100')
  //   }
  // }
  const clickedOptions = (isCorrect) => {
    if(isCorrect) {
      setScore(prevScore => prevScore+1)
    }
    if(currentQuestions + 1  < questions.length){
      setCurrentQuestions(prevQues => prevQues+1)
      // setProgressBarBg('progress-width-20')
      // setProgWidth('progress-width-20')
      // progressBar(progWidth)
      
    }
    else{
      setFinalResults(true)
    }
  }
  const resetGame =()=>{
    setScore(0)
    setCurrentQuestions(0)
    setFinalResults(false)
  } 
  const questions = [
    {
      questionText : 'What is the capital of France?',
      answerOptions : [
        {answerText : 'New York', isCorrect: false},
        {answerText : 'London', isCorrect: false},
        {answerText : 'Paris', isCorrect: true},
        {answerText : 'Dublin', isCorrect: false},
      ]
    },
    {
      questionText : 'Who is the CEO of Tesla?',
      answerOptions : [
        {answerText : 'Mark Juckerberg', isCorrect: false},
        {answerText : 'Steve Jobs', isCorrect: false},
        {answerText : 'Bill Gates', isCorrect: false},
        {answerText : 'Elon Musk', isCorrect: true},
      ]
    },
    {
      questionText : 'iPhone Created by which company?',
      answerOptions : [
        {answerText : 'Apple', isCorrect: true},
        {answerText : 'Amazon', isCorrect: false},
        {answerText : 'Google', isCorrect: false},
        {answerText : 'Tesla', isCorrect: false},
      ]
    },
    {
      questionText : 'Which language is used for React.js?',
      answerOptions : [
        {answerText : 'Python', isCorrect: false},
        {answerText : 'C++', isCorrect: false},
        {answerText : 'Javascript', isCorrect: true},
        {answerText : 'Rubi On Rails', isCorrect: false},
      ]
    },
    {
      questionText : 'Which is backend library?',
      answerOptions : [
        {answerText : 'Django', isCorrect: true},
        {answerText : 'Anguler', isCorrect: false},
        {answerText : 'Vue', isCorrect: false},
        {answerText : 'React', isCorrect: false},
      ]
    },
  ]

  return (
    <>
    <div className='text-center w-96 h-[450px] bg-[#1c2541] text-black flex flex-col justify-center'>
      <h1 className='w-full  my-4 font-bold text-xl uppercase text-white'>Quiz Game!</h1>
    {
      finalResults ? (
        <div className=' bg-[#0b132b] rounded mx-auto w-[350px] p-4'>
          <h3 className='text-white font-bold my-6 text-2xl'>Your Score : {`${score} (${score/questions.length*100}%)`}</h3>
          <button className='px-7 py-2 text-xl font-semibold hover:bg-[#6fffe9] hover:text[#0b132b] text-white rounded bg-red-700 ' onClick={resetGame}>Reset</button>
        </div>
      )
      :
      (
        <div>
       
        <h3 className='text-white text-lg font-semibold '>{questions[currentQuestions].questionText}</h3>
          <div className='m-auto w-[300px]'>
            {
              questions[currentQuestions].answerOptions.map(option=>{
                return (
                  <div className='border rounded-lg text-white hover:bg-white hover:text-black mt-2 cursor-pointer'>
                    <p className='font-semibold p-2  ' onClick={()=>clickedOptions(option.isCorrect)}>{option.answerText}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      )
    }
     <h1 className='bold italic mt-2 font-bold  text-white'>{`${currentQuestions+1}/${questions.length}`}</h1>
     <div className='flex w-[300px] m-auto  rounded-lg bg-white  mt-5'>
        <div className={`rounded-lg h-3`}></div>
     </div>
    </div> 
    </>
  )
}

export default Quiz