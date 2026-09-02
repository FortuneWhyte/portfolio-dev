import { stack } from "../content";

export default function Stack() {
    return (
        <section id="stack" className="container">
            <div className="section-label">{stack.label}</div>
            <div className="stack-list">
                {stack.items.map((item, i) => (
                    <div className="stack-item" key={item.name}>
                        <div className="stack-index">{String(i + 1).padStart(2, "0")}/</div>
                        <div className="stack-name">{item.name}</div>
                        <div className="stack-details">{item.details}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
