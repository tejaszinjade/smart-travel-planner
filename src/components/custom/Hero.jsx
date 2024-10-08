import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col items-center mx-56 gap-9 '>
     
        <h1 className ='font-extrabold text-[50px] text-center mt-16'> 
          <span className='text-[#44BEE4]'>Unleash Your Next Adventure: </span> 
          AI-Crafted Itineraries, Tailored Just for You! </h1>
          <p className='text-xl text-gray-500 text-center'> Your personal trip planner and travel curator, creating custom itineraries tailored to your interest and budget. </p>
          <img src="/limg.png" className='object-contain md:object-scale-down object-cover h-400 w-750 '/>
          <Link to={'/create-trip'}>
            <Button className="mb-[5px]">Get Started, It's Free</Button>
          </Link>
    </div>
   
  )
}

export default Hero