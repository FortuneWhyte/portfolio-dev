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

                <form className="contact-form">
                    <input
                        type="text"
                        placeholder="Name"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        required
                    />
                    <textarea
                        placeholder="Message"
                        rows="5"
                    required/>

                    <button type="submit">Send Message</button>
                </form>
                </div>

            </section>

            <Footer />

        </>
    );
}