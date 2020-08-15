import React from 'react'
import { useSelector } from 'react-redux'
import _ from 'lodash'

import BurgerIngredient from '@/components/Burger/BurgerIngredient/BurgerIngredient'

import classes from './Burger.module'

export default function Burger( props ) {
  const ingredients = useSelector(state => state.ingredients)

  let ingredientComponents = _.map(ingredients, (quantity, type) => {
    const types = new Array(quantity).fill(type)

		return types.map((_, index) => (
			<BurgerIngredient key={type + index} type={type} />
		))
  }).flat()

  if (!ingredientComponents.length) {
    ingredientComponents = "Please start adding ingredients!"
  }
  
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredientComponents}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}
