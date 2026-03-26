import React from 'react';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      className="text-center py-4 mt-5"
      style={{
        width: '100%',
        backgroundColor: '#f1f1f1',
        color: '#666',
        fontSize: '0.9rem',
      }}
    >
      <p className="mb-0">{t('footer.rights')}</p>
    </footer>
  );
}

export default Footer;
