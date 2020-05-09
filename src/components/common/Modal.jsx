import React from 'react'
import ReactDOM from 'react-dom'
import { useHistory } from 'react-router-dom'

function LoginModal() {
  return <div className="login-form"></div>
}

function Modal({ config, subroute }) {
  const history = useHistory()

  const back = (e) => {
    e.stopPropagation()
    history.goBack()
  }

  return ReactDOM.createPortal(
    <div className="fc-modal__wrapper" onClick={back}>
      <div className="fc-modal">
        <h1>Login not available yet: {subroute}</h1>
        <button type="button" onClick={back}>
          Close
        </button>
      </div>
    </div>,
    document.querySelector('#modal')
  )
}

export default Modal
