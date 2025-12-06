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

    const sections = document.querySelectorAll('#about, #projects, #contact');
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
        {/* TECHNOLOGIES */}
        <div className="mt-4">
          <h5 className="fw-bold mb-3" style={{ color: '#6a1b9a' }}>
            Technologies I use:
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