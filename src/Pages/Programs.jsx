import React, { useEffect } from 'react'
import Footer from '../components/Footer'

import Navbar from '../components/Navbar'
import { programs } from '../data'
import Aos from 'aos'

const Programs = () => {
  
  useEffect(()=>{
    Aos.init({duration: 1000})
  })

  return (
    <div className='flex flex-col font-Merriweather'>
        <Navbar/>
        <div className='flex flex-col px-4'>
        <h1 className='text-[32px] flex mb-2 font-bold mt-6 text-[#008024]'>Our Programmes</h1>
      
        <p className='md:text-[16px] font-kanit pb-2' >Recognizing the enormity of the challenges our society faces, CCIN is dedicated to making a lasting
        impact through our campaigns and programs in the cancer domain. While our efforts are driven by our organization's 
        singular focus, we spread a wide net by investing in a variety of progressive programs. </p>
        </div>
        
       
       

       <div className='flex flex-col mb-4'>
        {programs.map(item=>(
          <div className='flex flex-col'>
            <h1 className='px-4 py-4 text-[28px] font-bold text-[#008024]'>{item.title}</h1>
          <div className='flex flex-col md:items-center md:flex-row' >
            <p className='md:text-[16px] md:max-w-[580px] px-5 py-3'>{item.desc}</p>
            <img className='h-[220px] w-[340px] md:h-[270px] shadow-lg object-fill rounded-md my-1  mx-auto'  src={item.img} key={item.id}/> 
            
            
          </div>
          </div>
          
          

        ))}
       </div>

        <Footer/>

    </div>
  )
}

export default Programs