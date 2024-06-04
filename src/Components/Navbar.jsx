import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const NavItems = [
        {
            path: "/",
            link: "Home"
        },
        {
            path: "/about",
            link: "About"
        },
        {
            path: "/research",
            link: "Research"
        },
        {
            path: "/resources",
            link: "Resources"
        },
        {
            path: "/contact",
            link: "Contact"
        },
    ]


  return (
    <>
<div className='w-full h-14 bg-transparent flex justify-center items-center'>

<ul className='hidden md:flex gap-12 text-lg font-[poppins] font-normal'>
{NavItems.map(({path, link}) => 
(
<li key={path} className='text-white capitalize font-bold font-josefin'>
  <NavLink to={path}
  className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                        ? "pending"
                        : ""
                    }
  >
  {link}</NavLink>
</li>
))}
</ul>



</div>

    </>
  )
}

export default Navbar