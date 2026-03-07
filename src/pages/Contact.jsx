import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import "../css/Contact.css";

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.message.trim() !== "") {
      setIsSubmitting(true);
      setIsError(false);

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: "YOUR_WEB3FORMS_ACCESS_KEY_HERE",
            ...formData
          }),
        });

        const result = await response.json();

        if (result.success) {
          setIsSubmitting(false);
          setFormData({ name: "", email: "", message: "" });
          navigate("/thank-you");
        } else {
          setIsSubmitting(false);
          setIsError(true);
        }
      } catch (error) {
        setIsSubmitting(false);
        setIsError(true);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <Navbar />
      <section className="contact-page">
        <motion.div
          className="contact-container"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <div className="contact-header">
            <h2>Let's build something great.</h2>
            <p className="contact-text">
              Have an idea or interested in working together? I'm currently open for new opportunities.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                placeholder="How can I help you?"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
            {isError && (
              <p style={{ color: "#ef4444", marginTop: "1rem", textAlign: "center", fontSize: "0.95rem" }}>
                Oops! Something went wrong. Please check your Web3Forms access key.
              </p>
            )}
          </form>
        </motion.div>
      </section>
      <Footer />
    </motion.div>
  );
}