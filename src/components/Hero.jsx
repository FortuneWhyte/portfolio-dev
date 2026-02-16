import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <h1>Fortune Whyte</h1>
                <p>
                    Hi, I'm Great-Fortune Abiye-Whyte, a software developer with a strong foundation in C++, specializing in modern web development and user-focused applications.
                    I'm passionate about building digital experiences that blend creativity with technology. Outside of programming, I enjoy playing football and going to the gym.
                </p>

                <div className="hero-buttons">
                    <Link to="/contact" className="cta-button">Let's Connect</Link>
                    
                </div>
            </div>

            <div className="hero-image">
                <img
                    src="/images/profilepic.png"
                    alt="Profile"
                    className="profile-img"
                />
            </div>
        </section>
    );
}


      