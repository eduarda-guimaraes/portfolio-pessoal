import React from 'react';

function Footer({ idioma }) {
  return (
    <footer
      className="text-center py-4 mt-5"
      style={{
        width: '100%',
        backgroundColor: '#f1f1f1',
        color: '#666',
        fontSize: '0.9rem'
      }}
    >
      <p className="mb-0">
        {idioma === 'pt'
          ? '© 2025 Eduarda Guimarães. Todos os direitos reservados.'
          : '© 2025 Eduarda Guimarães. All rights reserved.'}
      </p>
    </footer>
  );
}

export default Footer;
