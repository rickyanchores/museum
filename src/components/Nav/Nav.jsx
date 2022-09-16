import React from 'react'

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
        <h1>Nav</h1>
        <div className="navlinks">
            {navList.map((link) => {
                return(
                    <li to={link.href}>{link.name}</li>
                )
            })}
        </div>
        <div className="hamburger">X</div>
    </div>
  )
}

export default Nav;