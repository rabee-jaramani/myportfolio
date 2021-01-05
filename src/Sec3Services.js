import React from "react";
function Sec3Services() {
  return (
    <section className="section theme" id="services">
      <div className="title">
        <h1>My Services</h1>
      </div>

      <div className="services-center container">
        <div className="service" data-aos="fade-down" data-aos-duration="2000">
          <span>
            <i className="fab fa-accusoft"></i>
          </span>
          <h2>Web Design</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            exercitationem numquam porro asperiores neque architecto.
          </p>
        </div>

        <div className="service" data-aos="fade-up" data-aos-duration="2000">
          <span>
            <i className="fas fa-chart-line"></i>
          </span>
          <h2>Advertising</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            exercitationem numquam porro asperiores neque architecto.
          </p>
        </div>

        <div className="service" data-aos="fade-down" data-aos-duration="2000">
          <span>
            <i className="fas fa-blender-phone"></i>
          </span>
          <h2>Apps Design</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            exercitationem numquam porro asperiores neque architecto.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Sec3Services;
