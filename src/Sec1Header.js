import React from "react";
import bg from "./images/bg.png";
import logo from './images/logo.png'
function Sec1Header(props) {
  function close_menue() {
    document.querySelector('.menu').classList.remove('show');
    const navBar = document.querySelector(".nav");
    document.body.classList.remove("show");
    navBar.classList.remove("show");
  }
  return (
    <header id="home" className="header">
      <nav className="nav">
        <div className="navigation container">
          <div className="logo">
            <img className='imglogo' src={logo} alt='/' />


          </div>

          <div className="menu" onClick={close_menue}>
            <div className="top-nav">
              <div className="logo">
                <img className='imglogo' src={logo} alt='/' />

              </div>
              <div className="close">
                <i className="fas fa-times"></i>
              </div>
            </div>

            <ul className="nav-list">
              <li className="nav-item">
                <a href="#home" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#services" className="nav-link">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a href="#skills" className="nav-link">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a href="#teams" className="nav-link">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
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

      <div className="hero">
        <h3>Hello, my name is</h3>
        <h1>Rabee Aljaramani</h1>
        <h4>
          And I'm <span id="type1"></span>
        </h4>
        <a href="#contact">Hire me</a>
        <div className='visitors'>
        Portfolio Visitors: 
        <div>{" "+props.visitors}</div> 
        
        <hr className='hr'/>
      </div>
      </div>
      

      <img className="banner img1" src={bg} alt="" />

      <div className="icons">
        <span>
          <a className="fab fa-linkedin"
            href='https://www.linkedin.com/in/rabee-aljaramani-4b005b193/'
            target="_blank" rel="noreferrer">{''}</a>
        </span>
        <span>
          <a className="fab fa-facebook-f"
            href='https://www.facebook.com/rabee1988/'
            target='_blank'
            rel="noreferrer"
            >{''}</a>
        </span>
        <span>
          <a className="fab fa-instagram"
            href='https://www.instagram.com/r_a_b_e_e__/'
            target='_blank' rel="noreferrer">{''}</a>
        </span>
        <span>
          <a className="fab fa-github"
            href='https://github.com/rabeexxxx'
            target='_blank' rel="noreferrer">{''}</a>
        </span>
      </div>
    </header>
  );
}

export default Sec1Header;
