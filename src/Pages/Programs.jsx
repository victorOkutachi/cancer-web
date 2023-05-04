import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { programs } from '../data'

const Programs = () => {
  return (
    <div className='flex flex-col '>
        <Navbar/>
        <div className='flex flex-col px-4'>
        <h1 className='text-[35px] font-bold font-bold font-Delicious-Handrawn text-[#008024] pt-8'>Our Programs</h1>
        <p className='md:text-[16px] font-kanit pb-2'>Recognizing the enormity of the challenges our society faces, CCIN is dedicated to making a lasting
        impact through our campaigns and programs in the cancer domain. While our efforts are driven by our organization's 
        singular focus, we spread a wide net by investing in a variety of progressive programs. </p>
        </div>
       

       <div className='flex flex-col'>
        {programs.map(item=>(
          <div className='flex flex-col'>
            <h1 className='px-4 py-4 text-[28px] font-bold font-Delicious-Handrawn text-[#008024]'>{item.title}</h1>
            <img className='h-[360px] w-[380px] shadow-lg rounded-md m-auto' src={item.img} key={item.id}/> 
            <p className='md:text-[16px] px-5 py-3'>{item.desc}</p>
            
          </div>
          
          

        ))}
       </div>

        <Footer/>

    </div>
  )
}

export default Programs