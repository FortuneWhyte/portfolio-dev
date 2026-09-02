import { about } from "../content";

export default function About() {
    return (
        <section id="about" className="container">
            <div className="section-label">{about.label}</div>
            <p className="about-body">{about.body}</p>
        </section>
    );
}
