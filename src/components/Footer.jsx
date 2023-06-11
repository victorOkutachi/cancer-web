import React from 'react'
import {AiOutlineCopyright} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import {RiLinkedinFill, RiInstagramFill, RiTwitterFill} from 'react-icons/ri'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='flex w-full items-center font-Lato justify-center bg-[#008024] text-white'>
        <div className='flex flex-col items-center justify-center'>
            <a className='pt-10 pb-2 text-[10px] md:text-sm'>info@controlcancerinitiativeng.org</a>
            <div className='flex items-center mx-auto py-2'>
              <a href='https://www.linkedin.com/company/cancer-research-nigeria/'  target={'_blank'}>
              <RiLinkedinFill className='mx-3 hover:scale-125 duration-300' size={25}/>
              </a>
              <a href='https://instagram.com/cancer_naija?igshid=MzRIODBiNWFIZA==' target={'_blank'} >
              <RiInstagramFill className='mx-3 hover:scale-125 duration-300' size={25}/>
              </a>
              <a href='https://twitter.com/cancer_ng?s=11&t=kz-KbJvD9rv0EzOT_sO4PQ' target={'_blank'} >
              <RiTwitterFill className='mx-3 hover:scale-125 duration-300' size={25}/>
              </a> 
                
            </div>
            <ul className='items-center flex text-[10px] space-x-2 my-1'>
              <li><Link to='/contact'>Contact Us</Link></li>
              <li><Link to='/privacy'>Terms & Privacy Policy</Link></li>
            </ul>
            <span className='flex items-center text-[8px] md:text-xs font-medium mb-2'><AiOutlineCopyright/>2023 by Control Cancer Initiative Nigeria (CAC/IT/NO 147869).</span>
        </div>
    </div>
  )
}

export default Footer