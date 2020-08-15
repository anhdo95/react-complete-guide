import React, { useReducer } from 'react'
import _ from 'lodash'

import classes from './Form.module'

const initialState = {
  controls: {},
  isValid: true,
}

function formReducer (state = initialState, action) {
  switch (action.type) {
    case 'UPDATE':
      state.controls[action.key] = {
        value: action.value,
        validity: action.validity,
      }
      break;

    case 'CHECK_VALID':
      state.isValid = _.every(state.controls, (control) => control.validity.isValid)
      break
  
    default:
      break;
  }

  return _.cloneDeep(state)
}

function mapControlsToValues(controls) {
  return _.reduce(
    controls,
    (result, control, key) => {
      result[key] = control.value
      return result
    },
    {}
  )
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
      value: control.value,
      validity: control.validity
    })
    dispatch({ type: 'CHECK_VALID' })

    props.onChange && props.onChange(state.isValid, mapControlsToValues(state.controls))
  }
  
  function handleSubmit(event) {
    event.preventDefault()
    props.onSubmit && props.onSubmit(state.isValid, mapControlsToValues(state.controls))
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
