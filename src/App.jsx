import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import './styles/global.css';

function App() {
  const { i18n } = useTranslation();
  const [secaoAtiva, setSecaoAtiva] = useState('about');
  const [tema, setTema] = useState(() => localStorage.getItem('portfolio-tema') || 'light');

  useEffect(() => {
    document.documentElement.dataset.theme = tema;
    localStorage.setItem('portfolio-tema', tema);
  }, [tema]);

  const alternarTema = () => setTema((atual) => (atual === 'dark' ? 'light' : 'dark'));

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
        rootMargin: '-10% 0px -40% 0px',
      }
    );

    const secoes = document.querySelectorAll('section[id]');
    secoes.forEach((secao) => observer.observe(secao));

    return () => observer.disconnect();
  }, [i18n.language]);

  return (
    <>
      <Header secaoAtiva={secaoAtiva} tema={tema} alternarTema={alternarTema} />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
