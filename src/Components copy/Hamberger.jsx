import React, { useState } from 'react'
import { Link,NavLink } from 'react-router-dom'
function Hamberger() {

    const [isNavOpen , setIsNavOpen] = useState(false)
  return (
    <>
    <div className='sm:hidden flex justify-between ml-10 mr-5 items-center sticky flex-wrap' >
    <div className=''>
                <Link to='/' >
                <img src="\src\assets\WhatsApp Image 2024-06-17 at 03.53.11_9ae0a259.jpg" alt="" className='h-24 w-24'/>
                </Link>
            </div>
        <div>
        <img src="\src\assets\hamberger.png" alt=""  className='w-5 h-10 ' onClick={()=> setIsNavOpen((prev)=> !prev) }/>
        </div>
        <div className={isNavOpen? " w-full flex flex-col items-center justify-center bg-gray-400" :"hidden"}>
            {/* <div className='flex flex-col items-center justify-center bg-gray-400 '> */}
        <ul className=''>
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
            
            <button className=''>Login</button>
            <button className=''>SignUp</button>
                
            
          </div>
        </div>
        {/* </div> */}
        
    </>
  )
}

export default Hamberger

