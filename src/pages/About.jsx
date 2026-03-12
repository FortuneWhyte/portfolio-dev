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
        { name: "C++", years: "4 years", percent: "100%" },
        { name: "Python", years: "3 years", percent: "80%" },
        { name: "HTML/CSS/JS", years: "3 years", percent: "85%" },
        { name: "SQL", years: "1 year", percent: "40%" },
        { name: "TypeScript", years: "1 year", percent: "45%" }
      ]
    },
    {
      title: "Technologies", items: [
        { name: "ReactJS", years: "2 years", percent: "90%" },
        { name: "Node.js", years: "2 years", percent: "85%" },
        { name: "PostgreSQL", years: "2 years", percent: "75%" },
        { name: "Framer Motion", years: "1 year", percent: "70%" }
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

            <div className="work-experience">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                Work Experience
              </motion.h2>

              <motion.div
                className="experience-card"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3>Charan Property Management</h3>
                <span className="role">Software Developer</span>
                <p className="description">
                  Supporting the development, deployment, and improvement of internal software systems while contributing to AI integration initiatives designed to streamline administrative workflows and enhance overall operational efficiency.
                </p>
              </motion.div>
            </div>

            {skills.map((category, idx) => (
              <div key={idx} className="skills-section">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
                >
                  {category.title}
                </motion.h2>

                {category.items.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="skill"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <span>{skill.name} — {skill.years}</span>
                    <div className="progress-bar">
                      <motion.div
                        className="progress"
                        initial={{ width: "0%" }}
                        whileInView={{ width: skill.percent }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 + (index * 0.1) }}
                      ></motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
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
