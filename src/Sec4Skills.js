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
            ◦ Web Programming & Design: JavaScript, HTML5, Bootstrap, CSS, jQuery,XML, React js, Redux,
C#, C++, ASP.net mvc.
◦ Database Tools: MongoDB and Microsoft SQL .
◦ High knowledge in programming languages and networking.
◦ Self-learning.
◦ Operating systems: Windows (XP, 7, 8, 10), Microsoft Windows Server (2003, 2008, 2016), Mac OS, Android,
iOS, Office Tools: Microsoft Office (2003, 2007, 2013, 2016, 2019) Access, Power Point, Word, Excel.
◦ Computer devices, tablets, mobile phones, servers and networks.
◦ Security cameras CCTV and IP cameras.
◦ Teaching programming courses, information technology topics and computer usage.
◦ Build meeting and class rooms for schools and universities (projectors, mirroring, smart boards
◦ Data management.
◦ Quality assurance for applications and devices.
◦ Projects Management and IT planning to achieve the needs.

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
