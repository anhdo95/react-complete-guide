import React from 'react'

import classes from './Select.module'

const AVAILABLE_ATTRS = [
  "autocomplete",
  "autofocus",
  "multiple",
  "disabled",
  "form",
  "name",
  "placeholder",
  "readonly",
  "required",
  "size",
  "value",
]

export default function Select( props ) {
  const attrs = AVAILABLE_ATTRS.reduce((result, attr) => {
    props[attr] && (result[attr] = props[attr])
    return result
  }, {})

  return (
		<select {...attrs} className={classes.Select}>
			{props.items &&
				props.items.map((item) => (
					<option key={item.value} value={item.value}>
						{item.text}
					</option>
				))}
		</select>
	)
}
