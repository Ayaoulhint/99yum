import React, { Component } from "react";
import bannerImage from '../../../assets/bannerImage.jpg'
import banner2Image from '../../../assets/banner2Image.jpg'
import banner3Image from '../../../assets/banner3Image.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function BannerSlider() {

    const banner = {
        backgroundImage:`url(${bannerImage})`,
        backgroundSize:'cover',
        backgroundPosition: 'center',
        width:'100%',
        height:'55vh',
    }
    const banner2 = {
      backgroundImage:`url(${banner2Image})`,
      backgroundSize:'cover',
      backgroundPosition: 'center',
      width:'100%',
      height:'55vh',
  }
  const banner3 = {
    backgroundImage:`url(${banner3Image})`,
    backgroundSize:'cover',
    backgroundPosition: 'center',
    width:'100%',
    height:'55vh',
}
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        
      };
  return (
    <>
    <div className="slider-container">
    <Slider {...settings}>
        <div className="">
        <div style={banner} className='flex justify-center items-center flex-wrap'>
        <div className='flex flex-col items-center'>
          <h1 className='md:text-3xl italic font-cursive text-xl mt-8'> A recipe is a story that ends with a meal.</h1>
          <h2 className='md:text-xl text-lg'>Craft it, Cook it, Share it</h2>
          <a href="recipe" target="" rel="">
          <button className='bg-black text-white px-3 py-2 -skew-x-5 mt-4 md:text-lg rounded-xl hover:bg-orange-700 hover:scale-110'>Explore</button>
          </a>
          
        </div>
        </div>
    </div>
    <div>
    <div style={banner2} className='flex justify-center items-center flex-wrap'>
        <div className='flex flex-col items-center'>
          <h1 className='md:text-3xl italic font-cursive text-xl mt-8'> A recipe is a story that ends with a meal.</h1>
          <h2 className='md:text-xl text-lg'>Craft it, Cook it, Share it</h2>
          <a href="recipe" target="" rel="">
          <button className='bg-black text-white px-3 py-2 -skew-x-5 mt-4 md:text-lg rounded-xl hover:bg-orange-700 hover:scale-110'>Explore</button>
          </a>
          
        </div>
        </div>
    </div>
    <div>
    <div style={banner3} className='flex justify-center items-center flex-wrap'>
        <div className='flex flex-col items-center'>
          <h1 className='md:text-3xl italic font-cursive text-xl mt-8'> A recipe is a story that ends with a meal.</h1>
          <h2 className='md:text-xl text-lg'>Craft it, Cook it, Share it</h2>
          <a href="recipe" target="" rel="">
          <button className='bg-black text-white px-3 py-2 -skew-x-5 mt-4 md:text-lg rounded-xl hover:bg-orange-700 hover:scale-110'>Explore</button>
          </a>
          
        </div>
    </div>
    </div>
    </Slider>
    </div>
    </>
  )
}

export default BannerSlider