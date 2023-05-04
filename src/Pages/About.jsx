import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div id='container' className=' w-full h-full flex flex-col items-center '>
        <Navbar/>
        <div id='Wrapper' className='w-full h-full flex flex-col items-center px-3'>
 
            <div id='Who we are' className='flex flex-col items-center'>
               
                <h1 className='text-[24px] font-bold  text-[#008024] pt-8'>WHO WE ARE</h1>
                <p className='md:text-[16px] pb-2 text-center'>
                    Our initiative was born out of a realization that Nigeria's fight against cancer requires
                    a sustainable commitment to developing local scientific capacity and infrastructure. In addition
                    to advocacy and awareness programs, we are determined to take the extra step of facilitating a sustainable 
                    scientific environment that will usher Nigeria into the forefront of cancer research, treatment and care. 
                </p>
                <p className='md:text-[16px] pb-4 text-center'>
                    Dealing with these challenges requires problem-solvers who bring different perspectives and are 
                    willing to take risks to productively engage with the global community and modernize our cancer research 
                    and management capabilities.
                </p>
            </div>

            <div id='About Us' className='flex flex-col items-center'>
                <h1 className='text-[24px] font-bold  text-[#008024] pt-8'>ABOUT</h1>
                <p className='md:text-[16px] pb-6 text-center'>
                    Founded in 2020, our team consists of young highly talented and patriotic Nigerian oncology 
                    professionals. We are determined to make an impact in expediting Nigeria's scientific advancement in 
                    cancer research.  A core objective of ours is to facilitate the building up of local capacity in all aspects
                    of cancer care, research and management. With 6 PhD level biomedical scientists in it's executive team and 
                    over 60 active volunteers & mentees, CCIN is inspiring a new generation of oncology professionals.
                </p>
            </div>

        </div>

        <Footer/>

    </div>
  )
}

export default About