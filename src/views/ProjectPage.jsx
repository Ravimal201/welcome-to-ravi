import { useState } from "react";
import "../index.css";
import { projectsData } from "../models/projectsData";

export default function ProjectPage() {
  const [activeBg, setActiveBg] = useState(null);

  return (
    <div>
      <div
        className="projectpage"
        style={{
          backgroundImage: activeBg
            ? `url(${activeBg})`
            : `url(/reources/images/projectbg.jpg)`,
        }}
      >
        <div className="bg-overlay">
          <div className="ptoject-title">
            <h1>PROJECTS</h1>
          </div>
        </div>

        <div className="projects-container">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onMouseEnter={() => setActiveBg(project.image)}
              onMouseLeave={() => setActiveBg(null)}
            >
              <div
                className="card-bg"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>

              <div className="card-content">
                <h3>{project.title}</h3>

                <p>{project.desc}</p>

                {/* Technologies */}
                <ul className="tech-list">
                  {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>

                {/* Duration */}
                <span className="project-duration">{project.duration}</span>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-btn"
                >
                  View GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
