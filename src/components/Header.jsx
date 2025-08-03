import React from 'react';
import TrocarIdioma from './TrocarIdioma';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header({ idioma, setIdioma, secaoAtiva }) {
  const linkClass = (id) =>
    `nav-link fw-semibold ${
      secaoAtiva === id ? 'text-roxo-ativo' : 'text-dark'
    }`;

  return (
    <header
      className="container-fluid bg-white shadow-sm border-bottom position-fixed top-0 start-0 end-0 z-3"
      style={{ padding: '1rem 2rem' }}
    >
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        {/* Título à esquerda */}
        <h1 className="fs-5 m-0">
          {idioma === 'pt'
            ? 'Portfólio de Eduarda Guimarães'
            : "Eduarda Guimarães' Portfolio"}
        </h1>

        {/* Navegação + idioma à direita */}
        <div className="d-flex align-items-center gap-3">
          <nav className="d-flex gap-3">
            <a className={linkClass('sobre')} href="#sobre">
              {idioma === 'pt' ? 'Sobre Mim' : 'About Me'}
            </a>
            <a className={linkClass('projetos')} href="#projetos">
              {idioma === 'pt' ? 'Projetos' : 'Projects'}
            </a>
            <a className={linkClass('contato')} href="#contato">
              {idioma === 'pt' ? 'Contato' : 'Contact'}
            </a>
          </nav>
          <TrocarIdioma idioma={idioma} setIdioma={setIdioma} />
        </div>
      </div>
    </header>
  );
}

export default Header;
