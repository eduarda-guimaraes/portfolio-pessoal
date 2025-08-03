import React from 'react';

function HomePT() {
  return (
    <div
      className="card p-4 shadow-sm rounded mx-auto"
      style={{
        maxWidth: '92%',
        marginTop: '7rem'
      }}
    >
      <section id="#sobre" className="mb-4">
        <h2>👋 Sobre Mim</h2>
        <p>
          Olá! Meu nome é Eduarda Guimarães e sou desenvolvedora full-stack apaixonada por tecnologia,
          inteligência artificial e desenvolvimento web. Estou sempre buscando criar soluções criativas
          e funcionais que impactam positivamente as pessoas.
        </p>
      </section>

      <section id="#projetos" className="mb-4">
        <h2>💼 Projetos</h2>
        <ul>
          <li>Vocational Test — Teste vocacional com inteligência artificial</li>
        </ul>
      </section>

      <section id="#contato">
        <h2>📫 Contato</h2>
        <p>Entre em contato comigo por e-mail: eduarda@email.com</p>
      </section>
    </div>
  );
}

export default HomePT;
