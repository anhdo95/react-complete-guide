import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as ACTION from '@/store/action'

import classes from './BuildControl.module'

export default function BuildControl( props ) {
	const dispatch = useDispatch()
  const ingredients = useSelector(state => state.ingredients)

  const add = useCallback(() => dispatch(ACTION.addIngredient(props.control.type)), [
		props.control.type,
	])
	
	const remove = useCallback(() => dispatch(ACTION.removeIngredient(props.control.type)), [
		props.control.type,
	])

  return (
		<div className={classes.BuildControl}>
			<label className={classes.Label}>{props.control.label}</label>
			<button className={classes.Less} onClick={remove} disabled={!ingredients[props.control.type]}>
				Less
			</button>
			<button className={classes.More} onClick={add}>
				More
			</button>
		</div>
	)
}
