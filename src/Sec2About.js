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
      btnText.innerHTML = "Read moreeeeeeeeee"; 
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
            I'm Rabee a <span id="type2"></span>
          </h1>
          <p>
            Coming from an Informatics Engineering background, I have extensive experience in IT fields.
            I come from Syria where I studied to be a Computer Engineer because I believe this technology is the future of humanity and it will make our life as we dreamed about it long time ago where everything around us is controlled and automated.
            I have always had a passion for learning new things and technologies.
            <span id="dots">...</span><span id="more">
        After the war started in Syria, I left for Lebanon and worked as IT support.
            In the positions I held I tried always to add automation to my work to make it faster and more accurate, in addition, searching for the problems with end user’s workflow and try to develop a programs or tools to help them.
            I always found myself drawn to software development which is very close to our daily duties and problems and after the huge progress of the internet, I took the decision to become a web developer and worked tirelessly after hours and weekend to teach myself web development by doing online courses and building my own projects.
            This journey has given me all the tools to always improve myself and the endurance to face and succeed in any challenge presented to me.
            I believe if I am given the chance to prove myself, that I will proof to be a valuable asset to your company that will go far and beyond to reach the goals of the organization.
        </span>
        <button onClick={this.myFunction} id="myBtn" className='btn-readmore'>Read more</button><br/>
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
