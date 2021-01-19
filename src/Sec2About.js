import React from "react";
import bg from "./images/bg.png";
import RabeeCV from './CV/Rabee Aljaramani Web developer.pdf';
class Sec2About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  myFunction(e){
    e.preventDefault();
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read More"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }  
  render(){
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
            I'm <span id="type2"></span>
          </h1>
          <p className="aboutme-p">
           I come from an Informatics Engineering background and have 9+ years experience in the IT field, ranging from IT support to software development.
    Passionate about web development and seeking to grow in the role of a web developer by using my React, Redux, HTML and CSS skills
    to deliver coding excellence..<span id="dots">...</span><span id="more"><br/>
    I came from Syria where I studied to be a Computer Engineer because I have always believed that  technology is the future of humanity and it will shape our lives in ways that we have only been able to dream about. . 
After the war started in my home, I left for Lebanon and worked as IT support. I have a great passion for learning new skills and technologies and therefore I have automated workflows by developing new programs and tools in every position I have held. 
  I made the decision to become a web developer and worked tirelessly after hours and weekends to teach myself web development by doing online courses and building my own projects. This journey has given me all the tools to always improve myself and the endurance to face and succeed in any challenge presented to me. I believe if I am given the chance to prove myself, that I will prove to be a valuable asset to your company that will go far and beyond to reach the goals of the organization.

        </span>
        <button onClick={this.myFunction} id="myBtn" className='btn-readmore'>Read More</button><br/>
        </p>
          <a href={RabeeCV} className="btn" download="Rabee Aljaramani Web developer.pdf">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}}
export default Sec2About;
