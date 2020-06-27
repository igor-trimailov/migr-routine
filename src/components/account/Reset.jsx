import React from 'react'

const Reset = (props) => {
  const { actions, isLoading, error, notification } = props

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!event.target.checkValidity()) {
      console.warn('validation error')
    } else {
      const formData = new FormData(event.target)
      actions.accountRequestPasswordReset(formData)
    }
  }

  const handleLogin = () => {
    actions.accountOpenLoginForm()
  }

  const handleRegister = () => {
    actions.accountOpenRegisterForm()
  }

  return (
    <div className="fc-form">
      <div className="fc-form__header">
        Enter your email to reset the password
      </div>

      {error && <div className="fc-form__error">{error}</div>}

      {notification && (
        <div className="fc-form__notification">{notification}</div>
      )}

      <form onSubmit={handleSubmit}>
        <fieldset className="fc-form__body" disabled={isLoading}>
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

          <button type="submit" className="fc-form__button">
            <span className="fc-form__button-text">
              {isLoading ? (
                <span>
                  Loading<span className="dot-loader"></span>
                </span>
              ) : (
                'Reset'
              )}
            </span>
          </button>

          <p className="fc-form__sign-up">
            Don't have an account?
            <span className="fc-form__sign-up-here" onClick={handleRegister}>
              Create one here!
            </span>
          </p>

          <p className="fc-form__sign-up">
            Remembered the password?
            <span className="fc-form__sign-up-here" onClick={handleLogin}>
              Sign in here!
            </span>
          </p>
        </fieldset>
      </form>
    </div>
  )
}

export default Reset
