import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { contact } from "../content";

export default function Contact() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.message.trim() === "") return;

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
                    access_key: contact.web3formsKey,
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
        } catch {
            setIsSubmitting(false);
            setIsError(true);
        }
    };

    return (
        <section id="contact" className="contact-footer container">
            <div className="section-label">{contact.label}</div>
            <h2>
                {contact.headingTop}<br />{contact.headingBottom}
            </h2>

            <form className="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Identity</label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="YOUR NAME"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Return Channel</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="YOUR@EMAIL.COM"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Transmission</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="WHAT ARE YOU BUILDING?"
                        required
                    />
                </div>

                <button type="submit" className="big-button" disabled={isSubmitting}>
                    {isSubmitting ? "TRANSMITTING…" : contact.submitLabel}
                </button>
            </form>

            {isError && (
                <p className="form-error" role="alert">
                    Transmission failed. Please retry or email directly.
                </p>
            )}

            <div className="colophon">{contact.colophon}</div>
        </section>
    );
}
