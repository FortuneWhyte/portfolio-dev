import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


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

          <a href="/contact" className="cta-button">
            Send Another Message
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}
