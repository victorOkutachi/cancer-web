import React from 'react'

const Body = () => {
  return (
    <div className='w-full flex flex-col px-4 pt-12 md:px-16 overflow-hidden'>
      <div className='flex flex-col md:flex-row  md:justify-between md:items-center'>
        <h1 className='text-[32px] font-bold font-Delicious-Handrawn text-[#008024]'>Our Mission & Vision</h1>
        <p className='text-[16px] font-medium max-w-[400px] py-2 md:py-0'> We are working to improve access to high quality cancer treatment
            and care resources for Nigerians
        </p>
      </div>
      <div className='w-full flex flex-col items-center mx-auto md:flex-row p-14' data-aos="fade-up">
        <div className='w-[300px] h-[300px] flex flex-col items-center mb-4 md:mb-0 mx-2 '>
          <div className='w-[100px] h-[100px] rounded-full '>
            <img className='w-full h-full' src='images/capabuilding.png'/>
          </div>
          <h1 className='py-3 font-bold text-2xl text-center'>Mentorship & Capacity Building</h1>
          <p className='text-[16px] font-medium text-center'>Mentoring the Oncology talents in Nigeria and creating an avenue to support people with cancer</p>
          <button className='text-[#008024] text-[14px] font-bold rounded-full hover:text-white border-[2px] border-[#008024] hover:bg-[#008024] hover:border-[#008024] py-[6px] w-[100px] flex items-center justify-center my-5 mx-auto md:mx-0'>Read More</button>
        </div>

        <div className='w-[300px] h-[300px] flex flex-col items-center my-4 md:my-0 mx-3'>
          <div className='w-[100px] h-[100px] rounded-full bg-gray-300'>
            <img className='w-full h-full' src='images/testtube.png'/>
          </div>
          <h1 className='py-4 font-bold text-2xl text-center'>Diagnosing Cancer In Nigeria</h1>
          <p className='text-[16px] font-medium text-center'>We Aim to provide the best treatment and care to cancer patients in Nigeria</p>
          <button className='text-[#008024] text-[14px] font-bold rounded-full hover:text-white border-[2px] border-[#008024] hover:bg-[#008024] hover:border-[#008024] py-[6px] w-[100px] flex items-center justify-center my-7 mx-auto md:mx-0'>Read More</button>
        </div>

        <div className='w-[300px] h-[300px] flex flex-col items-center my-4 md:my-0 mx-3'>
          <div className='w-[100px] h-[100px] rounded-full '>
            <img className='w-full h-full rounded-full object-cover' src='images/micnew.png'/>
          </div>
          <h1 className='py-3 font-bold text-2xl text-center'>Awareness & Cancer Prevention</h1>
          <p className='text-[16px] font-medium text-center'>We are invested in the creation and dissemination of materials
          to enlighten Nigerians on cancer risks and prevention</p>
          <button className='text-[#008024] text-[14px] font-bold rounded-full hover:text-white border-[2px] border-[#008024] hover:bg-[#008024] hover:border-[#008024] py-[6px] w-[100px] flex items-center justify-center mt-4 mx-auto md:mx-0'>Read More</button>
        </div>

      </div>
      
      
       

    </div>
    
  )
}

export default Body