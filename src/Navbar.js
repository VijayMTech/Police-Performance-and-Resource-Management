import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { useTranslation } from 'react-i18next';
import { RiArrowDownSLine } from 'react-icons/ri'; // Import the arrow down icon from React Icons
import { useLanguage } from './LanguageContext'; // Import useLanguage hook
import './Navbar.css';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const { t } = useTranslation();
  const { toggleLanguage } = useLanguage(); // Use toggleLanguage from LanguageContext
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo"><Link className='logolink' to="/">{t('navbar./')}</Link></div>
      <ul className="navbar-links">
        <li className="navbar-link"><Link className='link' to="/">{t('navbar.home')}</Link></li>
        <li className="navbar-link"><Link className='link' to="/about">{t('navbar.about')}</Link></li>
        <li className="navbar-link"><Link className='link' to="/services">{t('navbar.services')}</Link></li>
        <li className="navbar-link"><Link className='link' to="/contact">{t('navbar.contact')}</Link></li>
        <li className="navbar-link" onClick={toggleDropdown}>
          {t('navbar.stationlogin')}

          {showDropdown && (
            <ul className="dropdown-menu">
              <li><Link className='droplink' to="/login">{t('navbar.login')}</Link></li>
              <li><Link className='droplink' to="/logout">{t('navbar.logout')}</Link></li>
            </ul>
          )}
        </li>
            <li className="navbar-link" onClick={toggleDropdown}>
      
      <FaUserCircle className="profile-icon" />
      {/* Dropdown menu */}
      {showDropdown && (
        <ul className="dropdown-menu">
          <li><Link className='droplink' to="/dclogin">{t('navbar.login')}</Link></li>
          <li><Link className='droplink' to="/logout">{t('navbar.logout')}</Link></li>
      {/* Add more options as needed */}
    </ul>
  )}
</li>

      </ul>
        {/* <button onClick={() => toggleLanguage('en')}>English</button>
        <button onClick={() => toggleLanguage('kn')}>Kannada</button> */}
    </nav>
  );
};

export default Navbar;
