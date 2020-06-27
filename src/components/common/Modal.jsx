import React, { useCallback } from 'react'
import ReactDOM from 'react-dom'
import { useHistory } from 'react-router-dom'

import LoginForm from '../../containers/account/LoginForm'

import { ModalSubroute } from '../../constants'

function Modal({ subroute }) {
  const history = useHistory()

  const closeModal = useCallback(() => {
    history.goBack()
  }, [history])

  return ReactDOM.createPortal(
    <div className="fc-modal__wrapper" onClick={closeModal}>
      <div
        className="fc-modal"
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <div className="fc-modal__close" onClick={closeModal}></div>
        <div className="fc-modal__container">
          <div className="fc-modal__header"></div>
          <div className="fc-modal__body">
            {subroute === ModalSubroute.LOGIN && (
              <LoginForm closeModal={closeModal} />
            )}
          </div>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  )
}

export default Modal
