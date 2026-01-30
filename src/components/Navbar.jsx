export default function Navbar() {
    return (
        <nav className="navbar">
            <a href="#home" class="logo">SoftwareDev</a>
            <ul className="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}