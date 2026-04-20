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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Sobre Mim</a>
          </li>
          <li>
            <a href="/">Conhecimentos</a>
          </li>
          <li>
            <a href="/">Projetos</a>
          </li>
          <li>
            <a href="/">Contato</a>
          </li>
        </ul>
        <a
          href="/Curriculo-CamillyLima.pdf"
          download="Curriculo-Camilly-Lima.pdf"
          className="btn-download"
        >
          Baixar CV
        </a>
      </nav>
    </header>
  );
}
