import React from "react";
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Eduarda Guimarães</h1>
      <nav className="nav">
        <a href="#sobre">Sobre</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
  );
}

export default Header;