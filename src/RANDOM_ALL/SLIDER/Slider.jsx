import React from 'react'
import { useState } from 'react'
import {MdKeyboardArrowRight,MdKeyboardArrowLeft} from 'react-icons/md'
import './Slider.css'

const Slider = () => {
    const [currentSlide,setCurrentSlide] = useState(0)
    const data = [
        '/slider/img1.jpg',
        '/slider/img2.jpg',
        '/slider/img3.jpg'
    ]
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0? 2: (prev) => prev-1)
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 2? 0 :(prev) => prev+1 )
    }
  return (
    <>
    <div className='w-[600px] h-[400px]'>
        <div className='flex w-[1800px] h-[100%] transition-all ease-in duration-1000' style={{transform:`translateX(-${currentSlide*600}px)`}}>
            <img className='h-[100%] w-[600px] object-cover ' src={data[0]} alt="" />
            <img className='h-[100%] w-[600px] object-cover' src={data[1]} alt="" />
            <img className='h-[100%] w-[600px] object-cover' src={data[2]} alt="" />
        </div>
        <div>
            <div className="flex w-[100%] text-3xl justify-between z-50 top-0 bottom-0 transform translate-y-[50%] absolute">
                <div className="cursor-pointer w-[30px] h-[30px] border flex justify-center items-center " onClick={prevSlide}>
                    <MdKeyboardArrowLeft />
                </div>
                <div className="cursor-pointer w-[30px] h-[30px] border flex justify-center items-center " onClick={nextSlide}>
                    <MdKeyboardArrowRight className='' />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Slider