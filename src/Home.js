// Home.js
import React from 'react';
import Navbar from './Navbar';
import SecondaryNavbar from './SecondaryNavbar';
import Slider from './Slider';
import LanguageContextProvider from './LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import Footer from './Footer';
import BodyContent from './BodyContent';
const Home = () => {
  return <div>
    <Navbar/>
    <SecondaryNavbar/>
    <LanguageSwitcher/>
    <Slider/>
    {/* <BodyContent/> */}
    <Footer/>

  </div>;
};

export default Home;
