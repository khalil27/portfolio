import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // Intégrer i18next avec React
  .init({
    lng: "fr", // Langue par défaut
    fallbackLng: "fr", // Langue de secours
    interpolation: {
      escapeValue: false // Pas nécessaire pour React
    }
  });

export default i18n;
