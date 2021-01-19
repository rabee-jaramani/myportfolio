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
            <i className="fab fa-react"></i>
          </span>
          <h2>Web Development</h2>
          <p>
            Using React, Redux, Javascript, CSS, HTML and version control.
          </p>
        </div>

        <div className="service" data-aos="fade-up" data-aos-duration="2000">
          <span>
            <i className="fas fa-code"></i>

          </span>
          <h2>Software Development</h2>
          <p>
            High knowledge in programming languages and databases (C# and SQL server).
          </p>
        </div>

        <div className="service" data-aos="fade-down" data-aos-duration="2000">
          <span>
            <i className="fas fa-chalkboard-teacher"></i>
          </span>
          <h2>IT Support</h2>
          <p>
            Software and hardware maintenance for laptops, desktop computers, tablets, tablet pc’s and iPad services.
            Install and maintain networks, terminals and internet access points.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Sec3Services;
