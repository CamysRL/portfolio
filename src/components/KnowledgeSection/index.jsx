import "./style.css";
import figmaIcon from "../../assets/figma-icon.png";
import reactIcon from "../../assets/react-icon.png";
import javasriptIcon from "../../assets/javascript-icon.png";
import gitIcon from "../../assets/git-icon.png";
import springIcon from "../../assets/spring-icon.png";
import htmlCssIcon from "../../assets/html-css-icon.png";
import SkillCard from "../SkillCard";

export default function KnowledgeSection() {
  return (
    <section className="knowledge-section" id="knowledge">
      <div className="knowledge-introductions">
        <h2 className="knowledge-title">Conhecimentos</h2>
        <p className="knowledge-description">
          As habilidades, ferramentas e tecnologias em que sou realmente boa.
        </p>
      </div>
      <div className="skills">
        <SkillCard
          skillImage={reactIcon}
          skillTitle={"React"}
          skillDescription={
            "Construção de interfaces componentizadas, reutilizáveis e organizadas para aplicações modernas."
          }
        />

        <SkillCard
          skillImage={htmlCssIcon}
          skillTitle={"HTML & CSS"}
          skillDescription={
            "Criação de layouts responsivos, organização de estilos e construção de interfaces modernas com foco em usabilidade."
          }
        />

        <SkillCard
          skillImage={springIcon}
          skillTitle={"Java & Spring Boot"}
          skillDescription={
            "Desenvolvimento de APIs e aplicações backend com foco em organização e boas práticas."
          }
        />

        <SkillCard
          skillImage={gitIcon}
          skillTitle={"Git & GitHub"}
          skillDescription={
            "Controle de versão, organização de projetos e colaboração em equipe."
          }
        />

        <SkillCard
          skillImage={javasriptIcon}
          skillTitle={"JavaScript"}
          skillDescription={
            "Criação de interações dinâmicas, manipulação de dados e lógica para aplicações web."
          }
        />

        <SkillCard
          skillImage={figmaIcon}
          skillTitle={"Figma"}
          skillDescription={
            "Criação de interfaces modernas, prototipação e definição de layouts focados em experiência do usuário."
          }
        />
      </div>
    </section>
  );
}
