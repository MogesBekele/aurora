import React from "react";
import './About.css';

function About() {
  return (
    <div className="about-container">
    <div className="about" id="about">
      <div className="sub-section">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At Aurora Chemicals, we are dedicated to providing high-quality medical oxygen with compassion and reliability.</p>
           <p>We recognize that the need for medical oxygen can arise at any moment, which is why we ensure a continuous and dependable oxygen supply, 24 hours a day, 365 days a year </p> 
            <p> &nbsp;&nbsp;&nbsp;Whether you are in a bustling city or a remote village anywhere in Ethiopia, we guarantee that our high-grade, 99.7% pure oxygen will reach you when you need it most..</p>
             <p> &nbsp;&nbsp;&nbsp; Contact us today for a quote and to learn more about how we can serve your oxygen needs with precision and care.
          </p>
        </div>
        <div className="about-image">
          <img src="./image2.jpg" alt="" />
        </div>
      </div>
      <a href='#' className="back-to-top">Back to Top</a>
    </div>
    </div>
  );
}

export default About;
