import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePT from './pages/pt/HomePT';
import HomeEN from './pages/en/HomeEN';
import './styles/global.css';

function App() {
  const [idioma, setIdioma] = useState('pt');
  const [secaoAtiva, setSecaoAtiva] = useState('sobre');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSecaoAtiva(entry.target.id);
          }
        });
      },
      {
        threshold: 0.01,
        rootMargin: '-10% 0px -40% 0px'
      }
    );


    const secoes = document.querySelectorAll('section[id]');
    secoes.forEach((secao) => observer.observe(secao));

    return () => observer.disconnect();
  }, [idioma]);

  return (
    <>
      <Header idioma={idioma} setIdioma={setIdioma} secaoAtiva={secaoAtiva} />
      <main>
        {idioma === 'pt' ? <HomePT /> : <HomeEN />}
      </main>
      <Footer idioma={idioma} />
    </>
  );
}

export default App;
