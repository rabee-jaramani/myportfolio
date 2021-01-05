import React from "react";
function Sec4Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="title">
        <h1>My Skills</h1>
      </div>

      <div className="skills-center container">
        <div
          className="skills-left"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div className="skills-box">
            <h4>HTML5</h4>
            <div className="skills-ilt">
              <div className="skills-bar html"></div>
              <span>95%</span>
            </div>
          </div>
          <div className="skills-box">
            <h4>CSS</h4>
            <div className="skills-ilt">
              <div className="skills-bar css"></div>
              <span>85%</span>
            </div>
          </div>
          <div className="skills-box">
            <h4>JavaScript</h4>
            <div className="skills-ilt">
              <div className="skills-bar javascript"></div>
              <span>90%</span>
            </div>
          </div>
          <div className="skills-box">
            <h4>Nodejs</h4>
            <div className="skills-ilt">
              <div className="skills-bar nodejs"></div>
              <span>80%</span>
            </div>
          </div>

          <div className="skills-box">
            <h4>Mongodb</h4>
            <div className="skills-ilt">
              <div className="skills-bar mongodb"></div>
              <span>95%</span>
            </div>
          </div>
        </div>

        <div className="right" data-aos="fade-left" data-aos-duration="2000">
          <h3>My creative skills and experience</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            tempora distinctio sed. Animi, doloribus est. Suscipit praesentium
            tenetur libero eos! Suscipit voluptatem qui, nulla accusantium
            deleniti nam recusandae officiis possimus at voluptate cupiditate
            soluta nostrum deserunt consequuntur, ut quis eligendi? Quidem et
            doloremque cupiditate veniam optio corporis voluptatum, animi nemo!
          </p>
          <a href="/" className="btn">
            Read more
          </a>
        </div>
      </div>
    </section>
  );
}
export default Sec4Skills;
