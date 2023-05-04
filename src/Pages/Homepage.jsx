import React from 'react'
import Body from '../components/Body'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Involvement from '../components/Involvement'
import Navbar from '../components/Navbar'
import Programme from '../components/Programme'

const Homepage = () => {
  return (
    <div className='w-full h-full font-kanit flex flex-col items-center'>
        <Navbar/>
        <HeroSection/>
        <Body/>
        <Programme/>
        <Involvement/>
        <Footer/>
        
        
    </div>
  )
}

export default Homepage