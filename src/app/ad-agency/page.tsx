
"use client";

import Link from "next/link";
import Header from "@/components/Header copy";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Newspaper,
  PanelsTopLeft,
  Megaphone,
  BookOpen,
  MessageCircle,
  Target,
  CheckCircle2,
  BriefcaseBusiness,
  House,
  GraduationCap,
  ShoppingBag,
} from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";

const CONTACT_URL = "/contact-us/?source=agency";

const services = [
  {
    number: "01",
    title: "Newspaper Ads",
    subtitle: "TELUGU & ENGLISH NEWSPAPER ADVERTISING",
    description:
      "Prepare advertisements for newspaper publications with suitable headlines, business details, offers and print-ready creative layouts.",
    icon: Newspaper,
    color: "#0878E8",
    tag: "NEWSPAPER ADVERTISING",
  },
  {
    number: "02",
    title: "Classified Ads",
    subtitle: "JOBS • PROPERTY • ANNOUNCEMENTS",
    description:
      "Clear and compact classified advertisement content for job vacancies, property listings, education notices and business announcements.",
    icon: BookOpen,
    color: "#15803D",
    tag: "CLASSIFIED ADVERTISING",
  },
  {
    number: "03",
    title: "Display Ads",
    subtitle: "PROMOTIONAL NEWSPAPER ADVERTISEMENTS",
    description:
      "Create attention-grabbing display-ad layouts using strong headlines, product visuals, offers and contact information.",
    icon: PanelsTopLeft,
    color: "#0878E8",
    tag: "DISPLAY ADVERTISING",
  },
  {
    number: "04",
    title: "Ad Designing",
    subtitle: "CREATIVE LAYOUTS FOR YOUR MESSAGE",
    description:
      "Design advertising creatives for business promotions, retail offers, education campaigns, property advertisements and other print requirements.",
    icon: Megaphone,
    color: "#15803D",
    tag: "ADVERTISEMENT DESIGN",
  },
];

const concepts = [
  {
    number: "CONCEPT / 01",
    category: "NEWSPAPER DISPLAY AD",
    title: "Retail & festival offer advertisement",
    kind: "retail",
    bg: "#FFF7E8",
  },
  {
    number: "CONCEPT / 02",
    category: "CLASSIFIED AD",
    title: "Jobs and recruitment announcement",
    kind: "jobs",
    bg: "#EAF2FF",
  },
  {
    number: "CONCEPT / 03",
    category: "PROPERTY DISPLAY AD",
    title: "Real estate promotional advertisement",
    kind: "property",
    bg: "#EAF7EF",
  },
  {
    number: "CONCEPT / 04",
    category: "EDUCATION AD",
    title: "Admissions and coaching promotion",
    kind: "education",
    bg: "#F4EDFF",
  },
  {
    number: "CONCEPT / 05",
    category: "CLASSIFIED PROPERTY AD",
    title: "Property listing with key details",
    kind: "classified-property",
    bg: "#F4F5F7",
  },
  {
    number: "CONCEPT / 06",
    category: "CUSTOM AD DESIGN",
    title: "A clear visual identity for your campaign",
    kind: "brand",
    bg: "#082A4A",
  },
];

const process = [
  {
    number: "01",
    title: "Share Your Brief",
    description:
      "Tell us the purpose of the advertisement, your target audience, preferred format and the information that must appear.",
  },
  {
    number: "02",
    title: "Prepare the Creative",
    description:
      "We arrange the headline, content, offer details, visuals and contact information into an advertising layout.",
  },
  {
    number: "03",
    title: "Review the Design",
    description:
      "Check the advertisement details and request any agreed corrections before approving the final creative.",
  },
  {
    number: "04",
    title: "Confirm Publication",
    description:
      "For newspaper placements, confirm the publication, specifications, availability, schedule and charges before booking.",
  },
];

function NewspaperMasthead() {
  return (
    <div className="border-b-2 border-black pb-2">
      <p className="text-center font-serif text-xl font-black tracking-tight text-black sm:text-2xl">
        DAILY BUSINESS NEWS
      </p>
      <p className="mt-1 text-center text-[7px] font-bold tracking-[0.15em] text-slate-500">
        NEWS • BUSINESS • EDUCATION • PROPERTY
      </p>
    </div>
  );
}

