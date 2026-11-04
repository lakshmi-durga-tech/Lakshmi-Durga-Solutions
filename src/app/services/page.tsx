
import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  FileText,
  Laptop,
  Palette,
  PenTool,
  BarChart3,
  Presentation,
  Database,
  ScanText,
  ClipboardList,
  Megaphone,
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
    "Explore typing, DTP, graphic designing, MIS reports, OMR scanning, PowerPoint presentations, data entry, logo design, marks analysis and advertising services.",
  alternates: {
    canonical: "/services/",
  },
  openGraph: {
    title: "Professional Computer, Design & Advertising Services",
    description:
      "Reliable computer, documentation, design, data processing and advertising services by Lakshmi Durga Solutions.",
    url: "https://lakshmidurgasolutions.com/services/",
    siteName: "Lakshmi Durga Solutions",
    type: "website",
    locale: "en_IN",
    images: ["/images/LDS-Logo.jpg"],
  },
};

type Service = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  alt: string;
  icon: LucideIcon;
  shape: string;
  href?: string;
  isAdAgency?: boolean;
};

const services: Service[] = [
  {
    number: "01",
    title: "Typing Works",
    subtitle: "All Subjects",
    description:
      "Accurate typing services for academic, educational, office and general documentation requirements across different subjects.",
    features: [
      "Academic and general typing",
      "Assignments and reports",
      "Document preparation",
    ],
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
    alt: "Professional computer typing workspace",
    icon: Laptop,
    shape: "service-image-one",
  },
  {
    number: "02",
    title: "DTP Works",
    subtitle: "Multilingual",
    description:
      "Professional desktop publishing and document formatting services for multilingual content and various document requirements.",
    features: [
      "Multilingual document formatting",
      "Notices and certificates",
      "Reports, forms and layouts",
    ],
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=85",
    alt: "Document preparation and DTP workspace",
    icon: FileText,
    shape: "service-image-two",
  },
  {
    number: "03",
    title: "Graphic Designing",
    subtitle: "Creative Design Solutions",
    description:
      "Creative visual designs that help businesses and institutions communicate professionally across digital and print platforms.",
    features: [
      "Posters, banners and brochures",
      "Certificates and invitations",
      "Social media creatives",
    ],
    image:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1000&q=85",
    alt: "Creative graphic designing workspace",
    icon: PenTool,
    shape: "service-image-three",
  },
  {
    number: "04",
    title: "Data Analysis & MIS Reports",
    subtitle: "Excel, Access & Power BI",
    description:
      "Organised data analysis and reporting solutions to help institutions and businesses understand information and monitor performance.",
    features: [
      "Excel-based reports",
      "Microsoft Access data management",
      "Power BI dashboards",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85",
    alt: "Business data analysis and MIS reporting",
    icon: BarChart3,
    shape: "service-image-four",
  },
  {
    number: "05",
    title: "OMR Scanning",
    subtitle: "Answer Sheets & Data Processing",
    description:
      "OMR answer sheet scanning and data processing support for examination and assessment-related requirements.",
    features: [
      "Answer sheet scanning",
      "OMR data processing",
      "Structured result data",
    ],
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=85",
    alt: "Examination answer sheets and document processing",
    icon: ScanText,
    shape: "service-image-five",
  },
  {
    number: "06",
    title: "PowerPoint Presentations",
    subtitle: "Academic & Corporate",
    description:
      "Well-structured and visually engaging presentations for educational, professional and corporate requirements.",
    features: [
      "Academic presentations",
      "Corporate presentations",
      "Professional slide design",
    ],
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1000&q=85",
    alt: "Professional presentation workspace",
    icon: Presentation,
    shape: "service-image-six",
  },
  {
    number: "07",
    title: "Data Entry",
    subtitle: "High Accuracy & Bulk",
    description:
      "Reliable data entry and digital record preparation for businesses, offices and institutions handling regular or bulk data.",
    features: [
      "Bulk data entry",
      "Data organisation",
      "Digital record updates",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=85",
    alt: "Data entry and office documentation",
    icon: Database,
    shape: "service-image-one",
  },
  {
    number: "08",
    title: "Logo Designs",
    subtitle: "Business & Institutional",
    description:
      "Distinctive logo design services to help businesses, organisations and institutions establish a recognisable visual identity.",
    features: [
      "Business logo designs",
      "Institutional logo designs",
      "Brand identity concepts",
    ],
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1000&q=85",
    alt: "Logo and brand identity design",
    icon: Palette,
    shape: "service-image-two",
  },
  {
    number: "09",
    title: "Other Computer Related Works",
    subtitle: "As Per Your Requirement",
    description:
      "Additional computer-related services and digital assistance based on your specific personal, institutional or business needs.",
    features: [
      "Custom computer-related tasks",
      "Office digital assistance",
      "Requirement-based support",
    ],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=85",
    alt: "Computer and digital technology workspace",
    icon: Laptop,
    shape: "service-image-three",
  },
  {
    number: "10",
    title: "Marks Analysis",
    subtitle: "Results & Performance Reports",
    description:
      "Examination marks processing and performance analysis support to help educational institutions organise and review student results.",
    features: [
      "Result processing",
      "Marks analysis reports",
      "Performance summaries",
    ],
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85",
    alt: "Educational assessment and academic analysis",
    icon: ClipboardList,
    shape: "service-image-four",
  },
  {
  number: "11",
  title: "Advertising & Media Agency",
  subtitle: "Advertising & Digital Promotion",
  description:
    "Advertising and promotional solutions to help businesses and institutions communicate their offerings and reach their target audience.",
  features: [
    "Advertising campaign support",
    "Creative and promotional content",
    "Digital advertising solutions",
  ],
  image:
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1000&q=85",
  alt: "Advertising and creative campaign planning",
  icon: Megaphone,
  shape: "service-image-five",
  href: "/ad-agency/",
  isAdAgency: true,
},
];

const process = [
  {
    number: "01",
    title: "Share Your Requirement",
    description:
      "Tell us the type of typing, design, data processing or other service you need.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Get a Suitable Plan",
    description:
      "We discuss the scope of work, requirements and expected timelines.",
    icon: Workflow,
  },
  {
    number: "03",
    title: "Work Begins Promptly",
    description:
      "Our team starts the work with clear communication and professional execution.",
    icon: Clock3,
  },
  {
    number: "04",
    title: "Stay Supported",
    description:
      "Get assistance for your ongoing work and additional requirements.",
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
                From typing and documentation to data processing,
                creative design and advertising, we provide practical
                solutions for institutions, offices and businesses.
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
                      Typing · Data · Design · Advertising
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
                Services built around your requirements
              </h2>
            </Reveal>

            <Reveal>
              <p className="max-w-2xl text-base leading-8 text-slate-600 lg:justify-self-end">
                We support schools, colleges, coaching centers,
                institutions, offices and businesses with practical
                computer, documentation, data processing, design and
                advertising services.
              </p>
            </Reveal>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="px-5 pb-16 sm:px-8 lg:pb-24">
          <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              const destination = service.href || "/contact-us/";

              return (
                <Reveal key={service.number} className="h-full">
                  <article
                    className={`service-card group h-full ${
                      service.isAdAgency ? "ad-agency-card" : ""
                    }`}
                  >
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

                      <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#0878e8]">
                        {service.subtitle}
                      </p>

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
                          href={destination}
                          className="service-link inline-flex items-center gap-2 border-t border-slate-200 pt-4 text-sm font-bold text-[#0878e8]"
                        >
                          {service.isAdAgency
                            ? "Explore Ad Agency"
                            : "Discuss This Service"}
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
                  A practical workflow designed to make your work easier.
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

        {/* FINAL CTA */}
        <section className="px-5 py-16 sm:px-8 lg:py-24">
          <Reveal className="mx-auto max-w-7xl">
            <div className="services-final-cta">
              <div className="relative z-10 max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
                  Let&apos;s Work Together
                </p>

                <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">
                  Looking for dependable computer and digital services?
                </h2>

                <p className="mt-4 max-w-2xl leading-8 text-blue-100">
                  Partner with Lakshmi Durga Solutions for typing,
                  DTP, data processing, graphic design, presentations,
                  marks analysis and advertising support.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Link
                    href="/contact-us/"
                    className="modern-button inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-[#082a4a] hover:bg-blue-50"
                  >
                    Get a Quote <ArrowRight size={18} />
                  </Link>

                  <Link
                    href="/ad-agency/"
                    className="modern-button inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 font-bold text-white hover:bg-white/10"
                  >
                    <Megaphone size={18} />
                    Explore
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

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
              We provide typing, DTP, graphic design, data entry,
              reporting and advertising services for institutions,
              offices and businesses.
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
              <li><Link href="/ad-agency/" className="footer-link">Ad Agency</Link></li>
              <li><Link href="/blog/" className="footer-link">Blog</Link></li>
              <li><Link href="/pricing/" className="footer-link">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white">Help &amp; Policies</h3>
            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li><Link href="/contact-us/" className="footer-link">Contact Us</Link></li>
              <li><Link href="/privacy-policy/" className="footer-link">Privacy Policy</Link></li>
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

      <ScrollToTop />
    </>
  );
}
