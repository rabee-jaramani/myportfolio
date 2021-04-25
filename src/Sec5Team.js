import React from "react";
import prof1 from "./images/proj1.png";
import prof2 from "./images/proj2.png";
import prof3 from "./images/proj3.png";
import prof4 from "./images/proj4.png";
import prof5 from "./images/wordpress_portfolio.png"
import prof6 from "./images/travel_agency.png"

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
                  Using React, Redux, CSS and JavaScript
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
                  Using React, CSS and JavaScript
                  </p>
                </div>
              </li>
              </a>

              <a target='_blank' rel="noreferrer" href='https://rose-shop.netlify.app/' >
              <li className="glide__slide">
                <div className="team">
                  <div className="img-cover">
                    <img src={prof5} alt="" />
                  </div>
                  <h3>WordPress Portfolio</h3>
                  <p>
                  Using Elementor Editor
                  </p>
                </div>
              </li>
              </a>

              <a target='_blank' rel="noreferrer" href='https://fastech-travelagency.netlify.app/' >
              <li className="glide__slide">
                <div className="team">
                  <div className="img-cover">
                    <img src={prof6} alt="" />
                  </div>
                  <h3>Travel Agency</h3>
                  <p>
                  Using React, CSS and JavaScript
                  </p>
                </div>
              </li>
              </a>

              <a target='_blank' rel="noreferrer" href='https://beirut-lounge.netlify.app/' >
              <li className="glide__slide">
                <div className="team">
                  <div className="img-cover">
                    <img src={prof4} alt="" />
                  </div>
                  <h3>Cafe and Restaurant</h3>
                  <p>
                  Using React, SASS and JavaScript
                  </p>
                </div>
              </li>
              </a>

              <a target='_blank' rel="noreferrer" href='https://cc-llc.netlify.app/' >
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
