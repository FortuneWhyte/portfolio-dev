import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import "../css/About.css";

export default function About() {
  const pageVariants = {
    initial: { opacity: 0, x: -20 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 20 }
  };

  const skills = [
    {
      title: "Languages", items: [
        { name: "C++", years: "4 years" },
        { name: "Python", years: "3 years" },
        { name: "HTML/CSS/JS", years: "3 years" },
        { name: "SQL", years: "1 year" },
        { name: "TypeScript", years: "1 year" }
      ]
    },
    {
      title: "Technologies", items: [
        { name: "ReactJS", years: "2 years" },
        { name: "Node.js", years: "2 years" },
        { name: "PostgreSQL", years: "2 years" },
        { name: "Framer Motion", years: "1 year" }
      ]
    }
  ];

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Navbar />

      <section className="about-page">
        <div className="about-container">
          <div className="text-zone">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              About Me
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I am a motivated software developer with an Associate Degree in Computer Science. My diverse background has strengthened my ability to collaborate effectively, communicate clearly, and approach technical challenges with strong analytical and problem-solving skills. I have a deep passion for building robust backends and stunning interactive frontends.
            </motion.p>

            {skills.map((category, idx) => (
              <motion.div
                key={category.title}
                className="skills-section"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
              >
                <h2>{category.title}</h2>

                <ul className="skill-list">
                  {category.items.map((skill) => (
                    <li key={skill.name} className="skill">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-years">{skill.years}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="stage-cube-cont"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="cubespinner">
              <div className="face1">Re</div>
              <div className="face2">JS</div>
              <div className="face3">C++</div>
              <div className="face4">Py</div>
              <div className="face5">TS</div>
              <div className="face6">SQL</div>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
