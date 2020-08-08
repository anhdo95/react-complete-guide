import React from 'react'
import Button from '@/components/Button/Button'

import classes from './OrderSummary.module'

export default function OrderSummary(props) {
	return (
		<div className={classes.OrderSummary}>
			<h3>Your Order</h3>
			<p>A delicious burger with the following ingredients:</p>
			<ul>
				{Object.keys(props.ingredients).map((key) => (
					<li className={classes.OrderItem} key={key}>
						{key}: {props.ingredients[key]}
					</li>
				))}
			</ul>
      <span>Total price: ${props.totalPrice.toFixed(2)}</span>
      <p>Continue to Checkout?</p>
      <Button type="Danger" onClick={props.onCancel}>Cancel</Button>
      <Button type="Success" onClick={props.onContinue}>Continue</Button>
		</div>
	)
}
