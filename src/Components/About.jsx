import React from 'react';
import aboutImage from '../assets/about.jpg'; 
import div1 from '../assets/div1.jpg'; 
import div2 from '../assets/div2.jpg'; 
import div3 from '../assets/div3.jpg'; 
import div4 from '../assets/div4.jpg'; 

const AboutUs = () => {
  return (
    <div>

      <div className="relative">
        <img src={aboutImage} alt="About Us" className="w-full h-96 object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-8xl font-bold">About Us</h1>
        </div>
      </div>

      <div className="container mx-auto py-8 px-8 flex items-center ">
        <div className="flex flex-wrap w-full md:w-2/4">
          <div className="w-full sm:w-1/2 p-2">
            <img src={div1} alt="Image 1" className="rounded shadow-md w-80 h-auto" />
          </div>
          <div className="w-full sm:w-1/2 p-4">
            <img src={div2} alt="Image 2" className="rounded shadow-md w-80 h-auto" />
          </div>
          <div className="w-full sm:w-1/2 p-2">
            <img src={div3} alt="Image 3" className="rounded shadow-md w-80 h-auto" />
          </div>
          <div className="w-full sm:w-1/2 p-4">
            <img src={div4} alt="Image 4" className="rounded shadow-md w-80 h-auto" />
          </div>
        </div>
        <div className="w-full md:w-1/1 pl-8">
          <div className="py-8 text-center">
            <h3 className="text-3xl font-semibold mb-4 text-center md:italic">Who We Are</h3>
            <p className="text-lg mb-6">
              Welcome to <span className="font-bold text-orange-500">99Yum</span>, your ultimate destination for culinary inspiration and personal storytelling. 
              We are a passionate community of food enthusiasts, home cooks, and professional chefs, united by our love for delicious food and the stories that make each recipe special.
            </p>

            <h3 className="text-3xl font-semibold mb-4 text-center md:italic">What We Do</h3>
            <p className="text-lg mb-6">
              At <span className="font-bold text-orange-500">99Yum</span>, we believe that every dish has a story. Our platform combines a comprehensive recipe repository with an engaging blog, allowing you to find and cook dishes you love while sharing the personal experiences and memories behind your own recipes. Whether you're looking for a quick weeknight dinner, a festive holiday feast, or an exotic culinary adventure, you'll find it here along with the heartfelt stories that bring each recipe to life.
            </p>


            <h3 className="text-3xl font-semibold mb-4 text-center md:italic">Our Mission</h3>
            <p className="text-lg mb-1">
              Our mission is to create a vibrant, supportive community where food lovers can connect, inspire each other, and celebrate the joy of cooking. We aim to make cooking accessible and enjoyable for everyone, regardless of skill level, by providing a diverse range of recipes and practical cooking tips. We also want to highlight the cultural and personal significance of food, making every meal a meaningful experience.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8 px-6 text-center">
        <h3 className="text-3xl font-semibold mb-2 md:italic">Explore And Connect</h3>
      </div>

      <div className="container mx-auto px-6">
        <div className="flex justify-center">
          <div className="w-full sm:w-1/2 md:w-1/3 p-4">
            <div className="relative">
              <div className="absolute inset-0 bg-orange-500"></div>
              <div className="relative p-4 text-white">
                <h4 className="font-semibold text-center mb-2 md:italic text-xl">Discover Recipes</h4>
                <p className="text-sl text-center">
                  Explore a diverse library of recipes for every taste and occasion, complete with detailed instructions and photos to guide you.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 p-4">
            <div className="relative">
              <div className="absolute inset-0 bg-orange-500"></div>
              <div className="relative p-4 text-white">
                <h4 className="font-semibold text-center mb-2 md:italic text-xl">Share Stories</h4>
                <p className="text-sl text-center">
                  Connect food with personal experiences by reading and sharing the heartfelt stories behind each dish, making every meal meaningful.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 p-4">
            <div className="relative">
              <div className="absolute inset-0 bg-orange-500"></div>
              <div className="relative p-4 text-white">
                <h4 className="font-semibold text-center mb-2 md:italic text-xl">Join Our Community</h4>
                <p className="text-sl text-center">
                  Engage with fellow food enthusiasts, share your own recipes and stories, and be part of a supportive, passionate community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;