import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineSparkles,
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlineBriefcase,
  HiOutlineCheckCircle,
} from "react-icons/hi";
import { FaLaptopCode, FaRocket, FaGraduationCap } from "react-icons/fa";
import heroImg from "../assets/hero.png";
import profileData from "../data/profileData";

const AboutMe = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative">
      {/* Ambient background glow */}
      <div className="w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px] absolute top-10 right-10 -z-10 pointer-events-none"></div>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          <HiOutlineUser className="text-cyan-400 text-sm" />
          <span>About Me</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Who I <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-500">Am</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-300">
          A glimpse into my engineering journey, problem-solving mindset, and dedication as a Software Engineer.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Visual Card & Quick Stats */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl backdrop-blur-xl hover:border-cyan-500/40 transition-all duration-300">
            {/* Ambient Accent Glow */}
            <div className="w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl absolute -top-4 -right-4 -z-10"></div>

            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-800">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-pink-500 p-0.5 shadow-[0_0_20px_rgba(6,182,212,0.4)] shrink-0 overflow-hidden">
                <img
                  src={profileData.avatarUrl}
                  alt={profileData.name}
                  className="w-full h-full object-cover rounded-[14px]"
                  onError={(e) => {
                    e.currentTarget.src = heroImg;
                  }}
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{profileData.name}</h3>
                <p className="text-sm font-semibold text-cyan-400">Software Engineering @ DIU</p>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                  <HiOutlineLocationMarker className="text-pink-400" />
                  <span>{profileData.location}</span>
                </div>
              </div>
            </div>

            {/* Quick Specs List */}
            <div className="space-y-3.5 text-sm text-slate-300">
              <div className="flex items-center justify-between py-1.5 border-b border-slate-800/80">
                <span className="flex items-center gap-2 text-slate-400">
                  <HiOutlineBriefcase className="text-cyan-400" /> Availability:
                </span>
                <span className="font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 rounded text-xs shadow-[0_0_8px_rgba(16,185,129,0.2)]">
                  Immediate Joining / Intern
                </span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-slate-800/80">
                <span className="flex items-center gap-2 text-slate-400">
                  <FaGraduationCap className="text-indigo-400" /> University:
                </span>
                <span className="font-semibold text-white">Daffodil Int. University</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-slate-800/80">
                <span className="flex items-center gap-2 text-slate-400">
                  <FaLaptopCode className="text-pink-400" /> Core Focus:
                </span>
                <span className="font-semibold text-white">Full-Stack &amp; Software Eng.</span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-slate-800/80">
                <span className="flex items-center gap-2 text-slate-400">
                  <HiOutlineMail className="text-amber-400" /> Student Email:
                </span>
                <span className="font-medium text-cyan-300 text-xs truncate max-w-[180px]">{profileData.email}</span>
              </div>
            </div>

            {/* Micro Stats */}
            <div className="grid grid-cols-3 gap-3 pt-6 mt-6 border-t border-slate-800 text-center">
              <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80 hover:border-cyan-500/40 transition">
                <span className="block text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  {profileData.stats.projectsCount}
                </span>
                <span className="text-[11px] text-slate-400 font-medium">Full Projects</span>
              </div>
              <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80 hover:border-pink-500/40 transition">
                <span className="block text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">
                  {profileData.stats.codingHours}
                </span>
                <span className="text-[11px] text-slate-400 font-medium">Coding Hours</span>
              </div>
              <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80 hover:border-emerald-500/40 transition">
                <span className="block text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  {profileData.stats.commitment}
                </span>
                <span className="text-[11px] text-slate-400 font-medium">Commitment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio Narrative & Strengths */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              {profileData.bioHeadline}
            </h3>
            <p>
              {profileData.bioDescription1}
            </p>
            <p>
              {profileData.bioDescription2}
            </p>
          </div>

          {/* Core Strengths Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {profileData.highlights.map((item) => (
              <div
                key={item.title}
                className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 shadow-md flex items-start gap-3 hover:border-cyan-500/40 hover:bg-slate-900 transition-all duration-300 group"
              >
                <HiOutlineCheckCircle className="text-xl text-cyan-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">{item.title}</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-normal">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              to="/resume"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 via-indigo-600 to-pink-600 hover:from-cyan-400 hover:to-pink-500 text-white px-6 py-3 rounded-xl font-bold shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300"
            >
              <HiOutlineSparkles className="text-lg" />
              <span>Inspect Full Resume</span>
            </Link>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-slate-900 text-slate-200 border border-slate-700 hover:border-pink-500 hover:text-pink-300 px-6 py-3 rounded-xl font-semibold shadow-xs transition-all duration-300"
            >
              <FaRocket className="text-sm text-pink-400" />
              <span>Let's Work Together</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
