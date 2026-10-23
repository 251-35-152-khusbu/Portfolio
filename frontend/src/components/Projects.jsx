import { Link } from "react-router-dom";
import projects from "../data/projects";
import { HiExternalLink, HiArrowRight, HiOutlineSparkles } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative"
    >
      {/* Ambient Glow */}
      <div className="w-[30rem] h-[30rem] bg-pink-500/10 rounded-full blur-[150px] absolute -bottom-10 right-1/4 -z-10 pointer-events-none"></div>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-semibold uppercase tracking-wider shadow-[0_0_15px_rgba(236,72,153,0.15)]">
          <HiOutlineSparkles className="text-pink-400 text-sm" />
          <span>Engineering Portfolio</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-500">Projects</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-300">
          Explore production-grade full-stack web applications and software systems demonstrating clean architecture and responsive user experiences.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group bg-slate-900/80 rounded-2xl border border-slate-800 shadow-xl hover:shadow-[0_0_35px_rgba(6,182,212,0.2)] hover:border-cyan-500/50 transition-all duration-300 flex flex-col overflow-hidden backdrop-blur-xl"
          >
            {/* Card Thumbnail / Image Container */}
            <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-slate-800">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {project.category && (
                <span className="absolute top-3.5 left-3.5 bg-slate-950/90 backdrop-blur-md text-cyan-300 border border-cyan-500/30 text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                  {project.category}
                </span>
              )}
            </div>

            {/* Card Body */}
            <div className="p-7 flex flex-col flex-grow justify-between space-y-5">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-300 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 text-xs font-semibold rounded-md bg-slate-800/90 text-cyan-300 border border-slate-700 hover:border-cyan-500/40 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3 text-sm">
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center gap-1.5 font-bold text-cyan-400 hover:text-cyan-300 transition"
                >
                  <span>Details &amp; Architecture</span>
                  <HiArrowRight className="text-sm" />
                </Link>

                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition"
                    title="View Source on GitHub"
                    aria-label="GitHub Repository"
                  >
                    <FaGithub className="text-base" />
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-semibold text-xs px-3.5 py-2 rounded-lg shadow-[0_0_15px_rgba(6,182,212,0.3)] transition"
                  >
                    <span>Live Demo</span>
                    <HiExternalLink className="text-xs" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
