import React, { useContext } from "react";
import "./StartupProjects.scss";
import { bigProjects, otherProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {

  function openUrlInNewTab(url) {
    if (!url) return;
    var win = window.open(url, "_blank");
    win.focus();
  }

  const { isDark } = useContext(StyleContext);

  if (!bigProjects.display && !otherProjects.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">

      <div className="main" id="projects">

        {/* Featured Projects (bigProjects) */}
        {bigProjects.display && (
          <div>

            <h1 className="skills-heading">
              {bigProjects.title}
            </h1>

            <p className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }>
              {bigProjects.subtitle}
            </p>

            <div className="projects-container">

              {bigProjects.projects.map((project, i) => (

                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                >

                  {project.image && (
                    <div className="project-image">
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="card-image"
                      />
                    </div>
                  )}

                  <div className="project-detail">

                    <h5 className={
                      isDark
                        ? "dark-mode card-title"
                        : "card-title"
                    }>
                      {project.projectName}
                    </h5>

                    <p className={
                      isDark
                        ? "dark-mode card-subtitle"
                        : "card-subtitle"
                    }>
                      {project.projectDesc}
                    </p>

                    {project.footerLink && (
                      <div className="project-card-footer">

                        {project.footerLink.map((link, i) => (

                          <span
                            key={i}
                            className={
                              isDark
                                ? "dark-mode project-tag"
                                : "project-tag"
                            }
                            onClick={() =>
                              openUrlInNewTab(link.url)
                            }
                          >
                            {link.name}
                          </span>

                        ))}

                      </div>
                    )}

                  </div>

                </div>

              ))}

            </div>

          </div>
        )}


        {/* Academic Projects (otherProjects) */}
        {otherProjects.display && (
          <div style={{ marginTop: "80px" }}>

            <h1 className="skills-heading">
              {otherProjects.title}
            </h1>

            <p className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }>
              {otherProjects.subtitle}
            </p>

            <div className="projects-container">

              {otherProjects.projects.map((project, i) => (

                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                >

                  <div className="project-image">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="card-image"
                    />
                  </div>

                  <div className="project-detail">

                    <h5 className={
                      isDark
                        ? "dark-mode card-title"
                        : "card-title"
                    }>
                      {project.title}
                    </h5>

                    <p className={
                      isDark
                        ? "dark-mode card-subtitle"
                        : "card-subtitle"
                    }>
                      {project.subtitle}
                    </p>

                  </div>

                </div>

              ))}

            </div>

          </div>
        )}

      </div>

    </Fade>
  );
}
