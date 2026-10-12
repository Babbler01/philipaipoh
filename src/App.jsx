import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CaseStudyPage from "./components/CaseStudy";
import { projects } from "./data/projects";
import "./App.css";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Bootstrap",
  "React",
  "REST APIs",
  "Git & GitHub",
  "AI Integration",
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <a href="/" className="brand" aria-label="Philip Aipoh home">
        p<span>.</span>a
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        {menuOpen ? "CLOSE −" : "MENU +"}
      </button>

      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        {[
          ["Work", "#projects"],
          ["About", "#about"],
          ["Contact", "#contact"],
        ].map(([label, href]) => (
          <a key={label} href={href} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
        <a
          className="nav-cta"
          href="#projects"
          onClick={() => setMenuOpen(false)}
        >
          Explore work <span>↗</span>
        </a>
      </nav>
    </header>
  );
}

function ProjectPreview({ project }) {
  return (
    <div
      className={`project-preview ${project.className}`}
      style={{
        backgroundImage: `url("${project.image}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="preview-topbar">
        <span className="preview-dot" />
        <span className="preview-dot" />
        <span className="preview-dot" />
        <span className="preview-label">PROJECT_{project.number}</span>
      </div>

      <div className="preview-content">
        <span className="preview-symbol">{project.symbol}</span>
        <span className="preview-index">0{project.number}</span>

        <div className="preview-bottom">
          <span>{project.category}</span>
          <span className="preview-arrow">↗</span>
        </div>
      </div>
    </div>
  );
}


function ProjectCard({ project }) {
  const caseStudyUrl = `/projects/${project.slug}`;

  return (
    <article className="project-card">
      <a
        className="project-image-link"
        href={caseStudyUrl}
        aria-label={`View ${project.name} case study`}
      >
        <ProjectPreview project={project} />
      </a>

      <div className="project-info">
        <div>
          <span className="eyebrow">
            {project.number} / {project.category}
          </span>

          <h3>{project.name}</h3>
          <p>{project.summary}</p>

          <div className="tech-list">
            {project.stack.map((tech) => (
              <span className="tech-tag" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="project-actions">
          <a
            className="button button-primary"
            href={caseStudyUrl}
          >
            View case study <span>↗</span>
          </a>

          <a
            href={project.liveUrl || undefined}
            target="_blank"
            rel="noreferrer"
            className={`button button-secondary ${
              project.liveUrl ? "" : "project-link-disabled"
            }`}
            aria-disabled={!project.liveUrl}
            onClick={(e) => {
              if (!project.liveUrl) e.preventDefault();
            }}
          >
            View live site ↗
          </a>
        </div>
      </div>
    </article>
  );
}

function Home() {
  return (
    <>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="availability">
            <span className="status-dot" />
            SIWES PORTFOLIO / 2026
          </div>

          <h1>
            Building for
            <br />
            the <span className="accent-text">web.</span>
            <span className="cursor">_</span>
          </h1>

          <p className="hero-description">
            I'm Philip Aipoh, a Computer Science student and frontend
            developer learning by building real-world digital experiences.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="button button-primary">
              Explore projects <span>↗</span>
            </a>
            <a href="#about" className="button button-secondary">
              My journey <span>↓</span>
            </a>
          </div>

          <div className="hero-meta">
            <span>DESIGNING</span>
            <span className="meta-divider">/</span>
            <span>DEVELOPING</span>
            <span className="meta-divider">/</span>
            <span>LEARNING</span>
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <div className="orbit-core">
            <span className="core-bracket">{"<"}</span>
            <span>PA</span>
            <span className="core-bracket">{"/>"}</span>
          </div>
          <span className="floating-code code-one">{"{ build() }"}</span>
          <span className="floating-code code-two">01001 / 10110</span>
          <span className="floating-code code-three">HELLO_WORLD</span>
          <span className="art-cross cross-one">+</span>
          <span className="art-cross cross-two">+</span>
        </div>

        <div className="hero-bottom">
          <span>SCROLL TO EXPLORE</span>
          <span className="scroll-line" />
          <span>01 — 03 / SELECTED WORK</span>
        </div>
      </section>

      <section className="projects-section section-wrap" id="projects">
        <div className="section-heading">
          <div>
            <span className="eyebrow">01 / SELECTED WORK</span>
            <h2>
              From learning
              <br />
              to <span className="accent-text">building.</span>
            </h2>
          </div>
          <p>
            Three projects. Different technologies. One continuous journey
            into frontend development.
          </p>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </section>

      <section className="about-section section-wrap" id="about">
        <div className="about-heading">
          <span className="eyebrow">02 / THE JOURNEY</span>
          <h2>
            Learning through
            <br />
            <span className="accent-text">making things.</span>
          </h2>
        </div>

        <div className="about-content">
          <p className="about-lead">
            My SIWES experience has been about turning concepts into working
            interfaces, understanding how the web works, and learning to solve
            problems through code.
          </p>
          <p className="about-detail">
            From writing my first pages with HTML and CSS to building
            interactive experiences with JavaScript and React, each project
            has introduced new concepts, challenges, and ways of thinking.
          </p>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-item" key={skill}>
                <span className="skill-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{skill}</span>
                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section section-wrap" id="contact">
        <span className="eyebrow">03 / WHAT'S NEXT?</span>
        <h2>
          Let's make
          <br />
          something <span className="accent-text">work.</span>
        </h2>
        <p>
          Interested in my work or want to discuss a project? Let's connect.
        </p>
        <a className="button button-primary" href="mailto:YOUR_EMAIL@example.com">
          Get in touch <span>↗</span>
        </a>
      </section>

      <footer className="footer section-wrap">
        <a href="#home" className="brand">
          p<span>.</span>a
        </a>
        <span>DESIGNED & BUILT BY PHILIP AIPOH</span>
        <a href="#home" className="back-top">
          BACK TO TOP ↑
        </a>
      </footer>
    </>
  );
}


export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/projects/:slug"
            element={<CaseStudyPage />}
          />
          <Route
            path="*"
            element={
              <div className="section-wrap not-found">
                <span className="eyebrow">ERROR_404</span>
                <h1>Page not found.</h1>
                <a href="/" className="button button-primary">
                  Return home ↗
                </a>
              </div>
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

