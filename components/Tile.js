import React, { useState } from 'react'
import { Waypoint } from 'react-waypoint';
import { animated, useSpring } from 'react-spring';

const Tile = ({ color, children}) => {
  const [active, toggleActive] = useState(false);

  const animation = useSpring({
    opacity: active ? 1 : 0,
    transform: active ? 'scale(1)' : 'scale(0)'
  });

  const showTile = () => {
    toggleActive(true);
  }

  const hideTile = () => {
    toggleActive(false);
  }

  return (
    <Waypoint onEnter={showTile} onLeave={hideTile}>
    <animated.li className={`tile tile--${color}`} style={animation}>
      <div className="tile__content">
        { children }
      </div>
    </animated.li>
    </Waypoint>
  )
}

Tile.defaultProps = {
  color: 'default'
};

export default Tile
