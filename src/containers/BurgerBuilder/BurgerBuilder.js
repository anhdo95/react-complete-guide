import React, { useState } from 'react'
import Burger from '@/components/Burger/Burger'
import BuildControls from '@/components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
  salad: 0.7,
  cheese: 0.8,
  bacon: 1.3,
  meat: 1.5,
}

export default function BurgerBuilder() {
  const [ingredients, setIngredients] = useState({
    salad: 0,
    cheese: 0,
    bacon: 0,
    meat: 0,
  })
  const [totalPrice, setTotalPrice] = useState(0)

  function updateIngredient({ type, incremental }) {
    if (!ingredients[type] && !incremental) return

    const quantity = ingredients[type] + (incremental ? 1 : -1)
    const price = INGREDIENT_PRICES[type]
    const newTotalPrice = Math.max(0, totalPrice + (incremental ? price : -price))

    setIngredients({
      ...ingredients,
      [type]: quantity,
    })
    setTotalPrice(newTotalPrice)
  }

  return (
    <div>
      <Burger ingredients={ingredients} />
      <BuildControls totalPrice={totalPrice} onUpdateIngredient={updateIngredient} />
    </div>
  )
}
