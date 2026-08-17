import React, { useState } from "react";
import { usePortfolio } from "../context/PortfolioContext";

export default function Contact() {
  const { data, showToast } = usePortfolio();
  const { profile, socials } = data;

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "Full-Time Engineering Role",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email || "mendoza.rafael28@gmail.com");
    setCopied(true);
    showToast("Email address copied to clipboard!");
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Form submission handling / mailto fallback
    setTimeout(() => {
      setIsSubmitting(false);
      showToast("Message recorded! Rafael will respond within 24 hours.", "success");
      const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
        `[Portfolio Inquiry - ${formState.subject}] from ${formState.name}`
      )}&body=${encodeURIComponent(
        `From: ${formState.name} (${formState.email})\n\n${formState.message}`
      )}`;
      window.location.href = mailtoUrl;
      setFormState({
        name: "",
        email: "",
        subject: "Full-Time Engineering Role",
        message: "",
      });
    }, 600);
  };

  return (
    <section id="contact" className="py-24 bg-[#060913] relative overflow-hidden">
      {/* Glow */}
      <div className="glow-orb w-[450px] h-[450px] bg-emerald-500/10 right-10 bottom-10"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-tag">Direct Communication</span>
          <h2 className="section-heading mt-2">Let's Build Something Great</h2>
          <p className="section-subheading mt-3">
            Open to California opportunities, technical leadership, and collaborative projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Contact Details & Info (Left) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-2">
                Recruiter &amp; Engineering Inquiries
              </h3>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                Whether you have an open engineering role, need a custom web application architected, or want to discuss full-stack systems, my inbox is always open.
              </p>

              {/* Status Indicator */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-emerald-500/20 mb-6 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
                <div>
                  <p className="text-xs font-bold text-white">Fast Response Guaranteed</p>
                  <p className="text-[11px] text-slate-400">Typical response time within 24 hours</p>
                </div>
              </div>

              {/* Copy Email Snippet */}
              <div className="space-y-2 mb-6">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Primary Email
                </label>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-white/10">
                  <span className="text-xs sm:text-sm font-mono text-emerald-400 truncate mr-2">
                    {profile.email || "mendoza.rafael28@gmail.com"}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="btn-outline text-xs px-3 py-1.5 shrink-0"
                    type="button"
                  >
                    {copied ? (
                      <span className="text-emerald-400 font-bold">✓ Copied</span>
                    ) : (
                      <span>Copy</span>
                    )}
                  </button>
                </div>
              </div>

              {/* Location & Socials */}
              <div className="pt-6 border-t border-white/10">
                <p className="text-xs text-slate-400 mb-3 flex items-center gap-2">
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{profile.location || "California, USA"} (Pacific Time)</span>
                </p>
                <div className="flex gap-3">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-slate-950 border border-white/10 hover:border-emerald-500/40 text-slate-300 hover:text-emerald-300 text-xs font-semibold transition-all"
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Message Form (Right) */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Connor"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="glass-input w-full text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@techcorp.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="glass-input w-full text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="glass-input w-full text-sm"
                  >
                    <option value="Full-Time Engineering Role">Full-Time Engineering Opportunity</option>
                    <option value="Contract / Project Development">Contract / Custom Web App Project</option>
                    <option value="Technical Consulting">UI/UX &amp; Architecture Consulting</option>
                    <option value="Networking & Collaboration">Coffee / Tech Chat</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows="5"
                    placeholder="Tell me about the role, team, or project requirements..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="glass-input w-full text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full py-3 text-sm font-bold shadow-lg shadow-emerald-500/20"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      <span>Sending Message...</span>
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <span>Send Direct Message</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}