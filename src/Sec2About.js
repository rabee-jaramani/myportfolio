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
            Coming from an Informatics Engineering background, I have extensive experience in IT fields.
            I come from Syria where I studied to be a Computer Engineer because I believe this technology is the future of humanity and it will make our life as we dreamed about it long time ago where everything around us is controlled and automated.
            I have always had a passion for learning new things and technologies.
            After the war started in Syria, I left for Lebanon and worked as IT support.
            In the positions I held I tried always to add automation to my work to make it faster and more accurate, in addition, searching for the problems with end user’s workflow and try to develop a programs or tools to help them.
            I always found myself drawn to software development which is very close to our daily duties and problems and after the huge progress of the internet, I took the decision to become a web developer and worked tirelessly after hours and weekend to teach myself web development by doing online courses and building my own projects.
            This journey has given me all the tools to always improve myself and the endurance to face and succeed in any challenge presented to me.
            I believe if I am given the chance to prove myself, that I will proof to be a valuable asset to your company that will go far and beyond to reach the goals of the organization.

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
