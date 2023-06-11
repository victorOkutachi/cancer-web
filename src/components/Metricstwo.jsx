import React from 'react'

const Metricstwo = () => {
  return (
    <div className='w-full h-1/2 items-center md:justify-center flex flex-col md:flex-row my-4' >
        <div>
        <div className='flex md:item-center md:mx-auto w-full'>
            <div className='flex flex-col items-center mx-10' >
                <p className='font-bold text-1xl text-[#008024]'>44,928(39%) </p>
                <div className='w-[28px] bg-pink-400 my-1 h-[2px]'></div>
                <p className='font-bold text-[12px] text-[#008024]'>New Male Cases</p>
            </div>

            <div className='w-[1px] h-[55px] bg-pink-400'></div>

            <div className='flex flex-col items-center mx-6' >
                <p className='font-bold text-1xl text-[#008024]'> 71,022(61%)</p>
                <div className='w-[28px] bg-pink-400 my-1 h-[2px]'></div>
                <p className='font-bold text-[12px] text-[#008024]'>New Female Cases</p>
            </div>
            
        </div>
        </div>
  

        
        <div className='flex flex-col items-center my-4 mx-8 md:ml-0' >
                <p className='font-bold text-1xl text-[#008024]'> 115,950</p>
                <div className='w-[28px] bg-pink-400 my-1 h-[2px]'></div>
                <p className='font-bold md:text-center text-[12px] text-[#008024]'>Total Number Of New Cases</p>
        </div>


        
    </div>
  )
}

export default Metricstwo