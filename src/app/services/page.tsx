
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  FileSpreadsheet,
  FileText,
  Laptop,
  Palette,
  PenTool,
  BarChart3,
  Code2,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import { FaWhatsapp } from "react-icons/fa";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata: Metadata = {
  title: "Our Services | Lakshmi Durga Solutions",
  description:
    "Explore virtual computer operator, data entry, typing, DTP, graphic design, MIS reporting, software and digital support services by Lakshmi Durga Solutions.",
  alternates: {
    canonical: "/services/",
  },
  openGraph: {
    title: "Professional IT & Office Support Services",
    description:
      "Dependable computer, documentation, design, reporting and digital support for institutions and businesses.",
    url: "https://lakshmidurgasolutions.com/services/",
    siteName: "Lakshmi Durga Solutions",
    type: "website",
    locale: "en_IN",
    images: ["/images/LDS-Logo.jpg"],
  },
};

const services = [
  {
    number: "01",
    title: "Virtual Computer Operator",
    description:
      "Professional remote computer support for schools, colleges, institutions and businesses that need dependable day-to-day assistance.",
    features: ["Routine computer tasks", "Remote office assistance", "Daily operational support"],
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
    alt: "Professional office workspace for virtual computer support",
    icon: Laptop,
    shape: "service-image-one",
  },
  {
    number: "02",
    title: "Data Entry & Typing",
    description:
      "Accurate data entry, document typing, record updates and routine office documentation support with a focus on consistency.",
    features: ["Data entry and updates", "Document typing", "Digital record management"],
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=85",
    alt: "Workspace with documents and writing materials",
    icon: FileSpreadsheet,
    shape: "service-image-two",
  },
  {
    number: "03",
    title: "DTP & Document Works",
    description:
      "Well-formatted notices, reports, certificates, forms and other desktop publishing work for educational and office needs.",
    features: ["Document formatting", "Certificates and notices", "Reports and forms"],
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=85",
    alt: "Document preparation and desktop publishing workspace",
    icon: FileText,
    shape: "service-image-three",
  },
  {
    number: "04",
    title: "Graphic & Logo Design",
    description:
      "Professional design support for logos, promotional creatives, presentations and branded communication materials.",
    features: ["Logo and brand design", "Promotional creatives", "Presentation design"],
    image:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1000&q=85",
    alt: "Creative digital design workspace",
    icon: PenTool,
    shape: "service-image-four",
  },
  {
    number: "05",
    title: "MIS & Data Analysis",
    description:
      "Structured reports, spreadsheets, summaries and MIS support to help teams track information clearly and efficiently.",
    features: ["Spreadsheet reports", "MIS summaries", "Data organisation"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
    alt: "Business analytics and reporting displayed on a screen",
    icon: BarChart3,
    shape: "service-image-five",
  },
  {
    number: "06",
    title: "Digital Marketing",
    description:
      "Practical support for software development needs, online promotion and digital growth activities for modern businesses.",
    features: ["Social Media Management", "SEO & Lead Generation", "Digital promotion"],
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1000&q=85",
    alt: "Website development and digital work on a computer",
    icon: Code2,
    shape: "service-image-six",
  },
  {
    number: "07",
    title: "Website Development",
    description:
      "We create modren, responsive, and user-friendly websites that help businesses build their online presence and reach more customers.",
    features: ["Custom Website Design", "Mobile- Friendly Development", "SEO & Contact Integration"],
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1000&q=85",
    alt: "Website development and digital work on a computer",
    icon: Code2,
    shape: "service-image-six",
  },
];

const process = [
  {
    number: "01",
    title: "Share Your Requirement",
    description:
      "Tell us the type of computer, data, design or office support you need for your daily operations.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Get a Suitable Plan",
    description:
      "We recommend the right scope of work based on your tasks, timelines and support expectations.",
    icon: Workflow,
  },
  {
    number: "03",
    title: "Work Begins Promptly",
    description:
      "Work starts with clear communication, timely updates and professional execution.",
    icon: Clock3,
  },
  {
    number: "04",
    title: "Stay Supported",
    description:
      "Continue with assistance for routine work, special projects and evolving digital support needs.",
    icon: ShieldCheck,
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main className="overflow-hidden bg-white text-slate-800">
        {/* HERO */}
        <section className="services-hero relative bg-[#f3f7fc]">
          <div className="services-hero-orb services-orb-one" />
          <div className="services-hero-orb services-orb-two" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
            <div className="animate-hero">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#0878e8] shadow-sm">
                <Sparkles size={15} />
                Our Services
              </span>

              <h1 className="mt-6 max-w-2xl text-4xl font-black leading-[1.12] tracking-tight text-[#082a4a] sm:text-5xl lg:text-6xl">
                Professional support.
                <span className="mt-2 block text-[#0878e8]">
                  Real work. Better flow.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                From everyday computer operations to documentation,
                reporting, creative design and digital services, we help
                organisations manage essential work with confidence.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact-us/"
                  className="modern-button inline-flex items-center gap-2 rounded-full bg-[#0878e8] px-6 py-3.5 font-bold text-white shadow-lg shadow-blue-200/70 hover:bg-[#0668ca]"
                >
                  Discuss Your Needs <ArrowRight size={18} />
                </Link>

                <Link
                  href="/pricing/"
                  className="modern-button inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 font-bold text-[#082a4a] hover:border-blue-300"
                >
                  View Pricing <ArrowUpRight size={18} />
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-600">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-[#0878e8]" />
                  Flexible support
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-[#0878e8]" />
                  Clear communication
                </span>
              </div>
            </div>

            <Reveal className="relative">
              <div className="services-hero-visual">
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
                  alt="Professionals collaborating on business tasks"
                  fetchPriority="high"
                  className="services-hero-image"
                />

                <div className="services-floating-card">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-blue-50 text-[#0878e8]">
                    <CheckCircle2 size={23} />
                  </span>
                  <div>
                    <p className="font-extrabold text-[#082a4a]">
                      Support that fits your work
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Computer · Documents · Design · Digital
                    </p>
                  </div>
                </div>

                <div className="services-image-badge">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-100">
                    One partner
                  </span>
                  <p className="mt-1 text-lg font-black text-white">
                    Multiple solutions
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* INTRO */}
        <section className="px-5 py-16 sm:px-8 lg:py-20">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0878e8]">
                What We Offer
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight text-[#082a4a] sm:text-4xl">
                Services built for daily operations
              </h2>
            </Reveal>

            <Reveal>
              <p className="max-w-2xl text-base leading-8 text-slate-600 lg:justify-self-end">
                We support schools, colleges, coaching centers,
                institutions, offices, hospitals and businesses with
                practical services that help keep everyday work organised.
                Choose a service to discuss the requirements specific to
                your organisation.
              </p>
            </Reveal>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="px-5 pb-16 sm:px-8 lg:pb-24">
          <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Reveal key={service.number} className="h-full">
                  <article className="service-card group h-full">
                    <div className={`service-image-wrap ${service.shape}`}>
                      <img
                        src={service.image}
                        alt={service.alt}
                        loading="lazy"
                        className="service-card-image"
                      />

                      <span className="service-number">
                        {service.number}
                      </span>

                      <span className="service-icon">
                        <Icon size={23} />
                      </span>
                    </div>

                    <div className="flex h-full flex-col px-1 pb-2 pt-6">
                      <h3 className="text-xl font-extrabold tracking-tight text-[#082a4a] transition-colors group-hover:text-[#0878e8]">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {service.description}
                      </p>

                      <ul className="mt-5 space-y-2.5">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2.5 text-sm text-slate-600"
                          >
                            <CheckCircle2
                              size={17}
                              className="mt-0.5 shrink-0 text-[#0878e8]"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto pt-6">
                        <Link
                          href="/contact-us/"
                          className="service-link inline-flex items-center gap-2 border-t border-slate-200 pt-4 text-sm font-bold text-[#0878e8]"
                        >
                          Discuss This Service
                          <ArrowRight size={17} />
                        </Link>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* PROCESS */}
        <section className="services-process-section px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
                  How We Work
                </p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                  Simple steps. Clear communication.
                </h2>
                <p className="mt-4 leading-7 text-blue-100">
                  A practical workflow designed to make ongoing support
                  easier for institutions and businesses.
                </p>
              </div>
            </Reveal>

            <div className="relative mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {process.map(({ number, title, description, icon: Icon }) => (
                <Reveal key={number} className="h-full">
                  <article className="process-card h-full">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-black tracking-widest text-blue-200">
                        {number}
                      </span>
                      <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-white">
                        <Icon size={22} />
                      </span>
                    </div>
                    <h3 className="mt-6 text-lg font-extrabold text-white">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-blue-100">
                      {description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SUPPORT PLAN */}
        <section className="px-5 py-16 sm:px-8 lg:py-20">
          <Reveal className="mx-auto max-w-7xl">
            <div className="services-plan-panel">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-2 text-xs font-bold uppercase tracking-wider text-[#0878e8]">
                  <Sparkles size={15} />
                  Flexible Support
                </span>

                <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#082a4a] sm:text-4xl">
                  Need ongoing help with your daily work?
                </h2>

                <p className="mt-4 leading-8 text-slate-600">
                  Get a suitable support plan for recurring office work,
                  documentation, reporting and digital tasks. We can
                  discuss the scope based on your actual requirements.
                </p>

                <p className="mt-4 text-sm font-semibold text-slate-500">
                  Support plans start from
                </p>
                <p className="mt-1 text-4xl font-black text-[#0878e8]">
                  ₹7,000
                  <span className="ml-2 text-base font-semibold text-slate-500">
                    / month
                  </span>
                </p>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Final pricing depends on the services, workload and
                  support requirements.
                </p>
              </div>

              <div className="services-plan-art">
                <div className="plan-art-circle plan-circle-one" />
                <div className="plan-art-circle plan-circle-two" />

                <div className="plan-art-card">
                  <div className="flex items-center gap-3">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-[#0878e8]">
                      <FileText size={23} />
                    </span>
                    <div>
                      <p className="font-extrabold text-[#082a4a]">
                        Office Support
                      </p>
                      <p className="text-xs text-slate-500">
                        Organised everyday tasks
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3">
                    {[
                      "Documentation",
                      "Data & reporting",
                      "Digital assistance",
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#0878e8]"
                        />
                        <span className="text-sm text-slate-600">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 lg:col-span-2">
                <Link
                  href="/contact-us/"
                  className="modern-button inline-flex items-center gap-2 rounded-full bg-[#0878e8] px-6 py-3.5 font-bold text-white hover:bg-[#0668ca]"
                >
                  Get a Custom Quote <ArrowRight size={18} />
                </Link>

                <Link
                  href="/pricing/"
                  className="modern-button inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3.5 font-bold text-[#082a4a] hover:bg-blue-50"
                >
                  Explore Pricing <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </Reveal>
        </section>

        {/* FINAL CTA */}
        <section className="px-5 pb-16 sm:px-8 lg:pb-24">
          <Reveal className="mx-auto max-w-7xl">
            <div className="services-final-cta">
              <div className="relative z-10 max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
                  Let&apos;s Work Together
                </p>

                <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">
                  Looking for dependable digital support?
                </h2>

                <p className="mt-4 max-w-2xl leading-8 text-blue-100">
                  Partner with Lakshmi Durga Solutions for virtual
                  computer operator, DTP, graphic design, data entry,
                  reporting and digital service support tailored to your
                  organisation.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/contact-us/"
                    className="modern-button inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-[#082a4a] hover:bg-blue-50"
                  >
                    Get a Quote <ArrowRight size={18} />
                  </Link>

                  <a
                    href="https://wa.me/919393452444"
                    target="_blank"
                    rel="noreferrer"
                    className="modern-button inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 font-bold text-white hover:bg-white/10"
                  >
                    <MessageCircle size={18} />
                    WhatsApp Us
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
        <FaWhatsapp size={32} />
      </a>
      <ScrollToTop/>
    </>
  );
}