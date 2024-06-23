import React, { useState,useEffect } from 'react'
import tenRandomMeal from '../../../apiHandling/random_meal/Tenrandommeal.js'
import Card from '../Card.jsx'

function CardSlider() {

const [recipe,setRecipe] = useState([])

useEffect(() => {
 const getMeal = tenRandomMeal()
 setRecipe(getMeal.meals)
}, [])

  return (
    <div>{recipe?.map((current)=>{
      return <Card recipeDate={current}/>    
    })}
      </div>

    

  )
}

export default CardSlider


