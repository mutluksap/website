import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../hero.png"  


function Header() {
  return (
    <header className="pt-4 lg:pt-6 pb-6 lg:pb-8 flex items-center justify-between container mx-auto">

        <NavLink to="/">
        <div className="flex gap-x-4 items-center">
            <img className="w-16 h-16 lg:h-24 lg:w-24 bg-white/10 rounded-full border border-white/20" alt="" src={logo} />
                <div className="text-left">
                    <h1 className="text-lg lg:text-2xl font-bold">Mutlu Kasap</h1>
                    <h6 className="text-sm lg:text-base text-gray-500">Developer</h6>
                </div>
        </div>
        </NavLink>


        
        <nav className="flex gap-x-3 items-center">
            <NavLink to="/">
            <button className="text-base py-1.5 px-4 overflow-hidden	">Home</button>
            </NavLink>
            <NavLink to="/photos/">
            <button className="text-base py-1.5 px-4 ">Photos</button>
            </NavLink>
            <NavLink to="/music/">
            <button className="text-base py-1.5 px-4 ">Music</button>
            </NavLink>
            <NavLink to="/about/">
            <button className="text-base py-1.5 px-4 ">About</button>
            </NavLink>
            <NavLink to="/projects/">
            <button className="text-base py-1.5 px-4 ">Projects</button>
            </NavLink>
            <NavLink to="/contact/">
            <button className="text-base py-1.5 px-4 ">Contact</button>
            </NavLink>
        </nav>
    </header>
  )
}

export default Header