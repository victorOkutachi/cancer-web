import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Aos from 'aos'
import Metricstwo from '../components/Metricstwo'
import Metricthree from '../components/Metricthree'
import Metricfour from '../components/Metricfour'
import Metricfive from '../components/Metricfive'
import { Link } from 'react-router-dom'


const Cancerinng = () => {

    useEffect(()=>{
        Aos.init({duration: 1000})
      })


  return (
    <div className='flex flex-col  font-Lato'>
    <Navbar/>
    
        <div id='cancer incidence in nigeria'  className='flex flex-col '>
                <div style={{
            backgroundImage: `url(${'images/cancerinng.jpg'})`
            }}
            className='w-full h-full bg-no-repeat bg-left bg-cover'
            >
                <div className='bg-overlay3-rgba w-full h-[550px] flex flex-col text-center items-center justify-center text-white'>
                <h1 className='text-3xl py-2 md:text-5xl font-bold text-white text-center'>CONTROL CANCER INITIATIVE NIGERIA</h1>
                <p className='text-lg px-2 md:text-2xl font-bold text-center'>Building Capacity, Defeating Cancer</p>
                <button className='text-white font-bold hover:text-white border-[2px] border-white hover:bg-[#008024] hover:border-[#008024] px-6 py-2 mt-16 mx-auto flex items-center'><Link to='/mentorship'>Get Involved</Link></button>
                </div>
                
        
        </div>

        <div className='flex flex-col '>
            <h2 className='px-4 text-center pt-6 pb-2 text-[28px] font-bold text-[#008024]'>Cancer Incidence In Nigeria</h2>
            <p className='md:text-[16px] text-center px-4 pb-8 pt-4'>
                A 2018 comprehensive study of cancer in Nigeria indicated that;
            </p>

            <Metricstwo/>


            <p className='md:text-[16px] text-center px-3 md:px-8 pb-8 pt-4'>
            The top 5 cancer types for women include; Breast, Cervical, Colerectal, Ovarian and Non-Hodgkin 
            lymphoma and the top 5 cancer types for men include; Prostrate, Colorectal, Non-Hodgkin lymphoma, 
            Liver and Stomach cancers. Available data indicate that around 464,000 cancer cases have been reported prior to the publication of the study.
            </p>

            <img src='images/chart1.jpg' 
            className='h-[180px] w-[330px] md:h-[270px] shadow-lg object-fill rounded-md my-4  mx-auto' data-aos='fade-up'/>

        </div>



        <div id='cancer mortality in nigeria'  className='flex flex-col ' data-aos='fade-up'>
            <h2 className='px-4 pt-6 pb-4 text-[28px] font-bold text-center text-[#008024]'>Cancer Mortality In Nigeria</h2>
      
            <div className='flex flex-col'>
            <p className='md:text-[16px] text-center px-5 py-3'>
                Cancer is quickly overtaking many infections and diseases in Africa and indeed Nigeria as the leading cause of death
            </p>

            <img src='images/chart2.jpg' 
            className='h-[180px] w-[330px] md:h-[325px] shadow-lg object-fill rounded-md my-4  mx-auto' data-aos='fade-up'/>

            <p className='md:text-[16px] text-center px-4 md:px-14 py-5'>
                These numbers may be viewed as conservative since a significant number of cases are usually not reported for reasons such as;
                cultural attitudes that undermines regular medical visits, poor access to quality diagnostic facilities as well as financial difficulties.
            </p>
            </div>


            

        </div>
       


        <div id='cancer facilities and expression in nigeria'  className='flex items-center flex-col ' data-aos='fade-up'>
            <h2 className='px-4 py-4 text-[28px] text-center font-bold text-[#008024]'>Cancer Facilities And Expertise In Nigeria</h2>
           
           <div className='flex flex-col'>
            <p className='md:text-[16px] text-center px-5 py-3'>
            A resilent healthcare system is indispensable for Nigeria to succesfully manage her cancer burden. Here are some key figures on cancer infrastructure
            and capacity gaps in Nigeria.
            </p>
            <Metricthree/>


            <p className='md:text-[16px] text-center px-5 py-3'>
                The number of oncology professionals per 10,000 cancer patients.
            </p>

            <Metricfour/>

            <p className='md:text-[16px] text-center px-5 py-3'>
                    Below is a list of the eight (8) government ran cancer treatment centres with radiotherapy capabilities:
            </p>

          
            <ol className='list-none items-center px- ' data-aos='fade-up'>
                <li className='text-center py-2 text-[#008024]'>Lagos University Teaching Hospital, Lagos.</li>
                <li className='text-center py-2 text-[#008024]'>University of Benin Teaching Hospital, Benin.</li>
                <li className='text-center py-2 text-[#008024]'>Usman Danfodiyo Teaching Hospital, Sokoto.</li>
                <li className='text-center py-2 text-[#008024]'>Fedral University Teaching Hospital Gombe, Gombe.</li>
                <li className='text-center py-2 text-[#008024]'>National Hospital FCT, Abuja.</li>
                <li className='text-center py-2 text-[#008024]'>University College Hospital Ibadan, Ibadan.</li>
                <li className='text-center py-2 text-[#008024]'>University of Nigeria Teaching Hospital, Enugu.</li>
                <li className='text-center py-2 text-[#008024]'>Ahmadu Bello University Teaching Hospital, Kaduna.</li>
            </ol>
            <p className='md:text-[16px] text-center px-3 py-3'>
                It is important to note that the radiotherapy machines at some of these centres are either obsolete or 
                not operational.
            </p>

            <p className='md:text-[16px] text-center px-3 py-3'>
                In addition to the above listed centres, a number of private medical facilities offer oncology treatment in Nigeria.
            </p>
            </div>

            <img src='images/facility.jpg' 
            className='h-[240px] w-[330px] shadow-lg object-fill rounded-md my-4  mx-auto' data-aos='fade-up'/>
            </div>

        

        
        <div id='cancer treatment cost and the challenge of poverty'  className='flex flex-col ' data-aos='fade-up'>
            <h2 className='px-4 py-4 text-[28px] text-center font-bold text-[#008024]'>Cancer Treatment Cost And The Challenge Of Poverty</h2>
            <div className='flex flex-col '>
            <div className='flex flex-col'>
            <p className='md:text-[16px] text-center px-3 md:px-14 py-3'>
                Nigeria's National Health Insurance Scheme (NHIS) does not cover cancer, neither do plans from several health 
                management organizations. Usually, prescribed drugs determine the cost of cancer treatment in Nigeria, and the total cost is reliant on the number 
                of drug cycles. Drugs are benchmarked at about;
            </p>

            <Metricfive/>

            <p className='text-[12px] md:text-[14px] text-green-500 text-center px-5 py-3'>
               Please note that these prices are mere estimations and may not reflect the true current costs.
            </p>

            <p className='md:text-[16px] text-center px-4 md:px-14 py-3'>
                The cost implication of cancer in Nigeria can not be afforded by the low-income earners, who, unfortunately are 
                the most affected by cancer. For a country with a national minimum wage of 30,000 naira and a poverty rate of over 40% of the 
                population, these numbers clearly points to a sad reality that cancer treatment is a luxury for the majority 
                of the nation. For these reasons and more, a national effort coordinated by the national health insurance scheme in 
                collaboration with key stakeholders in the private and non-profit sectors needs to be urgently put in place.
            </p>
            </div>

            <img src='images/poverty.jpg' 
            className='h-[280px] w-[330px] shadow-lg object-fill rounded-md my-4  mx-auto' data-aos='fade-up'/>

            </div>

        </div>

        <div id='cancer databases and data management in nigeria'  className='flex flex-col ' data-aos='fade-up'>
            <h2 className='px-4 py-4 text-[28px] text-center font-bold text-[#008024]'>Cancer Databases And Data Management In Nigeria</h2>
            
            <p className='md:text-[16px] text-center px-3 md:px-14 pt-3 pb-5'>
                Understanding the cancer burden in Nigeria is limited by the incompleteness of cancer data. This is not unique 
                to Nigeria's as most African countries suffer the same plight. The lack of a complete epidemiological profile 
                possibly contributes to the country's inability to adequately tackle many non-communicable diseases (NCDs) including cancer. 
                
            </p>
       
            <p className='md:text-[16px] text-center px-3 md:px-14 pt-3 pb-5'>
            Although the country has six population-based and 19 hospital-based cancer registries that the National System of Cancer 
                Registries (set up in 2009) tries to coordinate, the country has no national, population-based cancer registry and thus no reliable 
                national cancer statistics.  The national cancer incidence statistics supplied for Cancer in Nigeria (2009-2013) 
                are based on figures derived from only two population-based cancer registries in Abuja and Enugu.
            </p>

        </div>

    </div>
    <Footer/>

    </div>
  )
}

export default Cancerinng