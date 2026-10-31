import { contactButtons } from "../models/contactButtons";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = contactButtons.filter((button) => button.id !== 1);

  return (
    <footer className="minimal-footer">
      <div className="minimal-footer-inner">
        <div className="minimal-footer-name">
          <span className="minimal-footer-status" aria-hidden="true" />
          <span>Sachinthaka Ravimal</span>
        </div>

        <nav className="minimal-footer-links" aria-label="Social links">
          {socialLinks.map((button) => (
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
          className="minimal-footer-top"
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <span aria-hidden="true">↑</span>
        </button>
      </div>

      <div className="minimal-footer-meta">
        <span>© {new Date().getFullYear()} Sachinthaka Ravimal</span>
        <span>Built with intention.</span>
      </div>
    </footer>
  );
}

export default Footer;
