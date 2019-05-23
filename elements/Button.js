import React from 'react'
import Link from 'next/link';


const Button = ({ theme, size, url, children }) => {
  return (
    <Link href={url}>
      <a className={`button button--${theme} button--${size}`}>
        {children}
      </a>
    </Link>
  )
}

Button.defaultProps = {
  theme: 'primary',
  size: 'default',
  url: '/',
  children: 'test'
};

export default Button
