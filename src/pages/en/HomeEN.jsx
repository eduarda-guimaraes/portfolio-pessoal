import React from 'react';
import minhaFoto from '../../assets/minha-foto.jpg';

function HomeEN() {
  return (
    <>
      {/* ABOUT ME */}
      <section
        id="sobre"
        className="container my-5 px-3 px-md-4"
        style={{ paddingTop: '6rem' }}
      >
        <div className="row align-items-center gy-4">
          <div className="col-12 col-lg-6 text-start">
            <p className="fw-semibold fs-5" style={{ color: '#6a1b9a' }}>
              Hi, I'm
            </p>
            <h1 className="fw-bold mb-3" style={{ fontSize: '2.5rem' }}>
              Eduarda Guimarães
            </h1>
            <p className="text-muted mb-4">
              I'm a full-stack developer passionate about technology, artificial intelligence, and web development. I'm always seeking to build creative and functional solutions that positively impact people.
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
                Contact Me
              </a>
              <a
                href="/cv.pdf"
                className="btn btn-outline-secondary rounded-pill px-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="col-12 col-lg-6 d-flex justify-content-center">
            <img
              src={minhaFoto}
              alt="Eduarda Guimarães photo"
              className="rounded-circle shadow img-fluid"
              style={{ maxWidth: '250px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projetos"
        className="container my-5 px-3 px-md-4"
        style={{ paddingTop: '6rem' }}
      >
        <h2 className="fw-bold mb-4 text-start" style={{ color: '#6a1b9a' }}>
          My Projects
        </h2>

        <div className="row">
          {/* Vocational Test */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '1rem' }}>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">Vocational Test</h5>
                <p className="card-text text-muted" style={{ flex: 1 }}>
                  Vocational test platform using AI, developed as a final project for the technical course. Built with React, Firebase, and OpenAI.
                </p>
                <a
                  href="https://vocationaltest.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-roxo-outline mt-auto rounded-pill"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          {/* Batalha Naval */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '1rem' }}>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">Battleship in Java</h5>
                <p className="card-text text-muted" style={{ flex: 1 }}>
                  Java version of the classic Battleship game. Supports player vs player or player vs computer, with automatic or manual ship placement on a 10x10 board.
                </p>
                <a
                  href="https://github.com/eduarda-guimaraes/Batalha-Naval"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-roxo-outline mt-auto rounded-pill"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>

          {/* CIMOL LockerHub */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '1rem' }}>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">CIMOL LockerHub</h5>
                <p className="card-text text-muted" style={{ flex: 1 }}>
                  Locker management system for schools with rental, return and overdue tracking. Built with Node.js, MongoDB, JWT, and includes dashboard, CI/CD, and secure authentication.
                </p>
                <a
                  href="https://github.com/eduarda-guimaraes/CIMOL-LockerHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-roxo-outline mt-auto rounded-pill"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contato"
        className="container my-5 px-3 px-md-4"
        style={{ paddingTop: '6rem' }}
      >
        <h2 className="fw-bold mb-4 text-start" style={{ color: '#6a1b9a' }}>
          Contact
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
            <span>linkedin.com/in/eduarda-guimarães</span>
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

export default HomeEN;
