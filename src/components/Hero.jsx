import { Link } from "react-router-dom";

export default function  Hero() {
    return (
        <section id="home" class="hero">
            <div class="hero-content">
                <h1>Fortune Whyte</h1>
                <p>
                    Hi, I'm Great-Fortune Abiye-Whyte, a software developer with a strong foundation in C++, specializing in modern web development and user-focused applications.
                    I'm passionate about building digital experiences that blend creativity with technology. Outside of programming, I enjoy playing football and going to the gym.
                </p>
                <Link to="/contact" class="cta-button">Let's Connect</Link>
            </div>
            <div class="hero-image">
                <img
                    src="/images/profilepic.png" 
                    alt="Profile" 
                    className="profile-img"
                />
            </div>       
        </section>
    );
}


      