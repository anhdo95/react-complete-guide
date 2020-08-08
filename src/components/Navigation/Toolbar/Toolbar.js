import React from 'react'

import logo from '@/assets/burger-logo.png'
import classes from './Toolbar.module'
import NavigationItem from '../NavigationItem/NavigationItem'

export default function Toolbar() {
  return (
    <div className={classes.Toolbar}>
      <div className={classes.LogoContainer}>
        <img className={classes.Logo} src={logo} alt="Logo" />
      </div>
      <nav className={classes.Nav}>
        <NavigationItem href="/" active>Burger Builder</NavigationItem>
        <NavigationItem href="/checkout">Checkout</NavigationItem>
      </nav>
    </div>
  )
}
