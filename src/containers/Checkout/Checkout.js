import React, { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router'

import * as apiService from '@/services/api.service'
import Burger from '@/components/Burger/Burger'

export default function Checkout() {
  const params = useParams()
  const [order, setOrder] = useState()

  const getOrder = useCallback(function() {
    apiService.getOrderById(params.orderId).then(setOrder)
  }, [params.orderId])

  useEffect(() => {
    getOrder()
  }, [params.orderId])

  if (!order) return null

  return (
    <Burger ingredients={order.ingredients} />
  )
}
