import React, { useState } from 'react'
import classNames from 'classnames'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

import { CSSTransition } from 'react-transition-group'

function LoginForm(props) {
  const [signup, setSignup] = useState(false)
  const [validationError, setValidationError] = useState('')

  console.log(props)

  const toggleSignup = () => {
    setSignup(!signup)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!e.target.checkValidity()) {
      // set local validation error
      // setValidationError('Invalid email and/or password')
    } else {
      // collect data, make a auth call
      const data = new FormData(e.target)

      console.log(data)
    }
  }

  const Link = ({ text }) => {
    return (
      <div className="fc-form__link" onClick={toggleSignup}>
        {text}
      </div>
    )
  }

  const header = !signup ? (
    <span>
      Sing In / <Link text="Sign Up" />
    </span>
  ) : (
    <span>
      <Link text="Sign In" /> / Sign Up
    </span>
  )

  const nameCSS = classNames('fc-form__label', {
    'fc-form__label--hidden': !signup,
  })
  const nameAttr = {
    ...(signup && { required: 'required' }),
  }

  const PasswordTooltip = (props) => (
    <Tooltip {...props}>
      <p>Password must have:</p>
      <ul>
        <li>length of at least 8 characters</li>
        <li>at least two upper case letters</li>
        <li>at least three lower case letters</li>
        <li>at least one special case letter(\!\@\#\$\&)</li>
        <li>at least two digits</li>
      </ul>
    </Tooltip>
  )

  return (
    <div className="fc-form">
      <div className="fc-form__header">{header}</div>

      <form className="fc-form__body" onSubmit={handleSubmit}>
        <CSSTransition in={signup} timeout={300} classNames="fc-form__label">
          <label className={nameCSS} htmlFor="fc-name">
            Name
            <input
              className="fc-form__input"
              id="fc-name"
              type="text"
              {...nameAttr}
            />
          </label>
        </CSSTransition>

        <label className="fc-form__label" htmlFor="fc-email">
          Email
          <input
            className="fc-form__input"
            id="fc-email"
            type="email"
            required
          />
        </label>

        <label className="fc-form__label" htmlFor="fc-password">
          Password
          {signup && (
            
              <OverlayTrigger placement="bottom" overlay={PasswordTooltip}>
                <span className="fc-form__password-info" />
              </OverlayTrigger>
          )}
          <input
            className="fc-form__input"
            id="fc-password"
            type="password"
            pattern="^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$"
            required
          />
        </label>

        <input
          type="submit"
          className="fc-form__button"
          value={signup ? 'Sign Up' : 'Sign In'}
        />

        <p className="fc-form__reminder">Forgot password?</p>
      </form>
    </div>
  )
}

export default LoginForm
