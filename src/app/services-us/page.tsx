
"use client";

import Link from "next/link";
import Header from "@/components/Header copy";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Newspaper,
  PanelsTopLeft,
  Megaphone,
  BookOpen,
  Printer,
  Sparkles,
} from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";

const services = [
  {
    number: "01",
    title: "Newspaper Ads",
    description:
      "Promote your business through Telugu and English newspaper advertisements, including business promotions, retail offers, education ads, and announcements.",
    category: "NEWSPAPER ADVERTISING",
    href: "/services-us/",
    image:
      "https://sakfs.sitcdn.com/SAK/2024/04/15/vijB_MAIN/5_16/a1ec2a01_16.jpg",
    alt: "Telugu newspaper page featuring printed advertisements",
    icon: Newspaper,
  },
  {
    number: "02",
    title: "Classified Ads",
    description:
      "Reach newspaper readers with classified advertisements for job vacancies, property listings, rentals, education, business services, and public notices.",
    category: "CLASSIFIED ADVERTISING",
    href: "/services-us/",
    image:
      "https://imgv2-1-f.scribdassets.com/img/document/228624726/original/7cfb71e962/1?v=1",
    alt: "Newspaper classified advertisements",
    icon: PanelsTopLeft,
  },
  {
    number: "03",
    title: "Display Ads",
    description:
      "Promote your brand, products, and offers through newspaper display advertisements and impactful advertising layouts.",
    category: "DISPLAY ADVERTISING",
    href: "/services-us/",
    image:
      "https://www.myhoardings.com/OOHAdvertising/wp-content/uploads/2025/11/unipole_advertising_services_in_ahmedabad_gujarat_banner_2.jpg",
    alt: "Large outdoor display advertising billboard",
    icon: Megaphone,
  },
  {
    number: "04",
    title: "Ad Designing",
    description:
      "Get creative designs for newspaper ads, promotional posters, brochures, pamphlets, business offers, and marketing campaigns.",
    category: "CREATIVE AD DESIGN",
    href: "/services-us/",
    image:
      "https://i.etsystatic.com/54254928/r/il/e8c12a/7052736051/il_794xN.7052736051_ffxs.jpg",
    alt: "Brochure and promotional advertising design examples",
    icon: BookOpen,
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn about your business, audience and campaign objective.",
  },
  {
    number: "02",
    title: "Create",
    description:
      "We develop a visual concept aligned with your message.",
  },
  {
    number: "03",
    title: "Refine",
    description:
      "We review the details and incorporate agreed feedback.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We provide the approved artwork in the agreed format.",
  },
];

