import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail, HiArrowUp } from "react-icons/hi";
import profileData from "../data/profileData";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const initial = profileData.name ? profileData.name.charAt(0).toUpperCase() : "F";
  const firstName = profileData.name.split(" ")[0] || "Fatema";

  return (
    <footer className="bg-[#05080f] border-t border-slate-800 text-slate-400 print:hidden mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-3">
            <Link
              to="/"
              className="text-xl font-black text-white flex items-center gap-2.5"
            >
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 via-indigo-500 to-pink-500 flex items-center justify-center text-white font-mono text-sm shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                K
              </span>
              <span className="lowercase font-extrabold">
                {profileData.brandPrefix || "khusbu"}<span className="text-pink-500 font-bold">.dev</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Software Engineer &amp; Full-Stack Developer studying at Daffodil International University. Building modern, high-performance web products with clean code and modern architectures.
            </p>
            <div className="pt-1 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#34d399]"></span>
              <span className="text-xs text-slate-400 font-medium">
                {profileData.status}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#home" className="hover:text-cyan-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-cyan-400 transition">
                  About Me
                </a>
              </li>
              <li>
                <a href="/#skills" className="hover:text-cyan-400 transition">
                  Technical Arsenal
                </a>
              </li>
              <li>
                <a href="/#projects" className="hover:text-cyan-400 transition">
                  Featured Projects
                </a>
              </li>
              <li>
                <Link to="/resume" className="text-cyan-400 font-bold hover:underline">
                  Resume / CV &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Details */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Connect
            </h4>
            <div className="space-y-2 text-sm">
              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center gap-2 hover:text-cyan-400 transition"
              >
                <HiMail className="text-cyan-400 text-base shrink-0" />
                <span className="truncate">{profileData.email}</span>
              </a>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition border border-slate-700 hover:border-cyan-400"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-lg text-cyan-400" />
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-blue-600/20 hover:bg-blue-600/40 text-blue-400 flex items-center justify-center transition border border-blue-500/30"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-lg text-blue-400" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {profileData.name}. Daffodil International University.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 font-bold transition cursor-pointer"
          >
            <span>Back to top</span>
            <HiArrowUp className="text-sm" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
