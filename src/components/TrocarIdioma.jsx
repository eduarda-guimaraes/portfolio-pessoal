import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/global.css';

function TrocarIdioma({ className = '' }) {
  const { i18n, t } = useTranslation();

  const handleChange = () => {
    i18n.changeLanguage(i18n.language === 'pt' ? 'en' : 'pt');
  };

  return (
    <button
      onClick={handleChange}
      className={`btn-idioma d-flex align-items-center gap-2 ${className}`}
      aria-label={t('nav.switchLanguage')}
      title={t('nav.switchLanguage')}
      type="button"
    >
      {t('nav.switchLabel')}
    </button>
  );
}

export default TrocarIdioma;
