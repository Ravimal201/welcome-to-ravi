import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMouseMove = (e) => {
    const item = e.currentTarget;
    const rect = item.getBoundingClientRect();

    item.style.setProperty("--x", `${e.clientX - rect.left}px`);
    item.style.setProperty("--y", `${e.clientY - rect.top}px`);
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
          onClick={() =>
            document
              .getElementById("home")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          HOME
        </li>

        <li
          onMouseMove={handleMouseMove}
          onClick={() =>
            document
              .getElementById("about")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          ABOUT ME
        </li>

        <li
          onMouseMove={handleMouseMove}
          onClick={() =>
            document
              .getElementById("skills")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          SKILLS
        </li>

        <li
          onMouseMove={handleMouseMove}
          onClick={() =>
            document
              .getElementById("projects")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          PROJECTS
        </li>
        <li
          onMouseMove={handleMouseMove}
          onClick={() =>
            document
              .getElementById("certificates")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          CERTIFICATES
        </li>

        <li
          onMouseMove={handleMouseMove}
          onClick={() =>
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          CONTACT ME
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
