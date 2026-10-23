import {
  HiOutlineAcademicCap,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineBadgeCheck,
} from "react-icons/hi";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";
import profileData from "../data/profileData";

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative">
      {/* Background glow */}
      <div className="w-80 h-80 bg-pink-500/10 rounded-full blur-[140px] absolute bottom-10 right-10 -z-10 pointer-events-none"></div>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-semibold uppercase tracking-wider shadow-[0_0_15px_rgba(236,72,153,0.15)]">
          <HiOutlineAcademicCap className="text-pink-400 text-sm" />
          <span>Academic Background</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Education &amp;{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-500">
            Certifications
          </span>
        </h2>

        <p className="text-base sm:text-lg text-slate-300">
          Formal academic training in Software Engineering alongside verified industry certifications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Formal Degrees */}
        <div className="lg:col-span-7 space-y-8">
          <div className="flex items-center gap-2 mb-2">
            <FaGraduationCap className="text-cyan-400 text-xl" />
            <h3 className="text-xl font-bold text-white">Academic History</h3>
          </div>

          <div className="space-y-6">
            {profileData.education.map((edu, idx) => (
              <div
                key={idx}
                className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-7 shadow-xl hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] hover:border-cyan-500/50 transition-all duration-300 backdrop-blur-xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                    <p className="text-sm font-semibold text-cyan-400 mt-0.5">{edu.institution}</p>
                  </div>
                  <div className="flex flex-col sm:items-end text-xs text-slate-400 gap-1 shrink-0">
                    <span className="flex items-center gap-1 font-semibold text-slate-300">
                      <HiOutlineCalendar className="text-cyan-400" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <HiOutlineLocationMarker className="text-pink-400" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                <div className="inline-block bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-xs font-bold px-3 py-1 rounded-full mb-3 shadow-[0_0_8px_rgba(16,185,129,0.2)]">
                  {edu.grade}
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">{edu.description}</p>

                {edu.coursework && (
                  <div className="pt-3 border-t border-slate-800">
                    <span className="text-xs font-bold uppercase text-slate-400 block mb-2">
                      Key Coursework:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="px-2.5 py-1 text-xs rounded-md bg-slate-800/90 text-slate-300 border border-slate-700/80"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Industry Certifications */}
        <div className="lg:col-span-5 space-y-8">
          <div className="flex items-center gap-2 mb-2">
            <FaCertificate className="text-pink-400 text-lg" />
            <h3 className="text-xl font-bold text-white">Specialized Certifications</h3>
          </div>

          <div className="space-y-4">
            {profileData.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="bg-slate-900/80 rounded-2xl border border-slate-800 p-5 shadow-xl hover:shadow-[0_0_20px_rgba(236,72,153,0.15)] hover:border-pink-500/50 transition-all duration-300 backdrop-blur-xl"
              >
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-pink-500/10 text-pink-400 flex items-center justify-center shrink-0 border border-pink-500/30 shadow-[0_0_10px_rgba(236,72,153,0.2)]">
                    <HiOutlineBadgeCheck className="text-2xl" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-base font-bold text-white">{cert.title}</h4>
                      <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-2 py-0.5 rounded shrink-0">
                        {cert.year}
                      </span>
                    </div>
                    <p className="text-xs font-medium text-slate-400 mt-0.5">{cert.issuer}</p>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">{cert.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
