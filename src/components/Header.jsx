import React from 'react';
import TrocarIdioma from './TrocarIdioma';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header({ idioma, setIdioma }) {
  return (
    <header
      className="container-fluid bg-white shadow-sm border-bottom position-fixed top-0 start-0 end-0 z-3"
      style={{ padding: '1rem 2rem' }}
    >
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="fs-4 m-0">
          {idioma === 'pt'
            ? 'Portfólio de Eduarda Guimarães'
            : "Eduarda Guimarães' Portfolio"}
        </h1>
        <TrocarIdioma idioma={idioma} setIdioma={setIdioma} />
      </div>
    </header>
  );
}

export default Header;