import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="custom-container">
        <div className="footer-content">
          <div className="disclaimer-section">
          <li><a href="#"><h1 className='custom-topic'>Disclaimer</h1></a></li>
            <p>
              Please note that this page also provides links to the websites / web pages of Govt. Ministries/Departments/Organisations. The content of these websites is owned by the respective organisations and they may be contacted for any further information or suggestion.
            </p>
          </div>
          
          <div className="footer-links-section">
            <ul>
              <li><a href="#"><h1 className='custom-topic'>Website Policies</h1></a></li>
              <li><a href="#">Copyright Policy</a></li>
              <li><a href="#">Hyperlinking Policy</a></li>
              <li><a href="#">Security Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Help</a></li>
              <li><a href="#">Screen Reader Access</a></li>
              <li><a href="#">Guidelines</a></li>
            </ul>
          </div>
          <div className="footer-info-section">
          <li><a href="#"><h1 className='custom-topic'>Visitors</h1></a></li>
            <p>Last Updated : 14-04-2024 11:59 PM</p>
            <p>Visitors Counter : 1</p>
            <p>CONTENT OWNED AND MAINTAINED BY  : </p>
            <p>Designed, Developed and Hosted by: </p>
            <p>Best viewed in Chrome v-87.0.4280.141, Microsoft Edge v-87.0.664.75, Firefox -v-83.0 Browsers. Resolution : 1280x800 to 1920x1080</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
