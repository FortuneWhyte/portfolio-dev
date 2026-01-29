export default function ProjectCard({ image, title, description, livelink, githubLink }) {
    return (
        <div className="project-card">
            <img src={image} alt={title} />

            <h3>{title}</h3>
            <p>{description}</p>

            <div className="project-links">
                <a href={liveLink} target="_blank" rel="noopener noreferrer">
                    Live
                </a>
                <a href={githubLink} target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
            </div>
        </div>
    );
}