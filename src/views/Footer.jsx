import { contactButtons } from "../models/contactButtons";

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <button className="footer-logo" type="button" onClick={scrollToTop}>
            <span>&lt;/&gt;</span>
            <strong>Sachinthaka Ravimal</strong>
          </button>
          <p>Building thoughtful digital experiences with clean code.</p>
        </div>

        <nav className="footer-links" aria-label="Footer navigation">
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
          <a href="mailto:universityravimal@gmail.com">Email</a>
        </nav>

        <button
          className="footer-top"
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <span aria-hidden="true">↑</span>
        </button>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} Sachinthaka Ravimal. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
