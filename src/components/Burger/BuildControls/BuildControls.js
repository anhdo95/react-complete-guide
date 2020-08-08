import React, { useCallback } from 'react'
import BuildControl from '@/components/Burger/BuildControl/BuildControl'

import classes from './BuildControls.module'

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Meat', type: 'meat' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Bacon', type: 'bacon' },
]

export default function BuildControls( props ) {
  const update = useCallback(({ type }, incremental) => {
    return () => {
      props.onUpdateIngredient({ type, incremental })
    }
  }, [props.onUpdateIngredient])

  return (
		<div className={classes.BuildControls}>
			<span>Total price: ${props.totalPrice.toFixed(2)}</span>
			{controls.map((ctl) => (
				<BuildControl
					key={ctl.label}
					label={ctl.label}
					ingredient={props.ingredients[ctl.type]}
					onAdd={update(ctl, true)}
					onRemove={update(ctl)}
				/>
			))}
			<button className={classes.OrderButton} disabled={!props.totalPrice} onClick={props.onProcessOrder}>
				Order Now
			</button>
		</div>
	)
}
