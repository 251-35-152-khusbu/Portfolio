import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiX, HiDocumentText } from "react-icons/hi";
import profileData from "../data/profileData";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (!isHomePage) return;

      const sections = navLinks.map((link) =>
        document.getElementById(link.id)
      );

      sections.forEach((section) => {
        if (!section) return;

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const closeMenu = () => setMenuOpen(false);
  const firstName = profileData.name.split(" ")[0] || "Fatema";
  const initial = profileData.name ? profileData.name.charAt(0).toUpperCase() : "F";

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 print:hidden ${
        scrolled || !isHomePage
          ? "bg-[#070b14]/90 backdrop-blur-xl border-b border-slate-800/80 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-black tracking-tight text-white group flex items-center gap-2.5"
        >
          <div className="w-10 h-10 rounded-xl p-0.5 bg-gradient-to-tr from-cyan-500 via-indigo-500 to-pink-500 shadow-[0_0_20px_rgba(6,182,212,0.5)] group-hover:scale-110 group-hover:rotate-3 transition-transform overflow-hidden flex items-center justify-center shrink-0">
            <img
              src={profileData.avatarUrl}
              alt={profileData.name}
              className="w-full h-full object-cover rounded-[10px]"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
          <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent font-extrabold">
            {firstName}<span className="text-pink-500">.dev</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const href = isHomePage ? `#${link.id}` : `/#${link.id}`;
            const isLinkActive = isHomePage && active === link.id;

            return (
              <li key={link.id}>
                <a
                  href={href}
                  className={`relative py-1 font-semibold text-sm transition-all duration-200 ${
                    isLinkActive
                      ? "text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 transition-all duration-300 rounded-full ${
                      isLinkActive ? "w-full" : "w-0 hover:w-full"
                    }`}
                  ></span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop Right CTA (Resume Button) */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/resume"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 via-indigo-600 to-pink-600 hover:from-cyan-400 hover:via-indigo-500 hover:to-pink-500 text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_25px_rgba(236,72,153,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <HiDocumentText className="text-lg" />
            Resume
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden text-2xl text-slate-200 p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition focus:outline-none"
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0f1d]/95 backdrop-blur-2xl border-b border-slate-800 shadow-2xl px-6 py-6 transition-all duration-300 animate-fadeIn">
          <ul className="flex flex-col space-y-4">
            {navLinks.map((link) => {
              const href = isHomePage ? `#${link.id}` : `/#${link.id}`;
              const isLinkActive = isHomePage && active === link.id;

              return (
                <li key={link.id}>
                  <a
                    href={href}
                    onClick={closeMenu}
                    className={`block py-2 text-base font-semibold transition ${
                      isLinkActive ? "text-cyan-400 font-bold" : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
            <li className="pt-2">
              <Link
                to="/resume"
                onClick={closeMenu}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 via-indigo-600 to-pink-600 text-white py-3 rounded-xl font-bold shadow-lg transition"
              >
                <HiDocumentText className="text-lg" />
                View Resume / CV
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
