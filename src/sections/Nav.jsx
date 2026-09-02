import { useEffect, useState } from "react";
import { identity, navLinks } from "../content";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!isOpen) return;

        const onKey = (e) => { if (e.key === "Escape") setIsOpen(false); };
        document.addEventListener("keydown", onKey);

        // The drawer covers the page; letting the page scroll behind it means
        // closing can land you somewhere you didn't choose.
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = prev;
        };
    }, [isOpen]);

    return (
        <nav>
            <a href="#top" className="logo" onClick={() => setIsOpen(false)}>
                {identity.logo}
            </a>

            <button
                className="nav-toggle"
                onClick={() => setIsOpen((v) => !v)}
                aria-expanded={isOpen}
                aria-controls="nav-links"
                aria-label={isOpen ? "Close menu" : "Open menu"}
            >
                {isOpen ? "[ CLOSE ]" : "[ MENU ]"}
            </button>

            <div id="nav-links" className={`nav-links${isOpen ? " open" : ""}`}>
                {navLinks.map((link) => (
                    <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                        {link.name}
                    </a>
                ))}
            </div>
        </nav>
    );
}
