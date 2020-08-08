import React from 'react'

import classes from './BuildControl.module'

export default function BuildControl( props ) {
  return (
    <div className={classes.BuildControl}>
      <label className={classes.Label}>{props.label}</label>
      <button className={classes.Less} onClick={props.onRemove} disabled={!props.ingredient}>Less</button>
      <button className={classes.More} onClick={props.onAdd}>More</button>
    </div>
  )
}
