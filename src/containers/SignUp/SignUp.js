import React from 'react'
import { Link } from 'react-router-dom'
import validator from 'validator'
import Cookies from 'js-cookie'
import qs from 'qs'

import * as apiService from '@/services/api.service'
import Form from '@/components/Form/Form'
import FormItem from '@/components/Form/FormItem/FormItem'
import Input from '@/components/Form/Input/Input'
import Button from '@/components/Button/Button'

import classes from './SignUp.module'

const signUpControls = [
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
				message: "Your email is not a correct format"
			}
		]
	},
	{
		element: <Input type="password" placeholder="Your password" />,
		name: "password",
		label: "Password",
		rules: [
			{
				validator: validator.isEmpty,
				message: "Password is required."
      },
      {
        validator: (value) => !validator.isLength(value, { min: 6 }),
        message: "Password must at least be 6 characters."
      }
		]
  },
]

export default function SignUp() {
  const query = qs.parse(window.location.search.slice(1))

  function handleSubmit(isValid, values) {
    if (isValid) {
      apiService.signUp({
        email: values.email,
        password: values.password,
        returnSecureToken: true
      })
      .then((res) => {
        const expires = new Date()
        expires.setSeconds(expires.getSeconds() + Number(res.expiresIn))

        Cookies.set('token', res.idToken, {
          expires
				})
				
				setTimeout(() => {
          Cookies.remove('token')
        }, expires - Date.now())
        
        window.location = query.redirectUrl
      })
    }
  }

  return (
		<Form className={classes.SignUp} onSubmit={handleSubmit}>
			<h3>Sign Up Form</h3>
			{signUpControls.map((control) => (
				<FormItem
					key={control.name}
					name={control.name}
					label={control.label}
					rules={control.rules}
				>
					{control.element}
				</FormItem>
			))}
			<p>
				If you have an account already? Move to{' '}
				<Link to={`/sign-in${window.location.search}`}>sign in instead</Link>
			</p>
			<Button theme="Success" type="submit">
				Sign up
			</Button>
		</Form>
	)
}
