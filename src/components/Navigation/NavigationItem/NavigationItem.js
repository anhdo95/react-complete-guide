import React from 'react'

import classes from './NavigationItem.module'

export default function NavigationItem( props ) {
  return (
		<li className={[classes.NavigationItem].join(' ')}>
			<a className={[classes.NavigationLink, props.active && classes.Active].join(' ')} href={props.href}>
				{props.children}
			</a>
		</li>
	)
}
