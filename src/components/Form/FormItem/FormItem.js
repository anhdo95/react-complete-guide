import React, { useState } from 'react'

import classes from './FormItem.module'

export default function FormItem( props ) {
  const [errors, setErrors] = useState([])

  function handleChange({ target }) {
    let validityErrors = []

    if (props.rules) {
      for (let rule of props.rules) {
        if (rule.validator(target.value)) {
          validityErrors.push(rule)
          break
        }
      }
    }

    setErrors(validityErrors)

    props.onChange({
      name: props.name,
      value: target.value,
      validity: {
        isValid: !!!validityErrors.length,
        errors: validityErrors
      }
    })
  }

  return (
		<div className={classes.FormItem}>
			<label className={classes.Label}>{props.label}</label>
			{React.cloneElement(props.children, { onChange: handleChange })}
			{!!errors.length && <span className={classes.Error}>{errors[0].message}</span>}
		</div>
	)
}
