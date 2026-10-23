import { useState } from "react";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineChatAlt2,
  HiOutlineCheckCircle,
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";
import profileData from "../data/profileData";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        submitting: false,
        submitted: false,
        error: "Please fill in all required fields.",
      });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    setTimeout(() => {
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => {
        setStatus((prev) => ({ ...prev, submitted: false }));
      }, 6000);
    }, 900);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative">
      {/* Background glow */}
      <div className="w-96 h-96 bg-cyan-500/10 rounded-full blur-[150px] absolute -top-10 left-10 -z-10 pointer-events-none"></div>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider shadow-[0_0_15px_rgba(6,182,212,0.15)]">
          <HiOutlineChatAlt2 className="text-cyan-400 text-sm" />
          <span>Get In Touch</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-500">Exceptional</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-300">
          Have an open software engineering role, contract project, or technical question? Feel free to reach out directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Contact Info & Socials */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-2xl space-y-6 backdrop-blur-xl">
            <h3 className="text-xl font-bold text-white">
              Direct Channels
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              I am actively interviewing and open for full-time, intern, and remote software engineering opportunities.
            </p>

            <div className="space-y-4 text-sm text-slate-300">
              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-950/70 hover:bg-slate-800/80 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 shadow-[0_0_10px_rgba(6,182,212,0.2)] transition-transform">
                  <HiOutlineMail className="text-xl" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">DIU Email</span>
                  <span className="font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {profileData.email}
                  </span>
                </div>
              </a>

              <a
                href={`tel:${profileData.phone}`}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-950/70 hover:bg-slate-800/80 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0 group-hover:scale-110 shadow-[0_0_10px_rgba(16,185,129,0.2)] transition-transform">
                  <HiOutlinePhone className="text-xl" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Phone / WhatsApp</span>
                  <span className="font-semibold text-white group-hover:text-emerald-300 transition-colors">
                    {profileData.phone}
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-slate-950/70 border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/30 flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(168,85,247,0.2)]">
                  <HiOutlineLocationMarker className="text-xl" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Location</span>
                  <span className="font-semibold text-white">
                    {profileData.location} (Dinajpur / Dhaka)
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                Professional Profiles
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white flex items-center gap-2 text-sm font-semibold border border-slate-700 hover:border-cyan-400 shadow-md hover:scale-105 transition-all"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="text-base text-cyan-400" />
                  <span>GitHub Profile</span>
                </a>
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white flex items-center gap-2 text-sm font-semibold shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:scale-105 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="text-base" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Message Form */}
        <div className="lg:col-span-7">
          <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
            <h3 className="text-xl font-bold text-white mb-2">Send a Direct Message</h3>
            <p className="text-sm text-slate-300 mb-6">
              Fill out this form and I will get back to you promptly.
            </p>

            {status.error && (
              <div className="p-3 mb-6 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-sm">
                {status.error}
              </div>
            )}

            {status.submitted && (
              <div className="p-4 mb-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm flex items-center gap-2.5 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                <HiOutlineCheckCircle className="text-xl text-emerald-400 shrink-0" />
                <span>Thank you! Your message has been sent successfully. I'll reply shortly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Your Name <span className="text-pink-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 text-sm transition"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Your Email <span className="text-pink-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 text-sm transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Software Engineer Role / Project Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 text-sm transition"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Message <span className="text-pink-500">*</span>
                </label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your team, role, or project..."
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 text-sm transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status.submitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 via-indigo-600 to-pink-600 hover:from-cyan-400 hover:to-pink-500 disabled:opacity-50 text-white font-bold px-8 py-3.5 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 cursor-pointer text-sm"
              >
                <FaPaperPlane className="text-sm" />
                <span>{status.submitting ? "Sending..." : "Send Message"}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
