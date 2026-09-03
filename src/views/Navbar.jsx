import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ripple, setRipple] = useState(null);

  const handleMouseMove = (e) => {
    const item = e.currentTarget;
    const rect = item.getBoundingClientRect();

    item.style.setProperty("--x", `${e.clientX - rect.left}px`);
    item.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  const handleNavigation = (target, e) => {
    setRipple({ x: e.clientX, y: e.clientY, id: Date.now() });
    setMenuOpen(false);
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>&lt;/&gt;</h1>
        <h2>Sachinthaka Ravimal</h2>
      </div>

      {/* HAMBURGER */}
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li
          onMouseMove={handleMouseMove}
          onClick={(e) => handleNavigation("home", e)}
        >
          HOME
        </li>
        <li
          onMouseMove={handleMouseMove}
          onClick={(e) => handleNavigation("about", e)}
        >
          ABOUT ME
        </li>
        <li
          onMouseMove={handleMouseMove}
          onClick={(e) => handleNavigation("skills", e)}
        >
          SKILLS
        </li>
        <li
          onMouseMove={handleMouseMove}
          onClick={(e) => handleNavigation("projects", e)}
        >
          PROJECTS
        </li>
        <li
          onMouseMove={handleMouseMove}
          onClick={(e) => handleNavigation("certificates", e)}
        >
          CERTIFICATES
        </li>
        <li
          onMouseMove={handleMouseMove}
          onClick={(e) => handleNavigation("contact", e)}
        >
          CONTACT ME
        </li>
      </ul>
      {ripple && (
        <span
          key={ripple.id}
          className="water-ripple"
          style={{ left: ripple.x, top: ripple.y }}
          aria-hidden="true"
        />
      )}
    </nav>
  );
}

export default Navbar;
