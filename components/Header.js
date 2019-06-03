import React, { useState, useEffect } from 'react'
import { Waypoint } from 'react-waypoint';
import { animated, useSpring } from 'react-spring';

import Navigation from './Navigation';

const Header = () => {
  useEffect(() => {
    setInitialState();
  }, []);

  const [fixState, setFixState] = useState(false);

  const headerFixAnimation = useSpring({
    marginTop: fixState ? 0 : '',
    width: fixState ? '100%' : '90%',
    left: fixState ? '0%' : '5%',
    backgroundColor: fixState ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.75)',
  });


  const fixHeader = () => {
    setFixState(true);
  }

  const unFixHeader = () => {
    setFixState(false);
  }

  const setInitialState = () => {
    if (window.pageYOffset > 0) {
      fixHeader();
    } else {
      unFixHeader();
    }
  }

  return (
    <>
      <Waypoint onEnter={unFixHeader} onLeave={fixHeader}>
        <div className="header-fix"></div>
      </Waypoint>
      <animated.header style={headerFixAnimation} className="header">
        <Navigation
          customClassName="header-navigation"
        />
      </animated.header>
    </>
  )
}

export default Header
