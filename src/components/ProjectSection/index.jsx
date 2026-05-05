import "./style.css";
import { useState } from "react";
import ProjectCard from "../ProjectCard";
import projectExample from "../../assets/project-bonsai.png";

export default function ProjectSection() {
  const [selectedTag, setSelectedTag] = useState("Todos");

  const projects = [
    {
      projectImage: projectExample,
      projectName: "Bonsai",
      projectDescription: "Recriação de uma landing page inspirada na Bonsai, com foco em layout moderno, responsividade e organização de componentes utilizando React.",
      tags: ["React", "HTML & CSS", "JavaScript", "Git & GitHub"],
      projectLink: "https://camysrl.github.io/bonsai-replica/",
    },
  ];

  const tags = [
    "Todos",
    "React",
    "HTML & CSS",
    "Java & Spring Boot",
    "Git & GitHub",
    "JavaScript",
    "Figma",
  ];

  const filteredProjects =
    selectedTag === "Todos"
      ? projects
      : projects.filter((project) => project.tags.includes(selectedTag));

  return (
    <section className="project-section">
      <div className="projects-introduction">
        <h2 className="projects-title">Projetos</h2>
        <p className="projetcs-description">
          Alguns dos projetos notaveis que desenvolvi.
        </p>
      </div>
      <div className="select-type">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={selectedTag === tag ? "active" : ""}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="projects">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
