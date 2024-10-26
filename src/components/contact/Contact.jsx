import React from "react";
import "./Contact.css";
import { FaFacebookF, FaInstagramSquare, FaTelegram, FaPhone } from "react-icons/fa";


function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="contact-us">
        <h2>Contact Us</h2>
      </div>
      <div className="contact-container">
        <div className="contact-follow">
          <h3>Contact & Follow Us</h3>
          <div className="contact-social">
            <ul className="ul">
              <li>
                <a>
                  <FaPhone />
                </a>
                0988742107
              </li>
            
              <li>
                <a >
                  <FaTelegram />
                </a>
                Telegram
              </li>
            </ul>
            <ul>
              <li>
                <a >
                  <FaInstagramSquare />
                </a>
                Instagram
              </li>
              
              <li>
                <a >
                  <FaFacebookF />
                </a>
                Facebook
              </li>
            </ul>
          </div>
        </div>
        <div className="contact-form">
          <label htmlFor="name">FULL NAME</label>
          <input type="text" id="name" placeholder="Enter Your Full Name" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter Your Email Address" />
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Enter Your Message"></textarea>
          <button
            type="submit"
            onClick={() => {
              alert('Please call us, thanks!');
            }}
          >
            Submit
          </button>
        </div>
      </div>
      <p>
        &copy; 2024 by Aurora Chemicals Oxygen Manufacturing. Proudly created with{" "}
        <a href="https://web.facebook.com/?_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
          Moges Bekele
        </a>
      </p>
    </div>
  );
}

export default Contact;
