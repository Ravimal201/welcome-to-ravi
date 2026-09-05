import "../index.css";
import { projectsData } from "../models/projectsData";

export default function ProjectPage() {
  return (
    <div className="projectpage">
      <div className="project-overlay"></div>

      <div className="content-wrapper">
        <div className="project-header">
          <h1>PROJECTS</h1>
        </div>

        <div className="projects-container">
          {projectsData.map((project) => (
            <article key={project.id} className="project-card">
              <div
                className="card-image"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="image-overlay"></div>
              </div>

              <div className="card-content">
                <span className="project-index">0{project.id}</span>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>

                <ul className="tech-list">
                  {project.technologies.map((tech, index) => (
                    <li key={`${project.id}-${tech}-${index}`}>{tech}</li>
                  ))}
                </ul>

                <div className="project-meta">
                  <span className="project-duration">{project.duration}</span>
                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-btn"
                      >
                        View GitHub
                      </a>
                    )}
                    {project.figma && (
                      <a
                        href={project.figma}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="figma-btn"
                      >
                        View Figma
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
