import React from "react";
import { Link } from "react-router-dom";
export default function Header () {
return(
 <nav className="navBar">
    <h1 className="pageTitle">GlobalJobsList</h1>
    <ul className="mainNav">
      <Link to="/" className="navItem">Home</Link>
      <Link to="/about" className="navItem">About</Link>
      <Link to="/contact" className="navItem">Contact</Link>
    </ul>
 </nav>
)

}