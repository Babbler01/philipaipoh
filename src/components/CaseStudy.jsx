
import { Link, useParams } from "react-router-dom";
import { getProjectBySlug, projects } from "../data/projects";
import "../styles/CaseStudy.css";

function ResourceButton({ label, url, primary = false }) {
  if (!url) {
    return (
      <span
        className={`resource-button ${primary ? "primary" : ""} unavailable`}
        aria-disabled="true"
        title="Add the real project URL in src/data/projects.js"
      >
        {label} <span>↗</span>
      </span>
    );
  }

  return (
    <a
      className={`resource-button ${primary ? "primary" : ""}`}
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      {label} <span>↗</span>
    </a>
  );
}

function CaseStudy({ project }) {
  const currentIndex = projects.findIndex(
    (item) => item.slug === project.slug
  );

  const previousProject = project.previous
    ? getProjectBySlug(project.previous)
    : null;

  const nextProject = project.next
    ? getProjectBySlug(project.next)
    : null;

  return (
    <article className="case-study section-wrap">
      <div className="case-breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/#projects">Projects</Link>
        <span>/</span>
        <span>{project.name}</span>
      </div>

      <header className="case-hero">
        <div className="case-heading">
          <span className="eyebrow">
            PROJECT_{project.number} / {project.category}
          </span>

          <h1>{project.name}<span className="accent-text">.</span></h1>
          <p className="case-subtitle">{project.subtitle}</p>
          <p className="case-summary">{project.summary}</p>

          <div className="case-actions">
            <ResourceButton
              label="Live project"
              url={project.liveUrl}
              primary
            />
            <ResourceButton
              label="Documentation"
              url={project.documentationUrl}
            />
            <ResourceButton
              label="GitHub repository"
              url={project.githubUrl}
            />
          </div>
        </div>

        <div className={`case-cover ${project.slug}`}>
          <div className="cover-grid" />
          <span className="cover-number">{project.number}</span>
          <span className="cover-name">{project.name}</span>
          <span className="cover-stack">
            {project.stack.slice(0, 3).join(" / ")}
          </span>
          <span className="cover-corner">SIWES / 2026</span>
        </div>
      </header>

      <div className="case-metadata">
        <div>
          <span>ROLE</span>
          <strong>{project.role}</strong>
        </div>
        <div>
          <span>YEAR</span>
          <strong>{project.year}</strong>
        </div>
        <div>
          <span>STATUS</span>
          <strong>{project.status}</strong>
        </div>
        <div>
          <span>TECHNOLOGIES</span>
          <strong>{project.stack.length} technologies</strong>
        </div>
      </div>

      <section className="case-section">
        <div className="case-section-label">
          <span>01</span>
          <span>OVERVIEW</span>
        </div>

        <div className="case-section-content">
          <h2>About the project</h2>
          <p className="case-body">{project.overview}</p>

          <div className="case-tech-list">
            {project.stack.map((tech) => (
              <span className="tech-tag" key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section">
        <div className="case-section-label">
          <span>02</span>
          <span>TECHNICAL BREAKDOWN</span>
        </div>

        <div className="case-section-content">
          <h2>Key concepts</h2>
          <p className="case-intro">
            The technologies are only part of the story. These are the
            concepts applied while building the project.
          </p>

          <div className="concept-list">
            {project.concepts.map((concept, index) => (
              <article className="concept-card" key={concept.title}>
                <span className="concept-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="concept-content">
                  <h3>{concept.title}</h3>
                  <p>{concept.description}</p>
                  <div className="concept-tags">
                    {concept.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>

                <span className="concept-plus">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section">
        <div className="case-section-label">
          <span>03</span>
          <span>WHAT IT DOES</span>
        </div>

        <div className="case-section-content">
          <h2>Features</h2>

          <div className="feature-list">
            {project.features.map((feature, index) => (
              <div className="feature-row" key={feature}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{feature}</p>
                <span className="feature-check">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section">
        <div className="case-section-label">
          <span>04</span>
          <span>HOW IT WORKS</span>
        </div>

        <div className="case-section-content">
          <h2>Implementation flow</h2>
          <p className="case-intro">
            A simplified view of how the major parts of this project connect.
          </p>

          <div className="architecture-flow">
            {project.architecture.map((step, index) => (
              <div className="architecture-item" key={step}>
                <div className="architecture-node">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step}</strong>
                </div>
                {index < project.architecture.length - 1 && (
                  <span className="architecture-arrow">↓</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section">
        <div className="case-section-label">
          <span>05</span>
          <span>PROBLEM SOLVING</span>
        </div>

        <div className="case-section-content">
          <h2>Challenges & solutions</h2>

          <div className="challenge-grid">
            {project.challenges.map((challenge, index) => (
              <article className="challenge-card" key={challenge.title}>
                <span className="eyebrow">
                  CHALLENGE_{String(index + 1).padStart(2, "0")}
                </span>
                <h3>{challenge.title}</h3>
                <p>{challenge.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-learning">
        <span className="eyebrow">06 / KEY TAKEAWAY</span>
        <h2>What I learned.</h2>
        <p>{project.learning}</p>
      </section>

      <nav className="case-navigation" aria-label="Project navigation">
        <div>
          {previousProject ? (
            <Link to={`/projects/${previousProject.slug}`}>
              <span className="eyebrow">← PREVIOUS PROJECT</span>
              <strong>{previousProject.name}</strong>
            </Link>
          ) : (
            <Link to="/#projects">
              <span className="eyebrow">← BACK TO</span>
              <strong>All projects</strong>
            </Link>
          )}
        </div>

        <div className="case-next">
          {nextProject ? (
            <Link to={`/projects/${nextProject.slug}`}>
              <span className="eyebrow">NEXT PROJECT →</span>
              <strong>{nextProject.name}</strong>
            </Link>
          ) : (
            <Link to="/#contact">
              <span className="eyebrow">END OF SHOWCASE</span>
              <strong>Get in touch ↗</strong>
            </Link>
          )}
        </div>
      </nav>
    </article>
  );
}

export default function CaseStudyPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <main className="section-wrap not-found">
        <span className="eyebrow">ERROR_404</span>
        <h1>Project not found.</h1>
        <p>The case study you're looking for doesn't exist.</p>
        <Link className="button button-primary" to="/">
          Return home ↗
        </Link>
      </main>
    );
  }

  return <CaseStudy project={project} />;
}
