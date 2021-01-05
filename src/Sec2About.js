import React from "react";
import bg from "./images/bg.png";
function Sec2About() {
  return (
    <section className="section about" id="about">
      <div className="title">
        <h1>About me</h1>
      </div>

      <div className="about-center container">
        <div className="left" data-aos="fade-right" data-aos-duration="2000">
          <img src={bg} alt="" />
        </div>
        <div className="right" data-aos="fade-left" data-aos-duration="2000">
          <h1>
            I'm Rabee a <span id="type2"></span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            placeat inventore rerum tempore cupiditate, amet adipisci aut eius
            facilis quisquam magni ratione maxime officiis earum blanditiis
            magnam illum obcaecati vero? Odit ipsa facilis officiis fuga
            voluptate similique sunt exercitationem voluptatibus, illo et fugit
            eveniet provident quo atque, nesciunt explicabo tenetur!
          </p>
          <a href="/" className="btn">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
export default Sec2About;
