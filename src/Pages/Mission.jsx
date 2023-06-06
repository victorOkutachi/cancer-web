import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Aos from 'aos'

const Mission = () => {

  useEffect(()=>{
    Aos.init({duration: 1000})
  })

  return (
    <div className=' flex flex-col font-Merriweather'>
        <Navbar/> 
        <div style={{
            backgroundImage: `url(${'images/mission.jpg'})`
            }}
            className='w-full h-[600px] bg-no-repeat md:bg-bottom bg-cover '
            >
                <div className='bg-overlay-rgba w-full h-[600px] flex flex-col text-white'>
                            <div className=' flex-col mt-20 lg:flex-row mx-4 justify-center'>
                              <h1 className='text-[40px] md:text-[75px] font-bold  text-green-400 md:max-w-[700px]'>Building Capacity,</h1>
                              <h1 className='text-[40px] md:text-[75px] font-bold  text-pink-400 md:max-w-[700px]'>Defeating Cancer</h1>
                            </div> 
                            <p className='md:text-[18px] font-bold mx-4 mt-10 text-green-300 lg:text-[24px]'>We are driven by a single goal; Do our part to curtail cancer in Nigeria.</p>  
                </div>
                 
        
        </div>
        <div className='w-full h-full flex flex-col pt-4 px-4'>
            <h1 className='text-[32px] font-bold  text-[#008024] pt-8'>Our Mission & Vision</h1>
            <p className='md:text-[16px] pt-3 md:max-w-[1200px]' data-aos='fade-up'>Recognizing the enormity of the challenges our society faces, CCIN is dedicated to making a lasting 
            impact through our campaigns and programs in the cancer domain.</p>



            <div id='awareness and cancer prevention' data-aos='fade-up'>
              <h1 className='text-[24px] font-bold  text-[#008024] pt-8'>Awareness & Cancer Prevention</h1>
              <p className='md:text-[16px] pt-3 md:max-w-[1200px] pb-4'> Cancer prevention is indeed Nigeria's best chance at defeating cancer,
              we are invested in the creation, coordination and dissemination of evidence based prevention campaign 
              materials that will enlighten Nigerians on various cancer risk factors and ways to minimize and/or eliminate
              these risks, with this strategy, we hope to significantly reduce the predicted new cancer cases in Nigeria by at
              least 20% in the next decade.
              </p>
            </div>

            <h1 className='text-[24px] font-bold  text-[#008024] mx-2 pt-8' data-aos='fade-up'>Diagnosing Cancer In Nigeria</h1>
            <div id='Diagnosing cancer in nigeria' className='flex flex-col md:flex-row' data-aos='fade-up'>
              <div className='flex flex-col'>
              <p className='md:text-[16px] md:max-w-[580px] px-2 py-3'>If diagnosed early, most solid tumors are in fact curable. Early cancer
              diagnosis is hampered by factors such as a lack of access to diagnostic facilities and financial difficulties.
              </p>
              <p className='md:text-[16px] md:max-w-[580px] px-2 py-3'>
              At CCIN, we intend to support the early diagnosis of cancer in patients by collaborating with local and international organizations 
              in order to organize free and/or affordable cancer screening services. 
              </p>
              </div>
              
              <img className='h-[220px] w-[340px] md:h-[270px] shadow-lg object-fill rounded-md my-1  mx-auto' data-aos='fade-up' src='images/oncology.jpg'/>
            </div>


            <h1 className='text-[24px] font-bold  text-[#008024] pt-8' data-aos='fade-up'>Mentorship & Capacity Building</h1>
            <div className='flex flex-col md:flex-row mb-4' id='Mentorship Building' data-aos='fade-up'>
              
              <p className='md:text-[16px] md:max-w-[580px] py-3'>Nigeria needs an army of cancer experts in both clinical and basic research capacity if we hope
              to hope prevail against cancer. With our cancer mentoring scheme dubbed "#payitforward cancer
              Nigeria", we seek to pair up early and mid-stage cancer specialists with young highly motivated Nigerian talents
              willing to pursue a career in oncology. Also, because funding for cancer research in Nigeria is almost
              non-existent, a major objective for us is to change this situation in the long term.
              </p>
              <img className='h-[220px] w-[340px] md:h-[270px] shadow-lg object-fill rounded-md my-1  mx-auto' data-aos='fade-up' src='images/ment.jpg'/>
            </div>



        </div>
        <Footer/>
    </div>
  )
}

export default Mission