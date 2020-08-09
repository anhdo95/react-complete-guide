import React, { useState, useEffect, useCallback } from 'react'
import { useLocation } from 'react-router'
import qs from 'qs'
import _ from 'lodash'

import * as apiService from '@/services/api.service'
import Burger from '@/components/Burger/Burger'

import classes from './Checkout.module'

const INGREDIENT_PRICES = {
  salad: 0.7,
  cheese: 0.8,
  bacon: 1.3,
  meat: 1.5,
}

export default function Checkout( props ) {
  
  // const [order, setOrder] = useState()

  // const order = {
  //   ingredients,
  //   totalPrice,
  //   customer: {
  //     name: 'Richard Do',
  //     address: {
  //       street: '1 Street',
  //       zipCode: '10000',
  //       country: 'Vietnam',
  //     },
  //     email: 'richarddo@test.com',
  //     deliveryMethod: 'fastest',
  //   },
  // }

  // const getOrder = useCallback(function() {
  //   apiService.getOrderById(params.orderId).then(setOrder)
  // }, [params.orderId])

  // useEffect(() => {
  //   getOrder()
  // }, [params.orderId])

  // if (!order) return null

  function handleCancel() {

  }

  function handleCheckout() {
    
  }

  return (
    <div className={classes.Checkout}>
      <Burger ingredients={props.ingredients} />
      <div>Total price: ${props.totalPrice.toFixed(2)}</div>
    </div>
  )
}
