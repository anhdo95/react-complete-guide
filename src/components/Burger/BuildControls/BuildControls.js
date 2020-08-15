import React from 'react'
import { useSelector } from 'react-redux'

import BuildControl from '@/components/Burger/BuildControl/BuildControl'

import classes from './BuildControls.module'

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Meat', type: 'meat' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Bacon', type: 'bacon' },
]

export default function BuildControls( props ) {
	const totalPrice = useSelector(state => state.totalPrice)

  return (
		<div className={classes.BuildControls}>
			<span>Total price: ${totalPrice.toFixed(2)}</span>
			{controls.map((ctl) => (
				<BuildControl key={ctl.label} control={ctl} />
			))}
			<button
				className={classes.OrderButton}
				disabled={!totalPrice}
				onClick={props.onProcessOrder}
			>
				Order Now
			</button>
		</div>
	)
}
