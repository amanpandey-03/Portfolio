import React from "react";
import "./header.css"
const Header= () => {
    return( 
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav_logo">Aman</a>

            <div className="nav_menu">
                <ul className="nav_list grid">

                    <li className="nav_items">
                        <a href="#home" className="nav_link">
                            <i className="uil uil-estate   nav_icon"></i>Home
                        </a>
                    </li>

                    <li className="nav_items">
                        <a href="#about" className="nav_link">
                            <i className="uil uil-user nav_icon"></i>About
                        </a>
                    </li>

                    <li className="nav_items">
                        <a href="#skills" className="nav_link">
                            <i className="uil uil-file-alt nav_icon"></i>Skills
                        </a>
                    </li>

                    <li className="nav_items">
                        <a href="#services" className="nav_link">
                            <i className="uil uil-briefcase nav_icon"></i>Services
                        </a>
                    </li>

                    <li className="nav_items">
                        <a href="#portfolio" className="nav_link">
                            <i className="uil uil-wrench nav_icon"></i>Projects
                        </a>
                    </li>

                    <li className="nav_items">
                        <a href="#contact" className="nav_link">
                            <i className="uil uil-message nav_icon"></i>Contact
                        </a>
                    </li>

                </ul>
                <i class="uil uil-times nav_close"></i>
                
            </div>

            <div className="nav_toggle">
                <i class="uil uil-apps nav_close"></i>
            </div>
            </nav>
    </header>
    )
}  

export default Header