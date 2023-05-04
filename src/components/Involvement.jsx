import React from 'react'
import { Link } from 'react-router-dom'

const Involvement = () => {
  return (
    <div className='w-full h-full  px-4 py-12 md:px-16 '>
        <h1 className='text-3xl font-bold text-[#008024] pb-4'>Make Your Mark</h1>
        <p className='text-[16px] max-w-[900px] pb-4'>We are so happy you're interested in getting involved with our work here at CCIN. There are so many ways
            for you to help, and we truly appreciate each and every effort. By lending your support, you'll become a valuable 
            part of our Non Profit Organization and help to strengthen our operations
        </p>
    
    <button className='text-white text-[14px] bg-[#008024] font-bold rounded-full hover:text-[#008024] border-[2px] border-[#008024] hover:bg-white hover:border-[#008024] py-[6px] w-[160px] flex items-center justify-center md:mx-0'><Link to='/contact'>Partner With Us</Link></button>
      
    </div>
  )
}

export default Involvement