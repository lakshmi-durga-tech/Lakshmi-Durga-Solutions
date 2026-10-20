
"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  LoaderCircle,
  Mail,
} from "lucide-react";

const services = [
  "Virtual Computer Operator",
  "Data Entry & Typing",
  "DTP & Document Formatting",
  "Graphic & Logo Design",
  "MIS Reports & Data Analysis",
  "Presentations & Projects",
  "Software Development",
  "Digital Marketing",
  "Advertising & Media Agency Support",
  "Other / Not Sure Yet",
];

export default function ContactInquiryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [details, setDetails] = useState("");
  const [timeline, setTimeline] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !service || !details.trim()) {
      setError("Please complete all required fields.");
      return;
    }

    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

    if (!emailIsValid) {
      setError("Please enter a valid email address.");
      return;
    }

    const subject = `Website Inquiry - ${service}`;
    const body = [
      "New inquiry for Lakshmi Durga Solutions",
      "",
      `Name: ${name.trim()}`,
      `Email: ${email.trim()}`,
      `Service Required: ${service}`,
      `Preferred Timeline: ${timeline || "Not specified"}`,
      "",
      "Project Details:",
      details.trim(),
    ].join("\n");

    const mailtoUrl =
      `mailto:lakshmidurgasolutions@gmail.com` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  }

  return (
    <div className="contact-form-card">
      <div className="flex flex-col gap-4 border-b border-slate-100 pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#0878e8]">
            <FileText size={14} />
            Project Inquiry
          </div>

          <h3 className="mt-4 text-2xl font-black text-[#082a4a] sm:text-3xl">
            Tell us about your project
          </h3>

          <p className="mt-2 text-sm leading-7 text-slate-500">
            Fields marked with * are required.
          </p>
        </div>

        <div className="hidden h-14 w-14 shrink-0 place-items-center rounded-2xl bg-blue-50 text-[#0878e8] sm:grid">
          <Mail size={26} />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-7 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-name" className="contact-field-label">
              Your name <span>*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              autoComplete="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter your full name"
              className="contact-field"
              required
            />
          </div>

          <div>
            <label htmlFor="contact-email" className="contact-field-label">
              Email address <span>*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              autoComplete="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              className="contact-field"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-service" className="contact-field-label">
            Service required <span>*</span>
          </label>
          <select
            id="contact-service"
            name="service"
            value={service}
            onChange={(event) => setService(event.target.value)}
            className="contact-field"
            required
          >
            <option value="">Select a service</option>
            {services.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="contact-timeline" className="contact-field-label">
            Preferred timeline
          </label>
          <select
            id="contact-timeline"
            name="timeline"
            value={timeline}
            onChange={(event) => setTimeline(event.target.value)}
            className="contact-field"
          >
            <option value="">Choose if known</option>
            <option value="As soon as possible">As soon as possible</option>
            <option value="Within a week">Within a week</option>
            <option value="Within a month">Within a month</option>
            <option value="Recurring support">Recurring support</option>
            <option value="Flexible">Flexible / To be discussed</option>
          </select>
        </div>

        <div>
          <label htmlFor="contact-details" className="contact-field-label">
            Project details <span>*</span>
          </label>
          <textarea
            id="contact-details"
            name="details"
            value={details}
            onChange={(event) => setDetails(event.target.value)}
            placeholder="Tell us what you need, the approximate volume of work and any important requirements..."
            className="contact-field contact-textarea"
            rows={5}
            required
          />
          <p className="mt-2 text-xs leading-5 text-slate-500">
            Please do not include passwords, payment details or other
            confidential information.
          </p>
        </div>

        {error && (
          <p
            role="alert"
            className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
          >
            {error}
          </p>
        )}

        <button type="submit" className="contact-submit-button">
          <span>Prepare Inquiry Email</span>
          <ArrowRight size={18} />
        </button>

        <div className="flex items-start gap-2 text-xs leading-5 text-slate-500">
          <CheckCircle2
            size={16}
            className="mt-0.5 shrink-0 text-[#0878e8]"
          />
          <p>
            Your email application will open with the inquiry details
            pre-filled. Review and send the email to submit your inquiry.
          </p>
        </div>
      </form>
    </div>
  );
}
