import React from "react";
import myskills from './images/my skills3.jpg';
class Sec4Skills extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
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
            <div className='img-div'><img src={myskills} alt='Rabee Skills'></img></div>



          </div>
        </div>
      </section>
    );
  }
}
export default Sec4Skills;
