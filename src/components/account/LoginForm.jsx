import React, { useState, useCallback } from 'react'
import classNames from 'classnames'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'
import { CSSTransition } from 'react-transition-group'

function LoginForm(props) {
  const [signup, setSignup] = useState(false)

  const toggleSignup = useCallback(() => {
    setSignup(!signup)
  }, [signup])

  const { actions, isLoading, isLoggedIn, isRegistered, error } = props

  // TODO: add pretty message and close the dialog in 3-ish seconds
  if (isLoggedIn) {
    return <div>Wellcome back... you...</div>
  }

  // TODO: add pretty message and reditect to login popup
  if (isRegistered) {
    return <div>Registration was successfull!</div>
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!event.target.checkValidity()) {
      // TODO: do some front-end validation that is not in the store?
      console.log('validation error')
    } else {
      const formData = new FormData(event.target)

      if (signup) {
        actions.accountRequestRegister(formData)
      } else {
        actions.accountRequestLogin(formData)
      }
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
        <li>at least one upper case letter</li>
        <li>at least one lower case letters</li>
        <li>at least one special characters</li>
        <li>at least one digit</li>
      </ul>
    </Tooltip>
  )

  const passwordAttr = {
    ...(signup && {
      pattern: '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,32}$',
    }),
  }

  const reminderClassNames = classNames('fc-form__reminder', {
    'fc-form__reminder--disabled': isLoading,
  })

  return (
    <div className="fc-form">
      <div className="fc-form__header">{header}</div>

      {error && <div className="fc-form__error">{error}</div>}

      <form onSubmit={handleSubmit}>
        <fieldset className="fc-form__body" disabled={isLoading}>
          <CSSTransition in={signup} timeout={300} classNames="fc-form__label">
            <label className={nameCSS} htmlFor="fc-name">
              Name
              <input
                className="fc-form__input"
                id="fc-name"
                name="name"
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
              name="email"
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
              name="password"
              type="password"
              required
              {...passwordAttr}
            />
          </label>

          <button type="submit" className="fc-form__button">
            <span className="fc-form__button-text">
              {isLoading ? 'Loading' : 'Sign in'}
              {isLoading && <span className="dot-loader"></span>}
            </span>
          </button>

          <p className={reminderClassNames}>Forgot password?</p>
        </fieldset>
      </form>
    </div>
  )
}

export default LoginForm
