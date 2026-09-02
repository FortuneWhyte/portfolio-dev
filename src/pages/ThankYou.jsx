import { Link } from "react-router-dom";
import { useEffect } from "react";
import Cursor from "../components/Cursor";
import ShaderBackground from "../components/ShaderBackground";

export default function ThankYou() {
    useEffect(() => {
        document.title = "TRANSMISSION RECEIVED // FORTUNE WHYTE";
    }, []);

    return (
        <>
            <Cursor />
            <ShaderBackground />
            <section className="thankyou-page">
                <div className="section-label">TRANSMISSION_RECEIVED</div>
                <h1>Message<br />Sent.</h1>
                <p>I&apos;ll be in touch shortly.</p>
                <Link to="/" className="big-button">RETURN TO BASE ↗</Link>
            </section>
        </>
    );
}
