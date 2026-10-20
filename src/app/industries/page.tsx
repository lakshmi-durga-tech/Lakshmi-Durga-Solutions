
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
  Stethoscope,
  Building2,
  Store,
  Laptop,
  Landmark,
  ClipboardCheck,
  FileText,
  Palette,
  BarChart3,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Printer,
} from "lucide-react";

import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Industries We Serve | Lakshmi Durga Solutions",
  description:
    "Explore virtual computer operator, DTP, graphic design, data entry, MIS reporting and digital support for educational institutions, healthcare, corporate offices, advertising agencies, print media and businesses.",
  alternates: {
    canonical: "/industries/",
  },
  openGraph: {
    title: "Industries We Serve | Lakshmi Durga Solutions",
    description:
      "Professional computer, documentation, graphic design, DTP and digital support for institutions, advertising agencies, print media and businesses.",
    url: "https://lakshmidurgasolutions.com/industries/",
    siteName: "Lakshmi Durga Solutions",
    locale: "en_IN",
    type: "website",
    images: ["/images/LDS-Logo.jpg"],
  },
};

const industries = [
  {
    number: "01",
    title: "Schools & Colleges",
    description:
      "Administrative and documentation support to help educational institutions organise routine academic and office work.",
    icon: GraduationCap,
    services: [
      "Document typing and formatting",
      "Data entry and record organisation",
      "Presentations and DTP support",
      "Reports and spreadsheet preparation",
    ],
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=85",
    alt: "University campus representing educational institutions",
  },
  {
    number: "02",
    title: "Healthcare & Clinics",
    description:
      "Computer-based administrative assistance for healthcare offices, clinics and related service organisations.",
    icon: Stethoscope,
    services: [
      "Administrative data entry",
      "Document formatting",
      "Spreadsheet maintenance",
      "Digital document organisation",
    ],
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1000&q=85",
    alt: "Modern healthcare facility",
  },
  {
    number: "03",
    title: "Corporate Offices",
    description:
      "Flexible digital and office support for teams that need help managing recurring computer-based tasks.",
    icon: Building2,
    services: [
      "Virtual computer operator support",
      "MIS and spreadsheet reports",
      "Business document preparation",
      "Presentation formatting",
    ],
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85",
    alt: "Modern corporate office workspace",
  },
  {
    number: "04",
    title: "Small Businesses & Retail",
    description:
      "Practical design and digital assistance for local businesses looking to present their services professionally.",
    icon: Store,
    services: [
      "Promotional graphic design",
      "Business documents and DTP",
      "Product and service information formatting",
      "Basic data organisation",
    ],
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=85",
    alt: "Retail store interior",
  },
  {
    number: "05",
    title: "Coaching & Training Centres",
    description:
      "Documentation and digital support for coaching centres, training providers and skill development organisations.",
    icon: Landmark,
    services: [
      "Study material formatting",
      "DTP and typing services",
      "Training presentations",
      "Student record data entry",
    ],
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=85",
    alt: "Training room with participants",
  },
  {
    number: "06",
    title: "Startups & Entrepreneurs",
    description:
      "Flexible operational and creative assistance for new ventures and entrepreneurs managing multiple responsibilities.",
    icon: Laptop,
    services: [
      "Business documentation",
      "Presentation design support",
      "Data and spreadsheet organisation",
      "Digital content preparation",
    ],
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85",
    alt: "Entrepreneurs collaborating on business work",
  },
  {
    number: "07",
    title: "Advertising Agencies",
    description:
      "Creative and production-support assistance for advertising agencies handling promotional campaigns, client designs and marketing materials.",
    icon: Palette,
    services: [
      "Graphic design and promotional creatives",
      "DTP and artwork formatting",
      "Brochure, flyer and catalogue layouts",
      "Presentation and client proposal design",
    ],
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1000&q=85",
    alt: "Creative design workspace with advertising and branding materials",
  },
  {
    number: "08",
    title: "Print Media & Publishing",
    description:
      "Document preparation, page layout and design assistance for print media businesses, publishers and print-production teams.",
    icon: Printer,
    services: [
      "DTP and page layout preparation",
      "Document typing and formatting",
      "Magazine, booklet and catalogue layouts",
      "Print-ready artwork and file preparation",
    ],
    image:
      "https://images.unsplash.com/photo-1504270997636-07ddfbd48945?auto=format&fit=crop&w=1000&q=85",
    alt: "Printed publications and editorial materials",
  },
];

