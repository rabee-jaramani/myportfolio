import React from "react";
import prof1 from "./images/proj1.png";
import prof2 from "./images/proj2.png";
import prof3 from "./images/proj3.png";
function Sec5Team() {
  return (
    <section className="section theme" id="teams">
      <div className="title">
        <h1>My Projects</h1>
      </div>

      <div className="teams-center container">
        <div className="glide">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
            <a target='_blank' rel="noreferrer" href='https://e-star-x.herokuapp.com/' >
              <li className="glide__slide">
               
                <div className="team">
                  <div className="img-cover">
                    <img src={prof1} alt=""/>
                  </div>
                  <h3>E-commerce website</h3>
                  <p>
                    e-commerce for selling clothes online, I used React Redux and nodejs for backend
                  </p>
                </div>
               
              </li>
              </a>
              <a target='_blank' rel="noreferrer" href='https://rose-shop.netlify.app/' >
              <li className="glide__slide">
                <div className="team">
                  <div className="img-cover">
                    <img src={prof2} alt="" />
                  </div>
                  <h3>Rose Shop</h3>
                  <p>
                    Online rose shop to sell roses and make events, it is a template for e-commerce website
                  </p>
                </div>
              </li>
              </a>
              <a target='_blank' rel="noreferrer" href='https://construction--company.herokuapp.com/' >
              <li className="glide__slide">
                <div className="team">
                  <div className="img-cover">
                    <img src={prof3} alt="" />
                  </div>
                  <h3>Construction Company</h3>
                  <p>
                    Website for construction company with many services.
                  </p>
                </div>
              </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Sec5Team;
