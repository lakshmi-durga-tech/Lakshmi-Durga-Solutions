
"use client";

import Link from "next/link";
import Header from "@/components/Header copy";
import {
  ArrowRight,
  Check,
  MessageCircle,
  Newspaper,
  Megaphone,
  PanelsTopLeft,
  BookOpen,
  Printer,
  Sparkles,
} from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";

const plans = [
  {
    name: "Starter",
    subtitle: "For simple advertising needs",
    price: "₹499",
    unit: "starting from",
    description:
      "For businesses that need a clean, professional promotional design.",
    features: [
      "One promotional poster design",
      "Business details and contact information",
      "Social media-ready artwork",
      "One design revision",
      "Digital file delivery",
    ],
    popular: false,
  },
  {
    name: "Business",
    subtitle: "For regular promotions",
    price: "₹1,499",
    unit: "starting from",
    description:
      "For businesses that want multiple creatives for promotions and campaigns.",
    features: [
      "Up to 3 promotional designs",
      "Campaign-focused creative concepts",
      "Business branding and contact details",
      "Up to 2 revisions per design",
      "Digital file delivery",
    ],
    popular: true,
  },
  {
    name: "Custom",
    subtitle: "For campaign-specific requirements",
    price: "Custom",
    unit: "quote based on requirements",
    description:
      "For newspaper ads, brochures, outdoor media and larger campaigns.",
    features: [
      "Requirement-based creative planning",
      "Newspaper ad layout and artwork",
      "Brochure and pamphlet design",
      "Outdoor advertising creatives",
      "Quotation based on scope",
    ],
    popular: false,
  },
];

const servicePrices = [
  {
    icon: PanelsTopLeft,
    name: "Poster & Promotional Design",
    detail: "Social media creatives and promotional artwork",
    price: "From ₹499",
  },
  {
    icon: Newspaper,
    name: "Newspaper Advertising",
    detail: "Ad layout and creative preparation",
    price: "Custom quote",
  },
  {
    icon: Printer,
    name: "Brochures & Pamphlets",
    detail: "Business and product information designs",
    price: "Custom quote",
  },
  {
    icon: BookOpen,
    name: "Magazine Advertising",
    detail: "Publication-ready advertising concepts",
    price: "Custom quote",
  },
  {
    icon: Megaphone,
    name: "Outdoor Advertising",
    detail: "Hoarding, banner and outdoor creative layouts",
    price: "Custom quote",
  },
];

const whatsapp =
  "https://wa.me/919393452444?text=" +
  encodeURIComponent(
    "Hello Lakshmi Durga Solutions, I would like to enquire about your advertising and design pricing."
  );

