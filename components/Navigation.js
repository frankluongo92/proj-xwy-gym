import React, { useState } from 'react'
import Link from 'next/link';
import { useSpring } from 'react-spring';

import StyledList from '../elements/StyledList';
import Logo from '../svgs/Logo';
import Burger from '../elements/Burger';

const Navigation = ({ customClassName }) => {
  const [ menuActive, setMenuActive ] = useState(false);

  const navLinks = [
    { url: "/personal-training", name: "Personal Training" },
    { url: "/meal-plans", name: "Meal Plans" },
    { url: "/tutorials", name: "Tutorials" },
    { url: "/blog", name: "Blog" },
    { url: "/about-us", name: "About Us" },
    { url: "/contact", name: "Contact" },
  ];

  const activateMobileNav = useSpring({
    left: menuActive ? '0%' : '100%',
  });

  const openMenu = () => {
    setMenuActive(!menuActive);
  }


  return (
    <nav className={`navigation ${customClassName}`}>
      <Logo classNames={`logo logo--${customClassName}`} />
      <StyledList customClass={customClassName} animation={activateMobileNav}>
        {navLinks.map(({url, name}, index) => (
          <li className="styled-list__item" key={index}>
            <Link href={url}><a className={`link ${customClassName}__link draw-link`}>{name}</a></Link>
          </li>
        ))}
      </StyledList>
      <Burger action={openMenu} modifier={menuActive} />
    </nav>
  )
}

Navigation.defaultProps = {
  customClassName: ''
};

export default Navigation
