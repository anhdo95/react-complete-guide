import React, { useState } from 'react'
import { useLocation, useHistory } from 'react-router'
import { useSelector } from 'react-redux'
import qs from 'qs'
import _ from 'lodash'

import * as apiService from '@/services/api.service'
import CheckoutSummary from '@/components/Checkout/Checkout'
import ContactForm from '@/components/Checkout/ContactForm/ContactForm'
import Actions from '@/components/Checkout/Actions/Actions'

export default function Checkout() {
  const history = useHistory()
  const location = useLocation()
  const [contact, setContact] = useState()
  const [isValidContact, setIsValidContact] = useState(true)
  const ingredientsPrices = useSelector(state => state.ingredientsPrices)

  const ingredients = qs.parse(location.search.slice(1))

  const totalPrice = _.reduce(
		ingredients,
		(sum, quantity, ingredient) => {
			return sum + ingredientsPrices[ingredient] * quantity
		},
		0
	)

  function handleContactChange(isValid, contact) {
    setContact(contact)
    setIsValidContact(isValid)
  }

  function handleCancel() {
    history.goBack()
  }

  function handleCheckout() {
    if (!isValidContact) return

		const order = {
			ingredients,
			totalPrice,
			customer: {
				name: contact.name,
        street: contact.street,
        zipCode: contact.zipCode,
				email: contact.email,
			},
      deliveryMethod: contact.deliveryMethod,
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
