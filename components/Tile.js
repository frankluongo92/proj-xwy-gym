import React from 'react'

const Tile = ({ color, children}) => {
  return (
    <li className={`tile tile--${color}`}>
      <div className="tile__content">
        { children }
      </div>
    </li>
  )
}

Tile.defaultProps = {
  color: 'default'
};

export default Tile
