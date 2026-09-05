import { work } from "../content";

export default function Work() {
    return (
        <section id="work" className="container">
            <div className="section-label">{work.label}</div>
            <div className="projects-grid">
                {work.projects.map((project) => (
                    <article className="project-card" key={project.title}>
                        <img src={project.image} alt={project.title} loading="lazy" />
                        <div className="project-info">
                            <h2>{project.title}</h2>
                            <div className="project-tags">
                                {project.tags.map((tag) => (
                                    <span className="tag" key={tag}>{tag}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                {project.liveLink ? (
                                    <a
                                        className="project-link"
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Live ↗
                                    </a>
                                ) : (
                                    <span className="project-link pending">Coming Soon</span>
                                )}
                                {project.githubLink && (
                                    <a
                                        className="project-link"
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub ↗
                                    </a>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
