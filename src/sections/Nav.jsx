import { identity, navLinks } from "../content";

export default function Nav() {
    return (
        <nav>
            <a href="#top" className="logo">{identity.logo}</a>
            <div className="nav-links">
                {navLinks.map((link) => (
                    <a key={link.href} href={link.href}>{link.name}</a>
                ))}
            </div>
        </nav>
    );
}
