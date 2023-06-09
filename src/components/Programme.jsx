import React from 'react'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom'

const Programme = () => {

  useEffect(
    ()=> {
      Aos.init({duration: 900})
    })

  return (
    <div className='w-full flex flex-col  bg-[#c7f9cc] px-4 py-12 md:px-16 md:mt-6' data-aos="fade-right">
        <h1 className='text-3xl font-bold text-[#008024] pb-4'>Our Programmes</h1>
        <p className='text-[16px] max-w-[900px] pb-4'>
        Recognizing the enormity of the challenges our society faces, CCIN is dedicated to making a lasting 
        impact through our campaigns and programs in the cancer domain. While our efforts are driven by our 
        organization’s singular focus, we spread a wide net by investing in a variety of progressive programs. 
        Learn more about our projects and get involved.
        </p>
        <button className='text-[#008024] text-[14px] font-bold rounded-full hover:text-[#008024] border-[2px] border-[#008024] hover:bg-white hover:border-[#008024] py-[6px] w-[160px] flex items-center justify-center md:mx-0'><Link to='/programs'>View Programmes</Link></button>

    </div>
  )
}

export default Programme