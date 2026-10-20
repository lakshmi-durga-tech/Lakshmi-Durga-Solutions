
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileText,
  Headphones,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import Header from "@/components/Header";
import AgencyHeader from "@/components/Header copy";
import ContactInquiryForm from "@/components/ContactInquiryForm";
import ScrollToTop from "@/components/ScrollToTop";

type ContactUsPageProps = {
  searchParams: Promise<{
    source?: string | string[];
  }>;
};

export const metadata: Metadata = {
  title: "Contact Us | Lakshmi Durga Solutions",
  description:
    "Contact Lakshmi Durga Solutions for virtual computer operator support, data entry, DTP, graphic design, MIS reports and digital services. Request a customised quote.",
  alternates: {
    canonical: "https://lakshmidurgasolutions.com/contact-us/",
  },
  openGraph: {
    title: "Contact Lakshmi Durga Solutions",
    description:
      "Tell us what your business or institution needs. Discuss your requirements and request a suitable digital support plan.",
    url: "https://lakshmidurgasolutions.com/contact-us/",
    siteName: "Lakshmi Durga Solutions",
    type: "website",
  },
};

const contactDetails = [
  {
    icon: Phone,
    title: "Call our team",
    detail: "+91 93934 52444",
    description: "Speak with us about your requirements.",
    href: "tel:+919393452444",
    linkLabel: "Call now",
  },
  {
    icon: Mail,
    title: "Send an email",
    detail: "lakshmidurgasolutions@gmail.com",
    description: "Share your project details in writing.",
    href: "mailto:lakshmidurgasolutions@gmail.com",
    linkLabel: "Email us",
  },
  {
    icon: MapPin,
    title: "Our location",
    detail: "Vijayawada, Andhra Pradesh",
    description: "Remote support for suitable projects across India.",
    href: "https://www.google.com/maps/search/?api=1&query=Vijayawada%2C%20Andhra%20Pradesh",
    linkLabel: "View location",
  },
];

const faqs = [
  {
    question: "What details should I include in my inquiry?",
    answer:
      "Mention the service you need, the approximate volume of work, your deadline and whether it is a one-time task or recurring support. This helps us understand your requirement.",
  },
  {
    question: "Can I request a customised quote?",
    answer:
      "Yes. Pricing depends on the type of work, scope, volume, turnaround time and frequency. Contact us with your requirements to discuss a suitable quote.",
  },
  {
    question: "Do you provide remote services?",
    answer:
      "Yes, suitable computer, documentation, design and digital support tasks can be handled remotely. The exact working arrangement depends on the service.",
  },
  {
    question: "Can I contact you before choosing a plan?",
    answer:
      "Absolutely. You can explain what you need first. We can discuss the scope and available options before you decide how to proceed.",
  },
];

