import { motion } from "framer-motion";

export default function ProjectCard({
    image,
    title,
    description,
    liveLink,
    githubLink,
    stack
}) {
    const isLiveAvailable =
        typeof liveLink === "string" &&
        !liveLink.toLowerCase().includes("still");

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <motion.div className="project-card" variants={itemVariants}>
            <div className="project-image-wrapper">
                <img src={image} alt={title} className="project-image" />
            </div>

            <div className="project-content">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>

                {stack && (
                    <div className="project-stack">
                        {stack.map((tech, idx) => (
                            <span key={idx} className="tech-tag">{tech}</span>
                        ))}
                    </div>
                )}

                <div className="project-links">
                    {isLiveAvailable ? (
                        <a
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn"
                        >
                            View Live
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
                            className="btn outline"
                        >
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
