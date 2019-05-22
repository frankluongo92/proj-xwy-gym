import React from 'react'
import Link from 'next/link';

const Header = () => {
  return (
    <header className="header">
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
    </header>
  )
}

export default Header
