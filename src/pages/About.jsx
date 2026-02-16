import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function About() {
  return (
    <>
      <Navbar />

      <section className="about-page">
        <div className="container about-container">

          <div className="text-zone">
            <h1>About Me</h1>

            <p>
              I am a driven software developer with a diverse background that has
              shaped my ability to collaborate effectively, communicate clearly,
              and approach technical challenges with strong analytical thinking.
            </p>

            
            <div className="skills-section">
              <h2>Languages</h2>

              <div className="skill">
                <span>C++ — 4 years</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "100%" }}></div>
                </div>
              </div>

              <div className="skill">
                <span>Python — 3 years</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "75%" }}></div>
                </div>
              </div>

              <div className="skill">
                <span>HTML / CSS / JS — 3 years</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "75%" }}></div>
                </div>
              </div>

              <div className="skill">
                <span>SQL — 1 year</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "25%" }}></div>
                </div>
              </div>

              <div className="skill">
                <span>Assembly — 1 year</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "25%" }}></div>
                </div>
              </div>
            </div>

            
            <div className="skills-section">
              <h2>Frameworks & Technologies</h2>

              <div className="skill">
                <span>ReactJS — 2 years</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "100%" }}></div>
                </div>
              </div>

              <div className="skill">
                <span>PostgreSQL — 2 years</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "100%" }}></div>
                </div>
              </div>

              <div className="skill">
                <span>NodeJS — 2 years</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "100%" }}></div>
                </div>
              </div>

              <div className="skill">
                <span>VueJS — 1 year</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: "50%" }}></div>
                </div>
              </div>
            </div>
          </div>

          
          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1"><i className="fab fa-amazon"></i></div>
              <div className="face2"><i className="fab fa-html5"></i></div>
              <div className="face3"><i className="fab fa-css3-alt"></i></div>
              <div className="face4"><i className="fab fa-react"></i></div>
              <div className="face5"><i className="fab fa-python"></i></div>
              <div className="face6"><i className="fab fa-java"></i></div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
