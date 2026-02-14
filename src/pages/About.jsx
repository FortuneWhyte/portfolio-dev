import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <section className="about-page">
        <div className="page">
          <div className="container about-page">
            <div className="text-zone">
              <h1>
                <span>
                  <span className="text-animate-hover _15">A</span>
                  <span className="text-animate-hover _15">b</span>
                  <span className="text-animate-hover _15">o</span>
                  <span className="text-animate-hover _15">u</span>
                  <span className="text-animate-hover _15">t</span>
                  <span className="text-animate-hover _15"> </span>
                  <span className="text-animate-hover _15">m</span>
                  <span className="text-animate-hover _15">e</span>
                </span>
              </h1>

              <p>
                I am a driven software developer with a diverse background that has
                shaped my ability to collaborate effectively, communicate clearly,
                and approach technical challenges with strong analytical thinking.
              </p>

              <div>
                <h2>Languages</h2>
                <ul>
                  <li>
                    <span>C++: 4 years</span>
                    <div className="progress-bar C++-progress">
                      <div className="progress" style={{ width: "100%" }}></div>
                    </div>
                  </li>
                  <li>
                    <span>Python: 3 years</span>
                    <div className="progress-bar python-progress">
                      <div className="progress" style={{ width: "75%" }}></div>
                    </div>
                  </li>
                  <li>
                    <span>HTML/CSS/JS: 3 years</span>
                    <div className="progress-bar web-progress">
                      <div className="progress" style={{ width: "75%" }}></div>
                    </div>
                  </li>
                  <li>
                    <span>SQL: 1 year</span>
                    <div className="progress-bar sql-progress">
                      <div className="progress" style={{ width: "37.5%" }}></div>
                    </div>
                  </li>
                  <li>
                    <span>Assembly: 1 year</span>
                    <div className="progress-bar assembly-progress">
                      <div className="progress" style={{ width: "25%" }}></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
