import React from 'react';
import bannerImage from '../assets/bannerImage.jpg';
import CardSlider from './smallComponents/cardSlider/CardSlider';


function Home() {
  const banner = {
    backgroundImage: `url(${bannerImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '55vh',
  };

  return (
    <>
      <div style={banner} className="flex justify-center items-center flex-wrap">
        <div className="flex flex-col items-center">
          <h1 className="md:text-3xl italic font-cursive text-xl mt-8">A recipe is a story that ends with a meal.</h1>
          <h2 className="md:text-xl text-lg">Craft it, Cook it, Share it</h2>
          <a href="/recipe" target="" rel="">
            <button className="bg-black text-white px-3 py-2 -skew-x-5 mt-4 md:text-lg rounded-xl hover:bg-orange-700 hover:scale-110">
              Explore
            </button>
          </a>
        </div>
      </div>
      <CardSlider />
      <TopRecipes /> {/* Ajouter la section TopRecipes ici */}
    </>
  );
}

export default Home;
