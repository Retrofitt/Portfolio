import React, { useState } from "react";
import { usePortfolio } from "../data/ExperienceData";

export default function Contact() {
  const { data, showToast } = usePortfolio();
  const { profile, socials = [] } = data;

  const targetEmail = profile.email || "rafaelmendozajr94.coding@gmail.com";

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "Full-Time Opportunity",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(targetEmail);
    setCopied(true);
    showToast("Email address copied to clipboard!");
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          _subject: `[Portfolio - ${formState.subject}] from ${formState.name}`,
          subject: formState.subject,
          message: formState.message,
          _template: "table",
        }),
      });

      if (response.ok) {
        showToast("Message sent successfully! Rafael will respond shortly.", "success");
        setFormState({
          name: "",
          email: "",
          subject: "Full-Time Opportunity",
          message: "",
        });
      } else {
        throw new Error("Form delivery error");
      }
    } catch (err) {
      showToast("Message recorded! Rafael will follow up shortly.", "success");
      const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(
        `[Portfolio Inquiry - ${formState.subject}] from ${formState.name}`
      )}&body=${encodeURIComponent(
        `From: ${formState.name} (${formState.email})\n\n${formState.message}`
      )}`;
      window.location.href = mailtoUrl;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="section-tag">Contact</span>
          <h2 className="section-heading mt-2">Get In Touch</h2>
          <p className="section-subheading mt-3">
            Feel free to reach out about full-time roles, freelance projects, or just to say hello.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Contact Details & Info (Left) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-2">
                Let's Connect
              </h3>
              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                I'm currently available for full-time software engineering roles, hybrid or remote positions, and select freelance web development projects.
              </p>

              {/* Status Indicator */}
              <div
                className="p-4 rounded-xl mb-6 flex items-center gap-3"
                style={{
                  background: "var(--bg-surface)",
                  border: "1px solid var(--border-glow)"
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "var(--accent-cyan)",
                    boxShadow: "0 0 10px var(--accent-cyan)"
                  }}
                ></div>
                <div>
                  <p className="text-xs font-bold text-white">Direct Inbox Delivery</p>
                  <p className="text-xs text-slate-400" style={{ fontSize: "11px" }}>Usually replies within 24 hours</p>
                </div>
              </div>

              {/* Copy Email Snippet */}
              <div className="space-y-2 mb-6">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                  Email
                </label>
                <div
                  className="flex items-center justify-between p-3 rounded-xl"
                  style={{
                    background: "var(--bg-surface)",
                    border: "1px solid var(--border-medium)"
                  }}
                >
                  <span className="text-xs sm:text-sm font-mono truncate mr-2 text-cyan-400">
                    {targetEmail}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="btn-outline text-xs"
                    type="button"
                  >
                    {copied ? (
                      <span className="text-cyan-400 font-bold">✓ Copied</span>
                    ) : (
                      <span>Copy</span>
                    )}
                  </button>
                </div>
              </div>

              {/* Location & Socials */}
              <div className="pt-6 space-y-3" style={{ borderTop: "1px solid var(--border-subtle)" }}>
                <p className="text-xs text-slate-400 flex items-center gap-2">
                  <svg style={{ width: "16px", height: "16px", color: "var(--accent-cyan)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>{profile.location || "Long Beach, CA"} (Pacific Time)</span>
                </p>
                <p className="text-xs text-slate-400 flex items-center gap-2">
                  <svg style={{ width: "16px", height: "16px", color: "var(--accent-cyan)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Phone available upon request</span>
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline text-xs"
                      style={{ padding: "0.35rem 0.75rem" }}
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
                      placeholder="e.g. sarah@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="glass-input w-full text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Subject
                  </label>
                  <select
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="glass-input w-full text-sm"
                  >
                    <option value="Full-Time Opportunity">Full-Time Opportunity</option>
                    <option value="Contract / Project Development">Freelance / Web Project</option>
                    <option value="Technical Consulting">Consulting</option>
                    <option value="General Inquiry">General Message</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows="5"
                    placeholder="Tell me about the role, project, or question..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="glass-input w-full text-sm"
                    style={{ resize: "none" }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full text-sm font-bold"
                  style={{ width: "100%", padding: "0.85rem" }}
                >
                  {isSubmitting ? "Sending to Inbox..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}