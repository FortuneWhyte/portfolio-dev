import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <section className="contact-page">
        <div className="contact-container">
          <h2>Get in touch!</h2>

          <p className="contact-text">
            Have an idea or if you're interested in working together? Send me a message!
          </p>

          <form
            name="contact"
            method="POST"
            data-netlify="true"
            action="/thank-you"
            className="contact-form"
          >
            
            <input type="hidden" name="form-name" value="contact" />

            <input
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              required
            />

            <button type="submit" className="cta-button">
              Send Message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
