
"use client";

import Link from "next/link";
import {
  ArrowRight,
  Check,
  CheckCircle2,
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
  MonitorCog,
  Code2,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";

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
  },
];

function getWhatsAppLink(serviceName: string) {
  const message = `Hello Lakshmi Durga Solutions,

I am interested in your ${serviceName} service.

Please share the details, pricing and process.

Thank you.`;

  return `https://wa.me/919393452444?text=${encodeURIComponent(message)}`;
}

export default function Home() {
  return (
    <>
      <Header />

      <main className="overflow-hidden bg-white text-slate-800">
        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#f7fbff] via-white to-[#edf6ff]">
          <div className="pointer-events-none absolute -right-32 -top-28 -z-10 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-36 left-0 -z-10 h-80 w-80 rounded-full bg-sky-100/70 blur-3xl" />

          <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:py-28">
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

            {/* HERO IMAGE */}
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

          {/* QUICK HIGHLIGHTS */}
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
        <section className="px-5 py-16 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-[#0878e8]">
                <Sparkles size={14} />
                Our Services
              </span>

              <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#082a4a] sm:text-4xl lg:text-5xl">
                Practical Solutions for Your Work
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Explore our services and contact our team directly
                through WhatsApp to discuss your requirements.
              </p>

              <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-[#0878e8]" />
            </div>

            <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;

                const isAdAgency =
                  service.title === "Advertising & Media Agency";

                const whatsappLink = getWhatsAppLink(service.title);

                return (
                  <article
                    key={service.number}
                    className="service-card group"
                  >
                    <div
                      className={`service-image-wrap ${service.shape}`}
                    >
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

                    {/* SERVICE CONTENT */}
                    <div className="px-1 pb-2 pt-6">
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

                      {/* SERVICE BUTTON - NO EXTRA GAP */}
                      <div className="mt-4">
                        {isAdAgency ? (
                          <Link
                            href="/ad-agency/"
                            aria-label="View Advertising and Media Agency services"
                            className="service-link inline-flex w-full items-center justify-between gap-2 border-t border-slate-200 pt-4 text-sm font-bold text-[#0878e8] transition-colors hover:text-[#075bb0]"
                          >
                            <span className="inline-flex items-center gap-2">
                              <Megaphone size={17} />
                              Click Here
                            </span>

                            <ArrowRight
                              size={17}
                              className="transition-transform group-hover:translate-x-1"
                            />
                          </Link>
                        ) : (
                          <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Enquire about ${service.title} on WhatsApp`}
                            className="service-link inline-flex w-full items-center justify-between gap-2 border-t border-slate-200 pt-4 text-sm font-bold text-[#0878e8] transition-colors hover:text-[#075bb0]"
                          >
                            <span className="inline-flex items-center gap-2">
                              <MessageCircle size={17} />
                              Click Here
                            </span>

                            <ArrowRight
                              size={17}
                              className="transition-transform group-hover:translate-x-1"
                            />
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
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
              We provide virtual computer operator, data entry, DTP,
              graphic design, MIS reporting and digital support services
              for institutions, offices and businesses.
            </p>

            <a
              href={getWhatsAppLink("General Enquiry")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#082a4a] transition hover:bg-blue-100"
            >
              Talk to Our Team <ArrowRight size={17} />
            </a>
          </div>

          <div>
            <h3 className="font-bold text-white">Company</h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li>
                <Link href="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us/" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/ad-agency/" className="footer-link">
                  Ad Agency
                </Link>
              </li>
              <li>
                <Link href="/blog/" className="footer-link">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/pricing/" className="footer-link">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white">Help &amp; Policies</h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li>
                <Link href="/contact-us/" className="footer-link">
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

      <ScrollToTop />
    </>
  );
}
