import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Copy, Check, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please provide a valid email address.');
      return;
    }

    if (formData.message.trim().length < 10) {
      setStatus('error');
      setErrorMessage('Message must be at least 10 characters.');
      return;
    }

    setStatus('sending');

    setTimeout(() => {
      setStatus('success');
      const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        formData.subject || `Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
    }, 600);
  };

  return (
    <section id="contact" className="py-20 relative bg-white dark:bg-[#06080e]/95 transition-colors duration-300 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold tracking-wider uppercase flex items-center gap-2">
            <Mail className="w-4 h-4 text-emerald-500" />
            <span>Communication & Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            CONTACT
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Interested in discussing backend systems, API architecture, database optimization, or Reverse Prompt Engineering? Reach out via direct email, telephone, or the validated dispatch form.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Info & Profiles */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0b0e18]/90 backdrop-blur-md space-y-5 shadow-lg dark:shadow-xl">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                Direct Channels
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                {/* Email */}
                <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/40 flex items-center justify-between gap-3 hover:border-emerald-500/40 transition-colors shadow-sm">
                  <div className="flex items-center gap-3 truncate">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">Primary Email</div>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 font-medium truncate block transition-colors"
                      >
                        <span>{PERSONAL_INFO.email}</span>
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded border border-slate-200 dark:border-slate-800 transition-all hover:scale-110 active:scale-95 shrink-0"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/40 flex items-center justify-between gap-3 hover:border-emerald-500/40 transition-colors shadow-sm">
                  <div className="flex items-center gap-3 truncate">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">Direct Phone</div>
                      <a
                        href={`tel:${PERSONAL_INFO.phone}`}
                        className="text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 font-medium truncate block transition-colors"
                      >
                        <span>{PERSONAL_INFO.phone}</span>
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyPhone}
                    className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded border border-slate-200 dark:border-slate-800 transition-all hover:scale-110 active:scale-95 shrink-0"
                    title="Copy Phone Number"
                    aria-label="Copy Phone Number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/40 flex items-center gap-3 shadow-sm">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase">Location</div>
                    <div className="text-slate-900 dark:text-white font-medium">{PERSONAL_INFO.location}</div>
                  </div>
                </div>
              </div>

              {/* Profiles */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
                <div className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Verified Online Profiles
                </div>

                <div className="space-y-2">
                  <a
                    href={PERSONAL_INFO.githubPrimary}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group relative flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-slate-800/80 hover:border-emerald-500/50 bg-white dark:bg-slate-900/30 text-xs text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200 hover:scale-[1.02] shadow-sm"
                  >
                    <span className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-emerald-600 dark:text-emerald-400 transition-transform duration-200 group-hover:scale-110" />
                      <span>github.com/jagadeeswaran101</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  <a
                    href={PERSONAL_INFO.githubSecondary}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group relative flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-slate-800/80 hover:border-emerald-500/50 bg-white dark:bg-slate-900/30 text-xs text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200 hover:scale-[1.02] shadow-sm"
                  >
                    <span className="flex items-center gap-2">
                      <Github className="w-4 h-4 text-emerald-600 dark:text-emerald-400 transition-transform duration-200 group-hover:scale-110" />
                      <span>github.com/jagadees-vet (Academic Repos)</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group relative flex items-center justify-between p-3 rounded-lg border border-slate-200 dark:border-slate-800/80 hover:border-emerald-500/50 bg-white dark:bg-slate-900/30 text-xs text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-200 hover:scale-[1.02] shadow-sm"
                  >
                    <span className="flex items-center gap-2">
                      <Linkedin className="w-4 h-4 text-emerald-600 dark:text-emerald-400 transition-transform duration-200 group-hover:scale-110" />
                      <span>linkedin.com/in/jagadeeswaran-c-8a2649353</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-[#0b0e18]/90 backdrop-blur-md shadow-xl dark:shadow-2xl space-y-6">
              <div className="space-y-1 border-b border-slate-200 dark:border-slate-800 pb-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                  Dispatch Message
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Fill in your inquiry details to initiate direct email communication.
                </p>
              </div>

              {status === 'success' ? (
                <div className="p-6 rounded-xl border border-emerald-500/40 bg-emerald-50 dark:bg-emerald-950/20 space-y-3">
                  <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Inquiry Prepared</span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    Your email client has been launched with the pre-filled inquiry. If your email client did not open automatically, please send your message directly to{' '}
                    <strong className="text-slate-900 dark:text-white">{PERSONAL_INFO.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setStatus('idle');
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline pt-2 block"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3 rounded-lg border border-red-200 dark:border-red-900/40 bg-red-50 dark:bg-red-950/20 text-xs text-red-600 dark:text-red-300">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="block text-xs font-mono text-slate-700 dark:text-slate-300">
                        Your Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Mercer"
                        className="w-full px-3.5 py-2.5 bg-white dark:bg-[#06080e] border border-slate-200 dark:border-slate-800 rounded-lg text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-colors shadow-sm"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="block text-xs font-mono text-slate-700 dark:text-slate-300">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-3.5 py-2.5 bg-white dark:bg-[#06080e] border border-slate-200 dark:border-slate-800 rounded-lg text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-colors shadow-sm"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="block text-xs font-mono text-slate-700 dark:text-slate-300">
                      Inquiry Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Backend Architecture Consultation"
                      className="w-full px-3.5 py-2.5 bg-white dark:bg-[#06080e] border border-slate-200 dark:border-slate-800 rounded-lg text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-colors shadow-sm"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-mono text-slate-700 dark:text-slate-300">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your technical requirements, architecture inquiry, or project scope..."
                      className="w-full px-3.5 py-2.5 bg-white dark:bg-[#06080e] border border-slate-200 dark:border-slate-800 rounded-lg text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-emerald-500 transition-colors resize-none shadow-sm"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 disabled:opacity-50 shadow-md shadow-emerald-500/20"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{status === 'sending' ? 'Validating...' : 'Send Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
