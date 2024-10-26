import React from 'react';
import './Home.css';


function Home() {
  return (
    <div id="home" className='home'> {/* Added ID for scrolling */}
      <h2>Aurora Medical Oxygen Supplier</h2>
      <hr />
      <h3>Service You Can Rely On</h3>
      <p>
        At Aurora Chemicals Oxygen Manufacturing (ACOM), our mission is to provide you with a quality product that is served compassionately. We understand that the need for medical oxygen is always an urgent one! That's why we offer a reliable oxygen supply 24 hours throughout the year.
      </p>
      <p>
        No matter where you are located in Ethiopia, we’re committed to bringing you high-grade 99.7% pure oxygen when you need it. Reach out today to get an initial quote and start working together.
      </p>
      <a href='#contact' className="link">Contact Us</a>

    </div>
  );
}

export default Home;
