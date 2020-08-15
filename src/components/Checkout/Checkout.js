import React from 'react'
import Burger from '@/components/Burger/Burger'

import classes from './Checkout.module'

export default function Checkout( props ) {
  return (
    <div className={classes.Checkout}>
      <Burger ingredients={props.ingredients} />
      <div>Total price: ${props.totalPrice.toFixed(2)}</div>
    </div>
  )
}
