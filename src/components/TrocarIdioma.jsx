import React from 'react';
import '../styles/global.css';

function TrocarIdioma({ idioma, setIdioma, className = '' }) {
  const handleChange = () => {
    setIdioma(idioma === 'pt' ? 'en' : 'pt');
  };

  return (
    <button
      onClick={handleChange}
      className={`btn-idioma d-flex align-items-center gap-2 ${className}`}
      aria-label="Trocar idioma"
      title="Trocar idioma"
      type="button"
    >
      {idioma === 'pt' ? 'English' : 'Português'}
    </button>
  );
}

export default TrocarIdioma;
