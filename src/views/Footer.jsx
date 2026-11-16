const footerNav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Ravimal201", external: true },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sachinthaka-ravimal/",
    external: true,
  },
  {
    label: "Resume",
    href: "https://drive.google.com/drive/folders/1bsOBFKHSKjH3QtK5Ez5ICQImbIi9SDoZ?usp=sharing",
    external: true,
  },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-intro">
          <span className="footer-eyebrow">Available for projects</span>
          <a className="footer-brand" href="#home">
            <span className="footer-mark">R</span>
            <span className="footer-brand-row">
              <span className="space-astronaut">✦</span>
              Sachinthaka Ravimal
            </span>
          </a>
          <p>
            I design and build clean, engaging digital experiences that blend
            strategy, interaction, and performance.
          </p>
          <a className="footer-cta" href="mailto:universityravimal@gmail.com">
            Start a project <span>→</span>
          </a>
        </div>

        <div className="footer-nav">
          <span className="footer-label">Navigate</span>
          {footerNav.map((item) => (
            <a key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="footer-socials">
          <span className="footer-label">Connect</span>
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
            >
              <span>↗</span>
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {year} Sachinthaka Ravimal</span>
        <span>Crafted with passion and precision.</span>
      </div>
    </footer>
  );
}

export default Footer;
