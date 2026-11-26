import { contactButtons } from "../models/contactButtons";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <button
            type="button"
            className="footer-brand-mark"
            onClick={() => scrollToSection("home")}
            aria-label="Back to home"
          >
            &lt;/&gt;
          </button>
          <div>
            <p>Sachinthaka Ravimal</p>
            <span>Software Developer &amp; Designer</span>
          </div>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <button type="button" onClick={() => scrollToSection("about")}>
            About
          </button>
          <button type="button" onClick={() => scrollToSection("skills")}>
            Skills
          </button>
          <button type="button" onClick={() => scrollToSection("projects")}>
            Projects
          </button>
          <button type="button" onClick={() => scrollToSection("contact")}>
            Contact
          </button>
        </nav>

        <div className="footer-socials" aria-label="Social links">
          {contactButtons
            .filter((button) => button.label !== "View Resume")
            .map((button) => (
              <a
                key={button.id}
                href={button.link}
                target="_blank"
                rel="noreferrer"
              >
                {button.label}
              </a>
            ))}
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Sachinthaka Ravimal. All rights reserved.</p>
        <button type="button" onClick={() => scrollToSection("home")}>
          Back to top <span aria-hidden="true">↑</span>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
