import React from 'react'
import Body from '../components/Body'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Involvement from '../components/Involvement'
import Metrics from '../components/Metrics'
import Navbar from '../components/Navbar'
import Programme from '../components/Programme'

const Homepage = () => {
  return (
    <div className='w-full h-full font-Lato flex flex-col items-center'>
        <Navbar/>
        <HeroSection/>
        <Body/>
        <Programme/>
        <Involvement/>
        <Metrics/>
        <Footer/>
        
        
    </div>
  )
}

export default Homepage