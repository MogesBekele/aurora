import React from 'react';
import './Services.css';

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="service-content">
          <h2 className="section-title">Our Products and Services</h2>
          <ul className="service-list">
            <li>Medical Oxygen</li>
            <li>Cylinder rental and exchange</li>
            <li>Delivery of full cylinders and pickup of empty cylinders</li>
            <li>Cylinder Maintenance: pressure test and valve change</li>
          </ul>
        </div>

        <div className="social-content">
          <h2 className="section-title">Social Initiatives</h2>
          <ul className="social-list">
            <li>Contribution to local initiatives targeting women and children</li>
            <li>Building homes for underserved communities</li>
            <li>Empowering women to start small businesses</li>
          </ul>
        </div>

        <div className="cta-button">
          <button
            onClick={() => {
              alert('Please call us! checkout our contact info from the contact section.');
            }}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;
