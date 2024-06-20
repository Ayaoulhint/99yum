import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Hamberger from './Hamberger'

function Header() {

    
    
  return (
    <>
      <header className=''>
        <nav className='flex items-center justify-between ml-10 mr-10 mt-1'>
          <div className='hidden sm:block'>
            <Link to='/'>
              <img src="\src\assets\WhatsApp Image 2024-06-17 at 03.53.11_9ae0a259.jpg" alt="" className='h-24 w-24' />
            </Link>
          </div>
          <ul className='sm:flex sm:flex-wrap sm:gap-8 sm:text-lg hidden text-black font-medium'>
            <NavLink to='Home' className={({ isActive }) => `${isActive ? "text-orange-500" : "text-gray-700"}`}>
              <li>Home</li>
            </NavLink>
            <NavLink to='Recipe' className={({ isActive }) => `${isActive ? "text-orange-500" : "text-gray-700"}`}>
              <li>Recipe</li>
            </NavLink>
            <NavLink to='Blog' className={({ isActive }) => `${isActive ? "text-orange-500" : "text-gray-700"}`}>
              <li>Blog</li>
            </NavLink>
            <NavLink to='About-Us' className={({ isActive }) => `${isActive ? "text-orange-500" : "text-gray-700"}`}>
              <li>About Us</li>
            </NavLink>
            <NavLink to='Contact-Us' className={({ isActive }) => `${isActive ? "text-orange-500" : "text-gray-700"}`}>
              <li>Contact Us</li>
            </NavLink>
          </ul>
          <div className='hidden sm:flex sm:gap-2'>
            <button className='bg-gradient-to-r from-orange-500 to-red-500 p-2 m-1 rounded-lg text-white shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl'>
              Login
            </button>
            <button className='bg-gradient-to-r from-orange-500 to-red-500 p-2 m-1 rounded-lg text-white shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl'>
              Sign Up
            </button>
          </div>

        </nav>
        <Hamberger />
      </header>
    </>
  )
}

export default Header
