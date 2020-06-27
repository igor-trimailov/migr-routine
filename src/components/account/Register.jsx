import React from 'react'
import { OverlayTrigger, Tooltip } from 'react-bootstrap'

const Register = (props) => {
  const { actions, isLoading, error, notification } = props

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!event.target.checkValidity()) {
      console.warn('validation error')
    } else {
      const formData = new FormData(event.target)
      actions.accountRequestRegister(formData)
    }
  }

  const handleLogin = () => {
    actions.accountOpenLoginForm()
  }

  const PasswordTooltip = (props) => (
    <Tooltip {...props}>
      Password must be at least 8 characters long, have upper and lower case
      letters and numbers
    </Tooltip>
  )

  return (
    <div className="fc-form">
      <div className="fc-form__header">Register a new user</div>

      {error && <div className="fc-form__error">{error}</div>}
      {notification && (
        <div className="fc-form__notification">{notification}</div>
      )}

      <form onSubmit={handleSubmit}>
        <fieldset className="fc-form__body" disabled={isLoading}>
          <label className="fc-form__label" htmlFor="fc-name">
            Name
            <input
              className="fc-form__input"
              id="fc-name"
              name="name"
              type="text"
              required
            />
          </label>

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
            <span className="fc-form__label-text">
              Password
              <OverlayTrigger placement="bottom" overlay={PasswordTooltip}>
                <span className="fc-form__password-info" />
              </OverlayTrigger>
            </span>

            <input
              className="fc-form__input"
              id="fc-password"
              name="password"
              type="password"
              required
              pattern="^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$"
            />
          </label>

          <button type="submit" className="fc-form__button">
            <span className="fc-form__button-text">
              {isLoading ? (
                <span>
                  Loading<span className="dot-loader"></span>
                </span>
              ) : (
                'Register'
              )}
            </span>
          </button>

          <p className="fc-form__sign-up">
            Already have an account?
            <span className="fc-form__sign-up-here" onClick={handleLogin}>
              Sign in here!
            </span>
          </p>
        </fieldset>
      </form>
    </div>
  )
}

export default Register
