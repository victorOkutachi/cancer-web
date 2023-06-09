import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Donate = () => {
  return (
    <div className='flex flex-col font-Lato'>
        <Navbar/>
        <h1 className='py-5 px-4 font-bold text-[#008024] text-3xl text-center'>Your donations help funds patient education and support programs, advocacy initiatives, and our research.</h1>
        <p className='text-[16px] px-4 font-bold text-center'>Note: Our digital payment system is in the works, to donate to our cause, please pay directly to the following bank details;</p>

        <div className='flex flex-col items-center'>
            <img className='h-[80px] w-[100px]' src='images/wema.png'/>
            <p className='text-[16px] py-2 font-bold text-center text-pink-600'>Donate Via Wema Bank</p>
            <p className='text-[16px] py-2 font-bold text-center'>Control Cancer Initiative Nigeria</p>
            <p className='text-[16px] font-bold text-center'>0123161688</p>
        </div>


        
        <div className='flex flex-col mb-10 items-center'>
            <p className='text-[16px] py-2 font-bold text-center text-pink-600'>Donate Via USD</p>
            <p className='text-[16px] py-2 font-bold text-center'>Control Cancer Initiative Nigeria</p>
            <p className='text-[16px] font-bold text-center'>0620252135</p>
        </div>

        <Footer/>
    </div>
  )
}

export default Donate