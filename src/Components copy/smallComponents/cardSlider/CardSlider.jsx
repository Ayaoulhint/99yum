import React, { useState,useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



function CardSlider() {

const [recipe,setRecipe] = useState([])
const [showRecipe, setShowRecipe] = useState(false);
const [selectedMeal, setSelectedMeal] = useState(null);

useEffect(() => {

  const getMeal = async()=>{
    await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=e')
    .then((res)=>res.json())
    .then((data)=> setRecipe(data.meals));
    

  }
  
  getMeal()

}, [])
const getMealRecipe = async (mealId) => {
  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    const data = await response.json();
    setSelectedMeal(data.meals[0]);
    setShowRecipe(true);
  } catch (error) {
    console.error('Error fetching meal details:', error);
  }
};
const closeRecipeModal = () => {
  setShowRecipe(false);
};
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  arrows:false,
  initialSlide: 0,
  responsive: [
    
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  
};
  return (
    <>
<h1 class="text-center text-6xl md:text-7xl italic mt-10 underline bg-gradient-to-r from-orange-500 to-red-700 text-transparent bg-clip-text mx-auto p-4 font-extrabold mb-8">Some Recipes</h1>
     
    {/* <div id="meal" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"> */}
    
    <Slider {...settings} className='drop-shadow-lg' >
            {recipe.map((meal) => (
              <div key={meal.idMeal} className="meal-item bg-white p-4 rounded-lg shadow-md drop-shadow-lg ">
                <div className="meal-img mb-4">
                  <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-auto rounded-lg" />
                </div>
                <div className="meal-name text-start">
                  <h3 className="text-lg md:text-2xl font-bold">{meal.strMeal}</h3>
                  <p className=''>{meal.strArea}</p>
                  <p>Meal Type: {meal.strCategory}</p>
                  <button
                    onClick={() => getMealRecipe(meal.idMeal)}
                    classNa
                    me="recipe-btn text-orange-500 block text-center"
                  >
                    Get Recipe
                  </button>
                </div>
              </div>
            ))}
            </Slider>
          
          {/* </div> */}
          {showRecipe && selectedMeal && (
          <div className="meal-details fixed inset-0 overflow-y-auto bg-gray-800 bg-opacity-75 z-50">
            <div className="meal-details-content bg-white p-4 rounded-lg shadow-md mx-auto mt-20 max-w-lg ">
              <button
                type="button"
                onClick={closeRecipeModal}
                className="recipe-close-btn absolute top-0 right-0 m-4 px-2.5 py-1 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none"
              >
                <i className="fas fa-times text-gray-700"></i>
              </button>
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">{selectedMeal.strMeal}</h2>
                <p className="text-gray-600 mb-4">{selectedMeal.strCategory}</p>
                <div className="recipe-instruct mb-4">
                  <h3 className="text-lg font-semibold">Instructions:</h3>
                  <p className="text-gray-700">{selectedMeal.strInstructions}</p>
                </div>
                <div className="recipe-meal-img mb-4">
                  <img src={selectedMeal.strMealThumb} alt="" className="w-full h-auto rounded-lg" />
                </div>
                <div className="recipe-link">
                  <a
                    href={selectedMeal.strYoutube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500"
                  >
                    Watch Video
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className='flex justify-center mt-8'>
        <a href="recipe" target="" rel="">
          <button className='bg-gradient-to-r from-orange-500 to-red-500 p-2 m-1 rounded-lg text-white shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl'>View More</button>
          </a>
        </div> 
    </>
    

  )
}

export default CardSlider


