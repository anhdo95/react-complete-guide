import React, { useEffect } from 'react'

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
  useEffect(() => {
    if (props.items && props.items.length) {
      props.onChange({
				target: { value: props.items[0].value },
			})
    }

  }, [])

  const attrs = AVAILABLE_ATTRS.reduce((result, attr) => {
    props[attr] && (result[attr] = props[attr])
    return result
  }, {})

  return (
		<select {...attrs} className={classes.Select} onChange={props.onChange}>
			{props.items &&
				props.items.map((item) => (
					<option key={item.value} value={item.value}>
						{item.text}
					</option>
				))}
		</select>
	)
}
