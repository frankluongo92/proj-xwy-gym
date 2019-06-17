import React from 'react'

const TileWrapper = ({ children }) => {

  console.log(children);

  return (
    <ul className="container tile-wrapper">
      { children }
    </ul>
  )
}

export default TileWrapper
