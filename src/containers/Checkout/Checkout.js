import React, { useState } from 'react'
import { useLocation, useHistory } from 'react-router'
import qs from 'qs'
import _ from 'lodash'

import * as apiService from '@/services/api.service'

import CheckoutSummary from '@/components/Checkout/Checkout'
import ContactForm from '@/components/Checkout/ContactForm/ContactForm'
import Actions from '@/components/Checkout/Actions/Actions'

const INGREDIENT_PRICES = {
  salad: 0.7,
  cheese: 0.8,
  bacon: 1.3,
  meat: 1.5,
}

export default function Checkout() {
  const history = useHistory()
  const location = useLocation()
  const [contact, setContact] = useState()
  const ingredients = qs.parse(location.search.slice(1))

  const totalPrice = _.reduce(ingredients, (sum, quantity, ingredient) => {
    return sum + (INGREDIENT_PRICES[ingredient] * quantity)
  }, 0)

  function handleContactChange(contact) {
    setContact(contact)
  }

  function handleCancel() {
    history.goBack()
  }

  function handleCheckout() {
		const order = {
			ingredients,
			totalPrice,
			customer: {
				name: contact.name,
				address: {
					street: contact.street,
					postalCode: contact.postalCode,
					country: 'Vietnam',
				},
				email: contact.email,
				deliveryMethod: 'fastest',
			},
		}

    apiService.createOrder(order)
      .then(() => history.push('/orders'))
	}

  return (
    <div>
      <CheckoutSummary ingredients={ingredients} totalPrice={totalPrice} />
      <ContactForm onChange={handleContactChange} />
      <Actions onCancel={handleCancel} onComplete={handleCheckout} />
    </div>
  )
}
