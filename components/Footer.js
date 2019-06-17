import React from 'react'

import Logo from '../svgs/Logo';
import Navigation from './Navigation';

const Footer = () => {
  const Year = () => {
    return new Date().getFullYear();
  }

  return (

    <footer className="footer">
      <div className="grid-container">
        <section className="footer__logo">
            <Logo />
        </section>
        <section className="footer__links">
          <Navigation
            customClassName="footer-navigation"
          />
        </section>
        <section className="footer__copyright footer-copyright">
            © <Year /> XWY Gym All Rights Reserved
        </section>
      </div>
    </footer>
  )
}

export default Footer
