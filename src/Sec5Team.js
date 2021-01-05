import React from "react";
import prof1 from "./images/profile1.jpg";
import prof2 from "./images/profile2.jpg";
import prof3 from "./images/profile3.jpg";
function Sec5Team() {
  return (
    <section className="section theme" id="teams">
      <div className="title">
        <h1>My teams</h1>
      </div>

      <div className="teams-center container">
        <div className="glide">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              <li className="glide__slide">
                <div className="team">
                  <div className="img-cover">
                    <img src={prof1} alt="" />
                  </div>
                  <h3>Someone name</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Libero, quo?
                  </p>
                </div>
              </li>
              <li className="glide__slide">
                <div className="team">
                  <div className="img-cover">
                    <img src={prof2} alt="" />
                  </div>
                  <h3>Someone name</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Libero, quo?
                  </p>
                </div>
              </li>
              <li className="glide__slide">
                <div className="team">
                  <div className="img-cover">
                    <img src={prof3} alt="" />
                  </div>
                  <h3>Someone name</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Libero, quo?
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Sec5Team;
