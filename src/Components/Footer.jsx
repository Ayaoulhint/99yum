import React from 'react';
import { Link } from 'react-router-dom';
import instagramLogo from '../assets/instagram.png';
import facebookLogo from '../assets/facebook.png';
import twitterLogo from '../assets/x.png';
import pic1 from '../assets/logo.png';


function Footer() {
  return (
    <footer className='bg-gradient-to-l from-black via-gray-900 to-orange-500 text-white py-12 px-4'>
      <div className='container mx-auto flex flex-col items-center'>
        <div className='mb-8 text-center'>
          <h1 className='text-4xl font-bold mb-4'>Navigation</h1>
          <ul className='flex flex-row gap-8 text-lg'>
            <Link to='/'>
              <li className='hover:text-orange-300 transition duration-300'>Home</li>
            </Link>
            <Link to='/recipe'>
              <li className='hover:text-orange-300 transition duration-300'>Recipe</li>
            </Link>
            <Link to='/blog'>
              <li className='hover:text-orange-300 transition duration-300'>Blog</li>
            </Link>
            <Link to='/about-us'>
              <li className='hover:text-orange-300 transition duration-300'>About Us</li>
            </Link>
            <Link to='/contact-us'>
              <li className='hover:text-orange-300 transition duration-300'>Contact Us</li>
            </Link>
          </ul>
        </div>
        <p className='text-center mb-8 text-lg'>
          Tell us how we're doing: <a href='mailto:99yum.contact@gmail.com' className='text-orange-300 hover:underline'>99yum.contact@gmail.com</a>
        </p>
        <div className='flex flex-row gap-8 mb-8 justify-center'>
          <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
            <img src={facebookLogo} alt='Facebook' className='w-8 h-8 hover:opacity-80 transition duration-300' />
          </a>
          <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
            <img src={twitterLogo} alt='Twitter' className='w-8 h-8 hover:opacity-80 transition duration-300' />
          </a>
          <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
            <img src={instagramLogo} alt='Instagram' className='w-8 h-8 hover:opacity-80 transition duration-300' />
          </a>
        </div>
        <ul className='flex flex-row gap-4 text-sm text-gray-300 justify-center mb-'>
          <Link to='#'>
            <li className='hover:text-white transition duration-300'>Private Policy - Terms & Condition</li>
          </Link>
        </ul>
        <p className='text-lg italic mb-4'>Welcome</p>
        <p className='text-sm text-gray-400'>© 2024 Made by Aya & Arshan</p>
        <div className='mt-4 sm:ml-0 ml-4'>
          <img src={pic1} alt='Logo' className='w-32 h-32 rounded-full shadow-lg' />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
