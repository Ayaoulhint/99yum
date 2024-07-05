import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link,NavLink,useLocation } from 'react-router-dom'
import LogoutBtn from '../components/Header/LogoutBtn'
function Hamberger() {
    const authStatus = useSelector((state) => state.auth.status)
    const navItems = [
        {
          name: 'Home',
          slug: "/",
          active: true,
          className:'',
        },
        {
          name: 'Recipe',
          slug: "/recipe",
          active: true,
          className:'',
        },
        {
          name: "Blog",
          slug: "/all-posts",
          active: true,
          className:'',
       },
        {
          name: 'About',
          slug: "/about-us",
          active: true,
          className:'',
        },
        {
          name: 'Contact',
          slug: "/Contact",
          active:true,
          className:'',
       },
       {name: "Add Post",
      slug: "/add-post",
      active: authStatus,
      className:'bg-gradient-to-r from-orange-500 to-red-500 px-6 py-2 m-1 rounded-full text-white shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl',
      },
      {
        name: "Login",
        slug: "/login",
        active: !authStatus,
        className:'bg-gradient-to-r from-orange-500 to-red-500 px-6 py-2 m-1 rounded-full text-white shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl',
      },
      {
        name: "Signup",
        slug: "/signup",
        active: !authStatus,
        className:'bg-gradient-to-r from-orange-500 to-red-500 px-6 py-2 m-1 rounded-full text-white shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl',
      },
      
       ]
    

      
    const [isNavOpen , setIsNavOpen] = useState(false)
    const location = useLocation()
    useEffect(() => (
      setIsNavOpen(false) 
    ), [location])
    
  return (
    <>
    <div className='md:hidden flex justify-between  items-center  flex-wrap w-full' >
    <div className=''>
                <Link to='/' >
                <img src="\src\assets\logo.png" alt="" className='h-24 w-24'/>
                </Link>
            </div>
        <div>
        <img src="\src\assets\hamberger.png" alt=""  className='w-5 h-10 mr-5' onClick={()=> setIsNavOpen((prev)=> !prev) }/>
        </div>
        <div className={isNavOpen? " w-full flex flex-col items-center justify-center bg-none" :"hidden"}>
            {/* <div className='flex flex-col items-center justify-center bg-gray-400 '> */}
        <ul className=' text-xl'>
            {navItems.map((item)=>
                item.active?(
                <NavLink to={item.slug} className={({isActive})=>`${isActive? "text-orange-500": "text-gray-700"}`}>
                    <li className={item.className}>
                        {item.name}
                    </li>
                </NavLink>
                ):null
            )}  
            </ul>
            {authStatus && (
              <div>
                <LogoutBtn/>
              </div>
              
            )}    
            
          </div>
        </div>
        {/* </div> */}
        
    </>
  )
}

export default Hamberger

