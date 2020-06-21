import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import isEmpty from 'lodash/isEmpty'

// wrapper for authenticated content, will show children when authenticated
// or unauthenticated placehodler when not
function Authenticated(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const user = useSelector((state) => state.user)

  const { unauthenticated } = props

  useEffect(() => {
    if (!isEmpty(user)) {
      // TODO: add more auth steps
      // ways to validate the user:
      // - check state for user - will do this for now
      // - check session cookie
      // - check for refresh token and it's expiration
      // - make an api call to validate the token
      setIsLoading(false)
      setIsAuthenticated(true)
    } else {
      setIsAuthenticated(false)
    }
  }, [user])

  // optional fallback if not authenticated
  if ((!isAuthenticated || isLoading) && unauthenticated) {
    return <React.Fragment>{unauthenticated}</React.Fragment>
  }

  // no fallback option
  if (!isAuthenticated) {
    return null
  }

  return <React.Fragment>{props.children}</React.Fragment>
}

export default Authenticated
