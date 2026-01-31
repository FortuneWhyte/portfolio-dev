import Navbar from "../componenets/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

export default function Portfolio() {
    const projects = [
        {
            title: "UR-Exam-Planner",
            description: "A web app that helps students schedule and track exams.",
            image: "/images/homepage.jpg",
            liveLink: "https://ur-exam-planner.vercel.app/",
            githubLink: "https://github.com/FortuneWhyte/UR-exam-planner-frontend",
        },
        {
            title: "CFL Match Predictor",
            description: "Predicts CFL game outcomes using historical data.",
            image: "/projects/cfl-predictor.png",
            liveLink: "still in the works!",
            githubLink: "https://github.com/FortuneWhyte",
        }
    ];


    return(
        <>
            <Navbar />

            <section className="portfolio-page">
                <h2>My Works</h2>

                <div className="portfolio-grid">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </section>

            <Footer />
        </>
    );
}