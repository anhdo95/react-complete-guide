import React from 'react'
import PropTypes from 'prop-types'
import classes from './BurgerIngredient.module'

export default function BurgerIngredient(props) {
	switch (props.type) {
		case 'bread-bottom':
			return <div className={classes.BreadBottom}></div>

		case 'bread-top':
			return (
				<div className={classes.BreadTop}>
					<div className={classes.Seeds1}></div>
					<div className={classes.Seeds2}></div>
				</div>
			)

		case 'meat':
			return <div className={classes.Meat}></div>

		case 'cheese':
			return <div className={classes.Cheese}></div>

		case 'salad':
			return <div className={classes.Salad}></div>

		case 'bacon':
			return <div className={classes.Bacon}></div>

		default:
			return null
	}
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
}