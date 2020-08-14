import React from 'react'

import classes from './FormItem.module'

export default function FormItem( props ) {
  function handleChange({ target }) {
    props.onChange({
      name: props.name,
      value: target.value
    })
  }

  return (
    <div className={classes.FormItem}>
      <label className={classes.Label}>{ props.label }</label>
      { React.cloneElement(props.children, { onChange: handleChange }) }
    </div>
  )
}
