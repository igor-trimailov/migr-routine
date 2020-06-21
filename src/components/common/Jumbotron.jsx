import React from 'react'
import { Image } from 'react-bootstrap'

function Jumbotron({ heading, text, image, children }) {
  return (
    <div className="fc-jumbotron">
      <div className="fc-jumbotron__container">
        <div className="fc-jumbotron__text">
          <div className="fc-jumbotron__text-heading">{heading}</div>
          <div className="fc-jumbotron__text-text">{text}</div>
        </div>
        {image && (
          <div className="fc-jumbotron__image">
            <Image src={process.env.PUBLIC_URL + '/images/' + image} fluid />
          </div>
        )}
        <div className="fc-jumbotron__children">{children}</div>
      </div>
    </div>
  )
}

export default Jumbotron
