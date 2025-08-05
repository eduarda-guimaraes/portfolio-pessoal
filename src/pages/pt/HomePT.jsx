import React from 'react';
import minhaFoto from '../../assets/minha-foto.jpg';

function HomePT() {
  return (
    <>
      {/* SOBRE MIM */}
      <section
        id="sobre"
        className="container my-5 px-3 px-md-4"
        style={{ paddingTop: '6rem' }}
      >
        <div className="row align-items-center gy-4">
          <div className="col-12 col-lg-6 text-start">
            <p className="fw-semibold fs-5" style={{ color: '#6a1b9a' }}>
              Olá, eu sou
            </p>
            <h1 className="fw-bold mb-3" style={{ fontSize: '2.5rem' }}>
              Eduarda Guimarães
            </h1>
            <p className="text-muted mb-4">
              Sou estudante da <strong>Escola Técnica Estadual Monteiro Lobato</strong>, onde curso o <strong>técnico em Informática</strong>. 
              Atuo como desenvolvedora full-stack com paixão por <strong>tecnologia</strong>, <strong>inteligência artificial</strong> e <strong>desenvolvimento web</strong>.

              <br /><br />

              Tenho experiência prática com diversas tecnologias, incluindo <strong>React</strong>, <strong>JavaScript</strong>, <strong>Node.js</strong>, <strong>Firebase</strong>, <strong>HTML</strong>, <strong>CSS</strong>, <strong>Bootstrap</strong>, <strong>Python</strong>, <strong>C</strong>, <strong>C#</strong> e <strong>Java</strong>. 
              Também gosto muito da área de <strong>bancos de dados</strong>, tanto SQL (como MySQL) quanto NoSQL (como Firestore), com foco em modelagem e integração.

              <br /><br />

              Estou sempre buscando aprender algo novo, resolver desafios com criatividade e colaborar em projetos que causem impacto positivo na vida das pessoas.
            </p>

            <div className="d-flex flex-wrap gap-3">
              <a
                href="mailto:eduardaguima2007@yahoo.com"
                className="btn rounded-pill px-4 text-white"
                style={{
                  backgroundColor: '#6a1b9a',
                  border: 'none',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                }}
              >
                Fale comigo
              </a>
              <a
                href="/cv.pdf"
                className="btn btn-outline-secondary rounded-pill px-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Baixar CV
              </a>
            </div>
          </div>

          <div className="col-12 col-lg-6 d-flex justify-content-center">
            <img
              src={minhaFoto}
              alt="Foto de Eduarda Guimarães"
              className="rounded-circle shadow img-fluid"
              style={{ maxWidth: '250px', objectFit: 'cover' }}
            />
          </div>
        </div>
        {/* TECNOLOGIAS */}
        <div className="mt-4">
          <h5 className="fw-bold mb-3" style={{ color: '#6a1b9a' }}>
            Tecnologias que utilizo:
          </h5>
          <div className="d-flex flex-wrap gap-2">
            <span className="badge bg-secondary">HTML</span>
            <span className="badge bg-secondary">CSS</span>
            <span className="badge bg-secondary">JavaScript</span>
            <span className="badge bg-secondary">React</span>
            <span className="badge bg-secondary">Node.js</span>
            <span className="badge bg-secondary">Firebase</span>
            <span className="badge bg-secondary">Bootstrap</span>
            <span className="badge bg-secondary">Python</span>
            <span className="badge bg-secondary">C</span>
            <span className="badge bg-secondary">C#</span>
            <span className="badge bg-secondary">Java</span>
            <span className="badge bg-secondary">MySQL</span>
            <span className="badge bg-secondary">Firestore</span>
          </div>
        </div>

      </section>

      {/* PROJETOS */}
      <section
        id="projetos"
        className="container my-5 px-3 px-md-4"
        style={{ paddingTop: '6rem'}}
      >
        <h2 className="fw-bold mb-4 text-start" style={{ color: '#6a1b9a' }}>
          Meus Projetos
        </h2>

        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '1rem' }}>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">Vocational Test</h5>
                <p className="card-text text-muted" style={{ flex: 1 }}>
                  Plataforma de teste vocacional com IA, desenvolvida como TCC no curso técnico. Utiliza React, Firebase e OpenAI.
                </p>
                <a
                  href="https://vocationaltest.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-roxo-outline mt-auto rounded-pill"
                >
                  Ver Projeto
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '1rem' }}>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">Batalha Naval em java</h5>
                <p className="card-text text-muted" style={{ flex: 1 }}>
                    Versão em Java do clássico jogo Batalha Naval. Permite jogar contra outro jogador ou contra o computador, com alocação automática ou manual de navios em um tabuleiro 10x10.
                </p>
                <a
                  href="https://github.com/eduarda-guimaraes/Batalha-Naval"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-roxo-outline mt-auto rounded-pill"
                >
                  Ver Projeto
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '1rem' }}>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">CIMOL LockerHub</h5>
                <p className="card-text text-muted" style={{ flex: 1 }}>
                    Sistema de gestão de armários escolares com controle de locações, devoluções e atrasos. Desenvolvido com Node.js, MongoDB e JWT, inclui dashboard, CI/CD, e autenticação segura.
                </p>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-roxo-outline mt-auto rounded-pill"
                >
                  Ver Projeto
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section
        id="contato"
        className="container my-5 px-3 px-md-4"
        style={{ paddingTop: '6rem' }}
      >
        <h2 className="fw-bold mb-4 text-start" style={{ color: '#6a1b9a' }}>
          Contato
        </h2>

        <div className="d-flex flex-column gap-3">
          <a
            href="mailto:eduardaguima2007@yahoo.com"
            className="d-flex align-items-center gap-3 p-3 border rounded shadow-sm text-decoration-none text-dark"
            style={{ backgroundColor: '#f9f9f9' }}
          >
            <i className="bi bi-envelope-fill fs-4" style={{ color: '#b39ddb' }}></i>
            <span>eduardaguima2007@yahoo.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/eduarda-guimarães-75a8462b1"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex align-items-center gap-3 p-3 border rounded shadow-sm text-decoration-none text-dark"
            style={{ backgroundColor: '#f9f9f9' }}
          >
            <i className="bi bi-linkedin fs-4" style={{ color: '#0a66c2' }}></i>
            <span>linkedin.com/in/eduarda-guimarães-75a8462b1</span>
          </a>

          <a
            href="https://github.com/eduarda-guimaraes"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex align-items-center gap-3 p-3 border rounded shadow-sm text-decoration-none text-dark"
            style={{ backgroundColor: '#f9f9f9' }}
          >
            <i className="bi bi-github fs-4" style={{ color: '#333' }}></i>
            <span>github.com/eduarda-guimaraes</span>
          </a>
        </div>
      </section>
    </>
  );
}

export default HomePT;
