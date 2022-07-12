import "./headerFooter.css"
import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Header () {

const [openMenu, setOpenMenu] = useState(false)

function toggleMenu(){
  setOpenMenu(menuStatus => !menuStatus)
}

return(
 <nav className="navBar">
    <h1 className="pageTitle">GlobalJobsList</h1>
    <ul className={openMenu ? "mainNav expanded" : "mainNav"}>
      <Link to="/" className="navItem" onClick={toggleMenu}>Home</Link>
      <Link to="/about" className="navItem" onClick={toggleMenu}>About</Link>
      <Link to="/contact" className="navItem" onClick={toggleMenu}>Contact</Link>
    </ul>
      <span className='hamburger'>
        <a href='#' onClick={toggleMenu}><i className="fa fa-bars"></i></a>
      </span>      
 </nav>
)

}