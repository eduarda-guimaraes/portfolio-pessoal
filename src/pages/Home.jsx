import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import minhaFoto from '../assets/minha-foto.jpg';
import cv from '../assets/curriculo-virtual.pdf';
import vr from '../assets/virtual-resume.pdf';

function Home() {
  const { t, i18n } = useTranslation();

  const technologies = t('technologies.items', { returnObjects: true });
  const languages = t('languages.items', { returnObjects: true });
  const projects = t('projects.items', { returnObjects: true });
  const jobs = t('experience.jobs', { returnObjects: true });
  const education = t('experience.education', { returnObjects: true });
  const contactItems = t('contact.items', { returnObjects: true });
  const chips = t('hero.chips', { returnObjects: true });

  const resumeFile = i18n.language === 'pt' ? cv : vr;

  return (
    <>
      <section
        id="about"
        className="container my-5 px-3 px-md-4"
        style={{ paddingTop: '6rem' }}
      >
        <div className="row align-items-center gy-4">
          <div className="col-12 col-lg-7 text-start">
            <p className="fw-semibold fs-5" style={{ color: '#6a1b9a' }}>
              {t('hero.greeting')}
            </p>
            <h1 className="fw-bold mb-2" style={{ fontSize: '2.7rem' }}>
              {t('hero.name')}
            </h1>
            <p className="fs-5 fw-semibold mb-3" style={{ color: '#6a1b9a' }}>
              {t('hero.role')}
            </p>
            <p className="text-muted mb-4">
              <Trans i18nKey="hero.about" components={{ strong: <strong />, br: <br /> }} />
            </p>

            <div className="d-flex flex-wrap gap-2 mb-4">
              {chips.map((chip) => (
                <span key={chip} className="profile-chip">
                  {chip}
                </span>
              ))}
            </div>

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
                {t('hero.contactButton')}
              </a>
              <a
                href={resumeFile}
                className="btn btn-outline-secondary rounded-pill px-4"
                target="_blank"
                rel="noopener noreferrer"
                download={t('hero.resumeDownload')}
              >
                <i className="bi bi-download me-2" aria-hidden="true"></i>
                {t('hero.resumeButton')}
              </a>
            </div>
          </div>

          <div className="col-12 col-lg-5 d-flex justify-content-center">
            <img
              src={minhaFoto}
              alt={t('hero.photoAlt')}
              className="rounded-circle shadow img-fluid"
              style={{ maxWidth: '260px', objectFit: 'cover' }}
            />
          </div>
        </div>

        <div className="mt-5 pt-4 border-top">
          <h5 className="fw-bold mb-4" style={{ color: '#6a1b9a' }}>
            {t('languages.title')}
          </h5>
          <div className="row gy-3">
            {languages.map((item) => (
              <div key={item.name} className="col-12 col-sm-6">
                <div className="d-flex align-items-center gap-3">
                  <i className={`bi bi-${item.icon}`} style={{ fontSize: '2rem', color: '#6a1b9a' }}></i>
                  <div>
                    <p className="fw-bold mb-1">{item.name}</p>
                    <p className="text-muted mb-0">{item.level}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 pt-4 border-top">
          <h5 className="fw-bold mb-4" style={{ color: '#6a1b9a' }}>
            {t('technologies.title')}
          </h5>
          <div className="d-flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <div key={technology.name} className="tech-badge d-flex align-items-center gap-2">
                <i
                  className={`bi bi-${technology.icon}`}
                  style={{ color: technology.color ?? 'currentColor' }}
                  aria-hidden="true"
                ></i>
                <span>{technology.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="container my-5 px-3 px-md-4"
        style={{ paddingTop: '6rem' }}
      >
        <h2 className="fw-bold mb-4 text-start" style={{ color: '#6a1b9a' }}>
          {t('projects.title')}
        </h2>

        <div className="row">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={index === 0 ? 'col-12 col-lg-6 mb-4' : 'col-12 col-md-6 col-lg-3 mb-4'}
            >
              <div className="card h-100 shadow-sm border-0" style={{ borderRadius: '1rem' }}>
                <div className="card-body d-flex flex-column">
                  {project.badge ? (
                    <div className="mb-2">
                      <span className="badge rounded-pill text-bg-light border">{project.badge}</span>
                    </div>
                  ) : null}
                  <h5 className="card-title fw-bold">{project.title}</h5>
                  <p className="card-text text-muted" style={{ flex: 1 }}>
                    <Trans
                      i18nKey={`projects.items.${index}.description`}
                      components={{ strong: <strong /> }}
                    />
                  </p>
                  <div className="d-flex flex-wrap gap-2 mt-auto">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn ${
                          link.variant === 'github' ? 'btn-outline-github' : 'btn-roxo-outline'
                        } rounded-pill`}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="experience"
        className="container my-5 px-3 px-md-4"
        style={{ paddingTop: '6rem' }}
      >
        <h2 className="fw-bold mb-4 text-start" style={{ color: '#6a1b9a' }}>
          {t('experience.title')}
        </h2>

        <div className="row g-4">
          <div className="col-12 col-lg-6">
            <div className="timeline-card h-100">
              <h5 className="fw-bold mb-3">{t('experience.workTitle')}</h5>
              <div className="d-flex flex-column gap-3">
                {jobs.map((item) => (
                  <article key={`${item.title}-${item.period}`} className="timeline-item">
                    <div className="d-flex justify-content-between align-items-start gap-3 flex-wrap mb-2">
                      <div>
                        <h6 className="fw-bold mb-1">{item.title}</h6>
                        <p className="mb-0">{item.company}</p>
                      </div>
                      <span className="timeline-tag">{item.type}</span>
                    </div>
                    <p className="small text-muted mb-2">{item.period}</p>
                    <p className="text-muted mb-0">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="timeline-card h-100">
              <h5 className="fw-bold mb-3">{t('experience.educationTitle')}</h5>
              <div className="d-flex flex-column gap-3">
                {education.map((item) => (
                  <article key={`${item.title}-${item.period}`} className="timeline-item">
                    <h6 className="fw-bold mb-1">{item.title}</h6>
                    <p className="mb-1">{item.subtitle}</p>
                    <p className="small text-muted mb-2">{item.period}</p>
                    <p className="text-muted mb-0">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="container my-5 px-3 px-md-4"
        style={{ paddingTop: '6rem' }}
      >
        <h2 className="fw-bold mb-4 text-start" style={{ color: '#6a1b9a' }}>
          {t('contact.title')}
        </h2>

        <div className="d-flex flex-column gap-3">
          {contactItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="d-flex align-items-center gap-3 p-3 border rounded shadow-sm text-decoration-none text-dark contact-link-card"
              style={{ backgroundColor: '#f9f9f9' }}
            >
              <i className={`bi bi-${item.icon} fs-4`} style={{ color: item.color }}></i>
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
