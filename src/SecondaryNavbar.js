// import React, { useState } from 'react';
// import './SecondaryNavbar.css';
// import { FaAngleDown } from 'react-icons/fa'; // Import down arrow icon from React Icons

// const SecondaryNavbar = () => {
//   const [showDropdown, setShowDropdown] = useState(false);

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   return (
//     <nav className="secondary-navbar">
//       <ul className="secondary-navbar-links">
//         <li className="secondary-navbar-link" onClick={toggleDropdown}>
//           About Us
//           <FaAngleDown className={`dropdown-arrow ${showDropdown ? 'rotate' : ''}`} />
//           {showDropdown && (
//             <ul className="dropdown-menu">
//               <li>History</li>
//               <li>Mission & Vision</li>
//               <li>Leadership</li>
//             </ul>
//           )}
//         </li>
//         <li className="secondary-navbar-link" onClick={toggleDropdown}>
//           Administration
//           <FaAngleDown className={`dropdown-arrow ${showDropdown ? 'rotate' : ''}`} />
//           {showDropdown && (
//             <ul className="dropdown-menu">
//               <li>Departments</li>
//               <li>Staff</li>
//               <li>Services</li>
//             </ul>
//           )}
//         </li>
//         <li className="secondary-navbar-link" onClick={toggleDropdown}>
//           Training
//           <FaAngleDown className={`dropdown-arrow ${showDropdown ? 'rotate' : ''}`} />
//           {showDropdown && (
//             <ul className="dropdown-menu">
//               <li>Police Training</li>
//               <li>Specialized Training</li>
//               <li>Continuing Education</li>
//             </ul>
//           )}
//         </li>
//         <li className="secondary-navbar-link" onClick={toggleDropdown}>
//           Police Units & Special Units
//           <FaAngleDown className={`dropdown-arrow ${showDropdown ? 'rotate' : ''}`} />
//           {showDropdown && (
//             <ul className="dropdown-menu">
//               <li>Patrol Units</li>
//               <li>Investigation Units</li>
//               <li>Special Response Teams</li>
//             </ul>
//           )}
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default SecondaryNavbar;
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaAngleDown } from 'react-icons/fa'; // Import down arrow icon from React Icons
import './SecondaryNavbar.css'

const SecondaryNavbar = () => {
  const { t } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="secondary-navbar">
      <ul className="secondary-navbar-links">
        <li className="secondary-navbar-link" onClick={toggleDropdown}>
          {t('secondaryNavbar.aboutUs')}
          <FaAngleDown className={`dropdown-arrow ${showDropdown ? 'rotate' : ''}`} />
          {showDropdown && (
            <ul className="dropdown-menu">
              <li>{t('secondaryNavbar.history')}</li>
              <li>{t('secondaryNavbar.missionVision')}</li>
              <li>{t('secondaryNavbar.leadership')}</li>
            </ul>
          )}
        </li>
        <li className="secondary-navbar-link" onClick={toggleDropdown}>
          {t('secondaryNavbar.administration')}
          <FaAngleDown className={`dropdown-arrow ${showDropdown ? 'rotate' : ''}`} />
          {showDropdown && (
            <ul className="dropdown-menu">
              <li>{t('secondaryNavbar.departments')}</li>
              <li>{t('secondaryNavbar.staff')}</li>
              <li>{t('secondaryNavbar.training')}</li>
            </ul>
          )}
        </li>
        <li className="secondary-navbar-link" onClick={toggleDropdown}>
          {t('secondaryNavbar.training')}
          <FaAngleDown className={`dropdown-arrow ${showDropdown ? 'rotate' : ''}`} />
          {showDropdown && (
            <ul className="dropdown-menu">
              <li>{t('secondaryNavbar.policeTraining')}</li>
              <li>{t('secondaryNavbar.specializedTraining')}</li>
              <li>{t('secondaryNavbar.continuingEducation')}</li>
            </ul>
          )}
        </li>
        <li className="secondary-navbar-link" onClick={toggleDropdown}>
          {t('secondaryNavbar.policeUnits')}
          <FaAngleDown className={`dropdown-arrow ${showDropdown ? 'rotate' : ''}`} />
          {showDropdown && (
            <ul className="dropdown-menu">
              <li>{t('secondaryNavbar.patrolUnits')}</li>
              <li>{t('secondaryNavbar.investigationUnits')}</li>
              <li>{t('secondaryNavbar.specialResponseTeams')}</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default SecondaryNavbar;
