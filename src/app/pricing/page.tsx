
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Sparkles,
  Headphones,
  Building2,
  MessageCircle,
  ShieldCheck,
  Clock3,
  FileText,
  BarChart3,
  Palette,
} from "lucide-react";

import Header from "@/components/Header";
import { FaWhatsapp } from "react-icons/fa";
import ScrollToTop from "@/components/ScrollToTop";


export const metadata: Metadata = {
  title: "Pricing Plans | Lakshmi Durga Solutions",
  description:
    "Explore flexible computer operator, data entry, DTP, MIS reporting and digital support plans from Lakshmi Durga Solutions. Support starts at ₹7,000 per month.",
  alternates: {
    canonical: "https://lakshmidurgasolutions.com/pricing/",
  },
  openGraph: {
    title: "Pricing Plans | Lakshmi Durga Solutions",
    description:
      "Find flexible computer support, reporting, design and digital assistance plans for your organisation.",
    url: "https://lakshmidurgasolutions.com/pricing/",
    siteName: "Lakshmi Durga Solutions",
    type: "website",
  },
};

const plans = [
  {
    name: "Starter",
    subtitle: "Essential day-to-day support",
    price: "₹7,000",
    period: "/ month onwards",
    description:
      "Reliable assistance for routine computer, office and documentation tasks.",
    icon: Headphones,
    featured: false,
    label: "ESSENTIAL SUPPORT",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Modern office workspace",
    imageLabel: "EVERYDAY OFFICE SUPPORT",
    features: [
      "Virtual Computer Operator Support",
      "Routine Data Entry and Typing",
      "Basic DTP and Document Formatting",
      "Office File Assistance",
      "Flexible Remote Support",
    ],
    bestFor: "Small offices and everyday business needs",
    button: "Choose Starter",
  },
  {
    name: "Standard",
    subtitle: "More support for growing teams",
    price: "Custom Quote",
    period: "based on scope",
    description:
      "Combine everyday computer support with reporting, presentations and recurring tasks.",
    icon: BarChart3,
    featured: true,
    label: "MOST POPULAR",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Professionals collaborating on business work",
    imageLabel: "REPORTS & TEAM SUPPORT",
    features: [
      "Everything included in Starter",
      "MIS Reports and Data Analysis",
      "PowerPoint and Presentation Work",
      "School and College Computer Tasks",
      "Recurring Documentation Support",
    ],
    bestFor: "Schools, colleges and growing businesses",
    button: "Choose Standard",
  },
  {
    name: "Advanced",
    subtitle: "A broader digital support partner",
    price: "Custom Quote",
    period: "for complex needs",
    icon: Building2,
    featured: false,
    label: "CUSTOM SOLUTIONS",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=85",
    imageAlt: "Digital analytics and business reporting",
    imageLabel: "DIGITAL GROWTH",
    features: [
      "Everything included in Standard",
      "Graphic and Logo Design Support",
      "Software Development Assistance",
      "Digital Marketing Assistance",
      "Priority Handling for Recurring Work",
    ],
    bestFor: "Organisations needing multiple digital services",
    button: "Choose Advanced",
  },
];

const faqs = [
  {
    question: "What does your pricing start from?",
    answer:
      "Our ongoing support plans start from ₹7,000 per month. Final pricing depends on the type of work, volume, turnaround time and services required.",
  },
  {
    question: "Can I request a customised package?",
    answer:
      "Yes. We can prepare a customised quote for schools, colleges, coaching centres, offices and businesses based on your requirements.",
  },
  {
    question: "Do you accept one-time projects?",
    answer:
      "Yes. One-time assignments such as typing, DTP, presentations, logo design and report preparation can be quoted separately based on the scope.",
  },
  {
    question: "Is remote support available?",
    answer:
      "Yes. We offer remote assistance for suitable computer and office-related tasks. The working arrangement can be discussed before the engagement.",
  },
  {
    question: "How can I get an exact quotation?",
    answer:
      "Contact us with the type of work, approximate volume, frequency and expected turnaround time. We will review your requirements and suggest a suitable plan.",
  },
  {
    question: "Do you work with clients outside Vijayawada?",
    answer:
      "Lakshmi Durga Solutions is based in Vijayawada, Andhra Pradesh. We can support clients across India for suitable remote digital and computer-related work.",
  },
];

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm leading-6 text-slate-600">
      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue-50 text-[#0878e8]">
        <Check size={13} strokeWidth={3} />
      </span>
      <span>{children}</span>
    </li>
  );
}

