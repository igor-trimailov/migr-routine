import React from 'react'

function Loader() {
  return (
    <div className="fc-loader">
      <div className="fc-loader__header"></div>
      <div className="fc-loader__body">
        <div className="fc-loader__content">
          <span className="fc-loader__spinner"></span>
        </div>
      </div>
      <div className="fc-loader__footer"></div>
    </div>
  )
}

export default Loader