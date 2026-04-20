import "./style.css";
import camillySuperior from "../../assets/camilly-superior.png";

export default function IntroductionSection() {
  return (
    <section className="introduction" id="introduction"> 
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
          Desenvolvedora Full Stack em constante evolução, criando projetos com
          tecnologias modernas e focando em boas práticas de desenvolvimento.
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
  );
}
