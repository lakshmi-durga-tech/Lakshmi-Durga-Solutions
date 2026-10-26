
"use client";

import { useRef, useState } from "react";
import {
  Mail,
  MessageCircle,
  Phone,
  Send,
  Building2,
  UserRound,
  FileText,
  CheckCircle2,
  ArrowRight,
  MapPin,
} from "lucide-react";

type ContactType = "individual" | "organisation" | "institution";

const EMAIL = "lakshmidurgasolutions@gmail.com";
const PHONE = "9393452444";
const WHATSAPP = "919393452444";

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUqCAgBEEUYJxg7MgYIABBFGDkyCAgBEEUYJxg7MhMIAhAuGIsDGJ0DGKgDGLEDGIAEMgoIAxAAGIsDGIAEMgcIBBAuGIAEMhMIBRAAGIMBGIsDGLEDGIAEGIoFMgoIBhAAGIsDGIAEMgoIBxAAGIsDGIAEMgoICBAAGIsDGIAEMgcICRAAGI8C0gEJMjQyNGoxajE1qAIIsAIB8QUTFWh9qtnRTfEFExVofarZ0U0&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KT87Brpt-zU6MZGRyG3LTu6o&daddr=Bldg+1,+29,+Venkataratnam+St,+Governor+Peta,+Vijayawada,+Andhra+Pradesh+520002";

const serviceOptions = [
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

const headings: Record<ContactType, string> = {
  individual: "Individual Inquiry",
  organisation: "Organisation / Office Inquiry",
  institution: "School / College / Institution/ Coaching Centre etc... Inquiry",
};

export default function ContactInquiryForm({
  type,
}: {
  type: ContactType;
}) {
  const formRef = useRef<HTMLFormElement>(null);

  const [name, setName] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [details, setDetails] = useState("");
  const [phone, setPhone]=useState("");

  const needsOrganisation = type !== "individual";

  function getMessage() {
    return [
      "New Inquiry — Lakshmi Durga Solutions",
      "",
      `Category: ${headings[type]}`,
      `Name: ${name.trim()}`,
      ...(needsOrganisation
        ? [
            `${
              type === "institution" ? "Institution" : "Organisation"
            }: ${organisation.trim()}`,
          ]
        : []),
      `Contact number: ${phone.trim()}`,
      `Email: ${email.trim()}`,
      `Service: ${service || "Not selected"}`,
      `Required Service Details: ${details.trim()}`,
    ].join("\n");
  }

  function validateForm() {
    if (!formRef.current) return false;
    return formRef.current.reportValidity();
  }

  function sendEmail() {
    if (!validateForm()) return;

    const subject = encodeURIComponent(
      `Website Inquiry - ${headings[type]}`
    );
    const body = encodeURIComponent(getMessage());

    window.location.href =
      `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  function sendWhatsApp() {
    if (!validateForm()) return;

    const message = encodeURIComponent(getMessage());
    const url = `https://wa.me/${WHATSAPP}?text=${message}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100";

  const labelClass = "text-sm font-semibold text-slate-700";

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
          {/* Left information panel */}
          <aside className="relative overflow-hidden bg-[#082a4a] p-7 text-white sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full border border-white/10" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-semibold tracking-wide text-blue-100">
                <MessageCircle size={15} />
                LET&apos;S CONNECT
              </div>

              <h1 className="mt-7 text-3xl font-bold leading-tight sm:text-4xl">
                Let&apos;s discuss your requirements.
              </h1>

              <p className="mt-4 text-sm leading-7 text-blue-100/85">
                Tell us what you need. Our team will review your inquiry
                and help you identify the right service for your needs.
              </p>

              <div className="mt-9 space-y-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Clear communication</p>
                    <p className="mt-1 text-sm leading-6 text-blue-100/75">
                      Share your requirements directly with our team.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <FileText size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Multiple services</p>
                    <p className="mt-1 text-sm leading-6 text-blue-100/75">
                      From document work to software and business support.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Choose how to contact us</p>
                    <p className="mt-1 text-sm leading-6 text-blue-100/75">
                      Continue using your email app or WhatsApp.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact details */}
              <div className="mt-10 border-t border-white/15 pt-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-200">
                  Contact details
                </p>

                <a
                  href={`mailto:${EMAIL}`}
                  className="mt-4 flex items-center gap-3 break-all text-sm text-white transition hover:text-blue-200"
                >
                  <Mail size={17} className="shrink-0" />
                  {EMAIL}
                </a>

                <a
                  href={`tel:+91${PHONE}`}
                  className="mt-4 flex items-center gap-3 text-sm text-white transition hover:text-blue-200"
                >
                  <Phone size={17} className="shrink-0" />
                  +91 {PHONE}
                </a>
              </div>

              {/* Google Maps location */}
              <div className="mt-7">
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-200">
                  Find our location
                </p>

                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-3.5 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/20"
                >
                  <MapPin size={20} className="shrink-0" />
                  <span className="flex-1">
                    Visit Our Location
                    <span className="mt-1 block text-xs font-normal text-blue-100/75">
                      Open in Google Maps
                    </span>
                  </span>
                  <ArrowRight size={17} className="shrink-0" />
                </a>
              </div>
            </div>
          </aside>

          {/* Inquiry form */}
          <section className="p-6 sm:p-10 lg:p-12">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                {type === "individual" ? (
                  <UserRound size={23} />
                ) : (
                  <Building2 size={23} />
                )}
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
                  CONTACT FORM
                </p>
                <h2 className="mt-1 text-xl font-bold text-[#082a4a] sm:text-2xl">
                  {headings[type]}
                </h2>
              </div>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              Fill in the details below so we can understand your
              requirements. Fields marked * are required.
            </p>

            <form
              ref={formRef}
              className="mt-8 space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                sendEmail();
              }}
            >
              <div>
                <label htmlFor="name" className={labelClass}>
                  Full name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  minLength={2}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                  placeholder="Enter your full name"
                />
              </div>
              <div>
  <label htmlFor="phone" className={labelClass}>
    Contact number <span className="text-red-500">*</span>
  </label>

  <input
    id="phone"
    name="phone"
    type="tel"
    inputMode="numeric"
    autoComplete="tel"
    required
    minLength={10}
    maxLength={10}
    pattern="[6-9][0-9]{9}"
    value={phone}
    onChange={(e) =>
      setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
    }
    className={inputClass}
    placeholder="Enter 10-digit mobile number"
  />

  <p className="mt-2 text-xs text-slate-400">
    Enter a valid 10-digit Indian mobile number.
  </p>
