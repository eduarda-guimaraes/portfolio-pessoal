import React from 'react';

function TrocarIdioma({ idioma, setIdioma }) {
  return (
    <div>
      <button
        className="btn btn-outline-primary btn-sm me-2"
        onClick={() => setIdioma('pt')}
        disabled={idioma === 'pt'}
      >
        PT
      </button>
      <button
        className="btn btn-outline-primary btn-sm"
        onClick={() => setIdioma('en')}
        disabled={idioma === 'en'}
      >
        EN
      </button>
    </div>
  );
}

export default TrocarIdioma;
