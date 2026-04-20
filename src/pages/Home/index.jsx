import { useState } from "react";
import "./style.css";
import camillySuperior from "../../assets/camilly-superior.png";
import camillyInferior from "../../assets/camilly-inferior.png";

export default function Home() {
  return (
    <>
      <section className="introduction">
        <div className="introduction-info">
          <p className="subtitle">
            Olá, eu sou <br />
            <span className="name-span">Camilly Lima</span>
          </p>
          <h1 className="title">
            Software
            <br />
            <span className="title-span">Developer</span>
          </h1>
          <p className="introduction-description">
            Desenvolvedora Full Stack em constante evolução, criando projetos
            com tecnologias modernas e focando em boas práticas de
            desenvolvimento.
          </p>
          <a className="bnt-job" href="#">
            Me contrate
          </a>
        </div>

        <img
          className="introduction-image"
          src={camillySuperior}
          alt="Foto da Desenvolvedora do site - Camilly Lima"
        />
      </section>

      <section className="about-section" id="sobre">
        <img
          className="introduction-image"
          src={camillyInferior}
          alt="Foto da Desenvolvedora do site - Camilly Lima"
        />
        <div className="introduction-info">
          <h2 className="about-title">Sobre Mim</h2>
          <p className="introduction-description">Sou desenvolvedora Full Stack, apaixonada por tecnologia e por transformar ideias em aplicações reais. Tenho experiência com React e JavaScript, além de conhecimentos em Java com Spring Boot para construção de APIs e sistemas back-end.</p>
          <p className="introduction-description">Gosto de aprender na prática, desenvolvendo projetos que me desafiem e me ajudem a evoluir constantemente como desenvolvedora. Busco sempre escrever código organizado, aplicar boas práticas e criar soluções funcionais com boa experiência para o usuário.</p>
        </div>
      </section>
    </>
  );
}
