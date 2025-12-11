import React from 'react';
import TrocarIdioma from './TrocarIdioma';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      case 'sobre':
        return idioma === 'pt' ? 'Sobre Mim' : 'About Me';
      case 'projetos':
        return idioma === 'pt' ? 'Projetos' : 'Projects';
      case 'participacoes':
        return idioma === 'pt' ? 'Participações' : 'Participations';
      case 'contato':
        return idioma === 'pt' ? 'Contato' : 'Contact';
      default:
        return '';
    }
  };

  return (
    <header
      className="container-fluid bg-white shadow-sm border-bottom position-fixed top-0 start-0 end-0 z-3"
      style={{ padding: '1rem 2rem' }}
    >
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        <h1 className="fs-5 m-0">
          {idioma === 'pt'
            ? 'Portfólio de Eduarda Guimarães'
            : "Eduarda Guimarães' Portfolio"}
        </h1>

        <div className="d-flex align-items-center gap-3">
          <nav className="d-flex gap-3">
            {/* SOBRE MIM / ABOUT ME */}
            <a 
              className={linkClass('sobre')} 
              href={`#${secoes[idioma].sobre}`} 
            >
              {getLinkName('sobre')}
            </a>
            
            {/* PROJETOS / PROJECTS */}
            <a 
              className={linkClass('projetos')} 
              href={`#${secoes[idioma].projetos}`} 
            >
              {getLinkName('projetos')}
            </a>
            
            {/* PARTICIPAÇÕES / PARTICIPATIONS */}
            <a 
              className={linkClass('participacoes')} 
              href={`#${secoes[idioma].participacoes}`} 
            >
              {getLinkName('participacoes')}
            </a>
            
            {/* CONTATO / CONTACT */}
            <a 
              className={linkClass('contato')} 
              href={`#${secoes[idioma].contato}`} 
            >
              {getLinkName('contato')}
            </a>
          </nav>
          <TrocarIdioma idioma={idioma} setIdioma={setIdioma} />
        </div>
      </div>
    </header>
  );
}

export default Header;