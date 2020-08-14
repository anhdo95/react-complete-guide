import React from 'react'

import Form from '@/components/Form/Form'
import FormItem from '@/components/Form/FormItem/FormItem'
import Input from '@/components/Form/Input/Input'
import Select from '@/components/Form/Select/Select'

import * as constants from '@/shared/constants'

import classes from './ContactForm.module'

export default function ContactForm( props ) {
	function handleSubmit(isValid, values) {
		console.log('isValid', isValid)
		console.log('values', values)
	}

	function handleChange(isValid, values) {
		console.log('isValid', isValid)
		console.log('values', values)
	}

  return (
		<Form className={classes.ContactForm} onSubmit={handleSubmit} onChange={handleChange}>
			<h3>Contact Form</h3>
			<FormItem name="name" label="Name">
				<Input placeholder="Your name" />
			</FormItem>
			<FormItem name="street" label="Street">
				<Input placeholder="Your street" />
			</FormItem>
			<FormItem name="email" label="Email">
				<Input placeholder="Your email" />
			</FormItem>
			<FormItem name="zipCode" label="Zip Code">
				<Input placeholder="Your zip code" />
			</FormItem>
			<FormItem name="deliveryMethod"label="Delivery Method">
				<Select placeholder="Delivery method" items={constants.DELIVERY_METHODS} />
			</FormItem>
			<button type="submit">dsa</button>
		</Form>
	)
}