export default function PricingPage() {
  return (
    <>
      <Header />

      <main className="overflow-hidden bg-white text-slate-800">
        {/* HERO */}
        <section className="pricing-hero relative">
          <div className="pricing-hero-orb pricing-hero-orb-one" />
          <div className="pricing-hero-orb pricing-hero-orb-two" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-14 lg:py-24">
            {/* HERO CONTENT */}
            <div className="pricing-enter">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-bold text-[#0878e8] shadow-sm">
                <Sparkles size={16} />
                Straightforward plans. Flexible support.
              </div>

              <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight tracking-tight text-[#082a4a] sm:text-5xl lg:text-6xl">
                The right support for{" "}
                <span className="pricing-gradient-text">
                  the way you work.
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                From everyday computer tasks to reporting, design and digital
                assistance, choose a support plan that fits your organisation
                and your workload.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#plans"
                  className="pricing-primary-button inline-flex items-center gap-2 rounded-full bg-[#0878e8] px-6 py-3.5 font-bold text-white"
                >
                  Explore Plans <ArrowRight size={18} />
                </a>

                <Link
                  href="/contact-us/"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 font-bold text-[#082a4a] transition hover:border-blue-200 hover:bg-blue-50"
                >
                  Talk to Our Team
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-slate-600">
                <span className="flex items-center gap-2">
                  <ShieldCheck size={17} className="text-[#0878e8]" />
                  Scope-based pricing
                </span>
                <span className="flex items-center gap-2">
                  <Clock3 size={17} className="text-[#0878e8]" />
                  Flexible support
                </span>
              </div>
            </div>

            {/* HERO IMAGE PANEL */}
            <div className="pricing-visual relative">
              <div className="pricing-visual-image">
                <img
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=90"
                  alt="Modern professional office workspace"
                  className="h-full w-full object-cover"
                  fetchPriority="high"
                />
              </div>

              <div className="pricing-image-shade" />

              <div className="pricing-image-caption">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                  <ShieldCheck size={15} />
                  PROFESSIONAL DIGITAL SUPPORT
                </span>

                <h2 className="mt-4 max-w-sm text-3xl font-black leading-tight text-white sm:text-4xl">
                  More time for the work that matters.
                </h2>

                <p className="mt-3 max-w-sm text-sm leading-7 text-white/85">
                  Reliable computer, documentation, reporting and digital
                  assistance for your everyday business needs.
                </p>
              </div>

              {/* FLOATING PRICE CARD */}
              <div className="pricing-floating-card">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-[#0878e8]">
                  <Headphones size={23} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Support starts from
                  </p>
                  <p className="mt-1 text-2xl font-black text-[#082a4a]">
                    ₹7,000
                    <span className="text-sm font-semibold text-slate-500">
                      /mo
                    </span>
                  </p>
                </div>

                <Link
                  href="/contact-us/"
                  aria-label="Ask about the Starter pricing plan"
                  className="ml-auto grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#0878e8] text-white transition hover:bg-[#0668ca]"
                >
                  <ArrowRight size={19} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING PLANS */}
        <section
          id="plans"
          className="scroll-mt-24 px-5 py-20 sm:px-8 lg:py-24"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#0878e8]">
                OUR PLANS
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#082a4a] sm:text-4xl lg:text-5xl">
                Support that fits your needs
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Start with essential assistance or request a tailored
                combination of services as your workload grows.
              </p>
            </div>

            <div className="mt-14 grid items-stretch gap-7 lg:grid-cols-3">
              {plans.map((plan) => {
                const Icon = plan.icon;

                return (
                  <article
                    key={plan.name}
                    className={`pricing-plan-card relative flex min-w-0 flex-col rounded-[26px] border p-6 sm:p-8 ${
                      plan.featured
                        ? "pricing-plan-featured border-[#0878e8] bg-[#082a4a] text-white shadow-2xl shadow-blue-950/15"
                        : "border-slate-200 bg-white"
                    }`}
                  >
                    {plan.featured && (
                      <div className="absolute -top-3 left-6 z-10 inline-flex items-center gap-2 rounded-full bg-[#0878e8] px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg">
                        <Sparkles size={13} />
                        {plan.label}
                      </div>
                    )}

                    {/* PLAN IMAGE */}
                    <div className="pricing-card-image">
                      <img
                        src={plan.image}
                        alt={plan.imageAlt}
                        loading="lazy"
                      />
                      <div className="pricing-card-image-overlay" />
                      <span className="pricing-card-image-label">
                        {plan.imageLabel}
                      </span>
                    </div>

                    {!plan.featured && (
                      <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#0878e8]">
                        {plan.label}
                      </p>
                    )}

                    <div className="mt-4 flex items-start justify-between gap-3">
                      <div>
                        <h3
                          className={`text-2xl font-black ${
                            plan.featured ? "text-white" : "text-[#082a4a]"
                          }`}
                        >
                          {plan.name}
                        </h3>
                        <p
                          className={`mt-2 text-sm ${
                            plan.featured ? "text-blue-100" : "text-slate-500"
                          }`}
                        >
                          {plan.subtitle}
                        </p>
                      </div>

                      <div
                        className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${
                          plan.featured
                            ? "bg-white/10 text-blue-200"
                            : "bg-blue-50 text-[#0878e8]"
                        }`}
                      >
                        <Icon size={24} />
                      </div>
                    </div>

                    <div className="mt-7">
                      <p
                        className={`text-3xl font-black tracking-tight ${
                          plan.featured ? "text-white" : "text-[#082a4a]"
                        }`}
                      >
                        {plan.price}
                      </p>
                      <p
                        className={`mt-1 text-sm ${
                          plan.featured ? "text-blue-200" : "text-slate-500"
                        }`}
                      >
                        {plan.period}
                      </p>
                    </div>

                    <p
                      className={`mt-5 text-sm leading-7 ${
                        plan.featured ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {plan.description}
                    </p>

                    <div
                      className={`my-6 border-t ${
                        plan.featured ? "border-white/15" : "border-slate-100"
                      }`}
                    />

                    <p
                      className={`mb-4 text-sm font-extrabold ${
                        plan.featured ? "text-white" : "text-[#082a4a]"
                      }`}
                    >
                      What&apos;s included
                    </p>

                    <ul className="space-y-4">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className={`flex items-start gap-3 text-sm leading-6 ${
                            plan.featured ? "text-slate-200" : "text-slate-600"
                          }`}
                        >
                          <span
                            className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                              plan.featured
                                ? "bg-blue-400/15 text-blue-200"
                                : "bg-blue-50 text-[#0878e8]"
                            }`}
                          >
                            <Check size={13} strokeWidth={3} />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div
                      className={`mt-7 rounded-2xl p-4 ${
                        plan.featured ? "bg-white/5" : "bg-[#f5f9fd]"
                      }`}
                    >
                      <p
                        className={`text-xs font-extrabold uppercase tracking-wider ${
                          plan.featured ? "text-blue-200" : "text-slate-500"
                        }`}
                      >
                        Recommended for
                      </p>
                      <p
                        className={`mt-2 text-sm leading-6 ${
                          plan.featured ? "text-white" : "text-[#082a4a]"
                        }`}
                      >
                        {plan.bestFor}
                      </p>
                    </div>

                    <Link
                      href={`/contact-us/?plan=${encodeURIComponent(plan.name)}`}
                      className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-extrabold transition ${
                        plan.featured
                          ? "bg-white text-[#082a4a] hover:bg-blue-50"
                          : "bg-[#0878e8] text-white hover:bg-[#0668ca]"
                      }`}
                    >
                      {plan.button} <ArrowRight size={17} />
                    </Link>
                  </article>
                );
              })}
            </div>

            <p className="mx-auto mt-7 max-w-3xl text-center text-sm leading-7 text-slate-500">
              All plans are subject to requirement review. Exact deliverables,
              workload, turnaround time and pricing will be confirmed before
              the engagement begins.
            </p>
          </div>
        </section>

        {/* HOW PRICING WORKS */}
        <section className="bg-[#f5f9fd] px-5 py-20 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#0878e8]">
                SIMPLE PROCESS
              </p>
              <h2 className="mt-3 text-3xl font-black text-[#082a4a] sm:text-4xl">
                From requirement to support
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Tell us what needs to get done. We&apos;ll discuss the scope
                and suggest a suitable way to work together.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              <div className="pricing-step-card">
                <span className="pricing-step-number">01</span>
                <div className="mt-5 grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-[#0878e8]">
                  <MessageCircle size={23} />
                </div>
                <h3 className="mt-5 text-xl font-extrabold text-[#082a4a]">
                  Share your needs
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Explain the type of work, frequency, volume and turnaround
                  time you need.
                </p>
              </div>

              <div className="pricing-step-card">
                <span className="pricing-step-number">02</span>
                <div className="mt-5 grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-[#0878e8]">
                  <FileText size={23} />
                </div>
                <h3 className="mt-5 text-xl font-extrabold text-[#082a4a]">
                  Get a clear quote
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  We review your requirements and propose a plan based on the
                  agreed scope.
                </p>
              </div>

              <div className="pricing-step-card">
                <span className="pricing-step-number">03</span>
                <div className="mt-5 grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-[#0878e8]">
                  <ShieldCheck size={23} />
                </div>
                <h3 className="mt-5 text-xl font-extrabold text-[#082a4a]">
                  Start with clarity
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Confirm the deliverables, pricing and working arrangement
                  before the work begins.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-5 py-20 sm:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#0878e8]">
                FAQ
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-[#082a4a] sm:text-4xl">
                Questions about pricing?
              </h2>
              <p className="mt-5 leading-8 text-slate-600">
                Every organisation has different needs. Here are answers to
                common questions about our plans and support.
              </p>

              <div className="mt-7 rounded-2xl border border-blue-100 bg-[#f5f9fd] p-5">
                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-[#0878e8] shadow-sm">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-[#082a4a]">
                      Need a specific quote?
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Tell us about your project or recurring workload.
                    </p>
                    <Link
                      href="/contact-us/"
                      className="mt-3 inline-flex items-center gap-2 text-sm font-extrabold text-[#0878e8] hover:underline"
                    >
                      Contact our team <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={faq.question}
                  className="pricing-faq group rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"
                  open={index === 0}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-extrabold text-[#082a4a]">
                    <span>{faq.question}</span>
                    <span className="pricing-faq-icon grid h-8 w-8 shrink-0 place-items-center rounded-full bg-blue-50 text-[#0878e8]">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 pr-8 text-sm leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-5 pb-20 sm:px-8 lg:pb-24">
          <div className="pricing-final-cta mx-auto flex max-w-7xl flex-col gap-7 rounded-[28px] p-7 text-white sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-14">
            <div className="max-w-3xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-blue-200">
                LET&apos;S WORK TOGETHER
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                Have a workload in mind?
                <br className="hidden sm:block" /> Let&apos;s find the right plan.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-blue-100">
                Share your requirements with Lakshmi Durga Solutions and get
                a quote tailored to the work you need done.
              </p>
            </div>

            <div className="flex shrink-0 flex-wrap gap-3">
              <Link
                href="/contact-us/"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-extrabold text-[#082a4a] transition hover:bg-blue-50"
              >
                Get a Quote <ArrowRight size={17} />
              </Link>
              <a
                href="https://wa.me/919393452444"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 font-extrabold text-white transition hover:bg-white/10"
              >
                <MessageCircle size={17} /> WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="services-footer">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
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
                graphic design, MIS reporting, presentations and digital
                support services for institutions, offices and businesses.
              </p>

              <Link
                href="/contact-us/"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#082a4a] transition hover:bg-blue-100"
              >
                Talk to Our Team <ArrowRight size={17} />
              </Link>
            </div>

            <div>
              <h3 className="font-bold text-white">Company</h3>
              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                <li><Link href="/" className="footer-link">Home</Link></li>
                <li><Link href="/about-us/" className="footer-link">About Us</Link></li>
                <li><Link href="/services/" className="footer-link">Services</Link></li>
                <li><Link href="/blog/" className="footer-link">Blog</Link></li>
                <li><Link href="/pricing/" className="footer-link">Pricing</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white">Help &amp; Policies</h3>
              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                <li><Link href="/contact-us/" className="footer-link">Contact Us</Link></li>
                <li><Link href="/privacy-policy/" className="footer-link">Privacy Policy</Link></li>
                <li><Link href="/terms-and-conditions/" className="footer-link">Terms &amp; Conditions</Link></li>
                <li><Link href="/refund-cancellation/" className="footer-link">Refund &amp; Cancellation</Link></li>
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
  <FaWhatsapp size={32} />
</a>

<ScrollToTop/>
      </main>
    </>
  );
}
