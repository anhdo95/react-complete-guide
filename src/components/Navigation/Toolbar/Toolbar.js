import React from 'react'
import { Link } from 'react-router-dom'

import logo from '@/assets/burger-logo.png'
import classes from './Toolbar.module'
import NavigationItem from '../NavigationItem/NavigationItem'

export default function Toolbar() {
  return (
    <div className={classes.Toolbar}>
      <div className={classes.LogoContainer}>
        <Link to="/"><img className={classes.Logo} src={logo} alt="Logo" /></Link>
      </div>
      <nav className={classes.Nav}>
        <NavigationItem to="/" exact>Burger Builder</NavigationItem>
        <NavigationItem to="/sign-in" exact>Sign In</NavigationItem>
      </nav>
    </div>
  )
}
