import React from 'react'

const CallToActionTileWrapper = ({ children }) => {
  return (
    <section className="call-to-action-tile-wrapper">
      <div className="call-to-action-tile-wrapper__content">
        { children }
      </div>
    </section>
  )
}

export default CallToActionTileWrapper
