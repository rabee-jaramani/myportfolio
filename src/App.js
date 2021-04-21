import React from "react";
import Sec1Header from "./Sec1Header";
import Sec2About from "./Sec2About";
import Sec3Services from "./Sec3Services";
import Sec4Skills from "./Sec4Skills";
import Sec5Team from "./Sec5Team";
import Sec6Contact from "./Sec6Contact";
import Sec7Footer from "./Sec7Footer";
import AOS from 'aos';
import TypeIt from 'typeit'
import gsap from 'gsap'
import Glide from '@glidejs/glide'

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    AOS.init();

    const menu = document.querySelector(".menu");
    const navOpen = document.querySelector(".hamburger");
    const navClose = document.querySelector(".close");

    const navLeft = menu.getBoundingClientRect().left;
    navOpen.addEventListener("click", () => {
      if (navLeft < 0) {
        menu.classList.add("show");
        document.body.classList.add("show");
        navBar.classList.add("show");
      }
    });

    navClose.addEventListener("click", () => {
      if (navLeft < 0) {
        menu.classList.remove("show");
        document.body.classList.remove("show");
        navBar.classList.remove("show");
      }
    });

    // Fixed Nav
    const navBar = document.querySelector(".nav");
    const navHeight = navBar.getBoundingClientRect().height;
    window.addEventListener("scroll", () => {
      const scrollHeight = window.pageYOffset;
      if (scrollHeight > navHeight) {
        navBar.classList.add("fix-nav");
      } else {
        navBar.classList.remove("fix-nav");
      }
    });


    new TypeIt("#type1", {
      speed: 120,
      loop: true,
      waitUntilVisible: true
    })
      .type("a FrontEnd Developer", { delay: 400 })
      .pause(500)
      .delete(19)
      .type(" Web Developer", { delay: 400 })
      .pause(500)
      .delete(14)
      .go();

    new TypeIt("#type2", {
      speed: 120,
      loop: true,
      waitUntilVisible: true
    })
      .type("a FrontEnd Developer", { delay: 400 })
      .pause(500)
      .delete(19)
      .type(" Web Developer", { delay: 400 })
      .pause(500)
      .delete(14)
      .go();

    gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
    gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 1, x: 20 });
    gsap.from(".banner", { opacity: 0, duration: 1, delay: 1.5, x: -200 });
    gsap.from(".hero h3", { opacity: 0, duration: 1, delay: 2, y: -50 });
    gsap.from(".hero h1", { opacity: 0, duration: 1, delay: 2.5, y: -45 });
    gsap.from(".hero h4", { opacity: 0, duration: 1, delay: 3, y: -30 });
    gsap.from(".hero a", { opacity: 0, duration: 1, delay: 3.5, y: 50 });

    gsap.from(".nav-item", {
      opacity: 0,
      duration: 1,
      delay: 1.2,
      y: 30,
      stagger: 0.2
    });
    gsap.from(".icons span", {
      opacity: 0,
      duration: 1,
      delay: 4,
      x: -30,
      stagger: 0.2
    });

    const glide = document.querySelector(".glide");
    if (glide)
      new Glide(glide, {
        type: "carousel",
        startAt: 0,
        perView: 3,
        gap: 30,
        hoverpause: true,
        autoplay: 2000,
        animationDuration: 800,
        animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
        breakpoints: {
          996: {
            perView: 2
          },
          768: {
            perView: 1
          }
        }
      }).mount();
  }
  componentDidUpdate() { }
  render() {
    return (
      <>
        <Sec1Header />
        <Sec2About />
        <Sec3Services />
        <Sec4Skills />
        <Sec5Team />
        <Sec6Contact />
        <Sec7Footer />
      </>
    );
  }
}
export default App;
