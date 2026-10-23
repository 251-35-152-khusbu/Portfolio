import { useState } from "react";
import {
  FaReact,
  FaJsSquare,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaLinux,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiRedis,
  SiVite,
  SiPostman,
  SiVercel,
  SiExpress,
  SiGraphql,
} from "react-icons/si";
import {
  HiOutlineCode,
  HiOutlineServer,
  HiOutlineDatabase,
  HiOutlineTerminal,
} from "react-icons/hi";

const categories = [
  { id: "all", name: "All Skills" },
  { id: "frontend", name: "Frontend", icon: HiOutlineCode },
  { id: "backend", name: "Backend & APIs", icon: HiOutlineServer },
  { id: "database", name: "Databases & Cloud", icon: HiOutlineDatabase },
  { id: "tools", name: "DevOps & Tools", icon: HiOutlineTerminal },
];

const skillsData = [
  // Frontend
  {
    name: "React.js 19",
    category: "frontend",
    icon: FaReact,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10 border-cyan-500/30",
    glow: "shadow-[0_0_15px_rgba(6,182,212,0.25)]",
    level: "Advanced",
    description: "Hooks, Context API, React Router, Suspense, Concurrent rendering",
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    icon: FaJsSquare,
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/30",
    glow: "shadow-[0_0_15px_rgba(245,158,11,0.25)]",
    level: "Advanced",
    description: "Async/Await, Closures, DOM manipulation, ES Modules, Event Loop",
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: SiTypescript,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/30",
    glow: "shadow-[0_0_15px_rgba(59,130,246,0.25)]",
    level: "Proficient",
    description: "Static typing, Interfaces, Generics, Type inference, Strict mode",
  },
  {
    name: "Next.js",
    category: "frontend",
    icon: SiNextdotjs,
    color: "text-slate-100",
    bg: "bg-slate-700/20 border-slate-600/40",
    glow: "shadow-[0_0_15px_rgba(255,255,255,0.15)]",
    level: "Proficient",
    description: "App Router, Server Components, SSR, SSG, API route handlers",
  },
  {
    name: "Tailwind CSS v4",
    category: "frontend",
    icon: SiTailwindcss,
    color: "text-teal-400",
    bg: "bg-teal-500/10 border-teal-500/30",
    glow: "shadow-[0_0_15px_rgba(20,184,166,0.25)]",
    level: "Advanced",
    description: "Modern CSS variables, Flexbox/Grid, Responsive design, Glassmorphism",
  },

  // Backend & APIs
  {
    name: "Node.js",
    category: "backend",
    icon: FaNodeJs,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/30",
    glow: "shadow-[0_0_15px_rgba(16,185,129,0.25)]",
    level: "Proficient",
    description: "Asynchronous runtime, Event-driven architecture, NPM ecosystem",
  },
  {
    name: "Express.js",
    category: "backend",
    icon: SiExpress,
    color: "text-slate-200",
    bg: "bg-slate-800 border-slate-700",
    glow: "shadow-[0_0_15px_rgba(148,163,184,0.2)]",
    level: "Proficient",
    description: "RESTful architecture, Custom middleware, Error handling, CORS",
  },
  {
    name: "Python",
    category: "backend",
    icon: FaPython,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/30",
    glow: "shadow-[0_0_15px_rgba(59,130,246,0.25)]",
    level: "Proficient",
    description: "Object-oriented design, FastAPI, Scripting, Data structures",
  },
  {
    name: "REST APIs & JSON",
    category: "backend",
    icon: HiOutlineServer,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10 border-indigo-500/30",
    glow: "shadow-[0_0_15px_rgba(99,102,241,0.25)]",
    level: "Advanced",
    description: "API design, Status codes, Authentication tokens, Pagination",
  },
  {
    name: "GraphQL",
    category: "backend",
    icon: SiGraphql,
    color: "text-pink-400",
    bg: "bg-pink-500/10 border-pink-500/30",
    glow: "shadow-[0_0_15px_rgba(236,72,153,0.25)]",
    level: "Comfortable",
    description: "Queries, Mutations, Schema definitions, Apollo Client integration",
  },

  // Databases & Cloud
  {
    name: "PostgreSQL",
    category: "database",
    icon: SiPostgresql,
    color: "text-sky-400",
    bg: "bg-sky-500/10 border-sky-500/30",
    glow: "shadow-[0_0_15px_rgba(14,165,233,0.25)]",
    level: "Proficient",
    description: "Relational schemas, Joins, Indexing, Transactions, ACID rules",
  },
  {
    name: "MongoDB",
    category: "database",
    icon: SiMongodb,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/30",
    glow: "shadow-[0_0_15px_rgba(16,185,129,0.25)]",
    level: "Proficient",
    description: "Document models, Mongoose ODM, Aggregations, Indexing",
  },
  {
    name: "Redis",
    category: "database",
    icon: SiRedis,
    color: "text-red-400",
    bg: "bg-red-500/10 border-red-500/30",
    glow: "shadow-[0_0_15px_rgba(239,68,68,0.25)]",
    level: "Comfortable",
    description: "In-memory caching, Key-value operations, Rate limiting, Pub/Sub",
  },
  {
    name: "Firebase",
    category: "database",
    icon: SiFirebase,
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/30",
    glow: "shadow-[0_0_15px_rgba(245,158,11,0.25)]",
    level: "Proficient",
    description: "Authentication, Firestore database, Security rules, Cloud hosting",
  },

  // DevOps & Tools
  {
    name: "Git & GitHub",
    category: "tools",
    icon: FaGitAlt,
    color: "text-orange-400",
    bg: "bg-orange-500/10 border-orange-500/30",
    glow: "shadow-[0_0_15px_rgba(249,115,22,0.25)]",
    level: "Advanced",
    description: "Feature branches, Pull requests, Merge conflict resolution, CI workflows",
  },
  {
    name: "Docker",
    category: "tools",
    icon: FaDocker,
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/30",
    glow: "shadow-[0_0_15px_rgba(59,130,246,0.25)]",
    level: "Comfortable",
    description: "Dockerfiles, Containerization, Docker Compose multi-service setups",
  },
  {
    name: "Postman",
    category: "tools",
    icon: SiPostman,
    color: "text-orange-400",
    bg: "bg-orange-500/10 border-orange-500/30",
    glow: "shadow-[0_0_15px_rgba(249,115,22,0.25)]",
    level: "Proficient",
    description: "Endpoint testing, Environment variables, Automated test scripts",
  },
  {
    name: "Linux & Bash",
    category: "tools",
    icon: FaLinux,
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/30",
    glow: "shadow-[0_0_15px_rgba(245,158,11,0.25)]",
    level: "Proficient",
    description: "Command-line navigation, Shell scripts, Permissions, Server maintenance",
  },
  {
    name: "Vite & Bundlers",
    category: "tools",
    icon: SiVite,
    color: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/30",
    glow: "shadow-[0_0_15px_rgba(168,85,247,0.25)]",
    level: "Advanced",
    description: "Fast HMR, Build optimization, Rollup configuration, Modern ES modules",
  },
  {
    name: "Vercel & Netlify",
    category: "tools",
    icon: SiVercel,
    color: "text-slate-100",
    bg: "bg-slate-700/30 border-slate-600/40",
    glow: "shadow-[0_0_15px_rgba(255,255,255,0.15)]",
    level: "Advanced",
    description: "Continuous deployments, Preview branches, Custom domains, Env configs",
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills =
    activeTab === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative">
      {/* Glow orb */}
      <div className="w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] absolute -top-10 left-1/3 -z-10 pointer-events-none"></div>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          <HiOutlineCode className="text-cyan-400 text-sm" />
          <span>Technical Arsenal</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-500">Skills</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-300">
          The full-stack technologies, databases, APIs, and DevOps tooling I leverage to build scalable, resilient web applications.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
              activeTab === cat.id
                ? "bg-gradient-to-r from-cyan-500 via-indigo-600 to-pink-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-105"
                : "bg-slate-900/80 text-slate-400 border border-slate-800 hover:border-cyan-500/40 hover:text-white"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Skills Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {filteredSkills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className="bg-slate-900/80 rounded-2xl border border-slate-800/90 p-5 shadow-lg hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] hover:border-cyan-500/50 hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between backdrop-blur-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center border text-2xl ${skill.bg} ${skill.color} ${skill.glow} group-hover:scale-110 transition-transform`}
                  >
                    <Icon />
                  </div>

                  <span
                    className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                      skill.level === "Advanced"
                        ? "bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
                        : skill.level === "Proficient"
                        ? "bg-cyan-500/10 text-cyan-300 border-cyan-500/30"
                        : "bg-purple-500/10 text-purple-300 border-purple-500/30"
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>

                <h3 className="font-bold text-white text-base mb-1.5 group-hover:text-cyan-300 transition-colors">
                  {skill.name}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Category tag */}
              <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]"></span>
                <span className="text-[11px] text-slate-400 font-medium capitalize">
                  {skill.category}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
