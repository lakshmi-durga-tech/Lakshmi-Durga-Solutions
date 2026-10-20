
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  ArrowRight,
  Check,
  Clock3,
  FileText,
  MonitorCog,
  Palette,
  Presentation,
  BarChart3,
  Code2,
  ShieldCheck,
  MessageCircle,
  Phone,
  Mail,
  Sparkles,
  BriefcaseBusiness,
} from "lucide-react";

import Header from "@/components/Header";
import QuoteForm from "@/components/QuoteForm";
import ScrollToTop from "@/components/ScrollToTop";




const services = [
  {
    title: "Virtual Computer Operator",
    description:
      "Professional computer support for schools, colleges, coaching centers, institutions, offices, and businesses through flexible remote assistance.",
    icon: MonitorCog,
  },
  {
    title: "Data Entry & Typing",
    description:
      "Accurate data entry, document typing, and routine office work support to help keep your daily operations organised.",
    icon: FileText,
  },
  {
    title: "DTP & Design",
    description:
      "DTP works, graphic design, logo design, and polished visual materials for business, education, and professional use.",
    icon: Palette,
  },
  {
    title: "MIS & Reports",
    description:
      "Data analysis, MIS reports, and structured reporting support to help your organisation manage information effectively.",
    icon: BarChart3,
  },
  {
    title: "Presentations & Projects",
    description:
      "Professional PowerPoint presentations and computer-based project support for institutions, students, and offices.",
    icon: Presentation,
  },
  {
    title: "Ad Agency",
    description:
      "Creative print media and newspaper advertisement design services for business, including newspaper ads, brochures, flyers, posters, banners, and promotional materials that communicate your brand effectively.",
    icon: Code2,
  },
];

const benefits = [
  {
    title: "Flexible Remote Support",
    description:
      "Get dependable virtual operator and office support without the overhead of full-time in-house staffing.",
  },
  {
    title: "Practical Service Range",
    description:
      "From DTP and typing to reports, presentations, and digital work, our services focus on practical requirements.",
  },
  {
    title: "Professional Delivery",
    description:
      "Expect clear communication, organised execution, and business-friendly output for your requirements.",
  },
  {
    title: "Customised Engagement",
    description:
      "Discuss your workload and receive a suitable quote for monthly support or individual projects.",
  },
];

