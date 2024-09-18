import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <p>Site design / logo &copy; {new Date().getFullYear()} TechMart, All rights reserved.</p>
        <nav>
          <ul className='footer-links'>
            <li>
              <a href='/contact'>Contact Us</a>
            </li>
            <li>
              <a href='/privacy'>Privacy Policy</a>
            </li>
            <li>
              <a href='/terms'>Terms of Service</a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
