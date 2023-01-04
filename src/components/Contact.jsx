import React from 'react'
import {AiOutlineCopyright} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import {RiLinkedinFill} from 'react-icons/ri'

const Contact = () => {
  return (
    <div className='w-full h-2/5 flex flex-col items-center'>
      
      <div className='w-full h-3/4 flex justify-center mx-auto mb-4 items-center p-4 sm:mt-32'>
      <form method='POST' action='https://getform.io/f/dec7bff2-8943-416f-8ce3-ebec9f6529eb' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-2xl text-[#008024] md:text-4xl font-bold inline border-b-4 border-[#008024] '>Contact</p>
          <p className='py-4 text-2xl'>Let's work together to build something great</p>
        </div>
        <input className=' p-2  border-[1px] border-[#d3d3d3]' type="text" placeholder='Name' name='name'/>
        <input className='my-4 p-2 border-[1px] border-[#d3d3d3]' type="email" placeholder='Email' name='email'/>
        <textarea className='border-[1px] border-[#d3d3d3] p-2' name='message' rows="10" placeholder='Message'></textarea>
        <button className='text-[#008024] font-bold hover:text-white border-[2px] border-[#008024] hover:bg-[#008024] hover:border-[#008024] px-4 py-2 my-8 mx-auto flex items-center'>Submit</button>
      </form>   
      </div>
      
    </div>
    
  )
}

export default Contact