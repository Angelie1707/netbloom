import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/Logo-1.webp';
import { FaPhoneAlt, FaEnvelope, FaBars } from "react-icons/fa";

export default function Header() {

  const [showNav, setShowNav] = useState(false)
  const handleShowNav = () => {
    setShowNav(!showNav)
  }

  return (
    <header>
      <div className="tob-bar">
        <div className="main-content">
          <div className="right">
            <ul>
              <li>
                <a href="mailto:domains@netbloom.com"><FaEnvelope/> domains@netbloom.com</a>
              </li>
              <li>
                <a href="tel:0273929428"><FaPhoneAlt/> 027 392 9428</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="main-bar">
        <div className="main-content">
          <div className="navbar">
            <div className="nav-left">
              <Link to="/"><img src={Logo} alt="Netbloom Logo" className="logo"/></Link>
            </div>
            <div className={`nav-mid ${showNav && 'active'}`}>
              <ul className="main-nav">
                <li onClick={handleShowNav}>
                  <Link to="/">Home</Link>
                </li>
                <li onClick={handleShowNav}>
                  <Link to="/seo-services-nz">SEO</Link>
                </li>
                <li onClick={handleShowNav}>
                  <Link to="/web-design-nz">Web Design</Link>
                </li>
                <li onClick={handleShowNav}>
                  <Link to="/e-commerce-website-nz">E-commerce Website</Link>
                </li>
                <li onClick={handleShowNav} className="has-submenu">
                  <Link to="/about-us">About</Link>
                  <ul className="submenu">
                    <li onClick={handleShowNav}>
                      <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li onClick={handleShowNav}>
                      <Link to="/case-studies">Case Studies</Link>
                    </li>
                  </ul>
                </li>
                <li onClick={handleShowNav}>
                  <Link to="/blog">Blog</Link>
                </li>
                <li onClick={handleShowNav}>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
                <li onClick={handleShowNav}>
                  <button className="gradientButton1 btn mobile">Get a Quote</button>
                </li>
              </ul>
            </div>
            <div className="nav-right">
              <button className="gradientButton1 btn desktop">Get a Quote</button>
              <div onClick={handleShowNav} className="burger-menu"> <FaBars/> </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}