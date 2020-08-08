import React from 'react'

import classes from './BuildControl.module'

export default function BuildControl( props ) {
  return (
    <div className={classes.BuildControl}>
      <label className={classes.Label}>{props.label}</label>
      <span className={classes.Less} onClick={props.onRemove}>Less</span>
      <span className={classes.More} onClick={props.onAdd}>More</span>
    </div>
  )
}
