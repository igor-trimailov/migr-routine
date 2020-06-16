import React from 'react'
import ReactDOM from 'react-dom'
import { useHistory } from 'react-router-dom'

import LoginForm from '../../containers/account/LoginForm'



import { ModalSubroute } from '../../constants'



function LoginModal() {
  return (
    <div className="fc-modal__container">
      <div className="fc-modal__header"></div>
      <div className="fc-modal__body">
        <LoginForm />
      </div>
    </div>
  )
}

function Modal({ config, subroute }) {
  const history = useHistory()

  const back = (e) => {
    e.stopPropagation()
    history.goBack()
  }

  return ReactDOM.createPortal(
    <div className="fc-modal__wrapper" onClick={back}>
      <div
        className="fc-modal"
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <div className="fc-modal__close" onClick={back}></div>
        {subroute === ModalSubroute.LOGIN && <LoginModal />}
      </div>
    </div>,
    document.querySelector('#modal')
  )
}

export default Modal
