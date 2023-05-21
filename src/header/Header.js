import React from 'react'
import "./Header.css"
import {toggleMenu, hideMenu} from "./head"
import {NavLink} from "react-router-dom"

function Header() {
  const navStyle = ({isActive})=>{
    return {
      color: isActive ? "var(--customDarkBlue)" : "rgb(33, 98, 114)",
      borderBottom: isActive ? "3px solid var(--customDarkBlue)" : "none"
      }
  }
  return (
    <>
      <header>
        <div className='logo'>
          <img src="/img/companyLogo.png" alt="" />
          <h1>EdExcel.Ai</h1>
        </div>
        <nav id='nav'>
          <NavLink onClick={hideMenu} style={navStyle} to={"/"}>Home</NavLink>
          <NavLink onClick={hideMenu} style={navStyle} to={"/courses"}>Courses</NavLink>
          <NavLink onClick={hideMenu} style={navStyle} to={"/about"}>About</NavLink>
          <NavLink onClick={hideMenu} style={navStyle} to={"/contact"}>Contact</NavLink>
        </nav>
        <div className="toggleMenu" id='toggleMenu' onClick={toggleMenu}></div>
      </header>
      <div style={{height:"80px"}}></div>
    </>
  )
}

export default Header