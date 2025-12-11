import React from 'react';
import TrocarIdioma from './TrocarIdioma';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // necessário p/ o toggler funcionar

function Header({ idioma, setIdioma, secaoAtiva }) {
  const secoes = {
    pt: { sobre: 'sobre', projetos: 'projetos', participacoes: 'participacoes', contato: 'contato' },
    en: { sobre: 'about', projetos: 'projects', participacoes: 'participations', contato: 'contact' }
  };

  const linkClass = (id) =>
    `nav-link fw-semibold ${
      secaoAtiva === secoes[idioma][id] ? 'text-roxo-ativo' : 'text-dark'
    }`;

  const getLinkName = (id) => {
    switch (id) {
      case 'sobre':          return idioma === 'pt' ? 'Sobre Mim'       : 'About Me';
      case 'projetos':       return idioma === 'pt' ? 'Projetos'        : 'Projects';
      case 'participacoes':  return idioma === 'pt' ? 'Participações'   : 'Participations';
      case 'contato':        return idioma === 'pt' ? 'Contato'         : 'Contact';
      default: return '';
    }
  };

  // ids alvo conforme idioma
  const ids = secoes[idioma];

  return (
    <header className="position-fixed top-0 start-0 end-0 z-3">
      <nav className="navbar navbar-expand-md bg-white border-bottom shadow-sm">
        <div className="container-fluid px-3 px-md-4" style={{ minHeight: '64px' }}>
          {/* Brand / título */}
          <a
            className="navbar-brand fw-semibold m-0"
            href={`#${ids.sobre}`}
            style={{ fontSize: '1rem' }}
          >
            {idioma === 'pt' ? 'Portfólio de Eduarda Guimarães' : "Eduarda Guimarães' Portfolio"}
          </a>

          {/* Botão de idioma visível no desktop */}
          <div className="d-none d-md-flex ms-md-4 ms-lg-5">
            <TrocarIdioma idioma={idioma} setIdioma={setIdioma} className="btn-sm" />
          </div>

          {/* Toggler (hambúrguer) */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMain"
            aria-controls="navbarMain"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu colapsável */}
          <div className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav ms-auto align-items-start align-items-md-center gap-2 gap-md-3 mt-3 mt-md-0">
              <li className="nav-item">
                <a className={linkClass('sobre')} href={`#${ids.sobre}`}>{getLinkName('sobre')}</a>
              </li>
              <li className="nav-item">
                <a className={linkClass('projetos')} href={`#${ids.projetos}`}>{getLinkName('projetos')}</a>
              </li>
              <li className="nav-item">
                <a className={linkClass('participacoes')} href={`#${ids.participacoes}`}>{getLinkName('participacoes')}</a>
              </li>
              <li className="nav-item">
                <a className={linkClass('contato')} href={`#${ids.contato}`}>{getLinkName('contato')}</a>
              </li>

              {/* Botão de idioma duplicado p/ mobile (d-md-none) */}
              <li className="nav-item d-md-none mt-2">
                <TrocarIdioma idioma={idioma} setIdioma={setIdioma} className="w-100" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
