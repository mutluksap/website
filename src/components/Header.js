import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../hero.png"  


function Header() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <header>
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-black mb-3">
    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
      <NavLink to="/">
        <div className="flex gap-x-4 items-center">
            <img className="w-16 h-16 lg:h-24 lg:w-24 bg-white/10 rounded-full border border-white/20" alt="" src={logo} />
                <div className="text-left">
                    <h1 className="text-lg lg:text-2xl font-bold">Mutlu Kasap</h1>
                    <h6 className="text-sm lg:text-base text-gray-500">Developer</h6>
                </div>
        </div>
        </NavLink>
        <button
          className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="26" width="26" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7"></path></svg>
        </button>
      </div>
      <div
        className={
          "lg:flex flex-grow items-center" +
          (navbarOpen ? " flex" : " hidden")
        }
        id="example-navbar-danger"
      >
        <ul className="flex flex-wrap justify-center mt-4 lg:flex-row list-none lg:ml-auto">
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
        </ul>
      </div>
    </div>
  </nav>
    </header>
  )
}

export default Header