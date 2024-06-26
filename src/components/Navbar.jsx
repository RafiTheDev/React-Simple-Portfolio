import "../styles/Navbar.css";
import React from 'react'
const Navbar =() => {
    return<div>
        <nav className="navbar"> 
            <a href="/" className="navbar-title">My Portfolio</a>
            <ul className="navbar-links">
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#blogs">Blogs</a>
                </li>
                <li>
                    <a href="#team">Team</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>

    </div>;



};

export default Navbar;