import React from 'react'
import { NavLink } from 'react-router-dom'

import classes from './NavigationItem.module'

export default function NavigationItem( props ) {
	const { children, ...rest } = props

  return (
		<li className={classes.NavigationItem}>
			<NavLink className={classes.NavigationLink} activeClassName={classes.Active} {...rest}>
				{props.children}
			</NavLink>
		</li>
	)
}
