// const API_KEY = '5a562f9a45374a608bb2b47ee8f0f4be'

import { data } from "autoprefixer";

const tenRandomMeal = async ()=>{
    // await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=10`)
    await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=c')
    .then((res)=>res.json())
    .then((data)=> data);
    
}

export default tenRandomMeal;