import React from 'react'

const Burger = ({ action, modifier }) => {

  const activeClass = () => {
    return modifier ? 'menu-active' : '';
  }

  return (
    <button onClick={action} className={`hamburger hamburger--${activeClass()}`}>
      <div className="hamburger-bun hamburger-bun--1" />
      <div className="hamburger-bun hamburger-bun--2" />
      <div className="hamburger-bun hamburger-bun--3" />
    </button>
  )
}

Burger.defaultProps = {
  modifier: false
}

export default Burger
