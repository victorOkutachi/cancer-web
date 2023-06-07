import React from 'react'
import {AiOutlineCopyright} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import {RiLinkedinFill} from 'react-icons/ri'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import emailjs from 'emailjs-com'

const Contact = () => {

  function sendEmail(e) {

    e.preventDefault();

    emailjs.sendEmail('gmail', 'template_xr22ovq', e.target, 'i7F1cl2Lecisw2Zio')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()

  }


  return (
    <div id='container' className='flex flex-col'>
        <Navbar/>
    <div className='w-full h-2/5 flex flex-col items-center'>
      
      <div className='w-full h-3/4 flex justify-center mx-auto mb-4 items-center p-4 sm:mt-32'>
      <form onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-2xl text-[#008024] md:text-4xl font-Delicious-Handrawn font-bold inline border-b-4 border-[#008024] '>Contact</p>
          <p className='py-4 font-kanit text-xl'>We are here to answer any question you may have. Feel free to reach us via the contact form</p>

          
        </div>
        <textarea className='border-[1px] border-[#d3d3d3] p-2' name='message' placeholder='Subject'></textarea>
        <input className=' p-2 mt-4 border-[1px] border-[#d3d3d3]' type="text" placeholder='Name' name='name'/>
        <input className='my-4 p-2 border-[1px] border-[#d3d3d3]' type="email" placeholder='Email' name='email'/>
        <textarea className='border-[1px] border-[#d3d3d3] p-2' name='message' rows="10" placeholder='Message'></textarea>
        <button type='submit' className='text-[#008024] font-bold hover:text-white border-[2px] border-[#008024] hover:bg-[#008024] hover:border-[#008024] px-4 py-2 my-8 mx-auto flex items-center'>Submit</button>
      </form>   
      </div>
      
    </div>
    <Footer/>
    </div>
    
  )
}

export default Contact