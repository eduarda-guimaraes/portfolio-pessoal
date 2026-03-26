import React from 'react';
import { useTranslation } from 'react-i18next';
import TrocarIdioma from './TrocarIdioma';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Header({ secaoAtiva }) {
  const { t } = useTranslation();
  const secoes = ['about', 'projects', 'experience', 'contact'];
  const linkClass = (id) =>
    `nav-link fw-semibold ${secaoAtiva === id ? 'text-roxo-ativo' : 'text-dark'}`;

  const getLinkName = (id) => {
    switch (id) {
      case 'about':
        return t('nav.about');
      case 'projects':
        return t('nav.projects');
      case 'experience':
        return t('nav.experience');
      case 'contact':
        return t('nav.contact');
      default:
        return '';
    }
  };

  return (
    <header className="position-fixed top-0 start-0 end-0 z-3">
      <nav className="navbar navbar-expand-md bg-white border-bottom shadow-sm">
        <div className="container-fluid px-3 px-md-4" style={{ minHeight: '64px' }}>
          <a
            className="navbar-brand fw-semibold m-0"
            href="#about"
            style={{ fontSize: '1rem' }}
          >
            {t('nav.brand')}
          </a>

          <div className="d-none d-md-flex ms-md-4 ms-lg-5">
            <TrocarIdioma className="btn-sm" />
          </div>

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

          <div className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav ms-auto align-items-start align-items-md-center gap-2 gap-md-3 mt-3 mt-md-0">
              {secoes.map((secao) => (
                <li key={secao} className="nav-item">
                  <a className={linkClass(secao)} href={`#${secao}`}>
                    {getLinkName(secao)}
                  </a>
                </li>
              ))}
              <li className="nav-item d-md-none mt-2">
                <TrocarIdioma className="w-100" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
