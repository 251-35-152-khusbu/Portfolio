import { Link } from "react-router-dom";
import { HiDocumentText, HiArrowRight, HiSparkles } from "react-icons/hi";
import { FaReact, FaJsSquare, FaNodeJs, FaPython, FaDocker } from "react-icons/fa";
import { SiTailwindcss, SiPostgresql, SiMongodb } from "react-icons/si";
import profileData from "../data/profileData";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Vibrant Ambient Glows */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-[28rem] h-[28rem] bg-pink-500/15 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[34rem] bg-indigo-600/15 rounded-full blur-[160px] pointer-events-none -z-10"></div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Introductions & CTAs */}
        <div className="lg:col-span-7 text-left space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-semibold shadow-[0_0_15px_rgba(16,185,129,0.2)] backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]"></span>
            <span>{profileData.status}</span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <p className="text-slate-400 font-medium text-lg tracking-wide">
              Hello world, I am{" "}
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400">
                {profileData.name}
              </span>
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Software Engineer &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-500 drop-shadow-[0_0_35px_rgba(6,182,212,0.3)]">
                Full-Stack Dev
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Studying Software Engineering at{" "}
            <span className="text-cyan-400 font-semibold">Daffodil International University</span>.
            I craft high-performance, responsive web applications with{" "}
            <span className="text-white font-semibold">React 19</span>,{" "}
            <span className="text-white font-semibold">Node.js</span>,{" "}
            <span className="text-white font-semibold">Python</span>, and{" "}
            <span className="text-white font-semibold">Tailwind CSS v4</span>.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* Main Resume CTA */}
            <Link
              to="/resume"
              className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-cyan-500 via-indigo-600 to-pink-600 hover:from-cyan-400 hover:via-indigo-500 hover:to-pink-500 text-white px-7 py-3.5 rounded-xl font-bold shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(236,72,153,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base"
            >
              <HiDocumentText className="text-xl" />
              <span>View Resume / CV</span>
            </Link>

            {/* Explore Projects Button */}
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-slate-900/90 text-slate-200 border border-slate-700/80 hover:border-cyan-400/80 hover:text-cyan-300 px-6 py-3.5 rounded-xl font-semibold shadow-md transition-all duration-300 text-sm sm:text-base hover:bg-slate-800/80 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]"
            >
              <span>Explore Projects</span>
              <HiArrowRight className="text-base" />
            </a>

            {/* Quick Contact Link */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center text-sm font-semibold text-slate-400 hover:text-pink-400 px-4 py-3.5 transition"
            >
              Get in Touch &rarr;
            </a>
          </div>

          {/* Core Tech Stack Badges */}
          <div className="pt-4 border-t border-slate-800/80">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <HiSparkles className="text-cyan-400" /> Core Tech Stack
            </p>
            <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 text-cyan-300 font-medium border border-cyan-500/30 hover:border-cyan-400 transition shadow-[0_0_10px_rgba(6,182,212,0.15)]">
                <FaReact className="text-cyan-400 text-base" /> React 19
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 text-emerald-300 font-medium border border-emerald-500/30 hover:border-emerald-400 transition shadow-[0_0_10px_rgba(16,185,129,0.15)]">
                <FaNodeJs className="text-emerald-400 text-base" /> Node.js &amp; Express
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 text-blue-300 font-medium border border-blue-500/30 hover:border-blue-400 transition shadow-[0_0_10px_rgba(59,130,246,0.15)]">
                <FaPython className="text-blue-400 text-base" /> Python
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 text-sky-300 font-medium border border-sky-500/30 hover:border-sky-400 transition shadow-[0_0_10px_rgba(14,165,233,0.15)]">
                <SiPostgresql className="text-sky-400 text-base" /> PostgreSQL
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 text-emerald-300 font-medium border border-emerald-500/30 hover:border-emerald-400 transition shadow-[0_0_10px_rgba(16,185,129,0.15)]">
                <SiMongodb className="text-emerald-400 text-base" /> MongoDB
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 text-teal-300 font-medium border border-teal-500/30 hover:border-teal-400 transition shadow-[0_0_10px_rgba(20,184,166,0.15)]">
                <SiTailwindcss className="text-teal-400 text-base" /> Tailwind CSS v4
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 text-pink-300 font-medium border border-pink-500/30 hover:border-pink-400 transition shadow-[0_0_10px_rgba(236,72,153,0.15)]">
                <FaDocker className="text-pink-400 text-base" /> Docker
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Code Showcase & Visual Card */}
        <div className="lg:col-span-5 relative">
          {/* Visual Code Box */}
          <div className="relative bg-[#0d1424] rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.8)] border border-slate-700/80 overflow-hidden text-left hover:border-cyan-500/50 transition duration-500">
            {/* Terminal Window Header */}
            <div className="bg-slate-900/90 px-4 py-3 flex items-center justify-between border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500 shadow-[0_0_6px_#f43f5e]"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_6px_#f59e0b]"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_6px_#10b981]"></div>
              </div>
              <span className="text-xs text-slate-400 font-mono">FatemaEngineer.ts</span>
              <div className="w-12"></div>
            </div>

            {/* Code Content */}
            <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed overflow-x-auto">
              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-cyan-400">softwareEngineer</span> = &#123;
              </p>
              <p className="pl-4">
                <span className="text-slate-400">name:</span>{" "}
                <span className="text-pink-400">"{profileData.name}"</span>,
              </p>
              <p className="pl-4">
                <span className="text-slate-400">university:</span>{" "}
                <span className="text-cyan-300">"Daffodil International University"</span>,
              </p>
              <p className="pl-4">
                <span className="text-slate-400">major:</span>{" "}
                <span className="text-emerald-400">"B.Sc. in Software Engineering"</span>,
              </p>
              <p className="pl-4">
                <span className="text-slate-400">techStack:</span> [
              </p>
              <p className="pl-8 text-amber-300">
                "React 19", "Node.js", "Python", "PostgreSQL", "Docker"
              </p>
              <p className="pl-4">],</p>
              <p className="pl-4">
                <span className="text-slate-400">passion:</span>{" "}
                <span className="text-cyan-300">"Scalable Architecture &amp; Clean Code"</span>,
              </p>
              <p className="pl-4">
                <span className="text-slate-400">hireable:</span>{" "}
                <span className="text-emerald-400">true</span>,
              </p>
              <p className="pl-4">
                <span className="text-slate-400">buildSolutions():</span>{" "}
                <span className="text-purple-400">() =&gt;</span>{" "}
                <span className="text-emerald-300">"High-performance &amp; modern"</span>
              </p>
              <p>&#125;;</p>

              <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="animate-pulse">●</span> Tests &amp; Builds Passing
                </span>
                <span className="text-cyan-400 font-mono">SWE @ DIU</span>
              </div>
            </div>
          </div>

          {/* Floating Pill Badges with Glow */}
          <div className="absolute -bottom-4 -left-4 bg-slate-900/95 backdrop-blur-xl border border-cyan-500/40 rounded-xl p-3 shadow-[0_0_20px_rgba(6,182,212,0.25)] flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-cyan-500 to-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-md">
              4+
            </div>
            <div>
              <p className="text-xs font-bold text-white">Full-Stack Projects</p>
              <p className="text-[11px] text-cyan-400">Live Demos &amp; GitHub</p>
            </div>
          </div>

          <div className="absolute -top-4 -right-4 bg-slate-900/95 backdrop-blur-xl border border-pink-500/40 rounded-xl p-3 shadow-[0_0_20px_rgba(236,72,153,0.25)] flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#34d399]"></span>
            <p className="text-xs font-bold text-white">Production Ready</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
