import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


export default function ThankYou() {
  return (
    <>
      <Navbar />
      <section className="contact-page">
        <div className="contact-container">
          <h2>Thank You!</h2>
          
          <p className="contact-text">
            Your message has been sent!
          </p>

          <Link to="/" className="cta-button">
            Back to Home
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
