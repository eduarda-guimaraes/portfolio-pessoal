import React from 'react';
import minhaFoto from '../../assets/minha-foto.jpg';
import cv from '../../assets/curriculo-virtual.pdf'; 

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

              Tenho experiência prática com diversas tecnologias e ferramentas, incluindo <strong>React</strong>, <strong>JavaScript</strong>, <strong>Node.js</strong>, <strong>Firebase</strong>, <strong>HTML</strong>, <strong>CSS</strong>, <strong>Bootstrap</strong>, <strong>Python</strong>, <strong>C</strong> e <strong>Java</strong>. 
              Também gosto muito da área de <strong>bancos de dados</strong>, tanto SQL (como MySQL) quanto NoSQL (como Firestore), com foco em modelagem e integração.

              <br /><br />

              Estou sempre buscando aprender algo novo, resolver desafios com criatividade e colaborar em projetos que causem impacto positivo na vida das pessoas.
            </p>

            <div className="d-flex flex-wrap gap-3">
              <a
                href="mailto:aeduardaguimaraes@gmail.com"
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
                href={cv} 
                className="btn btn-outline-secondary rounded-pill px-4"
                target="_blank"
                rel="noopener noreferrer"
                download="Eduarda Guimarães - Currículo Virtual.pdf"
              >
                <i className="bi bi-download me-2" aria-hidden="true"></i>
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

        {/* IDIOMAS */}
        <div className="mt-5 pt-4 border-top">
          <h5 className="fw-bold mb-4" style={{ color: '#6a1b9a' }}>
            Idiomas:
          </h5>
          <div className="row gy-3">
            <div className="col-12 col-sm-6">
              <div className="d-flex align-items-center gap-3">
                <i className="bi bi-globe2" style={{ fontSize: '2rem', color: '#6a1b9a' }}></i>
                <div>
                  <p className="fw-bold mb-1">Português</p>
                  <p className="text-muted mb-0">Nativo</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="d-flex align-items-center gap-3">
                <i className="bi bi-globe" style={{ fontSize: '2rem', color: '#6a1b9a' }}></i>
                <div>
                  <p className="fw-bold mb-1">Inglês</p>
                  <p className="text-muted mb-0">Avançado</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TECNOLOGIAS */}
        <div className="mt-5 pt-4 border-top">
          <h5 className="fw-bold mb-4" style={{ color: '#6a1b9a' }}>
            Tecnologias que utilizo:
          </h5>
          <div className="d-flex flex-wrap gap-3">
            <div className="tech-badge d-flex align-items-center gap-2">
              <i className="bi bi-filetype-html"></i>
              <span>HTML</span>
            </div>
            <div className="tech-badge d-flex align-items-center gap-2">
              <i className="bi bi-filetype-css"></i>
              <span>CSS</span>
            </div>
            <div className="tech-badge d-flex align-items-center gap-2">
              <i className="bi bi-filetype-js"></i>
              <span>JavaScript</span>
            </div>
            <div className="tech-badge d-flex align-items-center gap-2">
              <i className="bi bi-filetype-tsx"></i>
              <span>TypeScript</span>
            </div>
            <div className="tech-badge d-flex align-items-center gap-2">
              <i className="bi bi-react"></i>
              <span>React</span>
            </div>
            <div className="tech-badge d-flex align-items-center gap-2">
              <i className="bi bi-node-plus"></i>
              <span>Node.js</span>
            </div>
            <div className="tech-badge d-flex align-items-center gap-2">
              <i className="bi bi-fire"></i>
              <span>Firebase</span>
            </div>
            <div className="tech-badge d-flex align-items-center gap-2">
              <i className="bi bi-bootstrap"></i>
              <span>Bootstrap</span>
            </div>
            <div className="tech-badge d-flex align-items-center gap-2">
              <i className="bi bi-filetype-py"></i>
              <span>Python</span>
            </div>
            <div className="tech-badge d-flex align-items-center gap-2">
              <i className="bi bi-code"></i>
              <span>C</span>
            </div>
            <div className="tech-badge d-flex align-items-center gap-2">
              <i className="bi bi-code-slash"></i>
              <span>C#</span>
            </div>
            <div className="tech-badge d-flex align-items-center gap-2">
              <i className="bi bi-cup-hot"></i>
              <span>Java</span>
            </div>
            <div className="tech-badge d-flex align-items-center gap-2">
              <i className="bi bi-database"></i>
              <span>MySQL</span>
            </div>
            <div className="tech-badge d-flex align-items-center gap-2">
              <i className="bi bi-database-fill"></i>
              <span>Firestore</span>
            </div>
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
            Plataforma de teste vocacional com Inteligência Artificial, desenvolvida como TCC no Curso Técnico de Informática. Utiliza React, Python, Firebase e OpenAI.
          </p>
          <div className="d-flex gap-2 mt-auto justify-content-between">
            <a
              href="https://www.vocationaltest.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-roxo-outline rounded-pill flex-fill"
            >
              Acessar Site
            </a>
            <a 
              href="https://github.com/eduarda-guimaraes/Vocational-Test"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-github rounded-pill px-4 flex-fill"
            >
              Ver repositório
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '1rem' }}>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold">Batalha Naval em Java</h5>
          <p className="card-text text-muted" style={{ flex: 1 }}>
            Versão em Java do clássico jogo Batalha Naval. Permite jogar contra outro jogador ou contra o computador, com alocação automática ou manual de navios em um tabuleiro 10x10.
          </p>
          <a
            href="https://github.com/eduarda-guimaraes/Batalha-Naval"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-github rounded-pill px-4"
          >
            Ver repositório
          </a>
        </div>
      </div>
    </div>

    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '1rem' }}>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold">Patinhas & Cia</h5>
          <p className="card-text text-muted" style={{ flex: 1 }}>
            Projeto de Gerenciamento de Pet Shop com e-commerce. Construído usando HTML, CSS e JavaScript, com ênfase na responsividade e persistência de dados (clientes e carrinho) via localStorage.
          </p>
          <div className="d-flex gap-2 mt-auto justify-content-between">
            <a
              href="https://eduarda-guimaraes.github.io/Teach3035-PetShop/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-roxo-outline rounded-pill flex-fill"
            >
              Acessar Site
            </a>
            <a 
              href="https://github.com/eduarda-guimaraes/Teach3035-PetShop"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-github rounded-pill px-4 flex-fill"
            >
              Ver repositório
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '1rem' }}>
        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-bold">Jogo de POO em C#</h5>
          <p className="card-text text-muted" style={{ flex: 1 }}>
            Este projeto demonstra os principais conceitos de Programação Orientada a Objetos (POO) em C# através de um mini jogo de batalha por turnos no terminal.
          </p>
          <a
            href="https://github.com/eduarda-guimaraes/POO-CSharp"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-github rounded-pill px-4"
          >
            Ver repositório
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* PARTICIPAÇÕES */}
      <section
        id="participacoes"
        className="container my-5 px-3 px-md-4"
        style={{ paddingTop: '6rem' }}
      >
        <h2 className="fw-bold mb-4 text-start" style={{ color: '#6a1b9a' }}>
          Participações
        </h2>

        <div className="row">
          {/* Adicione aqui seus cards de participações */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '1rem' }}>
              <div className="card-body d-flex flex-column">
                <div className="mb-2">
                  <span className="badge" style={{ backgroundColor: '#6a1b9a', color: '#fff' }}>
                    Menção Honrosa
                  </span>
                </div>

                <h5 className="card-title fw-bold">HackaTime Taquara 2025</h5>

                <p className="card-text text-muted" style={{ flex: 1, fontSize: '0.9rem' }}>
                  Hackathon realizado pela Sicredi Caminho das Águas, Faccat, Instituto Taquara Mais,
                  Sebrae e Crisdu Labs. Reuniu jovens estudantes durante 48 horas para resolver desafios
                  da comunidade com mentorias e apoio metodológico.
                </p>

                <small className="text-muted mb-3">
                  <i className="bi bi-calendar-event me-2"></i>
                  8 e 9 de agosto de 2025
                </small>

                {/* Botão Saiba Mais */}
                <a
                  href="https://www.sicredi.com.br/coop/caminhodasaguasrs/noticias/inovacao/hackatime-taquara-2025-reune-jovens-estudantes-para-encontrar-solucoes-inovadoras/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-roxo-outline rounded-pill mt-auto"
                >
                  Saiba Mais
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '1rem' }}>
              <div className="card-body d-flex flex-column">

                <h5 className="card-title fw-bold">Taquara Summit 2025</h5>

                <p className="card-text text-muted" style={{ flex: 1, fontSize: '0.9rem' }}>
                  O Taquara Summit 2025 acontece no dia 22 de agosto na Faccat, reunindo 16 sessões sobre inovação, liderança, empreendedorismo e futuro do trabalho, com palestrantes de destaque nacional.
                </p>

                <small className="text-muted mb-3">
                  <i className="bi bi-calendar-event me-2"></i>
                  22 de agosto de 2025
                </small>

                <a
                  href="https://www.taquara.rs.gov.br/noticia/13890/13890?titulo=Grandes+nomes+estarão+no+Taquara+Summit+2025+falando+de+inovação%2C+empreendedorismo+e+networking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-roxo-outline rounded-pill mt-auto"
                >
                  Saiba Mais
                </a>

              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '1rem' }}>
              <div className="card-body d-flex flex-column">

                <h5 className="card-title fw-bold">Oktober Summit 2025</h5>

                <p className="card-text text-muted" style={{ flex: 1, fontSize: '0.9rem' }}>
                  O Oktober Summit 2025 acontece no dia 3 de outubro no Alles Blau, reunindo líderes empresariais, startups, universidades e governo em um dos principais eventos de inovação e desenvolvimento do Vale do Paranhana.
                </p>

                <small className="text-muted mb-3">
                  <i className="bi bi-calendar-event me-2"></i>
                  3 de outubro de 2025
                </small>

                <a
                  href="https://www.instagram.com/oktobersummit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-roxo-outline rounded-pill mt-auto d-flex align-items-center justify-content-center gap-2"
                >
                  <i className="bi bi-instagram" style={{ fontSize: '1.2rem' }}></i>
                  Veja no Instagram
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
            href="mailto:aeduardaguimaraes@gmail.com"
            className="d-flex align-items-center gap-3 p-3 border rounded shadow-sm text-decoration-none text-dark contact-link-card" // <-- CLASSE ADICIONADA
            style={{ backgroundColor: '#f9f9f9' }}
          >
            <i className="bi bi-envelope-fill fs-4" style={{ color: '#b39ddb' }}></i>
            <span>aeduardaguimaraes@gmail.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/eduarda-guimarães-75a8462b1"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex align-items-center gap-3 p-3 border rounded shadow-sm text-decoration-none text-dark contact-link-card" // <-- CLASSE ADICIONADA
            style={{ backgroundColor: '#f9f9f9' }}
          >
            <i className="bi bi-linkedin fs-4" style={{ color: '#0a66c2' }}></i>
            <span>linkedin.com/in/eduarda-guimarães-75a8462b1</span>
          </a>

          <a
            href="https://github.com/eduarda-guimaraes"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex align-items-center gap-3 p-3 border rounded shadow-sm text-decoration-none text-dark contact-link-card" // <-- CLASSE ADICIONADA
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
