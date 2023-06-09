import React from 'react'
import { Link } from 'react-router-dom'


const HeroSection = () => {
  return (
    <div style={{
      backgroundImage: `url(${'images/people.png'})`
    }}
    className='w-full h-[550px]  bg-no-repeat bg-cover'
    >
        <div className='bg-overlay2-rgba font-Lato w-full h-[550px] flex flex-col font-Merriweather text-center items-center justify-center text-white'>
        <h1 className='text-3xl py-2 md:text-5xl font-bold text-white  text-center'>CONTROL CANCER INITIATIVE NIGERIA</h1>
        <p className='text-lg px-2 md:text-2xl font-bold text-center'>Building Capacity, Defeating Cancer</p>
        <button className='text-white font-bold hover:text-white border-[2px] border-white hover:bg-[#008024] hover:border-[#008024] px-6 py-2 mt-16 mx-auto flex items-center'><Link to='/contact'>Get Involved</Link></button>
        </div>
        
    </div>
  
  )
}

export default HeroSection