import React from "react";
import bg from "./images/bg.png";
import logo from './images/logo.png'
function Sec1Header() {
  return (
    <header id="home" className="header">
      <nav className="nav">
        <div className="navigation container">
          <div className="logo">
            <img className='imglogo' src={logo} alt='/' />

            {/* <h1>
              LOGO<span>.</span>
            </h1> */}
          </div>

          <div className="menu">
            <div className="top-nav">
              <div className="logo">
                <img className='imglogo' src={logo} alt='/' />
                {/* <h1>
                  LOGO<span>.</span>
                </h1> */}
              </div>
              <div className="close">
                <i className="fas fa-times"></i>
              </div>
            </div>

            <ul className="nav-list">
              <li className="nav-item">
                <a href="#home" className="nav-link scroll-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link scroll-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#services" className="nav-link scroll-link">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a href="#skills" className="nav-link scroll-link">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a href="#teams" className="nav-link scroll-link">
                  Teams
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link scroll-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="hamburger">
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </nav>
      {/* hero */}
      <div className="hero">
        <h3>Hello, my name is</h3>
        <h1>Rabee Aljaramani</h1>
        <h4>
          And I'm <span id="type1"></span>
        </h4>
        <a href="#contact">Hire me</a>
      </div>

      <img className="banner img1" src={bg} alt="" />

      <div className="icons">
        <span>
          <i className="fab fa-linkedin"></i>
        </span>
        <span>
          <i className="fab fa-facebook-f"></i>
        </span>
        <span>
          <i className="fab fa-instagram"></i>
        </span>
        <span>
          <i className="fab fa-twitter"></i>
        </span>
      </div>
    </header>
  );
}

export default Sec1Header;
