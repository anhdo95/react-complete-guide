import React from 'react'
import classes from './BurgerIngredient.module'

export default function BurgerIngredient(props) {
	switch (props.type) {
		case 'BreadBottom':
			return <div className={classes.BreadBottom}></div>

		case 'BreadTop':
			return (
				<div className={classes.BreadTop}>
					<div className={classes.Seeds1}></div>
					<div className={classes.Seeds2}></div>
				</div>
			)

		case 'Meat':
			return <div className={classes.Meat}></div>

		case 'Cheese':
			return <div className={classes.Cheese}></div>

		case 'Salad':
			return <div className={classes.Salad}></div>

		case 'Bacon':
			return <div className={classes.Bacon}></div>

		default:
			return null
	}
}
