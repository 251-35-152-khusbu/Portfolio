import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import { HiArrowLeft, HiExternalLink, HiCode, HiLightBulb, HiShieldCheck } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-6">
        <div className="text-center max-w-md bg-slate-900 p-8 rounded-2xl shadow-xl border border-slate-800">
          <h2 className="text-2xl font-bold text-white mb-2">Project Not Found</h2>
          <p className="text-slate-400 text-sm mb-6">
            The project you are looking for does not exist or has been moved.
          </p>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white px-5 py-2.5 rounded-xl font-bold transition"
          >
            <HiArrowLeft /> Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-28 pb-20 bg-[#070b14] text-slate-100">
      <div className="max-w-4xl mx-auto px-6">
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition"
          >
            <HiArrowLeft /> Back to All Projects
          </Link>
        </div>

        {/* Project Card */}
        <div className="bg-slate-900/80 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden p-6 sm:p-10 space-y-8 backdrop-blur-xl">
          
          {/* Main Screenshot */}
          <div className="rounded-xl overflow-hidden border border-slate-800 shadow-xl aspect-video bg-slate-950">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Title & Category */}
          <div className="space-y-3">
            {project.category && (
              <span className="inline-block bg-cyan-500/10 text-cyan-300 border border-cyan-500/30 text-xs font-bold px-3 py-1 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                {project.category}
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 via-indigo-600 to-pink-600 hover:from-cyan-400 hover:to-pink-500 text-white font-bold px-6 py-3 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all"
            >
              <HiExternalLink className="text-lg" />
              <span>Live Demonstration</span>
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold px-6 py-3 rounded-xl border border-slate-700 hover:border-slate-600 transition"
            >
              <FaGithub className="text-lg" />
              <span>GitHub Repository</span>
            </a>
          </div>

          {/* Technologies Used Grid */}
          <div className="pt-6 border-t border-slate-800 space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
              <HiCode className="text-cyan-400 text-lg" /> Technologies Leveraged
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-slate-800/90 text-cyan-300 border border-slate-700 text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Architectural Challenges Overcome */}
          {project.challenges && (
            <div className="pt-6 border-t border-slate-800 space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <HiShieldCheck className="text-emerald-400 text-lg" /> Key Engineering Challenges Solved
              </h3>
              <ul className="space-y-2.5">
                {project.challenges.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0 shadow-[0_0_6px_#34d399]"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Future Roadmap */}
          {project.future && (
            <div className="pt-6 border-t border-slate-800 space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <HiLightBulb className="text-amber-400 text-lg" /> Future Planned Enhancements
              </h3>
              <ul className="space-y-2.5">
                {project.future.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0 shadow-[0_0_6px_#f59e0b]"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;