const pricingPlans = [
  {
    price: "₹7,000/mo",
    title: "Starter Support",
    description: "Basic virtual operator tasks",
    features: [
      "Typing and document support",
      "Routine data entry work",
      "Suitable for small offices",
    ],
    featured: true,
  },
  {
    price: "Custom Quote",
    title: "Business Support",
    description: "DTP and design assistance",
    features: [
      "MIS and reporting support",
      "Presentation preparation",
      "Ideal for institutions",
    ],
    featured: false,
  },
  {
    price: "Custom Quote",
    title: "Growth Support",
    description: "Software and digital solutions",
    features: [
      "Digital marketing support",
      "Ongoing office workflow help",
      "For growing organisations",
    ],
    featured: false,
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
    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#0878e8]">
        <Sparkles size={14} />
        {eyebrow}
      </span>

      <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#082a4a] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
          {description}
        </p>
      )}

      <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-[#0878e8]" />
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    const elements =
      document.querySelectorAll<HTMLElement>(".scroll-reveal");

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      elements.forEach((element) =>
        element.classList.add("is-visible")
      );
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />

      <main className="overflow-hidden bg-white text-slate-800">
        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#f7fbff] via-white to-[#edf6ff]">
          <div className="pointer-events-none absolute -right-32 -top-28 -z-10 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-36 left-0 -z-10 h-80 w-80 rounded-full bg-sky-100/70 blur-3xl" />

          <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:py-28">
            {/* Hero content */}
            <div className="hero-enter relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/90 px-4 py-2 text-sm font-bold text-[#0878e8] shadow-sm">
                <ShieldCheck size={17} />
                Lakshmi Durga Solutions
              </div>

              <h1 className="mt-7 max-w-2xl text-4xl font-black leading-[1.12] tracking-tight text-[#082a4a] sm:text-5xl lg:text-6xl">
                Your Trusted{" "}
                <span className="text-[#0878e8]">
                  Computer & Digital
                </span>{" "}
                Solutions Partner
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                Professional virtual computer operator, DTP, graphic
                designing, data entry, MIS reports, presentations,
                software development, and digital support services for
                institutions, offices, and businesses.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/contact-us/"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#0878e8] px-6 py-3.5 font-bold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-[#0668ca] hover:shadow-xl"
                >
                  Get a Quote
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>

                <Link
                  href="/contact-us/"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-bold text-[#082a4a] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50"
                >
                  Contact Us
                </Link>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-slate-600">
                <span className="flex items-center gap-2">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-blue-100 text-[#0878e8]">
                    <Check size={15} />
                  </span>
                  Flexible Remote Support
                </span>

                <span className="flex items-center gap-2">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-blue-100 text-[#0878e8]">
                    <Check size={15} />
                  </span>
                  Professional Delivery
                </span>
              </div>
            </div>

            {/* Organic hero image */}
            <div className="hero-visual relative mx-auto w-full max-w-xl">
              <div className="hero-orbit hero-orbit-one" />
              <div className="hero-orbit hero-orbit-two" />

              <div className="hero-photo-frame relative">
                <img
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
                  alt="Professionals collaborating on business solutions"
                  fetchPriority="high"
                  className="hero-photo h-[310px] w-full object-cover sm:h-[430px] lg:h-[470px]"
                />
              </div>

              <div className="hero-floating-card absolute -bottom-9 left-2 right-2 z-10 flex items-center gap-3 rounded-2xl border border-white bg-white/95 p-4 shadow-2xl backdrop-blur-md sm:-left-8 sm:right-10 sm:gap-4 sm:p-5">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-blue-50 text-[#0878e8] sm:h-14 sm:w-14">
                  <MonitorCog size={27} />
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#0878e8] sm:text-xs">
                    Digital & Computer Support
                  </p>
                  <h2 className="mt-1 text-sm font-extrabold text-[#082a4a] sm:text-lg">
                    Built Around Your Workflow
                  </h2>
                  <p className="mt-1 text-xs leading-5 text-slate-600 sm:text-sm">
                    Practical support for your organisation.
                  </p>
                </div>
              </div>

              <div className="hero-trust-badge absolute right-0 top-5 z-10 flex items-center gap-2 rounded-full border border-white bg-white px-3 py-2.5 shadow-lg sm:-right-4 sm:top-10 sm:px-4 sm:py-3">
                <ShieldCheck
                  size={19}
                  className="shrink-0 text-[#0878e8]"
                />
                <span className="text-xs font-bold text-[#082a4a] sm:text-sm">
                  Professional Support
                </span>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-7xl px-5 pb-10 pt-8 sm:px-8 lg:pb-14">
            <div className="grid gap-4 rounded-2xl border border-blue-100 bg-white/80 p-5 shadow-sm sm:grid-cols-3 sm:p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-[#0878e8]">
                  <MonitorCog size={22} />
                </div>
                <div>
                  <p className="font-extrabold text-[#082a4a]">
                    Computer Support
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Flexible remote assistance
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-[#0878e8]">
                  <Palette size={22} />
                </div>
                <div>
                  <p className="font-extrabold text-[#082a4a]">
                    Design & DTP
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Professional visual materials
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-[#0878e8]">
                  <Code2 size={22} />
                </div>
                <div>
                  <p className="font-extrabold text-[#082a4a]">
                    Digital Solutions
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Software and digital support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28"
        >
          <div className="mx-auto max-w-7xl scroll-reveal">
            <SectionHeading
              eyebrow="Our Services"
              title="Reliable Digital Support for Your Needs"
              description="Practical computer, design, reporting, and digital services to help your organisation work more efficiently."
            />

            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map(({ title, description, icon: Icon }, index) => (
                <article
                  key={title}
                  className="service-card group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/10 sm:p-7"
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-50 opacity-0 transition-all duration-300 group-hover:opacity-100" />

                  <div className="relative flex items-start justify-between">
                    <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#eef6ff] text-[#0878e8] transition-all duration-300 group-hover:rotate-3 group-hover:bg-[#0878e8] group-hover:text-white">
                      <Icon size={27} strokeWidth={1.8} />
                    </div>

                    <span className="text-sm font-black tracking-wider text-slate-300">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="relative mt-6 text-xl font-extrabold leading-snug text-[#082a4a]">
                    {title}
                  </h3>

                  <p className="relative mt-3 text-sm leading-7 text-slate-600">
                    {description}
                  </p>

                  <Link
                    href="/services/"
                    className="relative mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0878e8]"
                  >
                    Explore Service
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="overflow-hidden bg-[#f5f9fd] px-5 py-20 sm:px-8 lg:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div className="about-visual relative mx-auto w-full max-w-xl scroll-reveal">
              <div className="about-decorative-shape" />

              <div className="about-photo-frame relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=85"
                  alt="Business team working together on digital projects"
                  loading="lazy"
                  className="about-photo h-[300px] w-full object-cover sm:h-[410px]"
                />
              </div>

              <div className="about-stat-card absolute -bottom-5 right-2 z-20 max-w-[calc(100%-16px)] rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:-right-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-blue-50 text-[#0878e8]">
                    <Check size={24} />
                  </div>

                  <div>
                    <p className="font-extrabold text-[#082a4a]">
                      Work Made Simple
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                      Support built around your needs
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="scroll-reveal">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#0878e8]">
                <BriefcaseBusiness size={15} />
                Why Choose Us
              </span>

              <h2 className="mt-5 text-3xl font-black leading-tight text-[#082a4a] sm:text-4xl lg:text-5xl">
                Built for Indian Businesses and Institutions
              </h2>

              <p className="mt-5 text-base leading-8 text-slate-600">
                Every organisation has different requirements. Our goal
                is to understand your workflow and provide practical
                computer and digital support that fits your needs.
              </p>

              <div className="mt-8 space-y-6">
                {benefits.map(({ title, description }, index) => (
                  <div key={title} className="flex gap-4">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-[#0878e8] shadow-sm ring-1 ring-blue-100">
                      <Check size={21} />
                    </div>

                    <div>
                      <h3 className="font-extrabold text-[#082a4a]">
                        {title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/about-us/"
                className="group mt-9 inline-flex items-center gap-2 rounded-xl bg-[#082a4a] px-6 py-3.5 font-bold text-white transition hover:bg-[#0b416f]"
              >
                Know More About Us
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section
          id="pricing"
          className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-28"
        >
          <div className="mx-auto max-w-7xl scroll-reveal">
            <SectionHeading
              eyebrow="Our Pricing"
              title="Support Plans That Fit Your Needs"
              description="Starting from ₹7,000/month. Final pricing depends on workload, service mix, and your support requirements."
            />

            <div className="mt-14 grid items-stretch gap-6 md:grid-cols-3">
              {pricingPlans.map((plan, index) => (
                <article
                  key={plan.title}
                  className={`pricing-card relative flex flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl sm:p-8 ${
                    plan.featured
                      ? "border-blue-300 bg-white shadow-lg shadow-blue-950/5"
                      : "border-slate-200 bg-[#f9fbfe]"
                  }`}
                >
                  {plan.featured && (
                    <span className="absolute right-5 top-5 rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[#0878e8]">
                      Starting Plan
                    </span>
                  )}

                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-[#0878e8]">
                    {index === 0 ? (
                      <MonitorCog size={24} />
                    ) : index === 1 ? (
                      <FileText size={24} />
                    ) : (
                      <Code2 size={24} />
                    )}
                  </div>

                  <p className="mt-6 text-sm font-bold text-[#0878e8]">
                    {plan.title}
                  </p>

                  <h3 className="mt-2 break-words text-2xl font-black text-[#082a4a] sm:text-3xl">
                    {plan.price}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {plan.description}
                  </p>

                  <div className="my-6 border-t border-slate-200" />

                  <ul className="flex-1 space-y-4">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                      >
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue-50 text-[#0878e8]">
                          <Check size={13} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contact-us/"
                    className={`mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-center font-bold transition duration-300 ${
                      plan.featured
                        ? "bg-[#0878e8] text-white hover:bg-[#0668ca]"
                        : "border border-blue-200 bg-white text-[#0878e8] hover:border-[#0878e8] hover:bg-blue-50"
                    }`}
                  >
                    Request a Quote
                    <ArrowRight size={17} />
                  </a>
                </article>
              ))}
            </div>

            <p className="mt-6 text-center text-xs leading-6 text-slate-500">
              Custom plans are quoted based on the agreed scope of work.
            </p>
          </div>
        </section>

        {/* QUOTE FORM */}
        <section
          id="quote"
          className="scroll-mt-24 bg-gradient-to-br from-[#f4f9ff] to-[#eaf4ff] px-5 py-20 sm:px-8 lg:py-28"
        >
          <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="scroll-reveal">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#0878e8]">
                <MessageCircle size={15} />
                Request a Quote
              </span>

              <h2 className="mt-5 text-3xl font-black leading-tight text-[#082a4a] sm:text-4xl lg:text-5xl">
                Let&apos;s Discuss Your Requirements
              </h2>

              <p className="mt-5 max-w-xl leading-8 text-slate-600">
                Tell us what support you need for your school, college,
                office, hospital, or business. We&apos;ll help you
                understand a suitable solution for your requirements.
              </p>

              <div className="mt-8 space-y-4">
                <div className="contact-info-card flex items-center gap-4 rounded-2xl border border-blue-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-5">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-blue-50 text-[#0878e8]">
                    <Phone size={22} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm text-slate-500">Phone</p>
                    <a
                      href="tel:+919393452444"
                      className="mt-1 block font-extrabold text-[#082a4a] hover:text-[#0878e8]"
                    >
                      +91 9393452444
                    </a>
                  </div>
                </div>

                <div className="contact-info-card flex items-center gap-4 rounded-2xl border border-blue-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-5">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-blue-50 text-[#0878e8]">
                    <Mail size={22} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm text-slate-500">Email</p>
                    <a
                      href="mailto:lakshmidurgasolutions@gmail.com"
                      className="mt-1 block break-all font-extrabold text-[#082a4a] hover:text-[#0878e8]"
                    >
                      lakshmidurgasolutions@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-info-card flex items-center gap-4 rounded-2xl border border-blue-100 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:p-5">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-blue-50 text-[#0878e8]">
                    <Clock3 size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-500">
                      Business Hours
                    </p>
                    <p className="mt-1 font-extrabold text-[#082a4a]">
                      Monday to Saturday
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      6:00 AM to 10:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="scroll-reveal rounded-3xl border border-white bg-white p-5 shadow-xl shadow-blue-950/5 sm:p-8 lg:p-9">
              <div className="mb-6">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-[#0878e8]">
                  <FileText size={24} />
                </div>

                <h3 className="mt-4 text-2xl font-extrabold text-[#082a4a]">
                  Tell Us What You Need
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Share your requirements to discuss the next steps.
                </p>
              </div>

              <QuoteForm />
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-5 py-16 sm:px-8 lg:py-20">
          <div className="cta-panel relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#082a4a] p-7 text-white sm:p-10 lg:p-14">
            <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full border-[40px] border-white/5" />
            <div className="pointer-events-none absolute -bottom-28 right-1/3 h-56 w-56 rounded-full bg-blue-500/10 blur-2xl" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-100">
                  <Sparkles size={15} />
                  Let&apos;s Work Together
                </span>

                <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
                  Ready to Simplify Your Office Work?
                </h2>

                <p className="mt-4 max-w-2xl leading-8 text-blue-100">
                  Partner with Lakshmi Durga Solutions for dependable
                  computer, DTP, graphic design, reporting, and digital
                  support tailored to your workflow.
                </p>
              </div>

              <div className="relative flex shrink-0 flex-wrap gap-3">
                <a
                  href="/contact-us/"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 font-bold text-[#082a4a] transition hover:-translate-y-1 hover:bg-blue-50"
                >
                  Get a Quote
                  <ArrowRight size={17} />
                </a>

                <Link
                  href="/pay-online/"
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/30 px-5 py-3.5 font-bold text-white transition hover:-translate-y-1 hover:bg-white/10"
                >
                  Pay Online
                </Link>
              </div>
            </div>
          </div>
        </section>

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

        
{/* FLOATING WHATSAPP */}
<a
  href="https://wa.me/919393452444"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Contact Lakshmi Durga Solutions on WhatsApp"
  className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition duration-300 hover:scale-110 hover:bg-[#1fb957] sm:bottom-7 sm:right-7"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.52 3.48A11.78 11.78 0 0 0 12.13 0C5.57 0 .23 5.34.23 11.9c0 2.1.55 4.15 1.6 5.96L.13 24l6.3-1.65a11.9 11.9 0 0 0 5.69 1.45h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.51-8.42ZM12.13 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.85 9.85 0 0 1-1.52-5.27c0-5.47 4.45-9.92 9.92-9.92a9.85 9.85 0 0 1 7.02 2.91 9.85 9.85 0 0 1 2.9 7.02c0 5.47-4.45 9.92-9.93 9.92Zm5.45-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.47-2.4-1.49-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.27.5 1.7.64.72.23 1.37.2 1.88.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
  </svg>
</a>
<ScrollToTop/>

      </main>
    </>
  );
}
