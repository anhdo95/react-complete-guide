import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import _ from 'lodash'

import * as apiService from '@/services/api.service'
import OrdersSummary from '@/components/Orders/Orders'

export default function Orders() {
	const [orders, setOrders] = useState()
	const user = useSelector(state => state.user)

  useEffect(() => {
		apiService.getOrders(user.userId).then((ordersData) => {
			const result = _.reduceRight(
				ordersData,
				(list, order, id) => {
					return list.concat({ ...order, id })
				},
				[]
			)

			setOrders(result)
		})
	}, [])

  return (
    <OrdersSummary orders={orders} />
  )
}
