import React from 'react'
import { animated } from 'react-spring';

const StyledList = ({ children, customClass, animation }) => {
  return (
    <animated.ul className={`styled-list ${customClass}__styled-list`} style={animation}>
      { children }
    </animated.ul>
  )
}

export default StyledList
