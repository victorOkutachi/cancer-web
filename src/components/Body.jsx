import Aos from 'aos'
import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'


const Body = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  })
  return (

    <div className='w-full font-Lato flex flex-col md:pb-6 px-4 pt-9 md:px-16 overflow-hidden'>

      <div className='flex flex-col items-center' data-aos='fade-up'>
        <p className='text-[16px] font-medium text-center py-2 lg:mt-4'>
          With over 100,000 new cancer cases and over 70,000 deaths reported in 2018 by Globocan, cancer has 
          emerged as a major public health emergency in Nigeria
        </p>
      </div>
      

      <div className='flex flex-col items-center' data-aos='fade-up'>
        <h1 className='text-[32px] text-center font-bold mt-12 text-[#008024]'>Our Mission</h1>
        <p className='text-[16px] font-medium text-center py-2 lg:mt-4'> We are working towards making access to high quality cancer treatment and care a reality for ALL Nigerians
        </p>
      </div>
    

  

      <div className='flex flex-col items-center' data-aos='fade-up'>
        <h1 className='text-[32px] text-center font-bold mt-12 text-[#008024]'>Our Vision</h1>
        <p className='text-[16px] font-medium text-center pt-2 pb-6 lg:my-4'> We envisage a future-state Nigeria where cancer is fully under control. We are delivering this vision through our efforts in:
        </p>
      </div>


     <div className='flex flex-col md:flex-row items-center md:justify-center'>

      <div className='flex flex-col md:flex-row  md:pb-16 md:justify-between md:items-center'>
      <div className='w-full flex flex-col items-center mx-auto md:flex-row mb-14 md:mx-4 md:mb-0' data-aos="fade-up">
        <div className='w-[300px] lg:w-[250px] h-[300px] flex flex-col items-center mb-1 md:mb-0 lg:ml-6 '>
          <div className='w-[100px] h-[100px] rounded-full '>
            <img className='w-full h-full' src='cancer-web/images/micnew.png'/>
          </div>
          <h1 className='py-3 font-bold text-2xl text-center'>Awareness & Cancer Prevention</h1>
          <p className='text-[16px] font-medium text-center'>We are invested in the creation and dissemination of materials to enlighten Nigerians on cancer risks and prevention</p>
          <button className='text-[#008024] text-[14px] font-bold rounded-full hover:text-white border-[2px] border-[#008024] hover:bg-[#008024] hover:border-[#008024] py-[6px] w-[100px] flex items-center justify-center my-7 mx-auto md:mx-0'><Link to='/mission'>Read More</Link></button>
        </div>

   


      </div>
        
      <div className='w-full flex flex-col items-center mx-auto md:flex-row md:mx-4 mb-12 md:mb-0' data-aos="fade-up">
        <div className='w-[300px] lg:w-[250px] h-[300px] flex flex-col items-center my-1 md:my-0 '>
          <div className='w-[100px] h-[100px] rounded-full bg-gray-300'>
            <img className='w-full h-full' src='cancer-web/images/testtube.png'/>
          </div>
          <h1 className='py-4 font-bold text-2xl text-center'>Facilitate Cancer Diagnosis In Nigeria</h1>
          <p className='text-[16px] font-medium text-center'>We are supporting Nigerians to gain access to the best cancer diagnosis and treatment</p>
          <button className='text-[#008024] text-[14px] font-bold rounded-full hover:text-white border-[2px] border-[#008024] hover:bg-[#008024] hover:border-[#008024] py-[6px] w-[100px] flex items-center justify-center md:mt-11 my-7 mx-auto md:mx-0'><Link to='/mission'>Read More</Link></button>
        </div>
      </div>

      <div className='w-full flex flex-col items-center mx-auto md:flex-row mb-14 md:mx-4 md:mb-0' data-aos="fade-up">
        <div className='w-[300px] lg:w-[250px] h-[300px] flex flex-col items-center  '>
          <div className='w-[100px] h-[100px] rounded-full '>
            <img className='w-full h-full' src='cancer-web/images/capabuilding.png'/>
          </div>
          <h1 className='py-3 font-bold text-2xl text-center'>Mentorship & Capacity Building</h1>
          <p className='text-[16px] font-medium text-center'>Mentoring the Oncology talents in Nigeria and creating an avenue to support people with cancer</p>
          <button className='text-[#008024] text-[14px] font-bold rounded-full hover:text-white border-[2px] border-[#008024] hover:bg-[#008024] hover:border-[#008024] py-[6px] w-[100px] flex items-center justify-center my-7 md:mt-12 mx-auto md:mx-0'><Link to='/mission'>Read More</Link></button>
        </div>
      </div>
      </div>
      </div>
      
      
       

    </div>
    
  )
}

export default Body