import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import './styles/global.css';

function App() {
  const { i18n } = useTranslation();
  const [secaoAtiva, setSecaoAtiva] = useState('about');

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
      <Header secaoAtiva={secaoAtiva} />
      <main>
        <Home />
      </main>
      <Footer />
    </>
  );
}

export default App;
