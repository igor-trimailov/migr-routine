import React from 'react'
import ReactDOM from 'react-dom'
import { useHistory } from 'react-router-dom'

function Modal() {
  const history = useHistory()

  const back = (e) => {
    e.stopPropagation()
    history.goBack()
  }

  return ReactDOM.createPortal(
    <div className="fc-modal__wrapper" onClick={back}>
      <div className="fc-modal">
        <h1>I am a Modal</h1>
        <button type="button" onClick={back}>
          Close
        </button>
      </div>
    </div>,
    document.querySelector('#modal')
  )
}

export default Modal
