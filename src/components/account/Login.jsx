import React from 'react'

function Login(props) {
  const { actions, isLoading, error, notification } = props

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!event.target.checkValidity()) {
      console.warn('validation error')
    } else {
      const formData = new FormData(event.target)
      actions.accountRequestLogin(formData)
    }
  }

  const handlePasswordReset = () => {
    actions.accountOpenPasswordResetForm()
  }

  const handleRegister = () => {
    actions.accountOpenRegisterForm()
  }

  return (
    <div className="fc-form">
      <div className="fc-form__header">Sign In</div>

      {error && <div className="fc-form__error">{error}</div>}
      {notification && <div className="fc-form__notification">{notification}</div>}

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

          <label className="fc-form__label" htmlFor="fc-password">
            Password
            <input
              className="fc-form__input"
              id="fc-password"
              name="password"
              type="password"
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
                'Sign in'
              )}
            </span>
          </button>

          <p className="fc-form__sign-up">
            Don't have an account?
            <span className="fc-form__sign-up-here" onClick={handleRegister}>
              Create one here!
            </span>
          </p>

          <p className="fc-form__reminder" onClick={handlePasswordReset}>
            Forgot password?
          </p>
        </fieldset>
      </form>
    </div>
  )
}

export default Login
