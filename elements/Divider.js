import React from 'react'

const Divider = ({ theme }) => {
  return (
    <div className={`divider ${theme}`}>
      <div className="divider-bar divider-bar--start"></div>
      <div className="divider-bar divider-bar--middle-1"></div>
      <div className="divider-bar divider-bar--middle-2"></div>
      <div className="divider-bar divider-bar--middle-3"></div>
      <div className="divider-bar divider-bar--end"></div>
    </div>
  )
}

Divider.defaultProps = {
  theme: 'light'
};

export default Divider
