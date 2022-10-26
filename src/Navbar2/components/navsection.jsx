import React from 'react'
import Link from './link'
function NavbarPart() {
  return (
    <nav className='flex items-center gap-3'>
        <Link link="/" label="NavbarOne" icon="link"/>
        <Link link="/navigationbar2" label="NavbarTwo" icon="gallery"/>
        <Link link="/navigationbar3" label="NavbarThree" icon="services"/>
    </nav>
  )
}

export default NavbarPart