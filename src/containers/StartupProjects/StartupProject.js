import React, { useState } from "react";
import "./StartupProjects.scss";
import { otherProjects } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import { useContext } from "react";

export default function StartupProjects() {

  const { isDark } = useContext(StyleContext);

  const [showMore, setShowMore] = useState(false);

  if (!otherProjects.display) return null;

  const limit = otherProjects.showLimit || otherProjects.projects.length;

  const visibleProjects = showMore
    ? otherProjects.projects
    : otherProjects.projects.slice(0, limit);

  return (
    <div className="main" id="projects">

      <h1 className="project-title">
        {otherProjects.title}
      </h1>

      <p className="project-subtitle">
        {otherProjects.subtitle}
      </p>

      <div className="repo-cards-div-main">

        {visibleProjects.map((project, i) => (
          <div className={`repo-card ${isDark ? "dark-card" : ""}`} key={i}>

            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <h3>{project.title}</h3>

            <p>{project.subtitle}</p>

          </div>
        ))}

      </div>

      {otherProjects.projects.length > limit && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>

          <button
            className="project-button"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "More Projects"}
          </button>

        </div>
      )}

    </div>
  );
}
