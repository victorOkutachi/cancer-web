import React, { useEffect } from 'react'
import Aos from 'aos'

const Metrics = () => {

    useEffect(()=>{
        Aos.init({duration: 1000})
      })

  return (
    <div className='w-full h-1/2 items-center md:justify-center flex flex-col md:flex-row my-4' data-aos='fade-up'>
        <div>
        <div className='flex md:item-center md:mx-auto w-full'>
            <div className='flex flex-col items-center mx-10'>
                <p className='font-bold text-3xl text-[#008024]'>10000</p>
                <div className='w-[28px] bg-pink-400 my-1 h-[2px]'></div>
                <p className='font-bold text-[12px] text-[#008024]'>People Impacted</p>
            </div>

            <div className='w-[1px] h-[55px] bg-pink-400'></div>

            <div className='flex flex-col items-center mx-6'>
                <p className='font-bold text-3xl text-[#008024]'>100</p>
                <div className='w-[28px] bg-pink-400 my-1 h-[2px]'></div>
                <p className='font-bold text-[12px] text-[#008024]'>Volunteers & Mentees</p>
            </div>
            
        </div>
        </div>
  

        
        <div className='flex flex-col items-center my-4 mx-8 md:ml-0'>
                <p className='font-bold text-3xl text-[#008024]'>50</p>
                <div className='w-[28px] bg-pink-400 my-1 h-[2px]'></div>
                <p className='font-bold md:text-center text-[12px] text-[#008024]'>Mentees in advanced degree programs in healthcare</p>
        </div>


        
    </div>
  )
}

export default Metrics