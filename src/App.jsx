import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePT from './pages/pt/HomePT';
import HomeEN from './pages/en/HomeEN';
import './styles/global.css';

function App() {
  const [idioma, setIdioma] = useState('pt');

  return (
    <>
      <Header idioma={idioma} setIdioma={setIdioma} />
      <main>
        {idioma === 'pt' ? <HomePT /> : <HomeEN />}
      </main>
      <Footer idioma={idioma} />
    </>
  );
}

export default App;