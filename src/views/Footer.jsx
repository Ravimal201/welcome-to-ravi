import { contactButtons } from "../models/contactButtons";

const footerLinks = [
  { label: "Home", target: "home" },
  { label: "About", target: "about" },
  { label: "Skills", target: "skills" },
  { label: "Projects", target: "projects" },
  { label: "Contact", target: "contact" },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (event, target) => {
    event.preventDefault();
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-intro">
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
          <span className="footer-label">Connect</span>
          {contactButtons
            .filter(({ label }) => label !== "View Resume")
            .map(({ id, label, link }) => (
              <a key={id} href={link} target="_blank" rel="noreferrer">
                {label}
                <span aria-hidden="true"> ↗</span>
              </a>
            ))}
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {currentYear} Sachinthaka Ravimal</span>
        <a
          href="#contact"
          onClick={(event) => scrollToSection(event, "contact")}
        >
          Let&apos;s build something meaningful.
        </a>
      </div>
    </footer>
  );
}

export default Footer;
