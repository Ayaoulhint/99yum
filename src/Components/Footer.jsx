import React from 'react'
import { Link } from 'react-router-dom'
import instagramLogo from '../assets/instagram.jpg';
import facebookLogo from '../assets/facebook.png';
import twitterLogo from '../assets/x.png';
import pic1 from '../assets/foot1.png';

function Footer() {
  return (
    <>
    <div>
      <div className=' text-black flex items-center  justify-center'>
        <div className='flex flex-col gap-2 text-center'>
          <h1 className='text-2xl'>Navigation</h1>
          <ul className='flex flex-row gap-8'>
            <Link to='home'>
              <li>Home</li>
            </Link>
            <Link to='Recipe'>
              <li>Recipe</li>
            </Link>
            <Link to='blog'>
              <li>Blog</li>
            </Link>
            <Link to='about-us'>
              <li>About US</li>
            </Link>
            <Link to='contact-us'>
              <li>Contact Us</li>
            </Link>
          </ul>
          <p className='mt-4'>Tell us how we're doing: <a href='mailto:99yum.contact@gmail.com' className='text-blue-400'>99yum.contact@gmail.com</a></p>
          <div className='flex flex-row gap-4 mt-2 justify-center'>
            <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
              <img src={facebookLogo} alt='Facebook' className='w-6 h-6' />
            </a>
            <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
              <img src={twitterLogo} alt='Twitter' className='w-6 h-6' />
            </a>
            <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
              <img src={instagramLogo} alt='Instagram' className='w-6 h-6' />
            </a>
          </div>
          <ul className='flex flex-row gap-4 text-sm text-gray-600 justify-center'>
            <Link to='#'>
              <li>Privacy Policy - Terms & Condition</li>
            </Link>
          </ul>
        </div>
        {/* <div className='absolute right-0 mr-10 mt-10'>
        <img src={pic1} alt='Logo' className='w-48 h-50 rounded-full shadow-lg' /> */}
      </div>
      </div>
    </>
  )
}

export default Footer
