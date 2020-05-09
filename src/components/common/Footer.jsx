import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__header">FizzCultApp</div>
        <div className="footer__links">
          <Link>Privacy policy</Link>
          <Link>Contact Us</Link>
        </div>
        <div className="footer__social">
          <div className="footer__social-item footer__social-item--twitter"></div>
          <div className="footer__social-item footer__social-item--facebook"></div>
          <div className="footer__social-item footer__social-item--instagram"></div>
          <div className="footer__social-item footer__social-item--linkedin"></div>
        </div>
        <div className="footer__copyright">
          © 2020 Igor, Inc. All Rights Reserved
        </div>
      </div>
    </div>
  )
}

export default Footer
