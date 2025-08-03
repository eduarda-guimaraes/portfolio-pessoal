import React from 'react';

function HomeEN() {
  return (
    <div
      className="card p-4 shadow-sm rounded mx-auto"
      style={{
        maxWidth: '92%',
        marginTop: '7rem'
      }}
    >
      <section className="mb-4">
        <h2>👋 About Me</h2>
        <p>
          Hi! My name is Eduarda Guimarães and I'm a full-stack developer passionate about technology,
          artificial intelligence, and web development. I'm always seeking to create creative and functional
          solutions that positively impact people's lives.
        </p>
      </section>

      <section className="mb-4">
        <h2>💼 Projects</h2>
        <ul>
          <li>Vocational Test — Vocational test using artificial intelligence</li>
        </ul>
      </section>

      <section>
        <h2>📫 Contact</h2>
        <p>Get in touch with me via email: eduarda@email.com</p>
      </section>
    </div>
  );
}

export default HomeEN;
