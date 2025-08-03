import React from 'react';
import '../styles/global.css'; // ajuste o caminho se estiver em outra pasta

function TrocarIdioma({ idioma, setIdioma }) {
  const handleChange = () => {
    setIdioma(idioma === 'pt' ? 'en' : 'pt');
  };

  return (
    <button onClick={handleChange} className="btn-idioma">
      {idioma === 'pt' ? 'EN' : 'PT'}
    </button>
  );
}

export default TrocarIdioma;
