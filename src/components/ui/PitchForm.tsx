"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle } from "lucide-react";

interface PitchData {
  name: string;
  email: string;
  startup: string;
  website: string;
  stage: string;
  sector: string;
  deck: string;
  message: string;
}

const initialData: PitchData = {
  name: "",
  email: "",
  startup: "",
  website: "",
  stage: "",
  sector: "",
  deck: "",
  message: "",
};

const inputClasses =
  "w-full px-4 py-3 rounded-lg border border-navy/10 bg-white text-text-dark placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent transition-all duration-200 font-sans text-[0.95rem]";
const labelClasses = "block text-sm font-medium text-navy mb-1.5";

const STAGES = ["Idea / Pre-seed", "Seed", "Series A", "Later"];
const SECTORS = ["E-Commerce", "Agriculture", "AI / SaaS", "Other"];

export function PitchForm() {
  const [form, setForm] = useState<PitchData>(initialData);
  const [errors, setErrors] = useState<Partial<PitchData>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function set<K extends keyof PitchData>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function validate(): boolean {
    const errs: Partial<PitchData> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email address";
    if (!form.startup.trim()) errs.startup = "Startup name is required";
    if (!form.message.trim()) errs.message = "Tell us a little about what you're building";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "d52ea871-2065-4da9-8a99-90aca1f41335",
          subject: `Pitch: ${form.startup}`,
          name: form.name,
          email: form.email,
          startup: form.startup,
          website: form.website,
          stage: form.stage,
          sector: form.sector,
          deck: form.deck,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error("Failed");
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
        <h3 className="text-2xl text-navy mb-2">Pitch received</h3>
        <p className="text-text-muted">
          Thanks for sharing what you&rsquo;re building. If it&rsquo;s a fit, we&rsquo;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="p-name" className={labelClasses}>
            Your name *
          </label>
          <input id="p-name" type="text" className={inputClasses} placeholder="Your name" value={form.name} onChange={(e) => set("name", e.target.value)} />
          {errors.name && <p className="text-coral text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="p-email" className={labelClasses}>
            Email *
          </label>
          <input id="p-email" type="email" className={inputClasses} placeholder="you@startup.com" value={form.email} onChange={(e) => set("email", e.target.value)} />
          {errors.email && <p className="text-coral text-sm mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="p-startup" className={labelClasses}>
            Startup name *
          </label>
          <input id="p-startup" type="text" className={inputClasses} placeholder="Your startup" value={form.startup} onChange={(e) => set("startup", e.target.value)} />
          {errors.startup && <p className="text-coral text-sm mt-1">{errors.startup}</p>}
        </div>
        <div>
          <label htmlFor="p-website" className={labelClasses}>
            Website
          </label>
          <input id="p-website" type="url" className={inputClasses} placeholder="https://" value={form.website} onChange={(e) => set("website", e.target.value)} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="p-stage" className={labelClasses}>
            Stage
          </label>
          <select id="p-stage" className={inputClasses} value={form.stage} onChange={(e) => set("stage", e.target.value)}>
            <option value="">Select stage</option>
            {STAGES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="p-sector" className={labelClasses}>
            Sector
          </label>
          <select id="p-sector" className={inputClasses} value={form.sector} onChange={(e) => set("sector", e.target.value)}>
            <option value="">Select sector</option>
            {SECTORS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="p-deck" className={labelClasses}>
          Pitch deck link
        </label>
        <input id="p-deck" type="url" className={inputClasses} placeholder="Link to your deck (Google Drive, Notion, etc.)" value={form.deck} onChange={(e) => set("deck", e.target.value)} />
      </div>

      <div>
        <label htmlFor="p-message" className={labelClasses}>
          What are you building? *
        </label>
        <textarea id="p-message" rows={5} className={`${inputClasses} resize-none`} placeholder="The problem, your insight, and where you are today..." value={form.message} onChange={(e) => set("message", e.target.value)} />
        {errors.message && <p className="text-coral text-sm mt-1">{errors.message}</p>}
      </div>

      {status === "error" && <p className="text-coral text-sm">Something went wrong. Please try again.</p>}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2 bg-navy text-white px-8 py-3.5 rounded-lg font-semibold transition-all duration-300 hover:bg-navy-deep hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(46,62,111,0.25)] disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2"
      >
        <Send className="w-4 h-4" />
        {status === "submitting" ? "Sending..." : "Submit pitch"}
      </button>
    </form>
  );
}
