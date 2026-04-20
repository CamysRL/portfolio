import { useState } from "react";
import "./style.css";
import menuIcon from "../../assets/menu-icon.svg";
import closeIcon from "../../assets/close-icon.svg";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header-container">
      <img
        className="menu-icon"
        src={menuIcon}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
      <nav className={isMenuOpen ? "nav-header ativo" : "nav-header"}>
        <div className="nav-container">
          <img
            className="close-icon"
            src={closeIcon}
            alt="fechar"
            onClick={() => setIsMenuOpen(false)}
          />
        </div>
        <ul className="header-links">
          <li className="menu-item">
            <a href="#introduction" onClick={() => setIsMenuOpen(false)}>
              Home
            </a>
          </li>
          <li className="menu-item">
            <a href="#sobre" onClick={() => setIsMenuOpen(false)}>
              Sobre Mim
            </a>
          </li>
          <li className="menu-item">
            <a href="/" onClick={() => setIsMenuOpen(false)}>
              Conhecimentos
            </a>
          </li>
          <li className="menu-item">
            <a href="/" onClick={() => setIsMenuOpen(false)}>
              Projetos
            </a>
          </li>
          <li className="menu-item">
            <a href="/" onClick={() => setIsMenuOpen(false)}>
              Contato
            </a>
          </li>
          <li className="menu-item">
            <a
              href="/Curriculo-CamillyLima.pdf"
              download="Curriculo-Camilly-Lima.pdf"
              className="btn-download"
            >
              Baixar CV
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
