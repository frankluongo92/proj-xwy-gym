import React from 'react'

const Tile = ({ size, children}) => {
  return (
    <li className={`tile tile--${size}`}>
      { children }
    </li>
  )
}

export default Tile
