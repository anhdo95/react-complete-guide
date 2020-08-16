import React from 'react'
import { Transition } from 'react-transition-group'

import classes from './Modal.module'

function Modal(props) {
	return (
		<Transition in={props.show} timeout={300} mountOnEnter unmountOnExit>
			{state => (
				<div className={classes.Modal}>
					{<div className={classes.Backdrop} onClick={props.onBackdropClick}></div>}
					<div className={[classes.ModalContent, classes[state]].join(' ')}>
						{props.children}
					</div>
				</div>
			)}
		</Transition>
	)
}

function areEqual(prevProps, nextProps) {
	return prevProps.show === nextProps.show
}

export default React.memo(Modal, areEqual)