export default function AdAgencyPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#101010]">
      <Header />

      {/* HERO */}
      <section className="relative px-5 pb-20 pt-32 sm:px-8 sm:pt-36 lg:px-14 lg:pb-28 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#15803D]" />
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-600">
              Newspaper Ads & Advertising Solutions
            </p>
          </div>

          <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="relative z-10">
              <h1 className="max-w-4xl text-[clamp(3.3rem,8vw,7.7rem)] font-black leading-[0.88] tracking-[-0.075em]">
                MAKE YOUR
                <br />
                <span className="text-[#0878E8]">BRAND</span> SEEN.
                <br />
                MAKE IT
                <br />
                <span className="relative inline-block">
                  MATTER.
                  <span className="absolute -bottom-1 left-1 h-2 w-[70%] -rotate-2 rounded-full bg-[#15803D] sm:h-3" />
                </span>
              </h1>

              <p className="mt-9 max-w-sm text-base leading-7 text-gray-600">
                Newspaper advertisements, classified listings, display ads,
                and creative designs to help your business communicate its
                message and reach its audience.
              </p>
            </div>

            {/* HERO COLLAGE */}
            <div className="relative mx-auto h-[390px] w-full max-w-[530px] sm:h-[470px] lg:h-[520px]">
              <div className="absolute right-2 top-2 h-[72%] w-[70%] rotate-[5deg] overflow-hidden rounded-[46%_46%_12px_12px] bg-[#0878E8] sm:right-5">
                <img
                  src="https://sakfs.sitcdn.com/SAK/2024/04/15/vijB_MAIN/5_16/a1ec2a01_16.jpg"
                  alt="Telugu newspaper page with printed advertisements"
                  fetchPriority="high"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute bottom-4 left-1 z-10 w-[52%] -rotate-[7deg] rounded-[8px_55px_8px_8px] bg-[#101010] p-4 text-white shadow-2xl sm:bottom-6 sm:left-0 sm:p-6">
                <span className="text-[10px] font-bold tracking-[0.25em] text-[#7DB8FF]">
                  IDEAS INTO IMPACT
                </span>
                <p className="mt-3 text-2xl font-black leading-tight sm:text-4xl">
                  GOOD
                  <br />
                  DESIGN.
                  <br />
                  <span className="text-[#15803D]">REAL</span> PURPOSE.
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-white/20 pt-3">
                  <span className="text-[10px] uppercase tracking-widest text-white/60">
                    LDS CREATIVE
                  </span>
                  <ArrowUpRight size={19} />
                </div>
              </div>

              <div className="absolute right-0 top-[55%] z-20 grid h-24 w-24 rotate-12 place-items-center rounded-[35%_10%_35%_10%] bg-[#15803D] text-white shadow-xl sm:h-32 sm:w-32">
                <div className="-rotate-12 text-center">
                  <Sparkles className="mx-auto mb-1" size={23} />
                  <p className="text-xs font-black uppercase tracking-wider sm:text-sm">
                    Stand
                    <br />
                    Out.
                  </p>
                </div>
              </div>

              <div className="absolute left-[43%] top-0 z-20 grid h-16 w-16 place-items-center rounded-full border-[5px] border-white bg-[#0878E8] text-white shadow-lg sm:h-20 sm:w-20">
                <Megaphone size={27} />
              </div>

              <div className="absolute bottom-0 right-[15%] h-12 w-24 -rotate-12 rounded-full border-2 border-[#101010] sm:h-16 sm:w-32" />
            </div>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-gray-200 pt-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gray-500">
              WHAT WE DO
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
              <span>Newspaper Ads</span>
              <span className="text-[#0878E8]">/</span>
              <span>Classified Ads</span>
              <span className="text-[#0878E8]">/</span>
              <span>Display Ads</span>
              <span className="text-[#0878E8]">/</span>
              <span>Ad Designing</span>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED CAMPAIGNS */}
      <section
        id="work"
        className="scroll-mt-24 bg-[#101010] px-5 py-20 text-white sm:px-8 lg:px-14 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#7DB8FF]">
                01 / OUR ADVERTISING SERVICES
              </p>
              <h2 className="text-5xl font-black tracking-[-0.06em] sm:text-7xl">
                WORK THAT
                <br />
                <span className="text-[#0878E8]">SPEAKS.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-white/60">
              Explore our newspaper advertising, classified ads, display
              advertising, and creative ad designing services.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-7">
            <Link
              href="/services-us/"
              aria-label="Explore newspaper advertising"
              className="group md:col-span-7"
            >
              <div className="relative h-[300px] overflow-hidden rounded-[4px_70px_4px_4px] bg-gray-800 sm:h-[420px]">
                <img
                  src={services[0].image}
                  alt={services[0].alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-white px-4 py-2 text-[10px] font-black tracking-[0.15em] text-black">
                  TELUGU & ENGLISH PRINT
                </span>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs text-white/70">01 — PRINT MEDIA</p>
                  <h3 className="mt-2 text-3xl font-black sm:text-4xl">
                    Newspaper Ads
                  </h3>
                </div>
              </div>
            </Link>

            <Link
              href="/services-us/"
              aria-label="Explore classified advertisements"
              className="group md:col-span-5 md:mt-16"
            >
              <div className="relative h-[300px] overflow-hidden rounded-[65px_4px_4px_4px] bg-[#0878E8] sm:h-[350px]">
                <img
                  src={services[1].image}
                  alt={services[1].alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <span className="absolute right-5 top-5 grid h-14 w-14 place-items-center rounded-full bg-[#15803D]">
                  <Newspaper size={24} />
                </span>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs text-white/70">02 — CLASSIFIEDS</p>
                  <h3 className="mt-2 text-3xl font-black sm:text-4xl">
                    Classified Ads
                  </h3>
                </div>
              </div>
            </Link>

            <Link
              href="/services-us/"
              aria-label="Explore display advertisements"
              className="group md:col-span-5"
            >
              <div className="relative h-[280px] overflow-hidden rounded-[4px_4px_65px_4px] bg-gray-800 sm:h-[350px]">
                <img
                  src={services[2].image}
                  alt={services[2].alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs text-white/70">03 — DISPLAY MEDIA</p>
                  <h3 className="mt-2 text-3xl font-black">
                    Display Ads
                  </h3>
                </div>
              </div>
            </Link>

            <Link
              href="/services-us/"
              aria-label="Explore advertising design"
              className="group md:col-span-7 md:mt-10"
            >
              <div className="relative h-[280px] overflow-hidden rounded-[4px_4px_4px_65px] bg-gray-800 sm:h-[350px]">
                <img
                  src={services[3].image}
                  alt={services[3].alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <p className="text-xs text-white/70">04 — CREATIVE DESIGN</p>
                    <h3 className="mt-2 text-3xl font-black sm:text-4xl">
                      Ad Designing
                    </h3>
                  </div>
                  <ArrowUpRight size={30} className="text-[#7DB8FF]" />
                </div>
              </div>
            </Link>
          </div>

          <p className="mt-7 text-xs leading-6 text-white/45">
            Images illustrate advertising formats and creative concepts; they
            are not represented as completed client campaigns.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-14 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 grid gap-6 md:grid-cols-2 md:items-end">
            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.25em] text-[#15803D]">
                02 / OUR SERVICES
              </p>
              <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.06em] sm:text-7xl">
                IDEAS MADE
                <br />
                <span className="text-[#0878E8]">VISIBLE.</span>
              </h2>
            </div>
            <p className="max-w-lg text-base leading-7 text-gray-600 md:justify-self-end">
              From Telugu newspaper advertisements and classified listings
              to display ads and creative design, choose an advertising
              format suited to your communication needs.
            </p>
          </div>

          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.number}
                  href={service.href}
                  className="group grid gap-5 py-7 transition md:grid-cols-[60px_1fr_0.8fr_70px] md:items-center md:gap-7 md:py-9"
                >
                  <span className="text-sm font-bold text-[#0878E8]">
                    {service.number}
                  </span>

                  <div>
                    <p className="mb-2 text-[10px] font-bold tracking-[0.2em] text-gray-500">
                      {service.category}
                    </p>
                    <h3 className="max-w-lg text-2xl font-black tracking-tight transition group-hover:text-[#0878E8] sm:text-3xl">
                      {service.title}
                    </h3>
                  </div>

                  <p className="max-w-md text-sm leading-6 text-gray-600">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-start md:justify-end">
                    <span className="grid h-12 w-12 place-items-center rounded-[4px_18px_4px_4px] bg-[#0878E8] text-white transition group-hover:rounded-full group-hover:bg-[#15803D]">
                      <Icon size={22} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-gray-50 px-5 py-20 sm:px-8 lg:px-14 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.25em] text-[#0878E8]">
              03 / HOW WE WORK
            </p>
            <h2 className="text-4xl font-black tracking-[-0.06em] sm:text-6xl">
              SIMPLE PROCESS.
              <br />
              <span className="text-[#15803D]">CLEAR DIRECTION.</span>
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => (
              <div
                key={step.number}
                className="border-t-2 border-[#101010] pt-5 transition hover:border-[#15803D]"
              >
                <span className="text-sm font-black text-[#0878E8]">
                  {step.number}
                </span>
                <h3 className="mt-6 text-2xl font-black">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-14 lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="aspect-[4/5] overflow-hidden rounded-[100px_4px_4px_4px] bg-[#0878E8]">
              <img
                src={services[3].image}
                alt="Creative advertising and promotional design examples"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-5 -right-2 rounded-[4px_24px_4px_4px] bg-[#0878E8] px-6 py-5 text-white sm:-right-5">
              <p className="text-xs font-bold uppercase tracking-widest">
                OUR APPROACH
              </p>
              <p className="mt-1 text-xl font-black">Purposeful Creative</p>
            </div>
          </div>

          <div className="pt-5 md:pl-8">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.25em] text-[#15803D]">
              04 / ABOUT LAKSHMI DURGA
            </p>
            <h2 className="text-4xl font-black leading-[1.02] tracking-[-0.06em] sm:text-6xl">
              GOOD ADVERTISING
              <br />
              STARTS WITH
              <br />
              <span className="text-[#0878E8]">A CLEAR IDEA.</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-600">
              Lakshmi Durga Solutions focuses on newspaper advertising,
              classified advertisements, display ads, and creative ad
              designing for businesses. We aim to help communicate your
              products, services, offers, and announcements clearly.
            </p>

            <ul className="mt-7 space-y-3">
              {[
                "Telugu and English newspaper advertisements",
                "Classified and display advertising options",
                "Creative designs for promotions and campaigns",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm font-semibold"
                >
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#15803D] text-white">
                    <Check size={14} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="px-5 pb-16 sm:px-8 md:pb-24 lg:px-14">
        <div className="relative mx-auto flex max-w-7xl flex-col gap-7 overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#082A4A] via-[#064477] to-[#086447] px-6 py-10 text-white sm:px-10 sm:py-12 lg:flex-row lg:items-center lg:justify-between lg:px-14">
          <div className="absolute -right-12 -top-24 h-64 w-64 rounded-full border-[35px] border-white/5" />

          <div className="relative max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-blue-200">
              Let&apos;s Discuss Your Campaign
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Need an advertisement for your business?
            </h2>

            <p className="mt-4 leading-7 text-white/70">
              Tell us what you want to promote. Let&apos;s discuss your
              newspaper advertisement, classified listing, display ad,
              or creative designing requirement.
            </p>
          </div>

          <a
            href="https://wa.me/919393452444?text=Hello%20Lakshmi%20Durga%20Solutions%2C%20I%20would%20like%20to%20discuss%20an%20advertising%20requirement."
            target="_blank"
            rel="noreferrer"
            className="relative inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full bg-[#15803D] px-6 py-4 font-bold text-white transition hover:bg-green-700 lg:self-center"
          >
            <Megaphone size={18} />
            Discuss Your Ad
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#082A4A] text-white">
        <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 lg:px-12">
          <div className="grid gap-8 border-b border-white/15 pb-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="text-lg font-black">LAKSHMI DURGA</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0878E8]">
                Newspaper Ads & Advertising Solutions
              </p>
              <p className="mt-4 max-w-xs text-sm leading-6 text-white/65">
                Newspaper advertising, classified ads, display advertisements,
                and creative designing for business promotions.
              </p>
            </div>

            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-white/50">
                Explore
              </p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-white/80">
                <a href="/price/" className="transition hover:text-[#0878E8]">
                  Pricing
                </a>
                <a
                  href="/services-us/"
                  className="transition hover:text-[#0878E8]"
                >
                  Services
                </a>
                <a href="/about/" className="transition hover:text-[#0878E8]">
                  About Us
                </a>
                <Link
                  href="/"
                  className="transition hover:text-[#15803D]"
                >
                  Main Website
                </Link>
              </div>
            </div>

            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-white/50">
                Get in Touch
              </p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-white/80">
                <a
                  href="tel:+919393452444"
                  className="transition hover:text-[#0878E8]"
                >
                  +91 93934 52444
                </a>
                <a
                  href="mailto:lakshmidurgasolutions@gmail.com"
                  className="break-words transition hover:text-[#0878E8]"
                >
                  lakshmidurgasolutions@gmail.com
                </a>
                <a
                  href="https://wa.me/919393452444"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-bold text-green-400"
                >
                  WhatsApp Us
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Lakshmi Durga Solutions. All rights
              reserved.
            </p>
            <p>Advertising with purpose.</p>
          </div>
        </div>
      </footer>
      <ScrollToTop/>
    </main>
  );
}
