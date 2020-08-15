import React from 'react'
import { Link } from 'react-router-dom'
import validator from 'validator'
import Cookies from 'js-cookie'

import * as apiService from '@/services/api.service'
import Form from '@/components/Form/Form'
import FormItem from '@/components/Form/FormItem/FormItem'
import Input from '@/components/Form/Input/Input'
import Button from '@/components/Button/Button'

import classes from './SignIn.module'

const signInControls = [
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

export default function SignIn() {
  function handleSubmit(isValid, values) {
    if (isValid) {
      apiService.signIn({
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
        
        window.location = '/'
      })
    }
  }

  return (
    <Form className={classes.SignIn} onSubmit={handleSubmit}>
			<h3>Sign In Form</h3>
			{signInControls.map((control) => (
				<FormItem
					key={control.name}
					name={control.name}
					label={control.label}
					rules={control.rules}
				>
					{control.element}
				</FormItem>
			))}
			<p>If you don't have an account yet? Move to <Link to="/sign-up">sign up instead</Link></p>
      <Button theme="Success" type="submit">Sign in</Button>
		</Form>
  )
}
