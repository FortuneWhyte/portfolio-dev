import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import "../css/Portfolio.css";

export default function Portfolio() {
    const projects = [
        {
            title: "UR-Exam-Planner",
            description: "A web app that helps students schedule and track exams.",
            image: "/images/homepage.jpg",
            liveLink: "https://ur-exam-planner.vercel.app/",
            githubLink: "https://github.com/FortuneWhyte/UR-exam-planner-frontend",
            stack: ["React", "Express", "Node.js"]
        },
        {
            title: "CFL Match Predictor",
            description: "Predicts CFL game outcomes using historical data.",
            image: "/images/cfl-logo.png.jpeg",
            liveLink: "still in the works!",
            githubLink: "https://github.com/FortuneWhyte",
            stack: ["Python", "Flask", "Pandas"]
        },
        {
            title: "Luxestylebraids",
            description: "Premium hairstyling brand web presence.",
            image: "/images/luxestyle.jpeg",
            liveLink: "still in the works!",
            githubLink: "https://github.com/FortuneWhyte",
            stack: ["React", "CSS Modules"]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
            <Navbar />

            <section className="portfolio-page">
                <div className="portfolio-header">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        My Works
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        A showcase of my recent projects, blending functional development with creative design.
                    </motion.p>
                </div>

                <motion.div
                    className="portfolio-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </motion.div>
            </section>

            <Footer />
        </motion.div>
    );
}