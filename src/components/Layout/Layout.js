import React from 'react'

import Toolbar from '@/components/Navigation/Toolbar/Toolbar'
import classes from './Layout.module'

export default function Layout( props ) {
  return (
    <div className={classes.layout}>
      <Toolbar />
      <main className={classes.Main}>{ props.children }</main>
    </div>
  )
}
