import React from 'react'
import { Image } from 'react-bootstrap'

function Header({ heading, text, image, children }) {
  return (
    <div className="fc-header">
      <div className="fc-header__container">
        <div className="fc-header__text">
          <div className="fc-header__text-heading">{heading}</div>
          <div className="fc-header__text-text">{text}</div>
        </div>
        {image && (
          <div className="fc-header__image">
            <Image src={process.env.PUBLIC_URL + '/images/' + image} fluid />
          </div>
        )}
        <div className="fc-header__children">{children}</div>
      </div>
    </div>
  )
}

export default Header