const supportServices = [
  {
    title: "Virtual Computer Operations",
    description:
      "Remote assistance for routine computer-based operational tasks.",
    icon: Laptop,
  },
  {
    title: "DTP & Documentation",
    description:
      "Typing, formatting, document preparation and presentation support.",
    icon: FileText,
  },
  {
    title: "Graphic Design",
    description:
      "Creative visual materials for business communication and promotion.",
    icon: Palette,
  },
  {
    title: "Data Entry & MIS",
    description:
      "Structured data entry, spreadsheet organisation and reporting support.",
    icon: BarChart3,
  },
];

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      width="25"
      height="25"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.02 3C8.85 3 3.02 8.76 3.02 15.85c0 2.28.61 4.5 1.77 6.45L3 29l6.93-1.8a13.1 13.1 0 0 0 6.08 1.5h.01c7.16 0 13-5.77 13-12.86 0-3.43-1.35-6.66-3.8-9.1A12.96 12.96 0 0 0 16.02 3Zm0 23.53h-.01c-1.91 0-3.79-.51-5.43-1.48l-.39-.23-4.11 1.07 1.1-4-.26-.4a10.6 10.6 0 0 1-1.65-5.64c0-5.85 4.82-10.61 10.76-10.61 2.88 0 5.58 1.11 7.62 3.14a10.45 10.45 0 0 1 3.15 7.47c0 5.86-4.83 10.62-10.78 10.62Zm5.9-7.95c-.32-.16-1.91-.93-2.21-1.04-.3-.11-.51-.16-.72.16-.21.32-.83 1.04-1.02 1.25-.19.21-.38.24-.7.08-.32-.16-1.35-.49-2.57-1.55-.95-.82-1.59-1.83-1.78-2.14-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.99-2.37-.26-.62-.52-.53-.72-.54l-.61-.01c-.21 0-.56.08-.85.4-.3.32-1.12 1.09-1.12 2.66s1.15 3.08 1.31 3.29c.16.21 2.26 3.42 5.48 4.8.77.33 1.37.52 1.84.66.77.24 1.47.21 2.02.13.62-.09 1.91-.77 2.18-1.52.27-.74.27-1.38.19-1.52-.08-.13-.3-.21-.62-.37Z" />
    </svg>
  );
}

