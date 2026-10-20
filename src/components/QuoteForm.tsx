
"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";

export default function QuoteForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const organisation = String(
      formData.get("organisation") || ""
    ).trim();
    const service = String(formData.get("service") || "").trim();
    const requirements = String(
      formData.get("requirements") || ""
    ).trim();

    if (!name || !phone || !service || !requirements) {
      setStatus("Please fill in all required fields.");
      return;
    }

    const message = [
      "Hello Lakshmi Durga Solutions!",
      "",
      "I would like to request a quote.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email || "Not provided"}`,
      `Business / Organisation: ${organisation || "Not provided"}`,
      `Service Required: ${service}`,
      `Requirements: ${requirements}`,
    ].join("\n");

    const whatsappUrl =
      "https://wa.me/919393452444?text=" +
      encodeURIComponent(message);

    const newWindow = window.open(
      whatsappUrl,
      "_blank",
      "noopener,noreferrer"
    );

    if (!newWindow) {
      setStatus(
        "WhatsApp window was blocked. Please allow pop-ups and try again."
      );
      return;
    }

    setStatus(
      "WhatsApp opened. Please review your enquiry and press Send."
    );
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Full Name */}
      <div>
        <label
          htmlFor="name"
          className="text-sm font-semibold text-slate-700"
        >
          Full Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Enter your full name"
          className={inputClass}
          required
        />
      </div>

      {/* Phone and Email */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="phone"
            className="text-sm font-semibold text-slate-700"
          >
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Enter phone number"
            className={inputClass}
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="text-sm font-semibold text-slate-700"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>

      {/* Organisation */}
      <div>
        <label
          htmlFor="organisation"
          className="text-sm font-semibold text-slate-700"
        >
          Business / Organisation
        </label>
        <input
          id="organisation"
          name="organisation"
          type="text"
          placeholder="Enter business or organisation name"
          className={inputClass}
        />
      </div>

      {/* Service */}
      <div>
        <label
          htmlFor="service"
          className="text-sm font-semibold text-slate-700"
        >
          Service Required *
        </label>
        <select
          id="service"
          name="service"
          defaultValue=""
          className={inputClass}
          required
        >
          <option value="" disabled>
            Select a service
          </option>
          <option value="Virtual Computer Operator">
            Virtual Computer Operator
          </option>
          <option value="Data Entry & Typing">
            Data Entry & Typing
          </option>
          <option value="DTP & Graphic Design">
            DTP & Graphic Design
          </option>
          <option value="MIS & Reports">MIS & Reports</option>
          <option value="Presentations & Projects">
            Presentations & Projects
          </option>
          <option value="Software Development">
            Software Development
          </option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="Other / Multiple Services">
            Other / Multiple Services
          </option>
        </select>
      </div>

      {/* Requirements */}
      <div>
        <label
          htmlFor="requirements"
          className="text-sm font-semibold text-slate-700"
        >
          Describe Your Requirements *
        </label>
        <textarea
          id="requirements"
          name="requirements"
          rows={4}
          placeholder="Explain what work you need and your expected timeline..."
          className={inputClass}
          required
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 font-semibold text-white transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
      >
        <MessageCircle size={20} />
        Send Enquiry on WhatsApp
      </button>

      {/* Status */}
      {status && (
        <p
          role="status"
          aria-live="polite"
          className="rounded-lg bg-blue-50 p-3 text-sm leading-6 text-blue-800"
        >
          {status}
        </p>
      )}

      <p className="text-xs leading-5 text-slate-500">
        Your enquiry will be prepared in WhatsApp. Please review the
        details and press Send to submit it.
      </p>
    </form>
  );
}
