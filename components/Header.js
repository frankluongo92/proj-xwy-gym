import React from 'react'

import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="header">
      <Navigation
        customClassName="header-navigation"
      />
    </header>
  )
}

export default Header
