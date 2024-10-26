import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faBars } from '@fortawesome/free-solid-svg-icons'; 
import { IoClose } from 'react-icons/io5'; 
import { FaArrowDown } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [showUpIcon, setShowUpIcon] = useState(false); 
  const menuRef = useRef(null);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleLinkClick = () => {
    setTimeout(() => {
      setMenu(false);
    }, 200);
  };

  
  useEffect(() => {
    const handleScroll = () => {
      
      if (window.scrollY > window.innerHeight * 2) {
        setShowUpIcon(true); 
      } else {
        setShowUpIcon(false); 
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menu && menuRef.current && !menuRef.current.contains(event.target)) {
        setMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menu]);

  return (
    <>
      <div className='navbar'>
        <div className='navbar-title'>
          <h2>AURORA OXYGEN MANUFACTURING</h2>
        </div>
        <div onClick={handleMenu} className='handle-menu'>
          {menu ? <IoClose size={30} color="white" cursor="pointer" /> : <FontAwesomeIcon icon={faBars} size="lg" cursor="pointer"  color="white" />}
        </div>

        <div ref={menuRef} className={`navbar-section ${menu ? 'active' : ''}`}>
          <a href="#home" className='navbar-link' onClick={handleLinkClick}>Home</a>
          <a href="#about" className='navbar-link' onClick={handleLinkClick}>About</a>
       
          <a href="#services" className='navbar-link' onClick={handleLinkClick}>Products &Services</a>
          <a href="#contact" className='navbar-link Contact' onClick={handleLinkClick}>Contact</a>
        </div>
      </div>

      <div className="icon-container">
        {!showUpIcon && ( 
          <a href="#contact">
            <FaArrowDown className="hand-icon" />
          </a>
        )}
        {showUpIcon && ( 
          <a href="#">
            <FaArrowUp className="hand-icon" />
          </a>
        )}
      </div>
    </>
  );
}

export default Navbar;
