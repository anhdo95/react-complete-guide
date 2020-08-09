import React from 'react'
import _ from 'lodash'

import classes from './Orders.module'

export default function Orders( props ) {
  if (!props.orders) return null
  
  console.log('props', props)

  return (
		<div className={classes.Orders}>
			{_.map(props.orders, order => (
				<div className={classes.Order} key={order.id}>
					<div>
						<strong>Ingredients: </strong>
						{_.map(order.ingredients, (quantity, ingredient) => (
							<span className={classes.Ingredient} key={ingredient}>
								{ingredient} ({quantity})
							</span>
						))}
					</div>
					<div><strong>Price: </strong> ${order.totalPrice.toFixed(2)}</div>
				</div>
			))}
		</div>
	)
}
