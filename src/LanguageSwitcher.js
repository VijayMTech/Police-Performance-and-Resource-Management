import React from 'react';
import { useLanguage } from './LanguageContext';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { toggleLanguage } = useLanguage();
  const { t } = useTranslation();

  return (
    <div className="language-switcher">
      <button className='langbtn' onClick={() => toggleLanguage('en')}>{t('English')}</button>
      <button className='langbtn' onClick={() => toggleLanguage('kn')}>{t('kannada')}</button>
    </div>
  );
};

export default LanguageSwitcher;
