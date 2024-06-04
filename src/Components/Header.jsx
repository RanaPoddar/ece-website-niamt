import React, { useState } from 'react'
import logo from "../assets/niamt-logo.png"
import { FaBars } from 'react-icons/fa';
import { FaXmark } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const Header = () => {
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


const [menuOpen , setMenuOpen ] = useState(false);
const handleMenu = () => {
  setMenuOpen(!menuOpen);
}

  return (
    <>
    <div className=' w-full lg:h-28 pt-3 pb-1 sm:pb-0 sm:pt-0'>
    <div className='px-3 lg:px-28 lg:py-1 h-full w-full flex items-center justify-between '>

<div className='flex items-center'>
<div className='px-3 py-1'>
    <img className='md:h-20 md:w-20 h-10' src={logo}/>
    </div>

    <div className='pb-1 w-[60%] sm:w-full'>
        <a href='#' className='text-[#8e2929] font-bold text-xs md:text-lg '><h4>National Institute of Advanced Manufacturing Technology (NIAMT)</h4></a>
        <h4 className='text-black text-[10px] hidden sm:flex md:text-sm'>(Formerly National Institute of Foundry and Forge Technology)</h4>
        <h4 className='text-black text-[10px] hidden sm:flex md:text-sm'>Deemed to be University under Distinct Category under MoE , Govt of India</h4>
    </div>

</div>
    {/* Menu Icons for small devices */}
    <div className='z-50 md:hidden'>
    <button onClick={handleMenu}>{menuOpen ? <FaXmark className='text-xl font-bold'/> : <FaBars className='text-xl font-bold'/> }</button>
   </div>


    <div className='hidden md:flex'>
            <a href='#'>Back to main Website</a>
   </div>

    </div>
    
    </div>

    {/* Menu Items only for Mobile */}
<div className='z-40'>
<ul className={`md:hidden gap-5 h-[100vh] p-8 z-30 bg-slate-50 ${menuOpen ? "flex flex-col items-start fixed top-0 right-0 w-[300px] transition-all ease-out duration-300" : "flex flex-col items-start fixed top-0 right-[-300px] w-[300px] transition-all ease-out duration-300"}`}>
    <li className='uppercase text-xl font-bold '> menu</li>
    {NavItems.map(({path , link}) =>
     <li key={path} className='capitalize text-lg font-bold font-josefin'>
<NavLink to={path} onClick={handleMenu}>{link}</NavLink>
    </li>)}
</ul>
</div>

</>
  )
}

export default Header