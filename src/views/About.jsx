import "../index.css";
import useAboutController from "../controllers/aboutController";
import useContactController from "../controllers/contactController";

function About() {
  const { getAbout } = useAboutController();
  const { getButtons } = useContactController();

  const about = getAbout();
  const buttons = getButtons();

  return (
    <section className="about">
      {/* TOP SECTION */}
      <div className="about-top">
        <div className="about-content">
          <h1>{about.title}</h1>
          <p>{about.description}</p>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="about-bottom">
        <div className="education">
          <h2>EDUCATION</h2>
          <h3>{about.education.degree}</h3>
          <p>{about.education.university}</p>
          <p>Expected Graduation : {about.education.year}</p>

          {/* DYNAMIC BUTTONS */}
          <div className="about-buttons">
            {buttons.map((btn) => (
              <a
                key={btn.id}
                href={btn.link}
                target="_blank"
                rel="noopener noreferrer"
                className="about-btn"
              >
                {btn.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* IMAGE */}
      <div className="about-image">
        <img src={about.education.image} alt="profile" />
      </div>
    </section>
  );
}

export default About;
