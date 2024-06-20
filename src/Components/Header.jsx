import React from 'react'
import {Link, NavLink} from 'react-router-dom'

import Hamberger from './Hamberger'

function Header() {
  return (
    <>
    <header className=''>
        <nav className='flex items-center justify-between  ml-10 mr-10 mt-1'>
            <div className='hidden sm:block'>
                <Link to='/' >
                <img src="\src\assets\WhatsApp Image 2024-06-17 at 03.53.11_9ae0a259.jpg" alt="" className='h-24 w-24'/>
                </Link>
            </div>
            <ul className='sm:flex sm:flex-wrap sm:gap-2 sm:text-lg hidden text-black font-medium'>
                <NavLink to='Home' className={({isActive})=>`${isActive? "text-orange-500": "text-gray-700"}`}>
                    <li>
                        Home
                    </li>
                </NavLink>
                <NavLink to='Recipe' className={({isActive})=>`${isActive? "text-orange-500": "text-gray-700"}`}>
                    <li>Recipe</li>
                </NavLink>
                <NavLink to='Blog'className={({isActive})=>`${isActive? "text-orange-500": "text-gray-700"}`}>
                    <li>
                    Blog
                    </li>
                </NavLink>
                <NavLink to='About-Us' className={({isActive})=>`${isActive? "text-orange-500": "text-gray-700"}`}>
                    <li>
                        About Us
                    </li>
                </NavLink>
                
                <NavLink to='Contact-Us'className={({isActive})=>`${isActive? "text-orange-500": "text-gray-700"}`}>
                    <li>
                        Contact Us
                    </li>
                </NavLink>
            </ul>
                       
            <div className='hidden sm:flex sm:gap-1'>
                <button className='bg-orange-500 p-1 rounded-lg text-white'>Login</button>
                <button className='bg-blue-600 p-1 rounded-lg text-white'>SignUp</button>
                
            </div>
        </nav>
        <Hamberger/> 
    </header>
    </>
  )
}

export default Header