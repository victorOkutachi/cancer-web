import React, { useEffect } from 'react'
import gsap from 'gsap'
import Aos from 'aos'

const Gsapprograms = () => {
    
    useEffect(()=> {
        let textAnimation = gsap.timeline();
        textAnimation.from('.word', {
            y: 50,
            stagger: {
                each: 0.01
            }
        })
    })
  return (
    <div className='flex md:justify-between md:items-center'>
        <div className='text-[32px] flex mb-2 font-bold text-[#008024]'> {
            "Our Programmes".split('').map((word) => {
                return word === ' ' ? <div className='word'>&nbsp;</div> : <div className='word'>{word}</div>
            }) 
        }
        
        </div>
    </div>
  )
}

export default Gsapprograms