import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'
import qs from 'qs'

import Burger from '@/components/Burger/Burger'
import BuildControls from '@/components/Burger/BuildControls/BuildControls'
import Modal from '@/components/Modal/Modal'
import OrderSummary from '@/components/OrderSummary/OrderSummary'

export default function BurgerBuilder() {
  const history = useHistory()
  const ingredients = useSelector(state => state.ingredients)
  
  const [purchasing, setPurchasing] = useState(false)

  function processOrder() {
    setPurchasing(true)
  }

  function handleCancel() {
    setPurchasing(false)
  }

  function handleCheckout() {
		history.push({
			pathname: '/checkout',
			search: qs.stringify(ingredients),
		})

		handleCancel()
	}

  return (
		<div>
			<Modal show={purchasing} onBackdropClick={handleCancel}>
				<OrderSummary onCancel={handleCancel} onContinue={handleCheckout} />
			</Modal>
			<Burger />
			<BuildControls onProcessOrder={processOrder} />
		</div>
	)
}
