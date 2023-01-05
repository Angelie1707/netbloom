import React from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/Logo-1.webp';
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="sticky">
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
            <div className="nav-right">
              <ul className="main-nav">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/blog">Websites</Link>
                </li>
                <li>
                  <Link to="/blog">About</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/blog">Contact Us</Link>
                </li>
              </ul>
              <button className="gradientButton1">Get a Quote</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}