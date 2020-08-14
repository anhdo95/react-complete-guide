import React from 'react'
import validator from 'validator'

import Form from '@/components/Form/Form'
import FormItem from '@/components/Form/FormItem/FormItem'
import Input from '@/components/Form/Input/Input'
import Select from '@/components/Form/Select/Select'

import * as constants from '@/shared/constants'

import classes from './ContactForm.module'

const contactControls = [
	{
		element: <Input placeholder="Your name" />,
		name: "name",
		label: "Name",
		rules: [
			{
				validator: validator.isEmpty,
				message: "Name is required."
			}
		]
	},
	{
		element: <Input placeholder="Your street" />,
		name: "street",
		label: "Street",
		rules: [
			{
				validator: validator.isEmpty,
				message: "Street is required."
			}
		]
	},
	{
		element: <Input placeholder="Your email" />,
		name: "email",
		label: "Email",
		rules: [
			{
				validator: validator.isEmpty,
				message: "Email is required."
			},
			{
				validator: (value) => !validator.isEmail(value),
				message: "Email is not a correct format"
			}
		]
	},
	{
		element: <Input placeholder="Your zip code" />,
		name: "zipCode",
		label: "Zip Code",
		rules: [
			{
				validator: validator.isEmpty,
				message: "Zip Code is required."
			}
		]
	},
	{
		element: <Select placeholder="Delivery method" items={constants.DELIVERY_METHODS} />,
		name: "deliveryMethod",
		label: "Delivery Method",
		rules: [
			{
				validator: validator.isEmpty,
				message: "Delivery Method is required."
			}
		]
	},
]

export default function ContactForm( props ) {
	function handleSubmit(isValid, values) {
		console.log('isValid', isValid)
		console.log('values', values)
	}

	function handleChange(isValid, values) {
		props.onChange(isValid, values)
	}

  return (
		<Form className={classes.ContactForm} onSubmit={handleSubmit} onChange={handleChange}>
			<h3>Contact Form</h3>
			{contactControls.map((control) => (
				<FormItem
					key={control.name}
					name={control.name}
					label={control.label}
					rules={control.rules}
				>
					{control.element}
				</FormItem>
			))}
		</Form>
	)
}
