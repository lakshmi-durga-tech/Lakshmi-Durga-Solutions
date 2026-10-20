
import type { Metadata } from "next";
import Link from "next/link";
import FounderSection from "@/components/FounderSection";

import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  FileText,
  MonitorCog,
  Palette,
  BarChart3,
  ShieldCheck,
  Users,
  Target,
  Handshake,
  Sparkles,
  Globe2,
  Clock3,
  Building2,
} from "lucide-react";

import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "About Us | Lakshmi Durga Solutions",
  description:
    "Learn about Lakshmi Durga Solutions in Vijayawada. We provide virtual computer operator, DTP, graphic design, data entry, MIS reporting and digital support services.",
  alternates: {
    canonical: "/about-us/",
  },
  openGraph: {
    title: "About Us | Lakshmi Durga Solutions",
    description:
      "Professional computer, documentation, design and digital support for institutions, offices and businesses.",
    url: "https://lakshmidurgasolutions.com/about-us/",
    siteName: "Lakshmi Durga Solutions",
    locale: "en_IN",
    type: "website",
    images: ["/images/LDS-Logo.jpg"],
  },
};

const approach = [
  {
    title: "Professional Delivery",
    description:
      "Clear communication, organised workflows and output suited to business and institutional needs.",
    icon: CheckCircle2,
    number: "01",
  },
  {
    title: "Flexible Support",
    description:
      "Remote-first service that adapts to recurring tasks, urgent requirements and ongoing office work.",
    icon: MonitorCog,
    number: "02",
  },
  {
    title: "Practical Expertise",
    description:
      "Support across data entry, DTP, presentations, design work, MIS reporting and digital tasks.",
    icon: Palette,
    number: "03",
  },
  {
    title: "Trust-Focused Service",
    description:
      "A dependable working style designed to build long-term confidence with every assignment.",
    icon: Handshake,
    number: "04",
  },
];

const capabilities = [
  {
    title: "Virtual Operations",
    description: "Remote computer support and day-to-day task handling.",
    icon: MonitorCog,
  },
  {
    title: "DTP & Documentation",
    description: "Typing, formatting and document preparation services.",
    icon: FileText,
  },
  {
    title: "Design Support",
    description: "Graphic design, logo design and presentation assistance.",
    icon: Palette,
  },
  {
    title: "Reporting & Digital",
    description: "MIS reports, data analysis and digital service support.",
    icon: BarChart3,
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0878e8]">
        <span className="h-1.5 w-6 rounded-full bg-[#0878e8]" />
        {eyebrow}
      </p>

      <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-[#082a4a] sm:text-4xl lg:text-[42px]">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      width="29"
      height="29"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.02 3C8.85 3 3.02 8.76 3.02 15.85c0 2.28.61 4.5 1.77 6.45L3 29l6.93-1.8a13.1 13.1 0 0 0 6.08 1.5h.01c7.16 0 13-5.77 13-12.86 0-3.43-1.35-6.66-3.8-9.1A12.96 12.96 0 0 0 16.02 3Zm0 23.53h-.01c-1.91 0-3.79-.51-5.43-1.48l-.39-.23-4.11 1.07 1.1-4-.26-.4a10.6 10.6 0 0 1-1.65-5.64c0-5.85 4.82-10.61 10.76-10.61 2.88 0 5.58 1.11 7.62 3.14a10.45 10.45 0 0 1 3.15 7.47c0 5.86-4.83 10.62-10.78 10.62Zm5.9-7.95c-.32-.16-1.91-.93-2.21-1.04-.3-.11-.51-.16-.72.16-.21.32-.83 1.04-1.02 1.25-.19.21-.38.24-.7.08-.32-.16-1.35-.49-2.57-1.55-.95-.82-1.59-1.83-1.78-2.14-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.99-2.37-.26-.62-.52-.53-.72-.54l-.61-.01c-.21 0-.56.08-.85.4-.3.32-1.12 1.09-1.12 2.66s1.15 3.08 1.31 3.29c.16.21 2.26 3.42 5.48 4.8.77.33 1.37.52 1.84.66.77.24 1.47.21 2.02.13.62-.09 1.91-.77 2.18-1.52.27-.74.27-1.38.19-1.52-.08-.13-.3-.21-.62-.37Z" />
    </svg>
  );
}

