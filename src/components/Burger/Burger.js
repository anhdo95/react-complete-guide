import React from 'react'
import PropTypes from 'prop-types'

import BurgerIngredient from '@/components/Burger/BurgerIngredient/BurgerIngredient'

import classes from './Burger.module'

export default function Burger( props ) {
  let ingredientComponents = Object.keys(props.ingredients).map((type) => {
    const types = new Array(props.ingredients[type]).fill(type)

		return types.map((_, index) => (
			<BurgerIngredient key={type + index} type={type} />
		))
  }).flat()

  if (ingredientComponents.length) {
    ingredientComponents = "Please start adding ingredients!"
  }
  
  console.log('ingredientComponents', ingredientComponents)

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredientComponents}
      <BurgerIngredient type="bread-bottom" />
    </div>
  )
}

Burger.propTypes = {
  ingredients: PropTypes.object.isRequired,
}
