import React from 'react'

import classes from './Modal.module'

function Modal(props) {
	return (
		<>
			{props.show && <div className={classes.Backdrop} onClick={props.onBackdropClick}></div>}
			<div className={[classes.Modal, props.show && classes.ModalOpen].join(' ')}>
				{props.children}
			</div>
		</>
	)
}

function areEqual(prevProps, nextProps) {
	return prevProps.show === nextProps.show
}

export default React.memo(Modal, areEqual)
