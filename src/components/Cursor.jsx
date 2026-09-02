import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        // No mouse to replace, or motion suppressed: the CSS hides the dot and
        // restores the real cursor, so there is nothing to drive here.
        const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
        const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (!fine || still) return;

        const onMove = (e) => {
            gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.15, ease: "power2.out" });
        };
        document.addEventListener("mousemove", onMove);

        const grow = () => gsap.to(cursor, { scale: 6, opacity: 0.3, duration: 0.3 });
        const shrink = () => gsap.to(cursor, { scale: 1, opacity: 1, duration: 0.3 });

        // Delegated rather than bound per-element: the original queried the DOM
        // once at load, so anything React rendered later got no hover response.
        const isTarget = (el) => el?.closest?.("a, button, .project-card");
        const onOver = (e) => { if (isTarget(e.target)) grow(); };
        const onOut = (e) => { if (isTarget(e.target)) shrink(); };
        document.addEventListener("mouseover", onOver);
        document.addEventListener("mouseout", onOut);

        return () => {
            document.removeEventListener("mousemove", onMove);
            document.removeEventListener("mouseover", onOver);
            document.removeEventListener("mouseout", onOut);
            gsap.killTweensOf(cursor);
        };
    }, []);

    return <div id="cursor" ref={cursorRef} aria-hidden="true" />;
}
