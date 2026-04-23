import "./style.css";
import camillyInferior from "../../assets/camilly-inferior.png";

export default function AboutMeSection() {
  return (
    <section className="about-section" id="about">
      <img
        className="about-image"
        src={camillyInferior}
        alt="Foto da Desenvolvedora do site - Camilly Lima"
      />
      <div className="about-info">
        <h2 className="about-title">Sobre Mim</h2>
        <p className="about-description">
          Sou desenvolvedora Full Stack, apaixonada por tecnologia e por
          transformar ideias em aplicações reais. Tenho experiência com React e
          JavaScript, além de conhecimentos em Java com Spring Boot para
          construção de APIs e sistemas back-end.
        </p>
        <p className="about-description">
          Gosto de aprender na prática, desenvolvendo projetos que me desafiem e
          me ajudem a evoluir constantemente como desenvolvedora. Busco sempre
          escrever código organizado, aplicar boas práticas e criar soluções
          funcionais com boa experiência para o usuário.
        </p>
      </div>
    </section>
  );
}
