import React, { useState } from 'react'

import Burger from '@/components/Burger/Burger'
import BuildControls from '@/components/Burger/BuildControls/BuildControls'
import Modal from '@/components/Modal/Modal'
import OrderSummary from '@/components/OrderSummary/OrderSummary'

import * as apiService from '@/services/api.service'

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
  const [purchasing, setPurchasing] = useState(false)

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

  function processOrder() {
    setPurchasing(true)
  }

  function handleCancel() {
    setPurchasing(false)
  }

  function handleCheckout() {
    const order = {
      ingredients,
      totalPrice,
      customer: {
        name: 'Richard Do',
        address: {
          street: '1 Street',
          zipCode: '10000',
          country: 'Vietnam'
        },
        email: 'richarddo@test.com', 
        deliveryMethod: 'fastest'
      }
    }

    apiService.createOrder(order)
      .finally(handleCancel)
  }

  return (
		<div>
			<Modal show={purchasing} onBackdropClick={handleCancel}>
				<OrderSummary
					ingredients={ingredients}
					totalPrice={totalPrice}
					onCancel={handleCancel}
					onContinue={handleCheckout}
				/>
			</Modal>
			<Burger ingredients={ingredients} />
			<BuildControls
				ingredients={ingredients}
				totalPrice={totalPrice}
				onUpdateIngredient={updateIngredient}
				onProcessOrder={processOrder}
			/>
		</div>
	)
}
