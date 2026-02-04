import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <section className="about-page">
        <div className="page">
            <div className="container about-page">
                <div class="text-zone">
                    <h1>
                        <span>
                            <span class="text-animate-hover _15">A</span>
                            <span class="text-animate-hover _15">b</span>
                            <span class="text-animate-hover _15">o</span>
                            <span class="text-animate-hover _15">u</span>
                            <span class="text-animate-hover _15">t</span>
                            <span class="text-animate-hover _15"> </span>
                            <span class="text-animate-hover _15">m</span>
                            <span class="text-animate-hover _15">e</span>
                        </span>
                    </h1>
                        <p> 
                            I am a driven software developer with a diverse background that has 
                            shaped my ability to collaborate effectively, communicate clearly, 
                            and approach technical challenges with strong analytical thinking.
                            <br>
                                <div>
                                    <h2>Languages</h2>
                                        <ul>
                                            <li>
                                                <span>"C++: 4 years"</span>
                                                <div className="progress-bar C++-progress">
                                                    <div className="progress" style="width: 100%"></div>
                                                </div>
                                            </li>
                                        </ul>
                                </div>
                            </br>
                        </p>
                </div>
            </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
