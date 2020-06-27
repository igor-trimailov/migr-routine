import React, { useEffect } from 'react'
import Login from './Login'
import Register from './Register'
import Reset from './Reset'

const LoginForm = (props) => {
  const { openLogin, openRegister, openReset, closeModalCallback } = props

  useEffect(() => {
    if (!openLogin && !openRegister && !openReset) {
      closeModalCallback()
    }
  }, [openLogin, openRegister, openReset, closeModalCallback])

  return (
    <React.Fragment>
      {openLogin && <Login {...props} />}
      {openRegister && <Register {...props} />}
      {openReset && <Reset {...props} />}
    </React.Fragment>
  )
}

export default LoginForm
