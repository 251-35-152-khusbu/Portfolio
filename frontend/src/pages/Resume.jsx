import { Link } from "react-router-dom";
import {
  HiArrowLeft,
  HiPrinter,
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiExternalLink,
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import profileData from "../data/profileData";
import projects from "../data/projects";

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#070b14] py-10 px-4 sm:px-6 lg:px-8 text-slate-800 font-sans print:bg-white print:py-0 print:px-0">
      {/* Top Action Bar (Hidden during print) */}
      <div className="max-w-4xl mx-auto mb-6 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-200 bg-slate-900 border border-slate-700 hover:border-cyan-400 px-4 py-2.5 rounded-xl shadow-md hover:text-cyan-400 transition"
        >
          <HiArrowLeft className="text-base" /> Back to Portfolio
        </Link>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 text-sm font-bold text-white bg-gradient-to-r from-cyan-500 via-indigo-600 to-pink-600 hover:from-cyan-400 hover:to-pink-500 px-6 py-2.5 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.4)] transition cursor-pointer"
          >
            <HiPrinter className="text-base" /> Print / Save as PDF
          </button>
        </div>
      </div>

      {/* Main Resume Sheet (White / ATS-friendly printable background) */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 p-8 sm:p-12 print:shadow-none print:border-none print:p-0 print:rounded-none">
        
        {/* Header Section */}
        <header className="border-b-2 border-indigo-600 pb-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                {profileData.name}
              </h1>
              <p className="text-lg font-bold text-indigo-700 mt-1">
                {profileData.role}
              </p>
              <p className="text-sm font-medium text-gray-600 mt-1">
                {profileData.subRole}
              </p>
            </div>

            {/* Availability Badge */}
            <div className="flex flex-col items-start md:items-end gap-1 text-sm text-gray-600">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Open for Software Engineer Roles
              </span>
              <span className="text-xs text-gray-500 mt-1">Ready for Immediate Opportunities</span>
            </div>
          </div>

          {/* Contact Details Bar */}
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-xs sm:text-sm text-gray-700 pt-4 border-t border-gray-100">
            <a
              href={`mailto:${profileData.email}`}
              className="flex items-center gap-1.5 hover:text-indigo-600 transition"
            >
              <HiMail className="text-indigo-600 text-base shrink-0" />
              <span className="truncate">{profileData.email}</span>
            </a>
            <a
              href={`tel:${profileData.phone}`}
              className="flex items-center gap-1.5 hover:text-indigo-600 transition"
            >
              <HiPhone className="text-indigo-600 text-base shrink-0" />
              <span>{profileData.phone}</span>
            </a>
            <div className="flex items-center gap-1.5">
              <HiLocationMarker className="text-indigo-600 text-base shrink-0" />
              <span>{profileData.location}</span>
            </div>
            <a
              href={profileData.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-indigo-600 transition"
            >
              <FaGithub className="text-gray-900 text-base shrink-0" />
              <span>GitHub</span>
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-indigo-600 transition"
            >
              <FaLinkedin className="text-indigo-600 text-base shrink-0" />
              <span>LinkedIn</span>
            </a>
            <a
              href="/"
              className="flex items-center gap-1.5 hover:text-indigo-600 transition"
            >
              <FaGlobe className="text-indigo-600 text-base shrink-0" />
              <span>Portfolio</span>
            </a>
          </div>
        </header>

        {/* Section: Professional Summary */}
        <section className="mb-6">
          <h2 className="text-base font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-2.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-indigo-600 rounded-sm"></span>
            Professional Summary
          </h2>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed text-justify">
            Disciplined, proactive, and outcome-oriented <strong>Software Engineering undergraduate at Daffodil International University (DIU)</strong> with solid foundations in algorithmic thinking, data structures, and modern full-stack development. Experienced in building responsive, component-driven user interfaces with <strong>React 19</strong> and <strong>Tailwind CSS</strong>, combined with robust backend REST APIs using <strong>Node.js</strong> and <strong>Python</strong>. Strong background from Dinajpur Govt. College (GPA 5.00) and Dinajpur Govt. Girls' High School (GPA 5.00). Seeking software engineering opportunities to contribute to real-world impact while mastering modern cloud architectures.
          </p>
        </section>

        {/* Section: Technical Skills */}
        <section className="mb-6">
          <h2 className="text-base font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-indigo-600 rounded-sm"></span>
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs sm:text-sm">
            <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
              <span className="font-bold text-gray-900 block mb-1">
                Frontend Technologies:
              </span>
              <p className="text-gray-700 leading-relaxed">
                React.js 19, Next.js, JavaScript (ES6+), TypeScript, Tailwind CSS v4, HTML5, CSS3, Context API, Redux Toolkit, Responsive Web Design.
              </p>
            </div>

            <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
              <span className="font-bold text-gray-900 block mb-1">
                Backend &amp; APIs:
              </span>
              <p className="text-gray-700 leading-relaxed">
                Node.js, Express.js, Python (FastAPI), RESTful API Architecture, JWT, WebSocket, GraphQL basics, Microservices.
              </p>
            </div>

            <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
              <span className="font-bold text-gray-900 block mb-1">
                Databases &amp; Storage:
              </span>
              <p className="text-gray-700 leading-relaxed">
                PostgreSQL, MongoDB (Mongoose), Redis, Firebase (Auth/Firestore), Supabase, Relational Modeling &amp; Query Optimization.
              </p>
            </div>

            <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
              <span className="font-bold text-gray-900 block mb-1">
                DevOps, Tools &amp; Methodologies:
              </span>
              <p className="text-gray-700 leading-relaxed">
                Git, GitHub, Docker, Postman, Linux CLI, Vite, Vercel, CI/CD pipelines, Agile/Scrum, SOLID Principles.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Education */}
        <section className="mb-6">
          <h2 className="text-base font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-indigo-600 rounded-sm"></span>
            Education
          </h2>

          <div className="space-y-3.5">
            {profileData.education.map((edu, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-start sm:justify-between text-xs sm:text-sm">
                <div>
                  <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                  <p className="text-indigo-700 font-semibold">
                    {edu.institution} • {edu.location}
                  </p>
                  {edu.coursework && (
                    <p className="text-gray-500 text-xs mt-1">
                      <strong>Relevant Coursework:</strong> {edu.coursework.slice(0, 4).join(", ")}
                    </p>
                  )}
                </div>
                <div className="text-left sm:text-right mt-1 sm:mt-0 shrink-0">
                  <span className="font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 inline-block text-xs">
                    {edu.grade}
                  </span>
                  <p className="text-gray-500 font-mono text-xs mt-0.5">{edu.period}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Featured Projects */}
        <section className="mb-6">
          <h2 className="text-base font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-indigo-600 rounded-sm"></span>
            Featured Engineering Projects
          </h2>

          <div className="space-y-4">
            {projects.map((proj) => (
              <div key={proj.id} className="border-l-2 border-indigo-600 pl-4 py-0.5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 flex items-center gap-2">
                    {proj.title}
                    <span className="text-xs font-normal text-indigo-700 font-mono bg-indigo-50 px-2 py-0.5 rounded">
                      {proj.category}
                    </span>
                  </h3>
                  <div className="flex items-center gap-3 text-xs font-semibold text-indigo-600">
                    <a href={proj.live} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                      Live Demo <HiExternalLink />
                    </a>
                    <span>•</span>
                    <a href={proj.github} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                      GitHub Code <HiExternalLink />
                    </a>
                  </div>
                </div>
                <p className="text-xs text-gray-500 font-medium mt-0.5">
                  Tech Stack: {proj.technologies.join(", ")}
                </p>
                <ul className="mt-1.5 list-disc list-inside text-xs sm:text-sm text-gray-700 space-y-0.5">
                  <li>{proj.description}</li>
                  {proj.challenges && (
                    <li>
                      <strong>Engineering Solution:</strong> {proj.challenges[0]}
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Practical Experience */}
        <section className="mb-6">
          <h2 className="text-base font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-indigo-600 rounded-sm"></span>
            Experience &amp; Leadership
          </h2>

          <div className="space-y-3.5">
            {profileData.experiences.map((exp, idx) => (
              <div key={idx} className="border-l-2 border-indigo-400 pl-4 py-0.5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-gray-900">{exp.role}</h3>
                    <p className="text-xs font-semibold text-indigo-600">
                      {exp.company} • {exp.location}
                    </p>
                  </div>
                  <span className="text-xs font-medium text-gray-500 font-mono">
                    {exp.period}
                  </span>
                </div>
                <ul className="mt-1.5 list-disc list-inside text-xs sm:text-sm text-gray-700 space-y-0.5">
                  {exp.responsibilities.map((task, taskIdx) => (
                    <li key={taskIdx}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Certifications */}
        <section>
          <h2 className="text-base font-bold text-gray-900 uppercase tracking-wider border-b border-gray-200 pb-1 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-indigo-600 rounded-sm"></span>
            Certifications
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
            {profileData.certifications.map((cert, idx) => (
              <div key={idx} className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                <span className="font-bold text-gray-900 block">{cert.title}</span>
                <span className="text-xs text-indigo-600 font-semibold">{cert.issuer} ({cert.year})</span>
                <p className="text-xs text-gray-600 mt-1">{cert.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Resume;
