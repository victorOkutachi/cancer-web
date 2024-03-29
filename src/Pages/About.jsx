import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div id='container' className=' flex flex-col font-Lato items-center '>
        <Navbar/>
        <div id='Wrapper' className='w-full h-full flex flex-col '>
 
            <div style={{
                backgroundImage: `url(${'images/about.jpg'})`
                }}
                 id='Who we are' className='h-[280px] w-full md:h-[450px] bg-center bg-no-repeat bg-cover'>
                <div className='bg-overlay-rgba w-full h-[280px] md:h-[450px] flex flex-col text-center items-center justify-center text-white'>
                <h1 className='text-[24px] md:text-[36px] font-bold text-center  pb-3'>WHO WE ARE</h1>
                </div>
               
                
            </div>

            <div id='About Us' className='flex flex-col font-Lato px-3'>
                <h1 className='text-[24px] font-bold text-center md:text-left md:mx-4 text-[#008024] pt-8'>ABOUT</h1>
                <p className='md:text-[16px] text-center md:text-left pb-6 md:max-w-[1200px] mx-4'>
                    Founded in 2020, our team consists of young highly talented and patriotic Nigerian oncology 
                    professionals. We are determined to make an impact in expediting Nigeria's scientific advancement in 
                    cancer research.  A core objective of ours is to facilitate the building up of local capacity in all aspects
                    of cancer care, research and management. With several PhD level biomedical scientists in it's executive team and 
                    hundreds of active volunteers & mentees, CCIN is inspiring a new generation of oncology professionals.
                </p>
            </div>

        </div>

        <Footer/>

    </div>
  )
}

export default About