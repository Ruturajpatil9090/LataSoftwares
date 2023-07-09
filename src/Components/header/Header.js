// import React from 'react'
// import "./Header.css"
// import {toggleMenu, hideMenu} from "./head"
// import {NavLink} from "react-router-dom"

// function Header() {
//   const navStyle = ({isActive})=>{
//     return {
//       color: isActive ? "var(--customDarkBlue)" : "rgb(33, 98, 114)",
//       borderBottom: isActive ? "3px solid var(--customDarkBlue)" : "none"
//       }
//   }
//   return (
//     <>
//       <header>
//         <div className='logo'>
//           <img src="/img/companyLogo.png" alt="" />
//           <h1>EdExcel.Ai</h1>
//         </div>
//         <nav id='nav'>
//           <NavLink onClick={hideMenu} style={navStyle} to={"/"}>Home</NavLink>
//           <NavLink onClick={hideMenu} style={navStyle} to={"/intenship"}>Internship</NavLink>
//           <NavLink onClick={hideMenu} style={navStyle} to={"/courses"}>Courses</NavLink>
//           <NavLink onClick={hideMenu} style={navStyle} to={"/about"}>About</NavLink>
//           <NavLink onClick={hideMenu} style={navStyle} to={"/contact"}>Contact</NavLink>
//           <NavLink onClick={hideMenu} style={navStyle} to={"/...."}>Hire From Us</NavLink>
//         </nav>
//         <div className="toggleMenu" id='toggleMenu' onClick={toggleMenu}></div>
//       </header>
//       <div style={{height:"80px"}}></div>
//     </>
//   )
// }

// export default Header


import React, { useState } from 'react';
import "./Header.css";
import { toggleMenu, hideMenu } from "./head";
import { NavLink } from "react-router-dom";
import brain from "../../assests/Courses/brain.png"

function Header() {
  const navStyle = ({ isActive }) => {
    return {
      color: isActive ? "var(--customDarkBlue)" : "rgb(33, 98, 114)",
      borderBottom: isActive ? "3px solid var(--customDarkBlue)" : "none"
    };
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleNavLinkClick = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      <header>
        <div className='logo'>
          <img src={brain} alt="" />
          <h1>EdExcel.Ai</h1>
        </div>
        <nav id='nav'>
          <NavLink onClick={hideMenu} style={navStyle} to={"/"}>Home</NavLink>
          <div className="dropdown">
            <NavLink
              onClick={handleDropdownToggle}
              style={navStyle}
              to={"/intenship"}
              className={isDropdownOpen ? "active" : ""}
            >
              Internship
            </NavLink>
            {isDropdownOpen && (
              <div className="dropdown-content" onClick={hideMenu}>
                <NavLink style={navStyle} to={"/intenship/full-stack"}>
                  Full Stack
                </NavLink>
                <NavLink style={navStyle} to={"/intenship/data-science"}>
                  Data Science
                </NavLink>
              </div>
            )}
          </div>
          <NavLink onClick={handleNavLinkClick} style={navStyle} to={"/courses"}>Courses</NavLink>
          <NavLink onClick={handleNavLinkClick} style={navStyle} to={"/about"}>About</NavLink>
          <NavLink onClick={handleNavLinkClick} style={navStyle} to={"/contact"}>Contact</NavLink>
          {/* <NavLink onClick={handleNavLinkClick} style={navStyle} to={"/...."}>Hire From Us</NavLink> */}
        </nav>
        <div className="toggleMenu" id='toggleMenu' onClick={toggleMenu}></div>
      </header>
      <div style={{ height: "80px" }}></div>
    </>
  );
}

export default Header;