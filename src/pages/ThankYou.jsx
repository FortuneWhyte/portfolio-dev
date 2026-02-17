import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ThankYou() {
  return (
    <>
      <Navbar />
      <section className="contact-page">
        <div className="contact-container">
          <h2>Thank you!</h2>
          <p>Your message has been sent. I’ll get back to you soon!</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
