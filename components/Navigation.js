import React from 'react'
import Link from 'next/link';

import StyledList from '../elements/StyledList';
import Logo from '../svgs/Logo';

const Navigation = ({ customClassName }) => {
  const navLinks = [
    { url: "/personal-training", name: "Personal Training" },
    { url: "/meal-plans", name: "Meal Plans" },
    { url: "/tutorials", name: "Tutorials" },
    { url: "/blog", name: "Blog" },
    { url: "/about-us", name: "About Us" },
    { url: "/contact", name: "Contact" },
  ];


  return (
    <nav className={`navigation ${customClassName}`}>
      <Logo classNames={`logo logo--${customClassName}`} />
      <StyledList customClass={customClassName}>
        {navLinks.map(({url, name}, index) => (
          <li className="styled-list__item" key={index}>
            <Link href={url}><a className={`link ${customClassName}__link`}>{name}</a></Link>
          </li>
        ))}
      </StyledList>
    </nav>
  )
}

Navigation.defaultProps = {
  customClassName: ''
};

export default Navigation
