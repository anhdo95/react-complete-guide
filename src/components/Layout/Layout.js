import React from 'react'

import classes from './Layout.module'

export default function Layout( props ) {
  return (
    <div className={classes.layout}>
      <header>
        Toolbar, SideDrawer, Backdrop
      </header>
      <main>{ props.children }</main>
    </div>
  )
}
