import React from 'react'
import { useSelector } from 'react-redux'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import _ from 'lodash'

import BurgerIngredient from '@/components/Burger/BurgerIngredient/BurgerIngredient'

import classes from './Burger.module'

export default function Burger( props ) {
  const ingredients = useSelector(state => state.ingredients)

  let ingredientComponents = _.map(ingredients, (quantity, type) => {
    const types = new Array(quantity).fill(type)

		return types.map((_, index) => (
			<CSSTransition
        key={type + index}
        mountOnEnter
				unmountOnExit
        timeout={300}
				classNames={{
					enter: classes.fadeEnter,
					enterDone: classes.fadeEnterDone,
					exit: classes.fadeExit,
					exitDone: classes.fadeExitDone,
				}}
			>
				<div className={classes.Ingredient}>
					<BurgerIngredient type={type} />
				</div>
			</CSSTransition>
		))
  }).flat()

  return (
		<div className={classes.Burger}>
			<BurgerIngredient type="bread-top" />
			{!ingredientComponents.length && 'Please start adding ingredients!'}
			<TransitionGroup>{ingredientComponents}</TransitionGroup>
			<BurgerIngredient type="bread-bottom" />
		</div>
	)
}
