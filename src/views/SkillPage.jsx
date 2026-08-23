import "../index.css";

import { skillsData } from "../models/skillsData";

export default function CardSlider() {
  return (
    <section className="skillpage">
      <div className="skillcontainer">
        <div className="skill-header">
          <h2 className="skilltitle">TECHNICAL SKILLS</h2>
          <p className="skilltitlep">
            I build modern, user-focused digital experiences with a strong mix
            of frontend, mobile, and problem-solving skills across development
            and design workflows.
          </p>
        </div>

        <div className="skill-showcase">
          {skillsData.map((card) => (
            <div key={card.id} className="skill-group">
              <div className="skill-group-image-wrap">
                <img
                  className="skill-group-image"
                  src={card.image}
                  alt={`${card.title} skills`}
                  loading="lazy"
                />
              </div>
              <div className="skill-group-header">
                <span className="skill-group-number">
                  {String(card.id).padStart(2, "0")}
                </span>
                <h3>{card.title}</h3>
              </div>

              <div className="skill-tag-list-inner">
                {card.content.map((item) => (
                  <span key={`${card.id}-${item}`} className="skill-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
