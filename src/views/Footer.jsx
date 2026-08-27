import { contactButtons } from "../models/contactButtons";
import ContactForm from "../components/contactFrom";

const footerLinks = [
  { label: "Home", target: "home" },
  { label: "About", target: "about" },
  { label: "Skills", target: "skills" },
  { label: "Projects", target: "projects" },
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
            <span>
              <p>
                Building thoughtful digital experiences with code and curiosity.
              </p>
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
