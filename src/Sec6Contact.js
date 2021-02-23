import React from "react";
import emailjs from "emailjs-com";

function Sec6Contact() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "gmail",
        "template_8mbghbn",
        e.target,
        "user_RUe1ofaTLH9GoNM2WIfVD"
      )
      .then(
        (result) => {
          alert("thank you for your message");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <section className="section contact" id="contact">
      <div className="title">
        <h1>Contact me</h1>
      </div>

      <div className="contact-center container">
        <div
          className="left"
          data-aos="fade-down-right"
          data-aos-duration="2000"
        >
          <h2>Get in Touch</h2>
          <p>
            Thank you for your time viewing my portfolio and I will gladly provide any further information required. 
Kindly find my contact details below or use the form to the right to send a message and I will reach out to you. 
          </p> 
          <div>
            <span className="icon">
              <i className="fas fa-user"></i>
            </span>
            <span className="content">
              <h3>Name</h3>
              <span>Rabee Aljaramani</span>
            </span>
          </div>

          <div>
            <span className="icon">
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <span className="content">
              <h3>Address</h3>
              <span>UAE,Dubai</span>
            </span>
          </div>

          <div>
            <span className="icon">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="content">
              <h3>Email</h3>
              <span>rabeealjaramani@yahoo.com</span>
            </span>
          </div>
          <div>
            <span className="icon">
              <i className="fas fa-phone"></i>
            </span>
            <span className="content">
              <h3>Mobile</h3>
              <span>+971 56 567 124</span>
            </span>
          </div>
        </div>
        <div className="right" data-aos="fade-up-left" data-aos-duration="2000">
          <form className="form" onSubmit={sendEmail}>
            <h2>Message me</h2>
            <div>
              <input type="text" placeholder="Subject" name="subject" required/>
              <input type="text" placeholder="Name" name="name" required/>
            </div>

            <input type="email" placeholder="Email" name="email" />
            <textarea
              cols="10"
              rows="10"
              placeholder="Describe Project"
              name="message"
    required
            ></textarea>

            <input className="btn" type="submit" value="Send a message" />
          </form>
        </div>
      </div>
    </section>
  );
}
export default Sec6Contact;
