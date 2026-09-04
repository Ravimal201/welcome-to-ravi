import { contactButtons } from "../models/contactButtons";
import ContactForm from "../components/contactFrom";

const footerLinks = [
  { label: "Home", target: "home" },
  { label: "About", target: "about" },
  { label: "Skills", target: "skills" },
  { label: "Projects", target: "projects" },
  { label: "Certificates", target: "certificates" },
  { label: "Contact", target: "contact" },
];

function Footer() {
  const scrollToSection = (event, target) => {
    event.preventDefault();
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="site-footer" id="contact">
      <div className="footer-contact-layout">
        <div className="footer-contact-intro">
          <span className="footer-eyebrow">Let&apos;s work together</span>
          <h2>
            Have an idea?
            <br />
            Let&apos;s talk.
          </h2>
          <p>
            Tell me about your next project, opportunity, or big idea. I&apos;ll
            get back to you as soon as possible.
          </p>
          <a className="footer-email" href="mailto:universityravimal@gmail.com">
            universityravimal@gmail.com
          </a>
        </div>

        <div className="footer-form-shell">
          <ContactForm />
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-intro">
          <span className="footer-eyebrow">Available for meaningful work</span>
          <a
            className="footer-brand"
            href="#home"
            onClick={(event) => scrollToSection(event, "home")}
          >
            <span className="footer-mark">&lt;/&gt;</span>
            <span>Sachinthaka Ravimal</span>
          </a>
          <p>
            Building thoughtful digital experiences with code and curiosity.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <span className="footer-label">Explore</span>
          {footerLinks.map((link) => (
            <a
              key={link.target}
              href={`#${link.target}`}
              onClick={(event) => scrollToSection(event, link.target)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer-socials">
          <span className="footer-label">Elsewhere</span>
          {contactButtons.slice(1).map((button) => (
            <a
              key={button.id}
              href={button.link}
              target="_blank"
              rel="noreferrer"
            >
              {button.label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Sachinthaka Ravimal</span>
        <span>Designed &amp; built with care</span>
      </div>
    </footer>
  );
}

export default Footer;
