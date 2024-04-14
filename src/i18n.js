import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './en.json';
import translationKN from './kn.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEN },
    kn: { translation: translationKN },
  },
  lng: 'en', // Default language
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
