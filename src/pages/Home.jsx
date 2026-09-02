import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Cursor from "../components/Cursor";
import ShaderBackground from "../components/ShaderBackground";
import Nav from "../sections/Nav";
import Hero from "../sections/Hero";
import Marquee from "../sections/Marquee";
import Work from "../sections/Work";
import About from "../sections/About";
import Stack from "../sections/Stack";
import Experience from "../sections/Experience";
import Contact from "../sections/Contact";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const ctx = gsap.context(() => {
            gsap.from(".hero h1, .hero .meta-block", {
                y: 40,
                opacity: 0,
                duration: 0.9,
                stagger: 0.08,
                ease: "power3.out"
            });

            // Reveal each section's own elements as it arrives, rather than
            // one timeline for the whole page.
            gsap.utils.toArray("section:not(.hero)").forEach((section) => {
                const targets = section.querySelectorAll(
                    ".section-label, .project-card, .stack-item, .experience-row, .about-body, h2, .contact-form, .big-button"
                );
                if (!targets.length) return;

                gsap.from(targets, {
                    y: 40,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.08,
                    ease: "power3.out",
                    scrollTrigger: { trigger: section, start: "top 80%", once: true }
                });
            });
        });

        // Trigger positions are measured on creation, before lazy images and
        // the webfont have settled. Without a refresh afterwards a section can
        // sit past its own start point and never reveal, leaving it blank.
        const refresh = () => ScrollTrigger.refresh();
        window.addEventListener("load", refresh);
        document.fonts?.ready.then(refresh);

        return () => {
            window.removeEventListener("load", refresh);
            ctx.revert();
        };
    }, []);

    return (
        <>
            <Cursor />
            <ShaderBackground />
            <Nav />
            <main>
                <Hero />
                <Marquee />
                <Work />
                <About />
                <Stack />
                <Experience />
                <Contact />
            </main>
        </>
    );
}