export default async function ContactUsPage({
  searchParams,
}: ContactUsPageProps) {
  const query = await searchParams;

  const sourceValue = Array.isArray(query.source)
    ? query.source[0]
    : query.source;

  const source =
    sourceValue === "agency" || sourceValue === "virtual-operator"
      ? sourceValue
      : "default";

  const isAgency = source === "agency";

  // Select the header based on the page the visitor came from.
  // The default header remains the Virtual Operator header.
  const homeHref =
    source === "agency"
      ? "/ad-agency/"
      : source === "virtual-operator"
        ? "/virtual-operator/"
        : "/";

  const aboutHref =
    source === "agency" ? "/about/" : "/about-us/";

  const servicesHref =
    source === "agency" ? "/services-us/" : "/services/";

  const pricingHref =
    source === "agency" ? "/price/" : "/pricing/";

  const blogHref =
    source === "default" ? "/blog/" : `/blog/?source=${source}`;

  const contactHref =
    source === "default"
      ? "/contact-us/"
      : `/contact-us/?source=${source}`;

  const payOnlineHref =
    source === "default"
      ? "/pay-online/"
      : `/pay-online/?source=${source}`;

  const whatsappHref =
    source === "default"
      ? "https://wa.me/919393452444"
      : `https://wa.me/919393452444?text=${encodeURIComponent(
          `Hello Lakshmi Durga Solutions, I came from the ${
            source === "agency" ? "Ad Agency" : "Virtual Operator"
          } section and would like to discuss my requirement.`
        )}`;

  return (
    <>
      {isAgency ? <AgencyHeader /> : <Header />}

      <main className="contact-page overflow-hidden bg-white text-slate-800">
        {/* HERO SECTION */}
        <section className="contact-hero relative">
          <div className="contact-orb contact-orb-one" />
          <div className="contact-orb contact-orb-two" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:py-24">
            <div className="contact-hero-copy">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/90 px-4 py-2 text-sm font-bold text-[#0878e8] shadow-sm">
                <Sparkles size={16} />
                Let&apos;s build something useful
              </div>

              <h1 className="mt-6 max-w-2xl text-4xl font-black leading-[1.12] tracking-tight text-[#082a4a] sm:text-5xl lg:text-6xl">
                Have a requirement?
                <span className="contact-gradient block">
                  Let&apos;s talk.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                Tell us what you need help with. From daily computer work and
                documentation to reporting, design and digital support,
                we&apos;ll help you explore the right solution.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact-form"
                  className="contact-primary-button inline-flex items-center gap-2 rounded-full bg-[#0878e8] px-6 py-3.5 font-bold text-white"
                >
                  Send an Inquiry <ArrowDownRight size={18} />
                </a>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 font-bold text-[#082a4a] transition hover:border-blue-200 hover:bg-blue-50"
                >
                  <MessageCircle size={18} />
                  WhatsApp Us
                </a>
              </div>

              <div className="mt-9 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-[#0878e8]">
                    <ShieldCheck size={21} />
                  </span>
                  <div>
                    <p className="font-bold text-[#082a4a]">
                      Clear communication
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Discuss scope before work begins.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-[#0878e8]">
                    <Clock3 size={21} />
                  </span>
                  <div>
                    <p className="font-bold text-[#082a4a]">
                      Requirement-based support
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Tell us your scope and timeline.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* HERO IMAGE */}
            <div className="contact-hero-visual">
              <div className="contact-image-backdrop" />

              <div className="contact-hero-image">
                <img
                  src="https://lakshmidurgasolutions.com/wp-content/uploads/2026/08/2161842568.jpg"
                  alt="Professionals working together on business tasks"
                  fetchPriority="high"
                />
              </div>

              <div className="contact-image-gradient" />

              <div className="contact-image-message">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-md">
                  <CheckCircle2 size={15} />
                  YOUR REQUIREMENTS MATTER
                </span>

                <h2 className="mt-4 max-w-sm text-2xl font-black leading-tight text-white sm:text-3xl">
                  The right conversation is the first step.
                </h2>

                <p className="mt-3 max-w-sm text-sm leading-7 text-white/85">
                  Let&apos;s understand the work, agree on the scope and find
                  a practical way forward.
                </p>
              </div>

              <div className="contact-floating-note">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-[#0878e8]">
                  <Headphones size={22} />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Need assistance?
                  </p>
                  <p className="mt-1 font-extrabold text-[#082a4a]">
                    We&apos;re ready to listen
                  </p>
                </div>
                <ArrowRight size={19} className="ml-auto text-[#0878e8]" />
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT DETAILS */}
        <section className="px-5 py-16 sm:px-8 lg:py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#0878e8]">
                GET IN TOUCH
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#082a4a] sm:text-4xl">
                Reach us your way
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Choose the contact option that works best for you.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {contactDetails.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="contact-detail-card"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-[#0878e8]">
                        <Icon size={23} />
                      </span>
                      <ArrowRight
                        size={19}
                        className="mt-2 text-slate-300 transition group-hover:text-[#0878e8]"
                      />
                    </div>

                    <h3 className="mt-5 text-xl font-extrabold text-[#082a4a]">
                      {item.title}
                    </h3>
                    <p className="mt-2 break-words text-sm font-bold text-[#0878e8]">
                      {item.detail}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {item.description}
                    </p>

                    <a
                      href={item.href}
                      target={
                        item.href.startsWith("https://")
                          ? "_blank"
                          : undefined
                      }
                      rel={
                        item.href.startsWith("https://")
                          ? "noreferrer"
                          : undefined
                      }
                      className="contact-detail-link mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-[#082a4a]"
                    >
                      {item.linkLabel} <ArrowRight size={16} />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* CONTACT FORM */}
        <section
          id="contact-form"
          className="contact-form-section scroll-mt-24 px-5 py-16 sm:px-8 lg:py-24"
        >
          <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div className="lg:sticky lg:top-28">
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#0878e8]">
                START A CONVERSATION
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-[#082a4a] sm:text-4xl">
                Tell us what you need.
                <span className="contact-gradient block">
                  We&apos;ll take it from there.
                </span>
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Share a few details about your requirement so we can understand
                the work before discussing the next steps.
              </p>

              <div className="mt-8 overflow-hidden rounded-[26px] bg-[#082a4a] p-6 text-white sm:p-7">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/10 text-blue-200">
                    <FileText size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold">
                      Helpful details to include
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-blue-100">
                      A clear description helps us understand your request.
                    </p>
                  </div>
                </div>

                <ul className="mt-6 space-y-4">
                  {[
                    "The service you require",
                    "Approximate work volume",
                    "Your preferred deadline",
                    "One-time or recurring work",
                  ].map((tip) => (
                    <li
                      key={tip}
                      className="flex items-start gap-3 text-sm text-slate-200"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-0.5 shrink-0 text-blue-300"
                      />
                      {tip}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 border-t border-white/15 pt-6">
                  <p className="text-sm text-blue-100">
                    Prefer messaging?
                  </p>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 font-extrabold text-white hover:text-blue-200"
                  >
                    Chat with us on WhatsApp <ArrowRight size={17} />
                  </a>
                </div>
              </div>
            </div>

            <ContactInquiryForm />
          </div>
        </section>

        {/* FAQ */}
        <section className="px-5 py-16 sm:px-8 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#0878e8]">
                COMMON QUESTIONS
              </p>
              <h2 className="mt-3 text-3xl font-black text-[#082a4a] sm:text-4xl">
                Before you contact us
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                A few quick answers to help you get started.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={faq.question}
                  className="contact-faq"
                  open={index === 0}
                >
                  <summary>
                    <span>{faq.question}</span>
                    <span className="contact-faq-plus">+</span>
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="px-5 pb-16 sm:px-8 lg:pb-24">
          <div className="contact-final-cta mx-auto flex max-w-7xl flex-col gap-7 rounded-[28px] p-7 text-white sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-14">
            <div className="relative z-10 max-w-3xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-blue-200">
                READY WHEN YOU ARE
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                Let&apos;s make your work easier.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-blue-100">
                Have a question or a project in mind? Reach out to discuss your
                computer and digital support requirements.
              </p>
            </div>

            <div className="relative z-10 flex shrink-0 flex-wrap gap-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-extrabold text-[#082a4a] transition hover:bg-blue-50"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
              <a
                href="tel:+919393452444"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 font-extrabold text-white transition hover:bg-white/10"
              >
                <Phone size={17} />
                Call Us
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="services-footer">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <Link href={homeHref} className="inline-flex items-center gap-3">
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
                Professional computer operator, data entry, DTP, design,
                reporting and digital support for institutions and businesses.
              </p>

              <a
                href="mailto:lakshmidurgasolutions@gmail.com"
                className="footer-link mt-4 block break-words text-sm"
              >
                lakshmidurgasolutions@gmail.com
              </a>
              <a
                href="tel:+919393452444"
                className="footer-link mt-3 block text-sm"
              >
                +91 93934 52444
              </a>
            </div>

            <div>
              <h3 className="font-bold text-white">Company</h3>
              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                <li>
                  <Link href={homeHref} className="footer-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href={aboutHref} className="footer-link">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href={servicesHref} className="footer-link">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href={pricingHref} className="footer-link">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href={blogHref} className="footer-link">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white">Help &amp; Support</h3>
              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                <li>
                  <Link href={contactHref} className="footer-link">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy/" className="footer-link">
                    Privacy Policy
                  </Link>
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
                <li>
                  <Link href={payOnlineHref} className="footer-link">
                    Pay Online
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10">
            <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-slate-400 sm:px-8 md:flex-row md:items-center md:justify-between">
              <p>
                © {new Date().getFullYear()} Lakshmi Durga Solutions. All
                rights reserved.
              </p>
              <p>Professional computer &amp; digital support.</p>
            </div>
          </div>
        </footer>

        {/* FLOATING WHATSAPP BUTTON */}
        <a
          href={whatsappHref}
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