export default function AboutUsPage() {
  return (
    <>
      <Header />

      <main className="overflow-hidden bg-white text-slate-800">
        {/* HERO */}
        <section className="relative isolate border-b border-slate-200 bg-[#f4f8fc]">
          <div className="pointer-events-none absolute -right-28 -top-28 -z-10 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 left-0 -z-10 h-64 w-64 rounded-full bg-sky-100/50 blur-3xl" />

          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-24">
            <div className="animate-hero">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.17em] text-[#0878e8] shadow-sm">
                <ShieldCheck size={16} />
                About Lakshmi Durga Solutions
              </span>

              <h1 className="mt-6 max-w-2xl text-4xl font-black leading-[1.12] tracking-tight text-[#082a4a] sm:text-5xl lg:text-[62px]">
                Reliable Support.
                <span className="mt-1 block text-[#0878e8]">
                  Meaningful Solutions.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Lakshmi Durga Solutions is a professional IT-enabled
                services company in Vijayawada, delivering dependable
                virtual computer operator, DTP, graphic designing, data
                entry, design and digital support services for schools,
                colleges, coaching centers, institutions and businesses.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/contact-us/"
                  className="modern-button inline-flex items-center gap-2 rounded-xl bg-[#0878e8] px-6 py-3.5 font-bold text-white shadow-lg shadow-blue-900/15 transition hover:-translate-y-0.5 hover:bg-[#0668ca]"
                >
                  Discuss Your Requirements
                  <ArrowRight size={18} />
                </a>

                <a
                  href="/services/"
                  className="modern-button inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-bold text-[#082a4a] transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50"
                >
                  Explore Services
                  <ArrowUpRight size={18} />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-600">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#0878e8]" />
                  Flexible Remote Support
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={18} className="text-[#0878e8]" />
                  Professional Delivery
                </span>
              </div>
            </div>

            <Reveal className="relative mx-auto w-full max-w-xl">
              <div className="relative px-2 pb-8 sm:px-5">
                <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-blue-200/60 blur-2xl" />

                <div className="relative overflow-hidden rounded-[36px] rounded-bl-[100px] border-[7px] border-white bg-white shadow-[0_30px_80px_rgba(8,42,74,0.16)]">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
                    alt="Professional team discussing digital services in an office"
                    fetchPriority="high"
                    className="h-[300px] w-full object-cover sm:h-[390px]"
                  />

                  <div className="grid gap-4 bg-white p-5 sm:grid-cols-2 sm:p-6">
                    <div className="flex items-center gap-3">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-[#0878e8]">
                        <Users size={23} />
                      </span>
                      <div>
                        <p className="font-bold text-[#082a4a]">
                          People-Focused
                        </p>
                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          Support for everyday work
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-[#0878e8]">
                        <Sparkles size={23} />
                      </span>
                      <div>
                        <p className="font-bold text-[#082a4a]">
                          Practical Solutions
                        </p>
                        <p className="mt-1 text-xs leading-5 text-slate-500">
                          Built around your workflow
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-1 left-0 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:left-0 sm:p-5">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#082a4a] text-white">
                    <Building2 size={23} />
                  </span>
                  <div>
                    <p className="text-sm font-extrabold text-[#082a4a]">
                      Business & Institution Support
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      Digital work made manageable
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* WHO WE ARE */}
        <section className="modern-section px-5 sm:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <div className="relative mx-auto max-w-lg">
                <div className="absolute -left-4 -top-4 h-24 w-24 rounded-tl-[32px] border-l-4 border-t-4 border-[#0878e8]" />

                <div className="relative grid grid-cols-2 items-start gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80"
                    alt="Modern professional workspace"
                    loading="lazy"
                    className="h-52 w-full rounded-2xl object-cover shadow-lg sm:h-64"
                  />

                  <img
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80"
                    alt="Colleagues collaborating in an office"
                    loading="lazy"
                    className="mt-10 h-52 w-full rounded-2xl object-cover shadow-lg sm:h-64"
                  />

                  <div className="col-span-2 rounded-2xl border border-blue-100 bg-[#f4f8fc] p-5 sm:p-6">
                    <div className="flex items-start gap-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-[#0878e8] shadow-sm">
                        <Target size={23} />
                      </span>
                      <div>
                        <p className="font-extrabold leading-7 text-[#082a4a]">
                          Making everyday digital work simpler and more
                          manageable.
                        </p>
                        <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                          The Lakshmi Durga Solutions approach
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <SectionHeading
                eyebrow="Who We Are"
                title="Built around your everyday business needs"
                description="We provide practical computer-based services that help organisations keep their everyday operations organised, productive and responsive."
              />

              <p className="mt-5 text-base leading-8 text-slate-600">
                We support schools, colleges, coaching institutes,
                hospitals, offices and growing businesses with services
                tailored to their working requirements.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-600">
                From typing and DTP work to reports, presentations,
                graphic design and remote office support, our focus is
                on consistent execution, professional communication and
                dependable service for Indian and international
                organisations.
              </p>

              <div className="mt-7 space-y-4">
                {[
                  "Support for varied operational requirements",
                  "A practical approach to recurring digital tasks",
                  "Focus on clear communication and quality delivery",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="mt-1 shrink-0 text-[#0878e8]"
                    />
                    <p className="font-medium leading-7 text-slate-700">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href="/contact-us/"
                className="mt-8 inline-flex items-center gap-2 font-bold text-[#0878e8] transition-all hover:gap-3"
              >
                Talk to Our Team <ArrowRight size={18} />
              </a>
            </Reveal>
          </div>
        </section>

        {/* OUR APPROACH */}
        <section className="border-y border-slate-200 bg-[#f4f8fc] px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
                <SectionHeading
                  eyebrow="Our Approach"
                  title="What clients can expect from us"
                  description="A service-oriented approach focused on dependable work, flexible support and long-term professional relationships."
                />
                <p className="max-w-xs pb-1 text-sm leading-7 text-slate-500">
                  Every assignment is an opportunity to make work easier
                  for the people and organisations we support.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {approach.map(
                ({ title, description, icon: Icon, number }, index) => (
                  <Reveal key={title} className="h-full">
                    <article
                      className="modern-panel group relative h-full overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl sm:p-7"
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <span className="absolute right-5 top-4 text-4xl font-black text-slate-100 transition group-hover:text-blue-50">
                        {number}
                      </span>

                      <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-blue-50 text-[#0878e8] transition group-hover:bg-[#0878e8] group-hover:text-white">
                        <Icon size={25} />
                      </span>

                      <h3 className="mt-6 text-lg font-extrabold text-[#082a4a]">
                        {title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {description}
                      </p>

                      <div className="mt-6 h-1 w-10 rounded-full bg-[#0878e8] transition-all group-hover:w-16" />
                    </article>
                  </Reveal>
                ),
              )}
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="modern-section px-5 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeading
                eyebrow="Our Capabilities"
                title="Practical support across everyday business needs"
                description="Our services bring together computer operations, documentation, design, reporting and digital assistance to help clients manage everyday work more efficiently."
              />
            </Reveal>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {capabilities.map(({ title, description, icon: Icon }) => (
                <Reveal key={title} className="h-full">
                  <article className="modern-panel group h-full rounded-2xl border border-slate-100 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl sm:p-7">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#082a4a] text-white transition duration-300 group-hover:bg-[#0878e8]">
                      <Icon size={25} />
                    </span>

                    <h3 className="mt-6 text-lg font-extrabold text-[#082a4a]">
                      {title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {description}
                    </p>

                    <a
                      href="/services/"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0878e8] transition-all hover:gap-3"
                    >
                      Explore Services <ArrowRight size={16} />
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* MISSION */}
        <section className="relative isolate overflow-hidden border-y border-slate-200 bg-[#f4f8fc] px-5 py-16 sm:px-8 lg:py-24">
          <div className="pointer-events-none absolute -right-20 top-0 -z-10 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl" />

          <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <Reveal>
              <span className="grid h-16 w-16 place-items-center rounded-2xl bg-[#0878e8] text-white shadow-lg shadow-blue-900/15">
                <Target size={29} />
              </span>

              <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#0878e8]">
                Our Mission
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight text-[#082a4a] sm:text-4xl lg:text-5xl">
                Supporting work that matters.
              </h2>

              <p className="mt-5 max-w-md text-base leading-8 text-slate-600">
                We aim to make essential digital and administrative work
                more manageable through dependable, practical support.
              </p>
            </Reveal>

            <Reveal>
              <div className="rounded-3xl border border-white bg-white p-6 shadow-[0_15px_50px_rgba(8,42,74,0.06)] sm:p-9">
                <p className="text-base leading-8 text-slate-700">
                  Our mission is to provide dependable computer and
                  digital support services that help schools, colleges,
                  coaching centers, institutions and businesses focus on
                  their core responsibilities while we handle essential
                  operational tasks with care and professionalism.
                </p>

                <p className="mt-5 text-base leading-8 text-slate-600">
                  We understand that many organisations need accurate,
                  timely and flexible support without the complexity of
                  building large in-house teams for every digital task.
                  That is why we offer practical services that fit real
                  working environments in education, healthcare,
                  administration and business.
                </p>

                <div className="mt-7 flex items-start gap-4 rounded-2xl border-l-4 border-[#0878e8] bg-[#f4f8fc] p-5">
                  <Sparkles
                    size={22}
                    className="mt-1 shrink-0 text-[#0878e8]"
                  />
                  <p className="font-semibold leading-7 text-[#082a4a]">
                    As Lakshmi Durga Solutions grows, we remain focused
                    on trust, service quality and long-term client
                    relationships built through consistent work and
                    professional standards.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <FounderSection servicesHref="/virtual-operator/" />

        {/* CTA */}
        <section className="px-5 py-16 sm:px-8 lg:py-24">
          <Reveal className="mx-auto max-w-7xl">
            <div className="relative isolate overflow-hidden rounded-[28px] bg-[#082a4a] p-7 text-white sm:p-10 lg:p-14">
              <div className="pointer-events-none absolute -right-20 -top-24 -z-10 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-28 right-1/3 -z-10 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl" />

              <div className="grid gap-9 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="max-w-3xl">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-100">
                    <Clock3 size={15} />
                    Let&apos;s Work Together
                  </span>

                  <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                    Let&apos;s make your daily work easier.
                  </h2>

                  <p className="mt-5 max-w-2xl leading-8 text-blue-100">
                    Talk to Lakshmi Durga Solutions about virtual
                    computer operator services, DTP work, graphic
                    designing, data entry, reporting, design support and
                    virtual office assistance tailored to your
                    organisation.
                  </p>

                  <p className="mt-4 text-sm font-medium text-blue-200">
                    Professional support plans available, with pricing
                    starting from ₹7,000/month.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 lg:flex-col">
                  <a
                    href="/contact-us/"
                    className="modern-button inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 font-bold text-[#082a4a] transition hover:-translate-y-0.5 hover:bg-blue-50"
                  >
                    Get a Quote <ArrowRight size={18} />
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