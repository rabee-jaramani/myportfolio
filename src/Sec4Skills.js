import React from "react";
import myskills from './images/my skills3.jpg';
class Sec4Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // myFunction1(e){
  //   e.preventDefault();
  //   var dots = document.getElementById("dots1");
  //   var moreText = document.getElementById("more1");
  //   var btnText = document.getElementById("myBtn1");
  
  //   if (dots.style.display === "none") {
  //     dots.style.display = "inline";
  //     btnText.innerHTML = "Read more"; 
  //     moreText.style.display = "none";
  //   } else {
  //     dots.style.display = "none";
  //     btnText.innerHTML = "Read less"; 
  //     moreText.style.display = "inline";
  //   }
  // }  

  render(){
  return (
    <section className="section skills" id="skills">
      <div className="skill-title">
        <h1>My Skills</h1>
      </div>

      <div className="skills-center container">
        <div
          className="skills-left"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <div className="skills-box">
            <h4>REACT</h4>
            <div className="skills-ilt">
              <div className="skills-bar react"></div>
              <span>83%</span>
            </div>
          </div>
          <div className="skills-box">
            <h4>REDUX</h4>
            <div className="skills-ilt">
              <div className="skills-bar redux"></div>
              <span>80%</span>
            </div>
          </div>
          <div className="skills-box">
            <h4>HTML5</h4>
            <div className="skills-ilt">
              <div className="skills-bar html"></div>
              <span>90%</span>
            </div>
          </div>
          <div className="skills-box">
            <h4>CSS</h4>
            <div className="skills-ilt">
              <div className="skills-bar css"></div>
              <span>81%</span>
            </div>
          </div>
          <div className="skills-box">
            <h4>JavaScript</h4>
            <div className="skills-ilt">
              <div className="skills-bar javascript"></div>
              <span>79%</span>
            </div>
          </div>
          
          <div className="skills-box">
            <h4>BootStrap</h4>
            <div className="skills-ilt">
              <div className="skills-bar bootstrap"></div>
              <span>83%</span>
            </div>
          </div>
          <div className="skills-box">
            <h4>C#</h4>
            <div className="skills-ilt">
              <div className="skills-bar csharp"></div>
              <span>76%</span>
            </div>
          </div>
          <div className="skills-box">
            <h4>Nodejs</h4>
            <div className="skills-ilt">
              <div className="skills-bar nodejs"></div>
              <span>65%</span>
            </div>
          </div>

          <div className="skills-box">
            <h4>Mongodb</h4>
            <div className="skills-ilt">
              <div className="skills-bar mongodb"></div>
              <span>75%</span>
            </div>
          </div>
          <div className="skills-box">
            <h4>SQL</h4>
            <div className="skills-ilt">
              <div className="skills-bar sql"></div>
              <span>65%</span>
            </div>
          </div>
        </div>

        <div className="right" data-aos="fade-left" data-aos-duration="2000">
          {/* <h3>My creative skills and experience</h3> */}
<div className='img-div'><img src={myskills}></img></div>


          {/* <p>
            <ul className='ul-skills'>◦ Web Programming & Design:
              <li>JavaScript- React- Redux- HTML5- CSS- Bootstrap- jQuery- C#</li>
          
            </ul>
            <ul className='ul-skills'>◦ Version Control:
            <li>Git</li>
            <li>Github</li>
            </ul>
            <ul className='ul-skills'>◦ Databases:
            <li>MongoDB</li>
            <li>Microsoft SQL</li>
            </ul>
      
          ◦ High knowledge in programming languages and networking.<br/>
          ◦ Self-learning.
          <span id="dots1">...</span><span id="more1"><br/>
          ◦ Operating systems: Windows (XP, 7, 8, 10), Microsoft Windows Server (2003, 2008, 2016), Mac OS, Android and iOS.<br/>
          ◦ Office Tools: Microsoft Office (2003, 2007, 2013, 2016, 2019) Access, Power Point, Word, Excel.<br/>
          ◦ Maintaining computers, tablets, mobile phones, servers and networks.<br/>
          ◦ Security cameras CCTV and IP cameras.<br/>
          ◦ Teaching programming courses, information technology topics and computer usage.<br/>
          ◦ Build meeting and class rooms for schools and universities (projectors, mirroring, smart boards.<br/>
          ◦ Data management.<br/>
          ◦ Quality assurance for applications and devices.<br/>
          ◦ Projects Management and IT planning to achieve the needs.<br/>
          </span>
        <button onClick={this.myFunction1} id="myBtn1" className='btn-readmore'>Read more</button><br/>

          </p>
           */}
        </div>
      </div>
    </section>
  );
}}
export default Sec4Skills;
