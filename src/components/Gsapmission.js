import React, { useEffect } from 'react'
import gsap from 'gsap'
import Aos from 'aos'

const Gsapmission = () => {

    useEffect(()=>{
        Aos.init({duration: 1000})
      })

    useEffect(()=> {
        let textAnimation = gsap.timeline();
        textAnimation.from('.word', {
            y: 60,
            stagger: {
                each: 0.04
            }
        })
    })
  return (
    <div className='flex flex-col md:flex-row  md:justify-between md:items-center'>
        <div className='text-[32px] flex mb-2 font-bold text-[#008024]'> {
            "Our Mission".split('').map((word) => {
                return word === ' ' ? <div className='word'>&nbsp;</div> : <div className='word'>{word}</div>
            }) 
        }
        
        </div>

        <p className='text-[16px]  font-medium max-w-[400px] py-2 md:py-0'>
        Working towards making access to high quality cancer treatment and care a reality for ALL Nigerians
        </p>
 
  </div>
  )
}

export default Gsapmission