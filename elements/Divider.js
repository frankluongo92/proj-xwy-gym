import React from 'react'

const Divider = ({ theme }) => {
  return (
    <svg
      className={`divider divider--${theme}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 266 4">
        <polygon
          points="119.94 0 1.07 0 0 4 118.87 4 119.94 0"
        />
        <polygon
          points="131.25 0 125.12 0 124.05 4 130.18 4 131.25 0"
        />
        <polygon
          points="266 0 147.73 0 146.66 4 264.93 4 266 0"
        />
        <polygon
          points="142.55 0 136.43 0 135.35 4 141.48 4 142.55 0"
        />
    </svg>
  )
}

Divider.defaultProps = {
  theme: 'light'
};

export default Divider

/*
<div className={`divider divider--${theme}`}>
<div className="divider-bar divider-bar--start"></div>
<div className="divider-bar divider-bar--middle-1"></div>
<div className="divider-bar divider-bar--middle-2"></div>
<div className="divider-bar divider-bar--middle-3"></div>
<div className="divider-bar divider-bar--end"></div>
</div>
*/
