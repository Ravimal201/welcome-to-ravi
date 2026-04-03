import "../index.css";

function About({ title, description, education }) {
  return (
    <section className="about">

      {/* TOP SECTION */}
      <div className="about-top">
        <div className="about-content">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="about-bottom">
        <div className="education">
          <h2>Education</h2>
          <h3>{education.degree}</h3>
          <p>{education.university}</p>
          <p>Expected Graduation : {education.year}</p>
        </div>
      </div>

      {/* OVERLAP IMAGE */}
      <div className="about-image">
        <img src={education.image} alt="profile" />
      </div>

    </section>
  );
}

export default About;