import { experience } from "../content";

export default function Experience() {
    // Placeholder entries must never reach a visitor: until real history is
    // filled in in content.js, the section renders nothing at all.
    if (experience.placeholder) return null;

    return (
        <section id="experience" className="container">
            <div className="section-label">{experience.label}</div>
            <div className="timeline">
                {experience.entries.map((entry) => (
                    <div className="experience-row" key={`${entry.year}-${entry.title}`}>
                        <div className="exp-year">{entry.year}</div>
                        <div className="exp-content">
                            <h4>{entry.title}</h4>
                            <p>{entry.body}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
