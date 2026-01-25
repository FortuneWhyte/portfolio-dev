import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
    return (
    <footer>
      <p>&copy; 2026 Great-Fortune Abiye-Whyte. All rights reserved.</p>

      <div className="social-links">
        <a href="https://github.com/FortuneWhyte" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/great-fortune-abiye-whyte-8a91a2280/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://www.facebook.com/whyte.fortuneee/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
      </div>
    </footer>
  );
}