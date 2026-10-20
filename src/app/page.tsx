"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRight,
  MonitorCog,
  Palette,
  ShieldCheck,
  Sparkles,
  Menu,
  X,
} from "lucide-react";

const services = [
  {
    id: "virtual-operator",
    title: "Virtual Computer Operator",
    subtitle: "BUSINESS & COMPUTER SUPPORT",
    description:
      "Typing, Data Entry, DTP, Graphic Design, MIS Reports, PPTs, Office & Educational Support.",
    href: "/virtual-operator/",
    button: "Explore Virtual Operator",
    color: "#0878E8",
    background: "#EFF6FF",
    icon: MonitorCog,
  },
  {
    id: "ad-agency",
    title: "Advertising & Media Agency",
    subtitle: "CREATIVE & ADVERTISING",
    description:
      "Newspaper Ads, Classified Ads, Display Ads, Ad Designing.",
    href: "/ad-agency/",
    button: "Explore Ad Agency",
    color: "#15803D",
    background: "#F0FDF4",
    icon: Palette,
  },
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#082A4A] animate-page-in">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3"
            aria-label="Lakshmi Durga Solutions home"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white">
              <img
                src="/images/LDS-Logo.jpg"
                alt="Lakshmi Durga Solutions Logo"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="min-w-0">
              <h1 className="truncate text-sm font-extrabold tracking-tight sm:text-lg">
                Lakshmi Durga Solutions
              </h1>
              <p className="mt-1 text-[9px] font-semibold tracking-[0.13em] text-slate-500 sm:text-xs">
                BUSINESS · DIGITAL · CREATIVE
              </p>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-7 md:flex">
            <a
              href="#services"
              className="text-sm font-semibold text-slate-600 transition-colors duration-200 hover:text-[#0878E8]"
            >
              Services
            </a>

            <a
              href="#about"
              className="text-sm font-semibold text-slate-600 transition-colors duration-200 hover:text-[#0878E8]"
            >
              About Us
            </a>

            <a
              href="https://wa.me/919393452444"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#082A4A] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0878E8] hover:shadow-lg"
            >
              Contact Us <ArrowRight size={16} />
            </a>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            className="rounded-lg border border-slate-200 p-2 transition-colors hover:bg-slate-50 md:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        {menuOpen && (
          <nav className="animate-menu-in border-t border-slate-100 bg-white px-5 py-5 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-4">
              <a
                href="#services"
                onClick={() => setMenuOpen(false)}
                className="font-semibold text-slate-700 hover:text-[#0878E8]"
              >
                Services
              </a>

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="font-semibold text-slate-700 hover:text-[#0878E8]"
              >
                About Us
              </a>

              <a
                href="https://wa.me/919393452444"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#15803D]"
              >
                Contact Us
              </a>
            </div>
          </nav>
        )}
      </header>

      
{/* HERO */}
<section className="border-b border-slate-200">
  <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
    <div className="w-full">
      <p className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-[#0878E8] sm:text-sm">
        Business Solutions & Creative Services
      </p>

      <h2 className="text-4xl font-bold leading-[1.15] tracking-tight text-[#082A4A] sm:text-5xl lg:text-6xl">
        Your Business.
        <span className="mt-2 block text-[#0878E8]">
          Our Digital Support.
        </span>
      </h2>

      <p className="mt-6 text-lg font-semibold leading-8 text-slate-700 sm:text-xl">
        Virtual Operations, Creative Design & Advertising — All Under One Roof.
      </p>

      <p className="mt-4 text-base leading-8 text-slate-600">
        From computer-based business support to creative advertising,
        discover practical services designed to help you manage work
        and present your business professionally.
      </p>
    </div>
  </div>
</section>


      {/* SERVICE SELECTION */}
      <section
        id="services"
        className="scroll-mt-24 bg-[#F7FAFE] py-16 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#15803D]">
              Our Services
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Find the Service You Need
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Choose a service category to explore its dedicated page and
              available services.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.id}
                  className="group animate-card-in rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl sm:p-8"
                  style={{
                    animationDelay: `${index * 140}ms`,
                  }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-105"
                      style={{
                        color: service.color,
                        backgroundColor: service.background,
                      }}
                    >
                      <Icon size={32} strokeWidth={1.8} />
                    </div>

                    <span className="rounded-full bg-slate-50 px-3 py-2 text-center text-[9px] font-extrabold tracking-wider text-slate-500 sm:text-[10px]">
                      {service.subtitle}
                    </span>
                  </div>

                  <h3 className="mt-6 text-2xl font-extrabold tracking-tight sm:text-3xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <Link
                    href={service.href}
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-4 text-sm font-extrabold text-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl active:scale-[0.98] sm:w-auto"
                    style={{ backgroundColor: service.color }}
                  >
                    {service.button}
                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-24 py-12 sm:py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div className="max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-widest text-[#0878E8]">
              Lakshmi Durga Solutions
            </p>

            <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
              Practical Support. Creative Possibilities.
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              From business operations to creative communication, discover
              digital and professional services tailored to your needs.
            </p>
          </div>

          <a
            href="https://wa.me/919393452444"
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-[#15803D] px-6 py-3.5 text-sm font-bold text-[#15803D] transition-all duration-300 hover:-translate-y-1 hover:bg-[#15803D] hover:text-white hover:shadow-lg"
          >
            Talk to Our Team <ArrowRight size={17} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#082A4A] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div>
            <p className="font-extrabold">Lakshmi Durga Solutions</p>
            <p className="mt-1 text-sm text-blue-100">
              Business support and creative solutions.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm text-blue-100 sm:flex-row sm:gap-6">
            <a
              href="tel:+919393452444"
              className="transition-colors hover:text-white"
            >
              +91 93934 52444
            </a>

            <a
              href="mailto:lakshmidurgasolutions@gmail.com"
              className="transition-colors hover:text-white"
            >
              lakshmidurgasolutions@gmail.com
            </a>
          </div>

          <p className="text-xs text-blue-200">
            © {new Date().getFullYear()} Lakshmi Durga Solutions
          </p>
        </div>
      </footer>

      {/* ANIMATIONS */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes pageIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes contentIn {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes menuIn {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-page-in {
          animation: pageIn 450ms ease-out both;
        }

        .animate-content-in {
          animation: contentIn 650ms ease-out both;
        }

        .animate-content-in-delayed {
          animation: contentIn 750ms 120ms ease-out both;
        }

        .animate-card-in {
          animation: contentIn 550ms ease-out both;
        }

        .animate-menu-in {
          animation: menuIn 220ms ease-out both;
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </main>
  );
}