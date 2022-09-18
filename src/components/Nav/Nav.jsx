import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

    const navList = [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "About",
            href: "/"
        },
        {
            name: "FAQ",
            href: "/"
        }
    ]


  return (
    <div className='Nav'>
        <h1>mus</h1>
        <div className="navlinks">
            {navList.map((link) => {
                return(
                    <Link className='link' to={link.href}>{link.name}</Link>
                )
            })}
        </div>
        <div className="hamburger">X</div>
    </div>
  )
}

export default Nav;