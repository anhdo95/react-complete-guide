import React from 'react'

import Button from '@/components/Button/Button'

import classes from './Actions.module'

export default function Actions( props ) {
  return (
    <div className={classes.Actions}>
        <Button type="Danger" onClick={props.onCancel}>Cancel</Button>
        <Button type="Success" onClick={props.onComplete}>Complete</Button>
      </div>
  )
}