export default function PricingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-[#101010]">
      <Header />

      {/* HERO */}
      <section className="px-5 pb-16 pt-32 sm:px-8 sm:pt-36 lg:px-14 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#15803D]" />
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">
              Transparent Pricing
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <h1 className="text-5xl font-black leading-[0.92] tracking-[-0.07em] sm:text-7xl lg:text-8xl">
              THE RIGHT
              <br />
              PLAN FOR
              <br />
              <span className="text-[#0878E8]">YOUR BRAND.</span>
            </h1>

            <div className="max-w-md md:justify-self-end">
              <p className="text-base leading-7 text-gray-600">
                Straightforward starting prices for creative advertising
                services. Choose a plan or request a quote for your specific
                business requirements.
              </p>
              <p className="mt-4 text-xs leading-6 text-gray-400">
                Final pricing depends on the design scope, dimensions,
                publication specifications and production requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="px-5 pb-20 sm:px-8 lg:px-14">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex flex-col rounded-[4px_36px_4px_4px] border p-6 sm:p-8 ${
                plan.popular
                  ? "border-[#0878E8] bg-[#082A4A] text-white shadow-xl"
                  : "border-gray-200 bg-white"
              }`}
            >
              {plan.popular && (
                <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#0878E8] px-3 py-2 text-[10px] font-black uppercase tracking-[0.15em] text-white">
                  <Sparkles size={13} />
                  Business Plan
                </span>
              )}

              {!plan.popular && (
                <p className="mb-6 text-[10px] font-black uppercase tracking-[0.18em] text-[#15803D]">
                  {plan.subtitle}
                </p>
              )}

              <h2 className="text-2xl font-black">{plan.name}</h2>
              {plan.popular && (
                <p className="mt-2 text-sm text-white/60">{plan.subtitle}</p>
              )}

              <div className="mt-7">
                <p className="text-xs text-gray-400">{plan.unit}</p>
                <p className="mt-1 text-4xl font-black tracking-tight">
                  {plan.price}
                </p>
              </div>

              <p
                className={`mt-5 min-h-[72px] text-sm leading-6 ${
                  plan.popular ? "text-white/70" : "text-gray-600"
                }`}
              >
                {plan.description}
              </p>

              <div
                className={`my-7 border-t ${
                  plan.popular ? "border-white/15" : "border-gray-200"
                }`}
              />

              <ul className="flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm leading-6"
                  >
                    <span className="mt-0.5 shrink-0 text-[#15803D]">
                      <Check size={17} />
                    </span>
                    <span
                      className={
                        plan.popular ? "text-white/85" : "text-gray-700"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={`${whatsapp}&plan=${encodeURIComponent(plan.name)}`}
                target="_blank"
                rel="noreferrer"
                className={`mt-8 flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition ${
                  plan.popular
                    ? "bg-[#15803D] text-white hover:bg-green-700"
                    : "bg-[#0878E8] text-white hover:bg-[#065fbd]"
                }`}
              >
                Enquire on WhatsApp
                <ArrowRight size={17} />
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* INDIVIDUAL SERVICES */}
      <section
        id="service-prices"
        className="bg-gray-50 px-5 py-20 sm:px-8 lg:px-14"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 grid gap-5 md:grid-cols-2 md:items-end">
            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#15803D]">
                Individual Services
              </p>
              <h2 className="text-4xl font-black leading-tight tracking-[-0.06em] sm:text-6xl">
                PAY FOR
                <br />
                <span className="text-[#0878E8]">WHAT YOU NEED.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-gray-600 md:justify-self-end">
              Need just one service? Check the starting prices below.
              Services marked custom are quoted after reviewing your
              requirements.
            </p>
          </div>

          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {servicePrices.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.name}
                  className="grid gap-4 py-6 sm:grid-cols-[52px_1fr_auto] sm:items-center sm:gap-6"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-[4px_16px_4px_4px] bg-white text-[#0878E8] shadow-sm">
                    <Icon size={22} />
                  </span>

                  <div>
                    <h3 className="text-lg font-black sm:text-xl">
                      {service.name}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      {service.detail}
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-4 sm:justify-end">
                    <span className="text-sm font-black text-[#082A4A]">
                      {service.price}
                    </span>
                    <a
                      href={`${whatsapp}&service=${encodeURIComponent(service.name)}`}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Enquire about ${service.name}`}
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gray-300 transition hover:border-[#0878E8] hover:bg-[#0878E8] hover:text-white"
                    >
                      <ArrowRight size={17} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IMPORTANT DETAILS */}
      <section className="px-5 py-20 sm:px-8 lg:px-14">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-start">
          <div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#0878E8]">
              Before You Order
            </p>
            <h2 className="text-4xl font-black leading-tight tracking-[-0.06em] sm:text-5xl">
              CLEAR EXPECTATIONS.
              <br />
              BETTER RESULTS.
            </h2>
          </div>

          <div className="space-y-5">
            {[
              {
                title: "Prices are indicative",
                text: "The final quote will be confirmed after we understand your exact requirements.",
              },
              {
                title: "Printing and media charges",
                text: "Printing, newspaper publication, outdoor media placement and third-party charges are separate unless explicitly included in your quotation.",
              },
              {
                title: "Revisions and delivery",
                text: "The agreed number of revisions, file formats and delivery timeline will be shared before work begins.",
              },
              {
                title: "Approval before production",
                text: "Please review and approve the final artwork before printing or publication.",
              },
            ].map((item) => (
              <div key={item.title} className="border-b border-gray-200 pb-5">
                <h3 className="font-black">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENQUIRY BANNER */}
      <section className="px-5 pb-20 sm:px-8 lg:px-14">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[4px_45px_4px_4px] bg-[#0878E8] p-7 text-white sm:p-12 lg:p-16">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-white/70">
                HAVE A PROJECT IN MIND?
              </p>
              <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-[-0.06em] sm:text-6xl">
                LET&apos;S DISCUSS YOUR REQUIREMENTS.
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-7 text-white/80">
                Share your business details, campaign goals and preferred
                advertising format to receive a suitable quotation.
              </p>
            </div>

            <a
              href="/contact-us/?source=agency"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#15803D] px-6 py-4 text-sm font-bold text-white transition hover:bg-green-700"
            >
              <MessageCircle size={19} />
              Get a Quote
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#082A4A] text-white">
        <div className="mx-auto max-w-[1440px] px-5 py-10 sm:px-8 lg:px-12">
          <div className="grid gap-8 border-b border-white/15 pb-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="text-lg font-black">LAKSHMI DURGA</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-[#0878E8]">
                Print Media & Advertising Solutions
              </p>
              <p className="mt-4 max-w-xs text-sm leading-6 text-white/65">
                Advertising concepts and creative communication for
                businesses looking to share their message.
              </p>
            </div>

            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-white/50">
                Explore
              </p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-white/80">
                <Link href="/price/" className="hover:text-[#0878E8]">
                  Pricing
                </Link>
                <Link
                  href="/services-us/"
                  className="hover:text-[#0878E8]"
                >
                  Services
                </Link>
                <Link href="/about/" className="hover:text-[#0878E8]">
                  About Us
                </Link>
                <Link href="/" className="hover:text-[#15803D]">
                  Main Website
                </Link>
              </div>
            </div>

            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-white/50">
                Get in touch
              </p>
              <div className="mt-4 flex flex-col gap-3 text-sm text-white/80">
                <a href="tel:+919393452444" className="hover:text-[#0878E8]">
                  +91 93934 52444
                </a>
                <a
                  href="mailto:lakshmidurgasolutions@gmail.com"
                  className="break-words hover:text-[#0878E8]"
                >
                  lakshmidurgasolutions@gmail.com
                </a>
                <a
                  href="https://wa.me/919393452444"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-bold text-[#15803D]"
                >
                  WhatsApp Us <ArrowRight size={15} />
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
