import React from 'react'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'

import logo from '@/assets/burger-logo.png'
import classes from './Toolbar.module'
import NavigationItem from '../NavigationItem/NavigationItem'

export default function Toolbar() {
  const isAuthenticated =  Cookies.get('token')

  return (
		<div className={classes.Toolbar}>
			<div className={classes.LogoContainer}>
				<Link to="/">
					<img className={classes.Logo} src={logo} alt="Logo" />
				</Link>
			</div>
			<nav className={classes.Nav}>
				<NavigationItem to="/" exact>
					Burger Builder
				</NavigationItem>
				{isAuthenticated && (
					<NavigationItem to="/orders" exact>
						Orders
					</NavigationItem>
				)}
				{isAuthenticated ? (
					<NavigationItem to="/sign-out" exact>
						Sign Out
					</NavigationItem>
				) : (
					<NavigationItem to="/sign-in" exact>
						Sign In
					</NavigationItem>
				)}
			</nav>
		</div>
	)
}
