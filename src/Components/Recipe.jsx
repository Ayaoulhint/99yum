import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';

const Recipe = () => {
  const [searchInput, setSearchInput] = useState('');
  const [meals, setMeals] = useState([]);
  const [showRecipe, setShowRecipe] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [error, setError] = useState('');


  const getMealList = async () => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchInput}`);
      const data = await response.json();
      if (data.meals) {
        setMeals(data.meals);
        setError('');
      } else {
        setMeals([]);
        setError('Sorry, we didn\'t find any meal. Please try again.');
      }
    } catch (error) {
      console.error('Error fetching meals:', error);
      setError('Failed to fetch meals. Please check your connection and try again.');
    }
  };

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


  const handleSubmit = (event) => {
    event.preventDefault();
    getMealList();
  };

  
  const closeRecipeModal = () => {
    setShowRecipe(false);
  };

  return (
    <div className="container mx-auto">
      <div className="meal-wrapper">
        <div className="meal-search">
          <h2 className="text-3xl font-bold text-center mb-4">Find Meals For Your Ingredients</h2>
          <blockquote className="text-center text-gray-600 mb-4">
            Good food is made with simple ingredients, crafted with care, and served with love
          </blockquote>

          <form onSubmit={handleSubmit} className="meal-search-box mb-4 flex justify-center">
            <input
              type="text"
              className="search-control border border-orange-300 rounded-l py-2 px-4 focus:outline-none focus:ring-2 p-0 px-4 text-[1.1rem] border-2 border-tenne-tawny text-tenne-tawny rounded-tl-2xl rounded-bl-2xl"
              placeholder="Enter an ingredient"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button
              type="submit"
              className="search-btn btn rounded-r-lg px-4 py-4 bg-orange-500 text-white focus:outline-none flex items-center"
            >
              <i className="fas fa-search mr-1"></i>
            </button>
          </form>
        </div>

        <div className="meal-result">
          <h2 className="text-2xl font-bold mb-4 text-center">Your Search Results:</h2>

          {error && (
            <p className="text-orange-500 text-r-lg font-semibold text-center mb-3">
              {error}
            </p>
          )}

          <div id="meal" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {meals.map((meal) => (
              <div key={meal.idMeal} className="meal-item bg-white p-4 rounded-lg shadow-md">
                <div className="meal-img mb-4">
                  <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-auto rounded-lg" />
                </div>
                <div className="meal-name">
                  <h3 className="text-lg font-bold">{meal.strMeal}</h3>
                  <button
                    onClick={() => getMealRecipe(meal.idMeal)}
                    className="recipe-btn text-orange-500 block text-center"
                  >
                    Get Recipe
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {showRecipe && selectedMeal && (
          <div className="meal-details fixed inset-0 overflow-y-auto bg-gray-800 bg-opacity-75 z-50">
            <div className="meal-details-content bg-white p-4 rounded-lg shadow-md mx-auto mt-20 max-w-lg">
              <button
                type="button"
                onClick={closeRecipeModal}
                className="recipe-close-btn absolute top-0 right-0 m-4 p-2 rounded-full bg-gray-300 hover:bg-gray-400 focus:outline-none"
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
      </div>
    </div>
  );
};

export default Recipe;
