import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {HiOutlineMenuAlt2} from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { listItems } from '../data'


const Navbar = () => {

    const [menu, setMenu] = useState(false)

    const handleMenu = () => {
        setMenu(!menu)
        
    }

  return (
    <div className='flex w-full h-12 items-center justify-between p-10  shadow-sm'>
        <img src='images/ccinlogo.png' className='h-10 cursor-pointer '/>
        

        <ul className='hidden grid-cols-5 col-span-4 items-center md:flex '>
            {listItems.map(item=>(
            <li className='px-3 text-xl'><a className='text-[11px] text-gray-700 font-medium uppercase tracking-widest cursor-pointer relative group'>{item.desc}
            <div className='absolute w-full h-0.5 bg-[#007f5f] scale-x-0 group-hover:scale-x-100 transition-transform'></div>
            </a></li>))}
            <button className='text-[#007f5f] font-bold rounded-full hover:text-white border-[2px] border-[#007f5f] hover:bg-[#007f5f] hover:border-[#007f5f] px-6 py-1 w-[100px] flex items-center justify-center my-4 mx-auto md:mx-0'>
                Donate
            </button>
        </ul>
     
        <div onClick={handleMenu} className='block md:hidden z-10'>
             {menu ? <AiOutlineClose color='white' size={20} /> : <HiOutlineMenuAlt2 size={20}/>}     
        </div>
        <div className={menu ? 'absolute left-0 top-0 w-full h-screen flex flex-col items-center justify-center bg-[#007f5f] ease-in-out duration-500 text-white' : 'fixed left-[-100%]'}>
        <img src='images/ccinlogo.png' className=' absolute top-5 left-10 h-10 cursor-pointer '/>
                <ul className='uppercase p-4'>
                    
                    <li className='py-2 text-xl font-medium'>About</li>
                    
                    <li className='py-2 text-xl  font-medium'>Programs</li>
                    <li className='py-2 text-xl font-medium'>Cancer In Nigeria</li>
                    <li className='py-2 text-xl font-medium'>Opportunities</li>
                    <li className='py-2 text-xl font-medium'>Mentorship Schemes</li>
                    <li className='py-2 text-xl font-medium'>Spotlight Nigerians</li>
                    <li className='py-2 text-xl font-medium text-pink-400'>Donate</li>
                </ul>
            </div>
    </div>
  )
}

export default Navbar