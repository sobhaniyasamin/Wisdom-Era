"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

const initialData: FormData = {
  name: "",
  email: "",
  company: "",
  subject: "",
  message: "",
};

const inputClasses =
  "w-full px-4 py-3 rounded-lg border border-navy/10 bg-white text-text-dark placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all duration-200 font-sans text-[0.95rem]";

export function ContactForm() {
  const [form, setForm] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function validate(): boolean {
    const errs: Partial<FormData> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Invalid email address";
    if (!form.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      // Build mailto link as fallback for static export (no server API)
      const subject = encodeURIComponent(form.subject || "Contact from Website");
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company || "N/A"}\n\n${form.message}`
      );
      window.location.href = `mailto:info@wisdomera.net?subject=${subject}&body=${body}`;
      setStatus("success");
      setForm(initialData);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-teal mx-auto mb-4" />
        <h3 className="text-2xl text-navy mb-2">Message Sent!</h3>
        <p className="text-text-muted">
          Thank you for reaching out. We&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-navy mb-1.5">
            Name *
          </label>
          <input
            id="name"
            type="text"
            className={inputClasses}
            placeholder="Your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          {errors.name && <p className="text-coral text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">
            Email *
          </label>
          <input
            id="email"
            type="email"
            className={inputClasses}
            placeholder="you@company.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && <p className="text-coral text-sm mt-1">{errors.email}</p>}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-navy mb-1.5">
            Company
          </label>
          <input
            id="company"
            type="text"
            className={inputClasses}
            placeholder="Your company"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-navy mb-1.5">
            Subject
          </label>
          <input
            id="subject"
            type="text"
            className={inputClasses}
            placeholder="What is this about?"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-navy mb-1.5">
          Message *
        </label>
        <textarea
          id="message"
          rows={5}
          className={`${inputClasses} resize-none`}
          placeholder="Tell us about your project or idea..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        {errors.message && <p className="text-coral text-sm mt-1">{errors.message}</p>}
      </div>
      {status === "error" && (
        <p className="text-coral text-sm">Something went wrong. Please try again.</p>
      )}
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2 bg-navy text-white px-8 py-3.5 rounded-lg font-semibold transition-all duration-300 hover:bg-navy-deep hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(46,62,111,0.25)] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
      >
        <Send className="w-4 h-4" />
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
