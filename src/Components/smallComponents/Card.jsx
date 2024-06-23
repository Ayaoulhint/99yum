import React from 'react'

function Card({current}) {
  return (
    <div>
      <h1>{current.strMeal}</h1>
    </div>
  )
}

export default Card