export default function IndustriesPage() {
  return (
    <>
      <Header />

      <main className="overflow-hidden bg-white text-slate-800">
        {/* HERO */}
        <section className="relative isolate border-b border-slate-200 bg-[#f4f8fc]">
          <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-80 w-80 rounded-full bg-blue-100/70 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 left-0 -z-10 h-64 w-64 rounded-full bg-sky-100/60 blur-3xl" />

          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
            <div className="animate-hero">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0878e8] shadow-sm">
                <Building2 size={16} />
                Industries We Serve
              </span>

              <h1 className="mt-6 max-w-2xl text-4xl font-black leading-[1.12] tracking-tight text-[#082a4a] sm:text-5xl lg:text-[60px]">
                Digital Support
                <span className="mt-1 block text-[#0878e8]">
                  for Every Workday.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Every industry has different operational needs. Lakshmi
                Durga Solutions provides practical computer, documentation,
                design and digital support to help institutions and
                businesses manage everyday work more efficiently.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/contact-us/"
                  className="modern-button inline-flex items-center gap-2 rounded-xl bg-[#0878e8] px-6 py-3.5 font-bold text-white shadow-lg shadow-blue-900/15 transition hover:-translate-y-0.5 hover:bg-[#0668ca]"
                >
                  Discuss Your Needs <ArrowRight size={18} />
                </a>

                <a
                  href="/services/"
                  className="modern-button inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-bold text-[#082a4a] transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50"
                >
                  View Services <ArrowUpRight size={18} />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-600">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#0878e8]" />
                  Flexible Support
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#0878e8]" />
                  Practical Solutions
                </span>
              </div>
            </div>

            <Reveal className="relative mx-auto w-full max-w-xl">
              <div className="relative pb-7">
                <div className="absolute -right-3 -top-3 h-28 w-28 rounded-full bg-blue-200/60 blur-2xl" />

                <div className="relative overflow-hidden rounded-[32px] rounded-bl-[90px] border-[7px] border-white bg-white shadow-[0_30px_80px_rgba(8,42,74,0.16)]">
                  <img
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
                    alt="Professionals collaborating in a workplace"
                    fetchPriority="high"
                    className="h-[300px] w-full object-cover sm:h-[410px]"
                  />
                </div>

                <div className="absolute -bottom-1 left-3 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:left-7 sm:p-5">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-[#0878e8]">
                    <ShieldCheck size={24} />
                  </span>
                  <div>
                    <p className="font-extrabold text-[#082a4a]">
                      Support That Fits
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Built around your work
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="modern-section px-5 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                <div>
                  <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0878e8]">
                    <span className="h-1.5 w-6 rounded-full bg-[#0878e8]" />
                    Who We Support
                  </p>
                  <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight tracking-tight text-[#082a4a] sm:text-4xl lg:text-[42px]">
                    Solutions for different working environments
                  </h2>
                </div>

                <p className="max-w-md text-base leading-7 text-slate-600">
                  Explore the organisations that can benefit from our
                  computer, documentation, design and digital support.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {industries.map(
                (
                  {
                    number,
                    title,
                    description,
                    icon: Icon,
                    services,
                    image,
                    alt,
                  },
                  index,
                ) => (
                  <Reveal key={title} className="h-full">
                    <article
                      className="group h-full overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_22px_55px_rgba(8,42,74,0.10)]"
                      style={{ transitionDelay: `${index * 40}ms` }}
                    >
                      <div className="relative h-52 overflow-hidden bg-slate-100">
                        <img
                          src={image}
                          alt={alt}
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#082a4a]/70 via-transparent to-transparent" />

                        <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/90 px-3 py-1.5 text-xs font-bold text-[#082a4a] backdrop-blur">
                          INDUSTRY {number}
                        </span>

                        <span className="absolute bottom-4 left-4 grid h-12 w-12 place-items-center rounded-xl bg-white text-[#0878e8] shadow-lg">
                          <Icon size={24} />
                        </span>
                      </div>

                      <div className="p-6 sm:p-7">
                        <h3 className="text-xl font-extrabold text-[#082a4a]">
                          {title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          {description}
                        </p>

                        <div className="mt-5 border-t border-slate-100 pt-5">
                          <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#0878e8]">
                            Relevant Support
                          </p>

                          <ul className="mt-4 space-y-3">
                            {services.map((service) => (
                              <li
                                key={service}
                                className="flex items-start gap-2.5 text-sm leading-6 text-slate-600"
                              >
                                <CheckCircle2
                                  size={17}
                                  className="mt-0.5 shrink-0 text-[#0878e8]"
                                />
                                {service}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <a
                          href="/contact-us/"
                          className="mt-6 inline-flex items-center gap-2 font-bold text-[#0878e8] transition-all hover:gap-3"
                        >
                          Discuss Your Requirements
                          <ArrowRight size={17} />
                        </a>
                      </div>
                    </article>
                  </Reveal>
                ),
              )}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="border-y border-slate-200 bg-[#f4f8fc] px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0878e8]">
                  <Sparkles size={15} />
                  Our Capabilities
                </span>

                <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#082a4a] sm:text-4xl">
                  Essential services. Practical support.
                </h2>

                <p className="mt-4 text-base leading-8 text-slate-600">
                  Our services can be discussed and tailored according
                  to your organisation&apos;s requirements and workflow.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {supportServices.map(({ title, description, icon: Icon }) => (
                <Reveal key={title} className="h-full">
                  <article className="group h-full rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl sm:p-7">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-[#0878e8] transition group-hover:bg-[#0878e8] group-hover:text-white">
                      <Icon size={25} />
                    </span>

                    <h3 className="mt-5 text-lg font-extrabold text-[#082a4a]">
                      {title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {description}
                    </p>

                    <a
                      href="/services/"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0878e8] transition-all hover:gap-3"
                    >
                      Learn More <ArrowRight size={16} />
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* HOW WE WORK */}
        <section className="modern-section px-5 sm:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-[#082a4a] text-white">
                <ClipboardCheck size={29} />
              </span>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#0878e8]">
                How We Work
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight text-[#082a4a] sm:text-4xl">
                Understand the task. Deliver with care.
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                We begin by understanding your requirements, the type
                of work involved and the expected deliverables. This
                helps us discuss a suitable scope and working approach
                before the assignment begins.
              </p>

              <a
                href="/contact-us/"
                className="mt-7 inline-flex items-center gap-2 font-bold text-[#0878e8] transition-all hover:gap-3"
              >
                Tell Us What You Need <ArrowRight size={18} />
              </a>
            </Reveal>

            <Reveal>
              <div className="space-y-4">
                {[
                  {
                    number: "01",
                    title: "Share your requirements",
                    text: "Tell us about your organisation, task and expected outcome.",
                  },
                  {
                    number: "02",
                    title: "Discuss the scope",
                    text: "Review deliverables, timelines and applicable pricing.",
                  },
                  {
                    number: "03",
                    title: "Work towards delivery",
                    text: "Proceed with the agreed task and communicate on progress as needed.",
                  },
                ].map((step) => (
                  <div
                    key={step.number}
                    className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-blue-200 hover:shadow-md sm:gap-5 sm:p-6"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-blue-50 text-sm font-black text-[#0878e8]">
                      {step.number}
                    </span>

                    <div>
                      <h3 className="font-extrabold text-[#082a4a]">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="px-5 py-16 sm:px-8 lg:py-24">
          <Reveal className="mx-auto max-w-7xl">
            <div className="relative isolate overflow-hidden rounded-[28px] bg-[#082a4a] p-7 text-white sm:p-10 lg:p-14">
              <div className="pointer-events-none absolute -right-20 -top-24 -z-10 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="max-w-3xl">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
                    Let&apos;s Work Together
                  </p>

                  <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                    Looking for dependable digital support?
                  </h2>

                  <p className="mt-5 leading-8 text-blue-100">
                    Tell us about your organisation and the work you
                    need help with. We&apos;ll discuss your requirements
                    and a suitable service approach with you.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 lg:flex-col">
                  <a
                    href="/contact-us/"
                    className="modern-button inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-[#082a4a] transition hover:-translate-y-0.5 hover:bg-blue-50"
                  >
                    Contact Our Team <ArrowRight size={18} />
                  </a>

                  <a
                    href="/pricing/"
                    className="modern-button inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 px-6 py-4 font-bold text-white transition hover:bg-white/10"
                  >
                    View Pricing <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="services-footer">
  <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-2 lg:grid-cols-4">

    {/* BRAND */}
    <div className="lg:col-span-2">
      <Link href="/" className="inline-flex items-center gap-3">
        <img
          src="/images/LDS-Logo.jpg"
          alt="Lakshmi Durga Solutions"
          className="h-14 w-14 rounded-2xl bg-white object-contain p-1"
        />
        <span className="text-lg font-extrabold text-white">
          Lakshmi Durga Solutions
        </span>
      </Link>

      <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
        Your Trusted Computer &amp; Digital Solutions Partner.
        We provide virtual computer operator, data entry, DTP,
        graphic design, MIS reporting and digital support services
        for institutions, offices and businesses.
      </p>

      <Link
        href="/contact-us/"
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#082a4a] transition hover:bg-blue-100"
      >
        Talk to Our Team <ArrowRight size={17} />
      </Link>
    </div>

    {/* COMPANY LINKS */}
    <div>
      <h3 className="font-bold text-white">Company</h3>
      <ul className="mt-5 space-y-3 text-sm text-slate-300">
        <li>
          <Link href="/" className="footer-link">Home</Link>
        </li>
        <li>
          <Link href="/about-us/" className="footer-link">About Us</Link>
        </li>
        <li>
          <Link href="/services/" className="footer-link">Services</Link>
        </li>
        <li>
          <Link href="/blog/" className="footer-link">Blog</Link>
        </li>
        <li>
          <Link href="/pricing/" className="footer-link">Pricing</Link>
        </li>
      </ul>
    </div>

    {/* SUPPORT LINKS */}
    <div>
      <h3 className="font-bold text-white">Help &amp; Policies</h3>
      <ul className="mt-5 space-y-3 text-sm text-slate-300">
        <li>
          <Link href="/contact-us/" className="footer-link">Contact Us</Link>
        </li>
        <li>
          <Link href="/privacy-policy/" className="footer-link">Privacy Policy</Link>
        </li>
        <li>
          <Link href="/terms-and-conditions/" className="footer-link">
            Terms &amp; Conditions
          </Link>
        </li>
        <li>
          <Link href="/refund-cancellation/" className="footer-link">
            Refund &amp; Cancellation
          </Link>
        </li>
      </ul>

      <a
        href="mailto:lakshmidurgasolutions@gmail.com"
        className="footer-link mt-5 block break-words text-sm"
      >
        lakshmidurgasolutions@gmail.com
      </a>

      <a
        href="tel:+919393452444"
        className="footer-link mt-3 block text-sm"
      >
        +91 9393452444
      </a>
    </div>
  </div>

  {/* COPYRIGHT */}
  <div className="border-t border-white/10">
    <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-slate-400 sm:px-8 md:flex-row md:items-center md:justify-between">
      <p>
        © {new Date().getFullYear()} Lakshmi Durga Solutions.
        All rights reserved.
      </p>
      <p>Designed to support your digital growth.</p>
    </div>
  </div>
</footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/919393452444"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Lakshmi Durga Solutions on WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_8px_25px_rgba(37,211,102,0.4)] transition duration-200 hover:-translate-y-1 hover:bg-[#1ebe5d] focus:outline-none focus:ring-4 focus:ring-green-200"
      >
        <WhatsAppIcon />
      </a>
      <ScrollToTop/>
    </>
  );
}