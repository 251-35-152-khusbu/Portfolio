import {
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineCheckCircle,
  HiOutlineSparkles,
} from "react-icons/hi";
import { FaLaptopCode, FaHandsHelping, FaAward, FaServer } from "react-icons/fa";
import profileData from "../data/profileData";

const iconMap = [FaLaptopCode, HiOutlineSparkles, FaHandsHelping, FaServer];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative">
      {/* Background Ambient Glow */}
      <div className="w-80 h-80 bg-cyan-500/10 rounded-full blur-[130px] absolute top-10 left-10 -z-10 pointer-events-none"></div>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          <HiOutlineBriefcase className="text-cyan-400 text-sm" />
          <span>Practical Background</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Work &amp; Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-500">Experience</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-300">
          My practical software training, university capstone leadership, and full-stack collaborative engineering history.
        </p>
      </div>

      {/* Experience Timeline Cards */}
      <div className="max-w-4xl mx-auto space-y-8 mb-16">
        {profileData.experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:border-cyan-500/50 transition-all duration-300 relative backdrop-blur-xl"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
              <div>
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full border mb-2.5 ${exp.badgeColor}`}>
                  {exp.type}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {exp.role}
                </h3>
                <p className="text-sm font-semibold text-cyan-400 mt-0.5">
                  {exp.company}
                </p>
              </div>

              <div className="flex flex-col sm:items-end text-xs text-slate-400 gap-1 shrink-0">
                <span className="flex items-center gap-1 font-semibold text-slate-300">
                  <HiOutlineCalendar className="text-cyan-400" />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1">
                  <HiOutlineLocationMarker className="text-pink-400" />
                  {exp.location}
                </span>
              </div>
            </div>

            {/* Responsibilities list */}
            <ul className="space-y-2.5 mb-5">
              {exp.responsibilities.map((task, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                  <HiOutlineCheckCircle className="text-cyan-400 text-base shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{task}</span>
                </li>
              ))}
            </ul>

            {/* Technologies used */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase text-slate-400 mr-1">
                Tech:
              </span>
              {exp.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-800 text-slate-200 border border-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Why Hire Me Callout Card */}
      <div className="max-w-4xl mx-auto bg-slate-900/80 rounded-2xl border border-indigo-500/30 p-8 shadow-2xl backdrop-blur-xl">
        <div className="text-center max-w-xl mx-auto mb-8 space-y-1">
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Why Hire Me as a Software Engineer?
          </h3>
          <p className="text-sm text-slate-400">
            The technical value, architectural mindset, and execution speed I bring to your team.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {profileData.valueProps.map((item, idx) => {
            const Icon = iconMap[idx % iconMap.length];
            return (
              <div key={item.title} className="flex items-start gap-3.5 p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/40 transition">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <Icon className="text-lg" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
