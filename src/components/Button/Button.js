import React from 'react'

import classes from './Button.module'

export default function Button( props ) {
  return (
    <button className={[classes.Button, classes[props.type]].join(' ')} {...props}>
      {props.children}
    </button>
  )
}
