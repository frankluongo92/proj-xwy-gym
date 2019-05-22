import React from 'react'

const StyledList = ({ children, customClass }) => {
  return (
    <ul className={`styled-list ${customClass}__styled-list`}>
      { children }
    </ul>
  )
}

export default StyledList
