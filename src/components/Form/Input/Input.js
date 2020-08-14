import React from 'react'

import classes from './Input.module'

const AVAILABLE_ATTRS = [
  "alt",
  "autocomplete",
  "autofocus",
  "capture",
  "disabled",
  "form",
  "formaction",
  "formenctype",
  "formmethod",
  "formnovalidate",
  "formtarget",
  "height",
  "list",
  "max",
  "maxlength",
  "min",
  "minlength",
  "name",
  "pattern",
  "placeholder",
  "readonly",
  "required",
  "size",
  "step",
  "value",
]

export default function Input( props ) {
  const attrs = AVAILABLE_ATTRS.reduce((result, attr) => {
    props[attr] && (result[attr] = props[attr])
    return result
  }, {})

  return <input {...attrs} className={classes.Input} type="text" onChange={props.onChange} />
}
