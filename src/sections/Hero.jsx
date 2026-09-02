import { identity } from "../content";

export default function Hero() {
    return (
        <section id="top" className="hero container">
            <div className="section-label">SYS_BOOT // ORBITAL_SEQUENCE</div>
            <h1>
                {identity.headingTop}
                <span>{identity.headingBottom}</span>
            </h1>
            <div className="hero-meta">
                {identity.meta.map((block) => (
                    <div className="meta-block" key={block.label}>
                        <h3>{block.label}</h3>
                        <p>{block.value}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
