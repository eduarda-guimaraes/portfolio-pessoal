import React, { useEffect } from 'react';
import minhaFoto from '../../assets/minha-foto.jpg';
import vr from '../../assets/virtual-resume.pdf';

function HomeEN() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('#about, #projects, #participations, #contact');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      {/* ABOUT ME */}
      <section
        id="about"
        className="container my-5 px-3 px-md-4"
        style={{ paddingTop: '6rem' }}
      >
        <div className="row align-items-center gy-4">
          <div className="col-12 col-lg-6 text-start">
            <p className="fw-semibold fs-5" style={{ color: '#6a1b9a' }}>
              Hello, I'm
            </p>
            <h1 className="fw-bold mb-3" style={{ fontSize: '2.5rem' }}>
              Eduarda Guimarães
            </h1>
            <p className="text-muted mb-4">
              I am a student at <strong>Escola Técnica Estadual Monteiro Lobato</strong>, where I am pursuing a <strong>Technical Degree in Computer Science</strong>.
              I am a full-stack developer with a passion for <strong>technology</strong>, <strong>artificial intelligence</strong>, and <strong>web development</strong>.
              <br /><br />
              I have hands-on experience with various technologies and tools, including <strong>React</strong>, <strong>JavaScript</strong>, <strong>Node.js</strong>, <strong>Firebase</strong>, <strong>HTML</strong>, <strong>CSS</strong>, <strong>Bootstrap</strong>, <strong>Python</strong>, <strong>C</strong>, and <strong>Java</strong>.
              I am also very interested in <strong>databases</strong>, both SQL (like MySQL) and NoSQL (like Firestore), with a focus on modeling and integration.
              <br /><br />
              I am always looking to learn something new, solve challenges creatively, and collaborate on projects that positively impact people's lives.
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
                Contact Me
              </a>
              <a
                href={vr}
                className="btn btn-outline-secondary rounded-pill px-4"
                target="_blank"
                rel="noopener noreferrer"
                download="Eduarda Guimarães - Virtual Resume.pdf"
              >
                <i className="bi bi-download me-2" aria-hidden="true"></i>
                Download VR
              </a>
            </div>
          </div>

          <div className="col-12 col-lg-6 d-flex justify-content-center">
            <img
              src={minhaFoto}
              alt="Photo of Eduarda Guimarães"
              className="rounded-circle shadow img-fluid"
              style={{ maxWidth: '250px', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* LANGUAGES */}
        <div className="mt-5 pt-4 border-top">
          <h5 className="fw-bold mb-4" style={{ color: '#6a1b9a' }}>
            Languages:
          </h5>
          <div className="row gy-3">
            <div className="col-12 col-sm-6">
              <div className="d-flex align-items-center gap-3">
                <i className="bi bi-globe2" style={{ fontSize: '2rem', color: '#6a1b9a' }}></i>
                <div>
                  <p className="fw-bold mb-1">Portuguese</p>
                  <p className="text-muted mb-0">Native</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6">
              <div className="d-flex align-items-center gap-3">
                <i className="bi bi-globe" style={{ fontSize: '2rem', color: '#6a1b9a' }}></i>
                <div>
                  <p className="fw-bold mb-1">English</p>
                  <p className="text-muted mb-0">Advanced</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TECHNOLOGIES */}
        <div className="mt-5 pt-4 border-top">
          <h5 className="fw-bold mb-4" style={{ color: '#6a1b9a' }}>
            Technologies I use:
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

      {/* PROJECTS */}
      <section
        id="projects"
        className="container my-5 px-3 px-md-4"
        style={{ paddingTop: '6rem' }}
      >
        <h2 className="fw-bold mb-4 text-start" style={{ color: '#6a1b9a' }}>
          My Projects
        </h2>

        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '1rem' }}>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">Vocational Test</h5>
                <p className="card-text text-muted" style={{ flex: 1 }}>
                  An AI-powered vocational test platform, developed as the final project for my Computer Science technical course. Uses React, Python, Firebase, and OpenAI.
                </p>
                <div className="d-flex gap-2 mt-auto justify-content-between">
                  <a
                    href="https://www.vocationaltest.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-roxo-outline rounded-pill flex-fill"
                  >
                    View Site
                  </a>
                  <a
                    href="https://github.com/eduarda-guimaraes/Vocational-Test"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-github rounded-pill px-4 flex-fill"
                  >
                    View Repository
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '1rem' }}>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">Battleship in Java</h5>
                <p className="card-text text-muted" style={{ flex: 1 }}>
                  A Java version of the classic Battleship game. It allows playing against another player or the computer, with automatic or manual ship placement on a 10x10 board.
                </p>
                <a
                  href="https://github.com/eduarda-guimaraes/Batalha-Naval"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-github rounded-pill px-4"
                >
                  View Repository
                </a>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '1rem' }}>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">Patinhas & Cia</h5>
                <p className="card-text text-muted" style={{ flex: 1 }}>
                  Pet Shop Management and E-commerce project. Built using HTML, CSS, and JavaScript, focusing on responsiveness and data persistence (clients and cart) via localStorage.
                </p>
                <div className="d-flex gap-2 mt-auto justify-content-between">
                  <a
                    href="https://eduarda-guimaraes.github.io/Teach3035-PetShop/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-roxo-outline rounded-pill flex-fill"
                  >
                    View Site
                  </a>
                  <a
                    href="https://github.com/eduarda-guimaraes/Teach3035-PetShop"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-github rounded-pill px-4 flex-fill"
                  >
                    View Repository
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '1rem' }}>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">OOP Game in C#</h5>
                <p className="card-text text-muted" style={{ flex: 1 }}>
                  This project demonstrates the main concepts of Object-Oriented Programming (OOP) in C# through a mini turn-based battle game in the terminal.
                </p>
                <a
                  href="https://github.com/eduarda-guimaraes/POO-CSharp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-github rounded-pill px-4"
                >
                  View Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARTICIPATIONS */}
      <section
        id="participations"
        className="container my-5 px-3 px-md-4"
        style={{ paddingTop: '6rem' }}
      >
        <h2 className="fw-bold mb-4 text-start" style={{ color: '#6a1b9a' }}>
          Participations
        </h2>

        <div className="row">
          {/* HackaTime Taquara 2025 */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '1rem' }}>
              <div className="card-body d-flex flex-column">
                <div className="mb-2">
                  <span className="badge" style={{ backgroundColor: '#6a1b9a', color: '#fff' }}>
                    Honorable Mention
                  </span>
                </div>

                <h5 className="card-title fw-bold">HackaTime Taquara 2025</h5>

                <p className="card-text text-muted" style={{ flex: 1, fontSize: '0.9rem' }}>
                  Hackathon organized by Sicredi Caminho das Águas, Faccat, Instituto Taquara Mais, Sebrae, and Crisdu Labs. 48 hours of collaboration, mentoring, and community-centered solutions.
                </p>

                <small className="text-muted mb-3">
                  <i className="bi bi-calendar-event me-2"></i>
                  August 8–9, 2025
                </small>

                <a
                  href="https://www.sicredi.com.br/coop/caminhodasaguasrs/noticias/inovacao/hackatime-taquara-2025-reune-jovens-estudantes-para-encontrar-solucoes-inovadoras/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-roxo-outline rounded-pill mt-auto"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Taquara Summit 2025 */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '1rem' }}>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">Taquara Summit 2025</h5>

                <p className="card-text text-muted" style={{ flex: 1, fontSize: '0.9rem' }}>
                  On August 22 at Faccat, the Taquara Summit brings 16 content sessions on innovation, leadership, entrepreneurship, and the future of work, with nationally recognized speakers.
                </p>

                <small className="text-muted mb-3">
                  <i className="bi bi-calendar-event me-2"></i>
                  August 22, 2025
                </small>

                <a
                  href="https://www.taquara.rs.gov.br/noticia/13890/13890?titulo=Grandes+nomes+estar%C3%A3o+no+Taquara+Summit+2025+falando+de+inova%C3%A7%C3%A3o%2C+empreendedorismo+e+networking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-roxo-outline rounded-pill mt-auto"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Oktober Summit 2025 */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '1rem' }}>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold">Oktober Summit 2025</h5>

                <p className="card-text text-muted" style={{ flex: 1, fontSize: '0.9rem' }}>
                  On October 3 at Alles Blau (Igrejinha), the Oktober Summit gathers business leaders, startups, universities, and government in one of Vale do Paranhana’s key innovation and development events.
                </p>

                <small className="text-muted mb-3">
                  <i className="bi bi-calendar-event me-2"></i>
                  October 3, 2025
                </small>

                <a
                  href="https://www.instagram.com/oktobersummit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-roxo-outline rounded-pill mt-auto d-flex align-items-center justify-content-center gap-2"
                >
                  <i className="bi bi-instagram" style={{ fontSize: '1.2rem' }}></i>
                  See on Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="container my-5 px-3 px-md-4"
        style={{ paddingTop: '6rem' }}
      >
        <h2 className="fw-bold mb-4 text-start" style={{ color: '#6a1b9a' }}>
          Contact
        </h2>

        <div className="d-flex flex-column gap-3">
          <a
            href="mailto:aeduardaguimaraes@gmail.com"
            className="d-flex align-items-center gap-3 p-3 border rounded shadow-sm text-decoration-none text-dark contact-link-card"
            style={{ backgroundColor: '#f9f9f9' }}
          >
            <i className="bi bi-envelope-fill fs-4" style={{ color: '#b39ddb' }}></i>
            <span>aeduardaguimaraes@gmail.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/eduarda-guimarães-75a8462b1"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex align-items-center gap-3 p-3 border rounded shadow-sm text-decoration-none text-dark contact-link-card"
            style={{ backgroundColor: '#f9f9f9' }}
          >
            <i className="bi bi-linkedin fs-4" style={{ color: '#0a66c2' }}></i>
            <span>linkedin.com/in/eduarda-guimarães-75a8462b1</span>
          </a>

          <a
            href="https://github.com/eduarda-guimaraes"
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex align-items-center gap-3 p-3 border rounded shadow-sm text-decoration-none text-dark contact-link-card"
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