function AdArtwork({ kind }: { kind: string }) {
  if (kind === "retail") {
    return (
      <div className="relative z-10 mx-auto w-full max-w-[330px] rotate-[-1deg] overflow-hidden border border-orange-200 bg-white shadow-xl transition-transform duration-500 group-hover:rotate-0">
        <div className="bg-[#082A4A] px-4 py-2 text-center text-[8px] font-black tracking-[0.2em] text-white">
          SPECIAL BUSINESS OFFER
        </div>

        <div className="p-4 sm:p-5">
          <p className="text-[9px] font-black uppercase tracking-widest text-orange-600">
            FESTIVE SHOPPING
          </p>

          <h3 className="mt-2 text-3xl font-black leading-[0.9] tracking-tight text-[#082A4A] sm:text-4xl">
            BIG
            <br />
            SAVINGS.
          </h3>

          <div className="mt-3 flex items-center gap-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-center text-xs font-black text-white">
              SPECIAL
              <br />
              OFFER
            </div>

            <div className="flex-1">
              <p className="text-xs font-extrabold text-[#082A4A]">
                YOUR SHOP NAME
              </p>
              <p className="mt-1 text-[9px] leading-4 text-slate-500">
                Add your products, offer details and store information here.
              </p>
            </div>
          </div>

          <div className="mt-4 bg-[#15803D] px-3 py-2 text-center text-[9px] font-black tracking-widest text-white">
            VISIT OUR STORE
          </div>
        </div>
      </div>
    );
  }

  if (kind === "jobs") {
    return (
      <div className="relative z-10 mx-auto w-full max-w-[330px] border border-slate-300 bg-white p-4 text-[#082A4A] shadow-xl transition-transform duration-500 group-hover:-translate-y-1 sm:p-5">
        <Newspaper size={20} className="text-[#0878E8]" />

        <div className="mt-3 border-y-2 border-[#082A4A] py-3">
          <p className="text-[9px] font-black tracking-[0.18em]">
            EMPLOYMENT OPPORTUNITY
          </p>

          <h3 className="mt-2 text-2xl font-black leading-tight">
            WE ARE
            <br />
            HIRING!
          </h3>

          <p className="mt-2 text-[10px] leading-5 text-slate-600">
            Recruitment advertisement sample for a company or institution.
          </p>
        </div>

        <div className="mt-3 space-y-2">
          {["POSITIONS AVAILABLE", "QUALIFICATION DETAILS", "HOW TO APPLY"].map(
            (item) => (
              <div
                key={item}
                className="flex items-center gap-2 border-b border-dashed border-slate-200 pb-2"
              >
                <BriefcaseBusiness
                  size={13}
                  className="shrink-0 text-[#15803D]"
                />
                <span className="text-[8px] font-extrabold tracking-wide">
                  {item}
                </span>
              </div>
            )
          )}
        </div>

        <p className="mt-3 bg-[#0878E8] px-3 py-2 text-center text-[9px] font-black text-white">
          CONTACT / APPLY HERE
        </p>
      </div>
    );
  }

  if (kind === "property") {
    return (
      <div className="relative z-10 mx-auto w-full max-w-[330px] overflow-hidden border border-green-200 bg-white shadow-xl transition-transform duration-500 group-hover:scale-[1.02]">
        <div className="bg-[#15803D] p-4 text-white sm:p-5">
          <p className="text-[9px] font-black tracking-[0.18em]">
            REAL ESTATE ADVERTISEMENT
          </p>
          <h3 className="mt-3 text-3xl font-black leading-[0.95]">
            YOUR
            <br />
            DREAM
            <br />
            PROPERTY.
          </h3>
          <p className="mt-3 max-w-[220px] text-[10px] leading-5 text-white/80">
            Promote your plots, homes, apartments or commercial properties.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 p-4">
          {["PLOTS", "HOMES", "APARTMENTS", "COMMERCIAL"].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 bg-green-50 p-2"
            >
              <House size={14} className="shrink-0 text-[#15803D]" />
              <span className="text-[8px] font-black text-[#082A4A]">
                {item}
              </span>
            </div>
          ))}
        </div>

        <div className="mx-4 mb-4 bg-[#082A4A] p-3 text-center text-[9px] font-black tracking-widest text-white">
          ENQUIRIES OPEN
        </div>
      </div>
    );
  }

  if (kind === "education") {
    return (
      <div className="relative z-10 mx-auto w-full max-w-[330px] overflow-hidden border border-violet-200 bg-white shadow-xl transition-transform duration-500 group-hover:-translate-y-1">
        <div className="bg-violet-700 p-4 text-white sm:p-5">
          <p className="text-[9px] font-black tracking-[0.18em]">
            EDUCATION ADVERTISEMENT
          </p>
          <h3 className="mt-3 text-3xl font-black leading-[0.95]">
            YOUR
            <br />
            NEXT STEP
            <br />
            STARTS HERE.
          </h3>
        </div>

        <div className="p-4">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-100">
              <GraduationCap size={25} className="text-violet-700" />
            </div>
            <div>
              <p className="text-xs font-black text-[#082A4A]">
                YOUR INSTITUTION
              </p>
              <p className="mt-1 text-[9px] text-slate-500">
                Admissions / Courses / Coaching
              </p>
            </div>
          </div>

          <p className="mt-3 text-[10px] leading-5 text-slate-600">
            Add course details, eligibility, admission dates and contact
            information to your education campaign.
          </p>

          <div className="mt-3 bg-violet-700 px-3 py-2 text-center text-[9px] font-black text-white">
            ENQUIRE FOR DETAILS
          </div>
        </div>
      </div>
    );
  }

  if (kind === "classified-property") {
    return (
      <div className="relative z-10 mx-auto w-full max-w-[330px] border border-slate-300 bg-white p-4 text-[#082A4A] shadow-xl transition-transform duration-500 group-hover:-translate-y-1 sm:p-5">
        <div className="flex items-center justify-between border-b-2 border-[#082A4A] pb-3">
          <div>
            <p className="text-xs font-black tracking-[0.14em]">
              PROPERTY CLASSIFIEDS
            </p>
            <p className="mt-1 text-[8px] text-slate-500">
              LISTING / SALE / RENT
            </p>
          </div>
          <House size={23} className="text-[#15803D]" />
        </div>

        {[
          ["FOR SALE", "Property details and location"],
          ["FOR RENT", "Type, area and availability"],
          ["CONTACT", "Owner or authorised agent details"],
        ].map(([title, description]) => (
          <div
            key={title}
            className="border-b border-dashed border-slate-300 py-3"
          >
            <p className="text-[9px] font-black text-[#0878E8]">{title}</p>
            <p className="mt-1 text-[10px] leading-4 text-slate-600">
              {description}
            </p>
          </div>
        ))}

        <p className="mt-3 text-[8px] font-bold uppercase tracking-widest text-slate-400">
          Sample classified layout
        </p>
      </div>
    );
  }

  return (
    <div className="relative z-10 mx-auto w-full max-w-[330px] overflow-hidden bg-white shadow-xl transition-transform duration-500 group-hover:scale-[1.02]">
      <div className="relative overflow-hidden bg-[#082A4A] p-5 text-white sm:p-6">
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border-[20px] border-[#0878E8]/70" />

        <div className="relative">
          <p className="text-[9px] font-black tracking-[0.2em] text-emerald-300">
            CREATIVE AD DESIGN
          </p>

          <h3 className="mt-6 text-4xl font-black leading-[0.9] tracking-[-0.05em]">
            YOUR
            <br />
            MESSAGE.
            <br />
            <span className="text-[#60A5FA]">YOUR BRAND.</span>
          </h3>

          <p className="mt-4 max-w-[210px] text-[10px] leading-5 text-white/75">
            A custom advertising layout built around your campaign message.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 p-3">
        {["HEADLINE", "VISUALS", "CONTACT"].map((item) => (
          <div
            key={item}
            className="bg-slate-100 px-2 py-3 text-center text-[7px] font-black tracking-widest text-[#082A4A]"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AdAgencyPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#082A4A]">
      <Header />

      {/* HERO */}
      <section className="relative">
        <div className="mx-auto max-w-[1440px] px-5 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-20 lg:px-12 lg:pb-28 lg:pt-24">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#15803D]" />
            <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-slate-500 sm:text-xs sm:tracking-[0.2em]">
              Newspaper Ads • Classified Ads • Display Ads • Designing
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <h1 className="hero-title text-[clamp(3rem,8.8vw,8rem)] font-black leading-[0.9] tracking-[-0.075em]">
                YOUR BRAND.
                <br />
                <span className="text-[#0878E8]">YOUR AD.</span>
                <br />
                IN PRINT.
              </h1>

              <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <p className="max-w-lg text-base leading-8 text-slate-600 sm:text-lg">
                  From newspaper classifieds to bold display advertisements,
                  we help turn your business message into a clear, purposeful
                  advertising creative.
                </p>

                <a
                  href="#services"
                  className="group inline-flex w-fit shrink-0 items-center gap-3 border-b-2 border-[#15803D] pb-2 text-sm font-extrabold transition-colors hover:text-[#15803D]"
                >
                  EXPLORE OUR SERVICES
                  <ArrowDownRight
                    size={19}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                  />
                </a>
              </div>
            </div>

            <div className="relative min-h-[350px] overflow-hidden bg-[#082A4A] p-6 sm:min-h-[390px] sm:p-8 lg:col-span-4">
              <div className="absolute -right-16 -top-12 h-64 w-64 rounded-full border-[34px] border-[#0878E8]" />
              <div className="absolute -bottom-20 -left-12 h-56 w-56 rotate-[-22deg] bg-[#15803D]" />

              <div className="relative z-10 flex min-h-[290px] flex-col justify-between">
                <div className="flex items-center justify-between text-white/70">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em]">
                    Print advertising
                  </p>
                  <Megaphone size={22} />
                </div>

                <div>
                  <p className="text-5xl font-black leading-[0.92] tracking-tighter text-white sm:text-6xl">
                    MADE TO
                    <br />
                    <span className="text-[#60A5FA]">BE SEEN.</span>
                  </p>

                  <p className="mt-5 max-w-[230px] text-sm leading-6 text-white/75">
                    Strong headlines. Clear layouts. Advertising that
                    communicates.
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-white/20 pt-4 text-[9px] font-bold tracking-widest text-white/70">
                  <span>CLASSIFIED / DISPLAY / DESIGN</span>
                  <span>LDS</span>
                </div>
              </div>
            </div>
          </div>

          {/* SERVICE MARQUEE */}
          <div className="mt-16 overflow-hidden border-y border-slate-200 py-5 sm:mt-24">
            <div className="flex min-w-max animate-marquee items-center gap-8 text-xs font-black tracking-[0.12em] text-[#082A4A] sm:gap-12 sm:text-sm">
              {Array.from({ length: 2 }).map((_, index) => (
                <div
                  key={index}
                  className="flex items-center gap-8 sm:gap-12"
                >
                  <span>NEWSPAPER ADS</span>
                  <span className="text-[#0878E8]">✳</span>
                  <span>CLASSIFIED ADS</span>
                  <span className="text-[#15803D]">✳</span>
                  <span>DISPLAY ADS</span>
                  <span className="text-[#0878E8]">✳</span>
                  <span>ADVERTISEMENT DESIGNING</span>
                  <span className="text-[#15803D]">✳</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AD CREATIVE PORTFOLIO — NO LOCATION PHOTOGRAPHS */}
      <section
        id="work"
        className="scroll-mt-24 bg-[#F5F8FC] py-16 sm:py-24"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="mb-10 flex flex-col gap-5 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#15803D]">
                Sample advertisement creatives
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.05em] sm:text-6xl">
                Ads that say
                <br />
                <span className="text-[#0878E8]">what matters.</span>
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-slate-600">
              Preview illustrative advertising layouts for retail, recruitment,
              property, education and business promotions.
            </p>
          </div>

          <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {concepts.map((project) => (
              <article key={project.number} className="project-card group">
                <div
                  className="relative flex min-h-[430px] flex-col justify-between overflow-hidden p-5 sm:min-h-[470px] sm:p-7"
                  style={{ backgroundColor: project.bg }}
                >
                  <div className="flex items-center justify-between text-[9px] font-bold tracking-[0.16em] text-slate-500">
                    <span>{project.number}</span>
                    <ArrowUpRight size={18} />
                  </div>

                  <AdArtwork kind={project.kind} />

                  <div className="relative z-10 border-t border-current/15 pt-4">
                    <p
                      className={`text-[9px] font-extrabold tracking-[0.18em] ${
                        project.kind === "brand"
                          ? "text-white/60"
                          : "text-slate-500"
                      }`}
                    >
                      {project.category}
                    </p>

                    <h3
                      className={`mt-2 text-xl font-black tracking-tight ${
                        project.kind === "brand"
                          ? "text-white"
                          : "text-[#082A4A]"
                      }`}
                    >
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-500">
                  Illustrative concept — not a published client campaign
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-sm leading-7 text-slate-600">
              These are sample layouts to demonstrate creative direction.
              Final content, pricing, newspaper specifications and publication
              availability are confirmed separately.
            </p>

            <Link
              href={CONTACT_URL}
              className="inline-flex w-fit shrink-0 items-center gap-2 font-extrabold text-[#0878E8] hover:text-[#15803D]"
            >
              Request an Ad Design <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="scroll-mt-24 py-16 sm:py-24"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#0878E8]">
                Our core services
              </p>

              <h2 className="mt-4 text-4xl font-black leading-[1.02] tracking-[-0.055em] sm:text-6xl">
                The right
                <br />
                message.
                <br />
                <span className="text-[#15803D]">The right ad.</span>
              </h2>

              <p className="mt-6 max-w-sm text-sm leading-7 text-slate-600">
                Tell us what you want to advertise. We can discuss the
                appropriate creative format, required content and publication
                specifications for your project.
              </p>

              <Link
                href={CONTACT_URL}
                className="mt-8 inline-flex items-center gap-2 bg-[#15803D] px-5 py-4 text-sm font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#082A4A]"
              >
                Discuss Your Ad <ArrowRight size={17} />
              </Link>
            </div>

            <div className="lg:col-span-8">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <Link
                    key={service.number}
                    href={CONTACT_URL}
                    className="service-row group grid gap-4 border-t border-slate-200 py-7 transition-colors duration-300 hover:bg-[#F7FAFE] sm:grid-cols-[55px_1fr_auto] sm:items-center sm:gap-5 sm:px-4"
                  >
                    <span className="text-xs font-black text-slate-400">
                      {service.number}
                    </span>

                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <Icon
                          size={20}
                          style={{ color: service.color }}
                        />

                        <h3 className="text-2xl font-black tracking-tight transition-colors duration-300 group-hover:text-[#0878E8] sm:text-3xl">
                          {service.title}
                        </h3>
                      </div>

                      <p className="mt-2 text-[9px] font-extrabold tracking-[0.16em] text-slate-500 sm:text-[10px]">
                        {service.subtitle}
                      </p>

                      <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
                        {service.description}
                      </p>

                      <span className="mt-3 inline-block text-[9px] font-black tracking-[0.16em] text-[#15803D]">
                        {service.tag}
                      </span>
                    </div>

                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 transition-all duration-300 group-hover:border-[#0878E8] group-hover:bg-[#0878E8] group-hover:text-white">
                      <ArrowRight
                        size={19}
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                      />
                    </span>
                  </Link>
                );
              })}

              <div className="border-t border-slate-200" />
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#F5F8FC] py-16 sm:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#15803D]">
                Our process
              </p>

              <h2 className="mt-4 text-4xl font-black leading-[1.02] tracking-[-0.055em] sm:text-6xl">
                From idea
                <br />
                to <span className="text-[#0878E8]">advertising.</span>
              </h2>

              <p className="mt-6 max-w-sm text-sm leading-7 text-slate-600">
                A straightforward workflow that lets you review the creative
                and confirm the required details before moving forward.
              </p>
            </div>

            <div className="grid gap-0 sm:grid-cols-2 lg:col-span-8">
              {process.map((item) => (
                <div
                  key={item.number}
                  className="border-t border-slate-200 py-6 sm:px-5 sm:py-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-[#0878E8]">
                      STEP {item.number}
                    </span>
                    <CheckCircle2
                      size={19}
                      className="text-[#15803D]"
                    />
                  </div>

                  <h3 className="mt-5 text-2xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="scroll-mt-24 bg-[#082A4A] py-16 text-white sm:py-24"
      >
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-12">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#60A5FA]">
              Lakshmi Durga Solutions • Ad Agency
            </p>

            <h2 className="mt-5 text-4xl font-black leading-[1.03] tracking-[-0.06em] sm:text-6xl">
              Advertising
              <br />
              starts with
              <br />
              <span className="text-[#60A5FA]">your message.</span>
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-white/80">
              Lakshmi Durga Solutions supports advertisement design and
              newspaper advertising enquiries. Whether you need a compact
              classified notice or a larger display creative, the starting
              point is understanding your message and preparing the
              advertisement around your requirements.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="border-l-2 border-[#0878E8] pl-4">
                <Target size={21} className="mb-3 text-[#60A5FA]" />
                <p className="text-sm font-extrabold">Goal-focused</p>
                <p className="mt-2 text-xs leading-6 text-white/60">
                  Start with your audience and campaign objective.
                </p>
              </div>

              <div className="border-l-2 border-[#15803D] pl-4">
                <Newspaper size={21} className="mb-3 text-emerald-300" />
                <p className="text-sm font-extrabold">Print-conscious</p>
                <p className="mt-2 text-xs leading-6 text-white/60">
                  Review the creative format and publication requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="relative overflow-hidden bg-[#F0FDF4] p-7 sm:p-12 lg:p-16">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border-[30px] border-[#15803D]/10" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#15803D]">
                  Have an advertisement in mind?
                </p>

                <h2 className="mt-4 max-w-3xl text-4xl font-black leading-[1.02] tracking-[-0.055em] sm:text-6xl">
                  LET&apos;S CREATE
                  <br />
                  YOUR NEXT
                  <br />
                  <span className="text-[#0878E8]">AD CAMPAIGN.</span>
                </h2>

                <p className="mt-5 max-w-lg text-sm leading-7 text-slate-600">
                  Share your ad type, content and preferred publication.
                  We&apos;ll discuss the creative requirements and next steps.
                </p>
              </div>

              <Link
                href={CONTACT_URL}
                className="group inline-flex w-fit items-center gap-3 bg-[#082A4A] px-6 py-4 text-sm font-extrabold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#0878E8] hover:shadow-xl"
              >
                <MessageCircle size={19} />
                Discuss Your Campaign
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#082A4A] text-white">
        <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 lg:px-12">
          <div className="grid gap-8 border-b border-white/15 pb-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="text-lg font-black">LAKSHMI DURGA</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-[#60A5FA]">
                Newspaper Ads • Classified Ads • Display Ads
              </p>

              <p className="mt-4 max-w-xs text-sm leading-6 text-white/65">
                Advertisement creative design and newspaper advertising
                support for business promotions and announcements.
              </p>
            </div>

            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-white/50">
                Explore
              </p>

              <div className="mt-4 flex flex-col gap-3 text-sm text-white/80">
                <a href="/services-us/" className="hover:text-[#60A5FA]">
                  Services
                </a>
                <a href="/price/" className="hover:text-[#60A5FA]">
                  Pricing
                </a>
                <a href="#about" className="hover:text-[#60A5FA]">
                  About Us
                </a>
                <Link href="/" className="hover:text-[#60A5FA]">
                  Main Website
                </Link>
              </div>
            </div>

            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-white/50">
                Get in touch
              </p>

              <div className="mt-4 flex flex-col gap-3 text-sm text-white/80">
                <a
                  href="tel:+919393452444"
                  className="hover:text-[#60A5FA]"
                >
                  +91 93934 52444
                </a>

                <a
                  href="mailto:lakshmidurgasolutions@gmail.com"
                  className="break-words hover:text-[#60A5FA]"
                >
                  lakshmidurgasolutions@gmail.com
                </a>

                <a
                  href="https://wa.me/919393452444"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-bold text-[#60A5FA]"
                >
                  WhatsApp Us <ArrowRight size={15} />
                </a>

                <Link
                  href={CONTACT_URL}
                  className="inline-flex items-center gap-2 font-bold text-white/80 hover:text-[#60A5FA]"
                >
                  Contact Form <ArrowRight size={15} />
                </Link>
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

      {/* ANIMATIONS & ACCESSIBILITY */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 90px;
        }

        @keyframes heroReveal {
          from {
            opacity: 0;
            transform: translateY(24px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .hero-title {
          animation: heroReveal 700ms ease-out both;
        }

        .animate-marquee {
          width: max-content;
          animation: marquee 32s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }

        .project-card {
          transition: transform 350ms ease;
        }

        .project-card:hover {
          transform: translateY(-3px);
        }

        .service-row {
          text-decoration: none;
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
      <ScrollToTop/>
    </main>
  );
}
