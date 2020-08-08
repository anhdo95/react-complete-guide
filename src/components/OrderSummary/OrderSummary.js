import React from 'react'

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
      <p>Continue to Checkout?</p>
		</div>
	)
}
