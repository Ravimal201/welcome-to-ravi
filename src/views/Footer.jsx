import useContactController from "../controllers/contactController";

function Footer() {
  const { getButtons } = useContactController();
  const buttons = getButtons();
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-intro">
          <div className="footer-brand-row">
            <span className="space-astronaut" aria-hidden="true">🚀</span>
            <a className="footer-brand" href="#home" aria-label="Go to home">
              <span className="footer-mark">&lt;/&gt;</span>
              Sachinthaka Ravimal
            </a>
          </div>
          <p>
            Software engineering student and developer crafting thoughtful web
            experiences, games, and practical digital solutions.
          </p>
          <a className="footer-cta" href="mailto:universityravimal@gmail.com">
            Start a conversation <span aria-hidden="true">↗</span>
          </a>
        </div>

        <nav className="footer-nav" aria-label="Footer navigation">
          <span className="footer-label">Explore</span>
          <a href="#home" onClick={(event) => { event.preventDefault(); scrollToSection("home"); }}>Home</a>
          <a href="#about" onClick={(event) => { event.preventDefault(); scrollToSection("about"); }}>About</a>
          <a href="#skills" onClick={(event) => { event.preventDefault(); scrollToSection("skills"); }}>Skills</a>
          <a href="#projects" onClick={(event) => { event.preventDefault(); scrollToSection("projects"); }}>Projects</a>
          <a href="#certificates" onClick={(event) => { event.preventDefault(); scrollToSection("certificates"); }}>Certificates</a>
          <a href="#contact" onClick={(event) => { event.preventDefault(); scrollToSection("contact"); }}>Contact</a>
        </nav>

        <div className="footer-socials">
          <span className="footer-label">Connect</span>
          {buttons.map((button) => (
            <a
              key={button.id}
              href={button.link}
              target={button.link.startsWith("http") ? "_blank" : undefined}
              rel={button.link.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              <span aria-hidden="true">{button.label === "GitHub" ? "◉" : button.label === "LinkedIn" ? "in" : "↗"}</span>
              {button.label}
            </a>
          ))}
          <a href="mailto:universityravimal@gmail.com">
            <span aria-hidden="true">@</span>
            Email me
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} Sachinthaka Ravimal. All rights reserved.</p>
        <p>Designed &amp; built with care</p>
      </div>
    </footer>
  );
}

export default Footer;
