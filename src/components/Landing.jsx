import React from 'react'
import { useHistory } from 'react-router-dom'

function Landing() {
  const history = useHistory()

  function handleClick() {
    history.push(`${process.env.PUBLIC_URL}/exercise`)
  }
  return (
    <div className="landing-page">
      <button onClick={handleClick}>start</button>
    </div>
  )
}

export default Landing
