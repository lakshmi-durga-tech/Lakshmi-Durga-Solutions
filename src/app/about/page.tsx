
"use client";

import Link from "next/link";
import Header from "@/components/Header copy";
import FounderSection from "@/components/FounderSection";
import {
  ArrowRight,
  ArrowUpRight,
  Newspaper,
  PanelsTopLeft,
  BookOpen,
  Megaphone,
  Target,
  Users,
  Lightbulb,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";

const services = [
  {
    number: "01",
    title: "Newspaper Ads",
    description:
      "Promote your business through Telugu and English newspaper advertisements. Suitable for business promotions, retail offers, education advertisements, announcements, and local campaigns.",
    image:
      "https://sakfs.sitcdn.com/SAK/2024/04/15/vijB_MAIN/5_16/a1ec2a01_16.jpg",
    alt: "Telugu newspaper page featuring printed newspaper advertisements",
    href: "/services-us/",
    icon: Newspaper,
  },
  {
    number: "02",
    title: "Classified Ads",
    description:
      "Reach newspaper readers with classified advertisements for job vacancies, property listings, rentals, education, business services, and public notices.",
    image:
      "https://imgv2-1-f.scribdassets.com/img/document/228624726/original/7cfb71e962/1?v=1",
    alt: "Newspaper classified advertisements",
    href: "/services-us/",
    icon: PanelsTopLeft,
  },
  {
    number: "03",
    title: "Display Ads",
    description:
      "Give your brand greater visibility through newspaper display advertisements, promotional campaigns, product advertisements, and business announcements.",
    image:
      "https://www.myhoardings.com/OOHAdvertising/wp-content/uploads/2025/11/unipole_advertising_services_in_ahmedabad_gujarat_banner_2.jpg",
    alt: "Large outdoor display advertising billboard",
    href: "/services-us/",
    icon: BookOpen,
  },
  {
    number: "04",
    title: "Ad Designing",
    description:
      "Get creative advertising designs for newspaper ads, promotional posters, brochures, pamphlets, business offers, and marketing campaigns.",
    image:
      "https://i.etsystatic.com/54254928/r/il/e8c12a/7052736051/il_794xN.7052736051_ffxs.jpg",
    alt: "Creative brochure and promotional advertising design examples",
    href: "/services-us/",
    icon: Megaphone,
  },
];

const principles = [
  {
    title: "Purposeful Communication",
    description:
      "We focus on communicating your message clearly and in line with your business objective.",
    icon: Target,
    color: "bg-blue-600",
  },
  {
    title: "Audience-Focused Thinking",
    description:
      "We consider your business, audience, and promotional needs when discussing advertising ideas.",
    icon: Users,
    color: "bg-green-600",
  },
  {
    title: "Creative Presentation",
    description:
      "We aim for thoughtful layouts and engaging visuals that present your message effectively.",
    icon: Lightbulb,
    color: "bg-amber-500",
  },
];

const whatsappUrl =
  "https://wa.me/919393452444?text=Hello%20Lakshmi%20Durga%20Solutions%2C%20I%20would%20like%20to%20discuss%20an%20advertising%20requirement.";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="overflow-hidden bg-white text-[#082A4A]">
        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-[#061F3D] text-white">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_85%_15%,rgba(8,120,232,0.30),transparent_42%),radial-gradient(ellipse_at_10%_100%,rgba(21,128,61,0.20),transparent_38%)]" />

          <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 pb-20 pt-12 sm:px-8 sm:pt-16 md:pb-28 lg:grid-cols-[1fr_1fr] lg:px-12">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-100">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                About Lakshmi Durga Solutions
              </div>

              <h1 className="mt-7 text-4xl font-black leading-[1.12] tracking-tight sm:text-5xl xl:text-6xl">
                Newspaper Ads.
                <span className="block text-[#1596FF]">
                  Classified Ads.
                </span>
                <span className="block">Display Ads & Designing.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-white/70 sm:text-lg">
                Advertising solutions for businesses—from Telugu newspaper
                advertisements and classified listings to display ads and
                creative designing that helps communicate your message.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/services-us/"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0878E8] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-blue-500"
                >
                  Explore Our Services
                  <ArrowRight size={17} />
                </Link>

                <a
                  href="/contact-us/?source=agency"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-3.5 text-sm font-bold transition hover:bg-white/10"
                >
                  <MessageCircle size={17} className="text-green-400" />
                  Contact Us
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/15 pt-6">
                <div>
                  <p className="text-sm font-bold text-white">
                    Newspaper Ads
                  </p>
                  <p className="mt-1 text-xs text-white/50">
                    Telugu & English media
                  </p>
                </div>

                <div>
                  <p className="text-sm font-bold text-white">
                    Classified Ads
                  </p>
                  <p className="mt-1 text-xs text-white/50">
                    Business & public notices
                  </p>
                </div>

                <div>
                  <p className="text-sm font-bold text-white">
                    Ad Designing
                  </p>
                  <p className="mt-1 text-xs text-white/50">
                    Creative promotional designs
                  </p>
                </div>
              </div>
            </div>

            {/* Asymmetric hero imagery */}
            <div className="relative mx-auto w-full max-w-2xl lg:pl-4">
              <div className="absolute -left-2 top-10 h-3/4 w-3/4 rounded-[45%_55%_25%_75%] bg-[#15803D]/70 sm:-left-5" />

              <div className="relative h-[330px] overflow-hidden rounded-[42%_8%_8%_20%] border border-white/15 shadow-2xl sm:h-[440px] lg:h-[510px]">
                <img
                  src="https://sakfs.sitcdn.com/SAK/2024/04/15/vijB_MAIN/5_16/a1ec2a01_16.jpg"
                  alt="Telugu newspaper page showing printed advertisements"
                  className="h-full w-full object-cover"
                  fetchPriority="high"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061F3D]/85 via-[#061F3D]/10 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-[#061F3D]/75 p-5 backdrop-blur-md sm:bottom-7 sm:left-7 sm:right-7">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                    Newspaper Advertising
                  </p>
                  <p className="mt-2 text-xl font-bold sm:text-2xl">
                    Make your message stand out.
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-4 right-5 h-2 w-24 rounded-full bg-[#0878E8] sm:right-10" />

              <div className="absolute -right-1 top-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/30 bg-[#15803D] text-white shadow-xl sm:-right-3 sm:h-20 sm:w-20">
                <Megaphone size={31} strokeWidth={1.6} />
              </div>
            </div>
          </div>

          <div className="absolute -bottom-10 left-[-5%] h-16 w-[110%] rounded-[50%] bg-white" />
        </section>

        {/* ABOUT US */}
        <section
          id="about"
          className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-12"
        >
          <div className="relative mx-auto w-full max-w-xl lg:mx-0">
            <div className="absolute -left-3 top-8 h-[82%] w-[90%] rounded-[3rem_1rem_3rem_1rem] border-2 border-[#0878E8] sm:-left-5" />

            <div className="relative h-[320px] overflow-hidden rounded-[2.5rem_1rem_3rem_1rem] shadow-xl sm:h-[430px]">
              <img
                src="https://i.etsystatic.com/54254928/r/il/e8c12a/7052736051/il_794xN.7052736051_ffxs.jpg"
                alt="Brochures and promotional advertising design examples"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-5 right-4 max-w-[90%] rounded-2xl bg-[#15803D] px-5 py-4 text-white shadow-xl sm:right-8 sm:px-7">
              <p className="text-sm font-bold">
                Ideas into communication
              </p>
              <p className="mt-1 text-xs text-white/80">
                Newspaper Ads · Creative Designing
              </p>
            </div>

            <div className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-2 text-xs font-bold text-[#082A4A] shadow-md">
              Creative advertising
            </div>
          </div>

          <div className="pt-5 lg:pt-0">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#0878E8]">
              Who We Are
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
              Advertising solutions built around{" "}
              <span className="text-[#15803D]">
                your business needs.
              </span>
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Lakshmi Durga Solutions offers advertising services for
              businesses looking to reach their audience through newspaper
              advertisements, classified listings, display ads, and creative
              advertising designs.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Whether you want to announce a business offer, publish a
              classified advertisement, promote a product, or prepare a
              professional ad design, we discuss your requirement and the
              appropriate format for your message.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Telugu and English newspaper advertising",
                "Classified and display advertisement options",
                "Creative designs for promotions and campaigns",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0 text-[#15803D]"
                  />
                  <p className="text-sm font-semibold leading-6 text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/ad-agency/"
              className="mt-8 inline-flex items-center gap-2 font-bold text-[#0878E8] transition hover:gap-3"
            >
              Explore the Ad Agency
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>

        {/* SERVICES */}
        <section
          id="services"
          className="relative overflow-hidden bg-[#F1F7FF] py-16 md:py-24"
        >
          <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
          <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-green-100/70 blur-3xl" />

          <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="grid items-end gap-7 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#15803D]">
                  What We Focus On
                </p>

                <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                  Our Advertising Services
                </h2>
              </div>

              <p className="max-w-2xl leading-7 text-slate-600 lg:justify-self-end">
                Explore newspaper advertising, classified listings, display
                advertisements, and creative ad designing for your business
                and promotional campaigns.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <Link
                    key={service.title}
                    href={service.href}
                    className={`group overflow-hidden rounded-[1.6rem] border border-blue-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
                      index % 2 === 1 ? "xl:mt-8" : ""
                    }`}
                  >
                    <div className="relative h-52 overflow-hidden sm:h-56">
                      <img
                        src={service.image}
                        alt={service.alt}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#082A4A]/75 via-transparent to-transparent" />

                      <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#0878E8] shadow-lg">
                        <Icon size={22} />
                      </div>

                      <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#082A4A]">
                        {service.number}
                      </span>
                    </div>

                    <div className="p-5">
                      <h3 className="text-lg font-extrabold">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-slate-600">
                        {service.description}
                      </p>

                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0878E8]">
                        Know More
                        <ArrowRight
                          size={16}
                          className="transition group-hover:translate-x-1"
                        />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* OUR APPROACH */}
        <section className="px-5 py-16 sm:px-8 md:py-24 lg:px-12">
          <div className="mx-auto grid max-w-[1440px] overflow-hidden rounded-[2rem] bg-[#061F3D] text-white shadow-xl lg:grid-cols-[0.85fr_1.15fr]">
            <div className="relative min-h-[280px] sm:min-h-[400px]">
              <img
                src="https://i.etsystatic.com/54254928/r/il/e8c12a/7052736051/il_794xN.7052736051_ffxs.jpg"
                alt="Creative advertising design and promotional materials"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#061F3D]/70 via-transparent to-transparent" />

              <span className="absolute bottom-6 left-6 rounded-full border border-white/30 bg-[#061F3D]/65 px-4 py-2 text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                Our Approach
              </span>
            </div>

            <div className="p-7 sm:p-10 lg:p-12">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-[#65B4FF]">
                Creative with a purpose
              </p>

              <h2 className="mt-4 max-w-xl text-3xl font-black leading-tight sm:text-4xl">
                The right message. The right advertising format.
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-white/65">
                Every advertising requirement is different. We aim to
                understand your message and promotional objective before
                discussing the suitable newspaper ad, classified listing,
                display advertisement, or creative design.
              </p>

              <div className="mt-8 space-y-6">
                {principles.map((principle) => {
                  const Icon = principle.icon;

                  return (
                    <div key={principle.title} className="flex gap-4">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${principle.color} text-white`}
                      >
                        <Icon size={21} />
                      </div>

                      <div>
                        <h3 className="font-bold">{principle.title}</h3>
                        <p className="mt-1 text-sm leading-6 text-white/60">
                          {principle.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <FounderSection servicesHref="/ad-agency/" />

        {/* CONTACT CTA */}
        <section className="px-5 pb-16 sm:px-8 md:pb-24 lg:px-12">
          <div className="relative mx-auto flex max-w-[1440px] flex-col gap-7 overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#082A4A] via-[#064477] to-[#086447] px-6 py-10 text-white sm:px-10 sm:py-12 lg:flex-row lg:items-center lg:justify-between lg:px-14">
            <div className="absolute -right-12 -top-24 h-64 w-64 rounded-full border-[35px] border-white/5" />

            <div className="relative max-w-2xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-blue-200">
                Let&apos;s Discuss Your Campaign
              </p>

              <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                Need a newspaper ad or creative design?
              </h2>

              <p className="mt-4 leading-7 text-white/70">
                Tell us about your business and what you want to promote.
                Let&apos;s discuss your newspaper advertisement, classified
                listing, display ad, or designing requirement.
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="relative inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full bg-[#15803D] px-6 py-4 font-bold text-white transition hover:bg-green-700 lg:self-center"
            >
              <MessageCircle size={18} />
              Start a Conversation
              <ArrowUpRight size={17} />
            </a>
          </div>
        </section>
      </main>

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
                <a
                  href="/price/"
                  className="transition hover:text-[#0878E8]"
                >
                  Pricing
                </a>

                <a
                  href="/services-us/"
                  className="transition hover:text-[#0878E8]"
                >
                  Services
                </a>

                <a
                  href="/about/"
                  className="transition hover:text-[#0878E8]"
                >
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
    </>
  );
}
