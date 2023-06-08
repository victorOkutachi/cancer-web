import React from 'react'

const Metricthree = () => {
  return (
    <div className='w-full h-1/2 items-center md:justify-center flex flex-col md:flex-row my-4' >
    <div>
    <div className='flex md:item-center md:mx-auto w-full'>
        <div className='flex flex-col items-center mx-10' data-aos='fade-right'>
            <p className='font-bold text-1xl text-[#008024]'>170-200 </p>
            <div className='w-[28px] bg-pink-400 my-1 h-[2px]'></div>
            <p className='font-bold text-[12px] text-center text-[#008024]'>Fully equiped cancer treatment centres required</p>
        </div>

        <div className='w-[1px] h-[95px] bg-pink-400'></div>

        <div className='flex flex-col items-center mx-6' data-aos='fade-left'>
            <p className='font-bold text-1xl text-[#008024]'> 8</p>
            <div className='w-[28px] bg-pink-400 my-1 h-[2px]'></div>
            <p className='font-bold text-[12px] text-center text-[#008024]'>Cancer treatment centre having a radiotherapy machine</p>
        </div>
        
    </div>
    </div>

    
</div>
  )
}

export default Metricthree