import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../css/Hero.css";

export default function Hero() {
    // Only the heading and the CTA row animate in; the paragraph rides along
    // with the container rather than getting a stagger step of its own.
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <motion.section
            id="home"
            className="hero"
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            <motion.div className="hero-content" variants={containerVariants}>
                <motion.h1 variants={itemVariants}>
                    Hi, I'm <br />
                    <span className="highlight">Fortune Whyte</span>
                </motion.h1>
                <p>
                    A software developer with a strong foundation in C++, specializing in building modern, performant, and premium web experiences. I blend technical precision with creative design.
                </p>

                <motion.div className="hero-buttons" variants={itemVariants}>
                    <Link to="/portfolio" className="cta-button">View Work</Link>
                    <Link to="/contact" className="cta-button outline">Let's Connect</Link>
                </motion.div>
            </motion.div>

            <motion.div
                className="hero-image"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
                <div className="profile-img-container">
                    <img
                        src="/images/profilepic.png"
                        alt="Profile"
                        className="profile-img"
                    />
                </div>
            </motion.div>
        </motion.section>
    );
}