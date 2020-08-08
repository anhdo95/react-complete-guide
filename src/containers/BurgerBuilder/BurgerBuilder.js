import React, { useState } from 'react'
import Burger from '@/components/Burger/Burger'

export default function BurgerBuilder() {
  const [ingredients, setIngredients] = useState({
    salad: 1,
    cheese: 2,
    bacon: 2,
    meat: 1,
  })

  return (
    <div>
      <Burger ingredients={ingredients} />
      Build Controls
    </div>
  )
}
