import React from 'react'
import {AiOutlineCopyright} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import {RiLinkedinFill, RiFacebookFill, RiTwitterFill} from 'react-icons/ri'


const Footer = () => {
  return (
    <div className='flex w-full items-center font-Merriweather justify-center bg-[#008024] text-white'>
        <div className='flex flex-col items-center justify-center'>
            <a className='pt-10 pb-2 text-[10px] md:text-sm'>info@controlcancerinitiativeng.org</a>
            <div className='flex items-center mx-auto py-2'>
                <RiLinkedinFill className='mx-3 hover:scale-125 duration-300' size={20}/>
                <RiFacebookFill className='mx-3 hover:scale-125 duration-300' size={20}/>
                <RiTwitterFill className='mx-3 hover:scale-125 duration-300' size={20}/>
            </div>
            <ul className='items-center flex text-[8px] space-x-2 my-1'>
              <li>Contact Us</li>
              <li>Terms</li>
              <li>Privacy Policy</li>
            </ul>
            <span className='flex items-center text-[8px] md:text-xs font-medium mb-2'><AiOutlineCopyright/>2022 by Control Cancer Initiative Nigeria (CAC/IT/NO 147869).</span>
        </div>
    </div>
  )
}

export default Footer