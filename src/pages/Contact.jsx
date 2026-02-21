import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (message.trim() !== "") {
      navigate("/thank-you");
    }
  };

  return (
    <>
      <Navbar />
      <section className="contact-page">
        <div className="contact-container">
          <h2>Get in touch!</h2>

          <p className="contact-text">
            Have an idea or interested in working together? Send me a message!
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
            />

            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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