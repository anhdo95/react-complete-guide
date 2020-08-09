import React, { useReducer } from 'react'

import classes from './ContactForm.module'

const initialState = {
  name: '',
  street: '',
  postalCode: '',
  email: ''
}

function contactReducer (state = initialState, action) {
  switch (action.type) {
    case 'UPDATE':
      state[action.key] = action.value
      break;
  
    default:
      break;
  }

  return { ...state }
}

export default function ContactForm( props ) {
  const [state, dispatch] = useReducer(contactReducer, initialState)

  function handleInputChange({ target }) {
    dispatch({
      type: 'UPDATE',
      key: target.name,
      value: target.value
    })

    props.onChange(state)
  }

  return (
		<form className={classes.ContactForm}>
			<h3>Contact Form</h3>
			<input
				name="name"
				value={state.name}
				className={classes.Input}
				placeholder="Your name"
				onChange={handleInputChange}
			/>
			<input
				name="street"
				value={state.street}
				className={classes.Input}
				placeholder="Your street"
				onChange={handleInputChange}
			/>
			<input
				name="postalCode"
				value={state.postalCode}
				className={classes.Input}
				placeholder="Your postal code"
				onChange={handleInputChange}
			/>
			<input
				name="email"
				value={state.email}
				className={classes.Input}
				placeholder="Your email"
				onChange={handleInputChange}
			/>
		</form>
	)
}