</div>

              {needsOrganisation && (
                <div>
                  <label htmlFor="organisation" className={labelClass}>
                    {type === "institution"
                      ? "School / College / Institution name"
                      : "Organisation / Office name"}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="organisation"
                    name="organisation"
                    autoComplete="organization"
                    required
                    value={organisation}
                    onChange={(e) => setOrganisation(e.target.value)}
                    className={inputClass}
                    placeholder="Enter organisation name"
                  />
                </div>
              )}

              <div>
                <label htmlFor="email" className={labelClass}>
                  Email address <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className={labelClass}>
                  Service required
                </label>
                <select
                  id="service"
                  name="service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className={inputClass}
                >
                  <option value="">Select a service (optional)</option>
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="details" className={labelClass}>
                  Requirement details{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="details"
                  name="details"
                  required
                  minLength={10}
                  rows={5}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className={`${inputClass} resize-y`}
                  placeholder="Describe your requirements, expected work, and any important details..."
                />
                <p className="mt-2 text-xs text-slate-400">
                  Please enter at least 10 characters.
                </p>
              </div>

              <div className="space-y-3 border-t border-slate-100 pt-6">
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0878e8] px-5 py-4 text-sm font-bold text-white shadow-lg shadow-blue-900/10 transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
                >
                  <Mail size={19} />
                  Continue with Email
                  <ArrowRight size={17} className="ml-auto" />
                </button>

                <button
                  type="button"
                  onClick={sendWhatsApp}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-4 text-sm font-bold text-white transition hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-100"
                >
                  <MessageCircle size={20} />
                  Continue with WhatsApp
                  <Send size={16} className="ml-auto" />
                </button>

                <a
                  href={`tel:+91${PHONE}`}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-semibold text-[#082a4a] transition hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-100"
                >
                  <Phone size={18} />
                  Call Us: +91 {PHONE}
                </a>
              </div>
            </form>

            <p className="mt-5 text-center text-xs leading-5 text-slate-400">
              Your email or WhatsApp app will open with your inquiry
              prepared. You must send the message from that app.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
