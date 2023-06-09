import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Aos from 'aos'
import { Link } from 'react-router-dom'

const Mentorship = () => {

  useEffect(()=>{
    Aos.init({duration: 1000})
  })

  return (
    <div className='flex flex-col '>
        <Navbar/>
        <div style={{
                backgroundImage: `url(${'images/mentor.jpg'})`
                }}
                 id='Who we are' className='h-[280px] w-full md:h-full bg-no-repeat bg-cover'>
                <div className='bg-overlay2-rgba w-full h-[280px] md:h-[550px] flex flex-col'>
                </div>      
        </div>

        <div>
            <h1 className='text-center md:text-left md:px-4 py-4 text-[24px] md:text-[28px] font-bold text-[#008024]'>Mentorship And Capacity Building</h1>
            <p className='md:text-[16px] md:max-w-[900px] lg:max-w-[1200px] md:text-left text-center px-5 py-3'>A minimum of 170 fully functional comprehensive cancer treatment centres are needed to manage 
            cancer effectively, Nigeria currently has only 8 cancer centres with a radiotherapy device. In addition to this infrastructural 
            challenge is the chronic shortage of oncology professionals. We at CCIN are working towards grooming a new 
            generation of these professionals. Our mentorship program will help young scientists and clinicians to connect 
            with senior Nigerian colleagues who can guide them through the rigorous process of applying and securing MSc, 
            PhD or clinical positions in both local and world leading institutions. 
            </p>
            <p className='md:text-[16px] md:text-left text-center md:max-w-[580px] px-4 py-3'>Join our #payitforward movement</p>
            <div className='flex flex-col md:relative md:flex-row'>

            <button className='text-white font-bold hover:text-white border-[2px] border-[#008024] bg-[#008024] rounded-full  hover:border-[#008024] px-6 py-2 mt-4 md:mx-4 mx-auto flex items-center' data-aos='fade-right'><Link to='/contact'>Register to be a mentor</Link></button>
            <button className='text-white font-bold hover:text-white border-[2px] border-[#008024] bg-[#008024] rounded-full  hover:border-[#008024] px-6 md:absolute md:right-4 py-2 mt-6 mx-auto flex items-center' data-aos='fade-left'><Link to='/contact'>Register to be a mentee</Link></button>
            </div>
           
        </div>

        <div className='flex flex-col bg-[#c7f9cc] w-full mt-10'>
            <h1 className='text-center md:text-left md:px-4 py-4 text-[24px] md:text-[28px] font-bold text-[#008024]'>Need Help With Your Scholarship Application?</h1>
            <p className='md:text-[16px] md:max-w-[900px] lg:max-w-[1200px] md:text-left text-center px-5 py-3'>Send us an email stating as clearly as possible your needs and a mentor will respond to your request. 
               We ask that you send your request well ahead in time so that we can provide a thorough review.
            </p>
            <button className='text-[#008024] mx-auto text-[14px] font-bold rounded-full hover:text-[#008024] border-[2px] border-[#008024] bg-white  py-[6px] w-[160px] mb-4 flex items-center justify-center md:mx-4'><Link to='/contact'>Send Email</Link></button>
        </div>


                <Footer/>
    </div>
  )
}

export default Mentorship