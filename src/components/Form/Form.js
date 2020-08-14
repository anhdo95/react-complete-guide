import React, { useReducer } from 'react'

import classes from './Form.module'

const initialState = {}

function formReducer (state = initialState, action) {
  switch (action.type) {
    case 'UPDATE':
      state[action.key] = action.value
      break;
  
    default:
      break;
  }

  return { ...state }
}

export default function Form( props ) {
  const [state, dispatch] = useReducer(formReducer, initialState)
  let elements = React.Children.toArray(props.children)

  if (elements.length) {
    elements = elements.map(el => React.cloneElement(el, { onChange: handleChange }))
  }

  function handleChange(control) {
    dispatch({
      type: 'UPDATE',
      key: control.name,
      value: control.value
    })

    props.onChange(true, state)
  }
  
  function handleSubmit(event) {
    event.preventDefault()

    const isValid = true
    const values = state

    props.onSubmit(isValid, values)
  }

  return (
		<form
			className={[classes.Form, props.className && props.className].join(' ')}
			onSubmit={handleSubmit}
		>
			{elements}
		</form>
	)
}
