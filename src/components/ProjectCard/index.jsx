import "./style.css";
import externalLinkIcon from "../../assets/external-link-icon.svg";

export default function ProjectCard({
  projectImage,
  projectName,
  projectDescription,
  tags,
  projectLink
}) {
  return (
    <div className="project-card">
      <div className="image-container">
        <img
          src={projectImage}
          alt={`preview do projeto ${projectName}`}
          className="project-image"
        />
      </div>
      <div className="project-info">
        <h3 className="project-title">{projectName}</h3>
        <p className="project-description">{projectDescription}</p>
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <a href={projectLink} target="_blank" className="link-project">
          <img
            className="link-icon"
            src={externalLinkIcon}
            alt="entrar no projeto"
          />
        </a>
      </div>
    </div>
  );
}
