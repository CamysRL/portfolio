import "./style.css";

export default function SkillCard({ skillImage, skillTitle, skillDescription }) {
    return (
        <div className="skill-card">
            <img src={skillImage} alt={`Ícone da ${skillTitle}`} className="skill-image"/>
            <h3 className="skill-title">{skillTitle}</h3>
            <p className="skill-description">{skillDescription}</p>
        </div>
    );
}