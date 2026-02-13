import React, { useState, useEffect, useContext, Suspense, lazy } from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import { openSource, socialMediaLinks, otherProjects } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";

export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );

  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;

  const [repo, setrepo] = useState([]);
  const { isDark } = useContext(StyleContext);

  useEffect(() => {
    const getRepoData = () => {
      fetch("/profile.json")
        .then(result => {
          if (result.ok) {
            return result.json();
          }
          throw result;
        })
        .then(response => {
          setrepo(response.data.user.pinnedItems.edges);
        })
        .catch(function (error) {
          console.error(error);
          setrepo("Error");
        });
    };
    getRepoData();
  }, []);

  return (
    <div>

      {/* ================================
          Academic / Semester Projects
         ================================ */}
      {otherProjects.display && (
        <div className="main" id="academic-projects">
          <h1 className="project-title">{otherProjects.title}</h1>
          <p className="subTitle project-subtitle">{otherProjects.subtitle}</p>

          <div className="repo-cards-div-main">
            {otherProjects.projects.map((project, i) => (
              <div key={i} className="repo-card-div" style={{padding: "20px"}}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    marginBottom: "10px"
                  }}
                />

                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ================================
          Open Source GitHub Projects
         ================================ */}
      {!(typeof repo === "string" || repo instanceof String) &&
        openSource.display && (
          <Suspense fallback={renderLoader()}>
            <div className="main" id="opensource">
              <h1 className="project-title">Open Source Projects</h1>

              <div className="repo-cards-div-main">
                {repo.map((v, i) => {
                  if (!v) return null;

                  return (
                    <GithubRepoCard
                      repo={v}
                      key={v.node.id}
                      isDark={isDark}
                    />
                  );
                })}
              </div>

              <Button
                text={"More Projects"}
                className="project-button"
                href={socialMediaLinks.github}
                newTab={true}
              />
            </div>
          </Suspense>
        )}
    </div>
  );
}
