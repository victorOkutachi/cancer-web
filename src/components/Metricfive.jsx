import React from 'react'

const Metricfive = () => {
  return (
    <div className='w-full h-1/2 items-center md:justify-center flex flex-col md:flex-row my-4' >
    <div>
    <div className='flex item-center justify-center w-full'>
        <div className='flex flex-col items-center mx-10' data-aos='fade-down'>
            <p className='font-bold text-1xl text-[#008024]'>N200k </p>
            <div className='w-[28px] bg-pink-400 my-1 h-[2px]'></div>
            <p className='font-bold text-[12px] text-center text-[#008024]'>Per drug dose</p>
        </div>
        
    </div>

    <div className='flex item-center mx-auto mt-6'>
         <div className='flex flex-col items-center mx-4 ' data-aos='fade-left'>
            <p className='font-bold text-1xl text-[#008024]'>N150k-N1Million</p>
            <div className='w-[28px] bg-pink-400 my-1 h-[2px]'></div>
            <p className='font-bold text-[12px] text-center text-[#008024]'>Treatment Cycle Cost</p>
        </div>


        <div className='w-[1px] h-[50px] bg-pink-400'></div>

        <div className='flex flex-col items-center mx-2' data-aos='fade-right'>
            <p className='font-bold text-1xl text-[#008024]'>15</p>
            <div className='w-[28px] bg-pink-400 my-1 h-[2px]'></div>
            <p className='font-bold text-[12px] text-center text-[#008024]'>Estimated Number Of Cycles</p>
        </div>

       

        
    </div>


    <div className='flex item-center justify-center mt-8 w-full'>
        <div className='flex flex-col items-center mx-10' data-aos='fade-up'>
            <p className='font-bold text-1xl text-[#008024]'>$60,000 </p>
            <div className='w-[28px] bg-pink-400 my-1 h-[2px]'></div>
            <p className='font-bold text-[12px] text-center text-[#008024]'>Estimated Cost Of Treatment Abroad</p>
        </div>
        
    </div>


    </div>
    </div>
  )
}

export default Metricfive