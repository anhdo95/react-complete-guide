import React, { useState } from 'react'
import Burger from '@/components/Burger/Burger'
import BuildControls from '@/components/Burger/BuildControls/BuildControls'

export default function BurgerBuilder() {
  const [ingredients, setIngredients] = useState({
    salad: 1,
    cheese: 2,
    bacon: 2,
    meat: 1,
  })

  function updateIngredient({ type, incremental }) {
    const quantity = Math.max(0, ingredients[type] + (incremental ? 1 : -1))

    setIngredients({
      ...ingredients,
      [type]: quantity,
    })
  }

  return (
    <div>
      <Burger ingredients={ingredients} />
      <BuildControls onUpdateIngredient={updateIngredient} />
    </div>
  )
}
