export default function ProjectCard({
    image,
    title,
    description,
    liveLink,
    githubLink
}) {
    const isLiveAvailable =
        typeof liveLink === "string" &&
        !liveLink.toLowerCase().includes("still");

    return (
        <div className="project-card">
            <img src={image} alt={title} className="project-image" />

            <div className="project-content">
                <h3>{title}</h3>
                <p>{description}</p>

                <div className="project-links">
                    {isLiveAvailable ? (
                        <a
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn"
                        >
                            View Project
                        </a>
                    ) : (
                        <button className="btn disabled" disabled>
                            Coming Soon
                        </button>
                    )}

                    {githubLink && (
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn secondary"
                        >
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
