export default function Contact() {
    return (
        <section id="contact">
            <h2>Get in touch!</h2>
            <p>Have an idea or if you're interested in working together? Send me a message!</p>

            <form>
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

        </section>
    );
}