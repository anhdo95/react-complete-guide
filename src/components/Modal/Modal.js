import React from 'react'

import classes from './Modal.module'

export default function Modal( props ) {
  return (
		<>
			{props.show && <div className={classes.Backdrop} onClick={props.onBackdropClick}></div>}
			<div className={[classes.Modal, props.show && classes.ModalOpen].join(' ')}>
				{props.children}
			</div>
		</>
	)
}
