import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";


const Nav = () => {
    return (
        <nav className="mainmenu-nav">
            <ul className="mainmenu">
                <li className="menu-item-has-children">
                    <Link to="/">Home</Link>
                </li>
                <li className="menu-item-has-children">
                    <Link to="#">Our Courses <FaAngleDown /></Link>
                    <ul className="axil-submenu">
                        <li><Link to={process.env.PUBLIC_URL + "/programs"}>Upcoming Programs</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/faq"}>FAQs</Link></li>
                    </ul>
                </li>
                <li className="menu-item-has-children">
                    <Link to="#">About Us <FaAngleDown /></Link>
                    <ul className="axil-submenu">
                        <li><Link to={process.env.PUBLIC_URL + "/who-we-are"}>Who We Are</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/our-clients"}>Our Partners</Link></li>
   
                    </ul>
                </li>
                <li className="menu-item-has-children">
                   <Link to="#">Contact Us <FaAngleDown /></Link>
                     <ul className="axil-submenu">
                     <li><Link to={process.env.PUBLIC_URL + "/contact"}>Rech Us</Link></li>
                             <li>
                            <a href="https://www.google.com/maps/dir/?api=1&destination=2570+Eastbourne+Dr,+Woodbridge,+VA+22191" target="_blank" rel="noopener noreferrer">
                                Get Directions
                            </a>
                        </li>
                    </ul>
                </li>
                
            </ul>
        </nav>
    )
}

export default Nav;