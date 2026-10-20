"use client";

import Header from "@/components/Header";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileText,
  Headphones,
  Mail,
  MessageCircle,
  RefreshCcw,
  ShieldCheck,
  Wallet,
  XCircle,
} from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";

const policySections = [
  {
    id: "overview",
    number: "01",
    title: "Policy Overview",
    icon: FileText,
    description:
      "Lakshmi Durga Solutions provides Virtual Computer Operator, DTP, Graphic Designs, Data Entry, Logo Design, Digital Support, and related office services for schools, colleges, coaching centers, institutions, and businesses.",
    points: [
      "Refund and cancellation requests are reviewed according to the service booked.",
      "The project stage and work already initiated are considered during the review.",
      "Please check the quotation, scope of work, delivery timeline, and payment terms before confirming an order.",
    ],
  },
  {
    id: "cancellation",
    number: "02",
    title: "Cancellation Policy",
    icon: XCircle,
    description:
      "If you need to cancel a service, contact our team through the official contact channels as soon as possible.",
    points: [
      "Include your service or project details and the reason for cancellation.",
      "Cancellation requests are reviewed based on the type of service and the stage of work.",
      "Monthly service plans may be cancelled for future billing periods, subject to the notice terms agreed for that plan.",
    ],
  },
  {
    id: "refunds",
    number: "03",
    title: "Refund Eligibility",
    icon: Wallet,
    description:
      "Refund eligibility depends on the nature of the service, the agreement made before payment, and the amount of work already completed.",
    points: [
      "Advance payments for customised, started, or partially delivered work may be non-refundable.",
      "Any applicable refund is assessed after reviewing the service agreement and project status.",
      "Please contact us if you believe a payment needs to be reviewed or corrected.",
    ],
  },
  {
    id: "processing",
    number: "04",
    title: "Refund Processing",
    icon: RefreshCcw,
    description:
      "Where a refund is approved, we aim to process it to the original payment source within a reasonable time.",
    points: [
      "Our team may need to verify the original payment and service details.",
      "The time taken for the amount to appear may depend on the payment provider or bank.",
      "We will communicate relevant next steps after reviewing the request.",
    ],
  },
  {
    id: "payments",
    number: "05",
    title: "Payment Terms",
    icon: ShieldCheck,
    description:
      "Payments should be made according to the quotation, invoice, or service agreement provided by Lakshmi Durga Solutions.",
    points: [
      "Review the agreed service scope and payment terms before paying.",
      "Keep your payment confirmation or transaction reference for future queries.",
      "Contact us if you notice a duplicate, incorrect, or unrecognised payment related to our services.",
    ],
  },
  {
    id: "support",
    number: "06",
    title: "How to Request Support",
    icon: Headphones,
    description:
      "To help us review your request efficiently, please provide the information relevant to your service or payment.",
    points: [
      "Your name and contact details.",
      "Service name, project details, and payment date.",
      "Payment receipt or transaction reference, if available.",
      "A brief explanation of the cancellation or refund request.",
    ],
  },
];

const quickLinks = [
  { id: "overview", label: "Policy Overview" },
  { id: "cancellation", label: "Cancellation Policy" },
  { id: "refunds", label: "Refund Eligibility" },
  { id: "processing", label: "Refund Processing" },
  { id: "payments", label: "Payment Terms" },
  { id: "support", label: "Request Support" },
];

export default function RefundCancellationPolicyPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#f4f8fc] text-slate-800">
      <Header />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#061e35]">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=85')",
          }}
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061e35] via-[#082a4a]/95 to-[#082a4a]/65" />

        <div className="pointer-events-none absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-8 top-0 -z-10 h-64 w-64 rounded-full border border-white/10" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-sm font-medium text-blue-100 backdrop-blur">
              <RefreshCcw size={16} />
              Clear policies. Professional support.
            </div>

            <nav
              aria-label="Breadcrumb"
              className="mb-5 flex flex-wrap items-center gap-2 text-sm text-blue-200"
            >
              <Link href="/" className="hover:text-white">
                Home
              </Link>
              <ChevronRight size={14} />
              <span className="text-white">
                Refund &amp; Cancellation Policy
              </span>
            </nav>

            <h1 className="max-w-2xl text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Refund &amp;
              <span className="block text-blue-400">Cancellation Policy</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Understand how we review service cancellations, refund requests,
              and payment-related concerns at Lakshmi Durga Solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#policy-details"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0878e8] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:-translate-y-0.5 hover:bg-blue-500"
              >
                Explore the Policy
                <ArrowRight size={17} />
              </a>

              <Link
                href="/contact-us/"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact Support
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-400" />
                Clear communication
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-400" />
                Case-by-case review
              </span>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="relative mx-auto w-full max-w-lg lg:ml-auto">
            <div className="absolute -inset-3 rounded-[2rem] border border-white/10" />

            <div className="relative overflow-hidden rounded-[1.6rem] border border-white/15 bg-white/10 p-2 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="relative h-64 overflow-hidden rounded-[1.2rem] sm:h-80">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=85"
                  alt="Customer and business professional discussing a service"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061e35]/95 via-[#061e35]/10 to-transparent" />

                <div className="absolute bottom-5 left-5 right-5">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                    Customer support
                  </span>
                  <h2 className="mt-2 max-w-sm text-2xl font-semibold leading-snug text-white">
                    Let’s resolve your payment concerns clearly.
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 p-3">
                <div className="rounded-xl bg-white/[0.08] p-4">
                  <ShieldCheck className="mb-3 text-blue-300" size={23} />
                  <p className="text-sm font-semibold text-white">
                    Transparent review
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-300">
                    Requests reviewed individually
                  </p>
                </div>

                <div className="rounded-xl bg-white/[0.08] p-4">
                  <MessageCircle className="mb-3 text-blue-300" size={23} />
                  <p className="text-sm font-semibold text-white">
                    Direct support
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-300">
                    Contact our team for guidance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500 via-sky-300 to-transparent" />
      </section>

      {/* POLICY OVERVIEW */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0878e8]">
              Policy overview
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#082a4a] sm:text-4xl">
              Clear refund terms. Better expectations.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-slate-600">
              Many of our services involve scheduled work, dedicated resources,
              and customised execution. For this reason, cancellation and
              refund requests are reviewed based on the service booked and
              the work already initiated.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Please review your quotation, scope of work, delivery timelines,
              and payment terms before confirming an order or subscription.
              By proceeding with payment, you acknowledge this policy and the
              applicable service terms.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: FileText,
              title: "Service-specific review",
              description:
                "Your request is assessed in the context of the service booked.",
            },
            {
              icon: Clock3,
              title: "Project stage matters",
              description:
                "Work started, resources allocated, and delivery status may affect the outcome.",
            },
            {
              icon: Wallet,
              title: "Payment transparency",
              description:
                "Keep payment details available so our team can review your request.",
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#0878e8] transition group-hover:bg-[#0878e8] group-hover:text-white">
                  <Icon size={23} />
                </div>

                <h3 className="text-lg font-bold text-[#082a4a]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* POLICY DETAILS */}
      <section
        id="policy-details"
        className="scroll-mt-24 border-y border-slate-200 bg-white"
      >
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0878e8]">
              Important information
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#082a4a] sm:text-4xl">
              Refunds &amp; cancellations, explained
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Review the applicable sections below. If you are unsure how a
              term applies to your project, contact our team before proceeding.
            </p>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12">
            {/* STICKY CONTENT NAVIGATION */}
            <aside className="lg:sticky lg:top-24">
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-[#f8fbff]">
                <div className="bg-[#082a4a] px-5 py-5">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
                    On this page
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    Quick navigation
                  </h3>
                </div>

                <nav className="p-3">
                  {quickLinks.map((item, index) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="group flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-600 transition hover:bg-white hover:text-[#0878e8] hover:shadow-sm"
                    >
                      <span className="w-5 shrink-0 font-mono text-xs text-slate-400 group-hover:text-[#0878e8]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="flex-1">{item.label}</span>

                      <ChevronRight
                        size={15}
                        className="shrink-0 opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </a>
                  ))}
                </nav>

                <div className="m-3 rounded-xl bg-blue-50 p-4">
                  <MessageCircle size={20} className="text-[#0878e8]" />

                  <p className="mt-3 text-sm font-semibold text-[#082a4a]">
                    Need help?
                  </p>

                  <p className="mt-1 text-xs leading-6 text-slate-600">
                    Share your payment and service details with our team.
                  </p>

                  <Link
                    href="/contact-us/"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#0878e8] hover:underline"
                  >
                    Contact us <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </aside>

            {/* POLICY CARDS */}
            <div className="space-y-5">
              {policySections.map((section) => {
                const Icon = section.icon;

                return (
                  <article
                    id={section.id}
                    key={section.id}
                    className="group scroll-mt-28 rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/[0.04] sm:p-8"
                  >
                    <div className="flex items-start gap-4 sm:gap-5">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#edf5ff] text-[#0878e8] transition group-hover:bg-[#0878e8] group-hover:text-white">
                        <Icon size={22} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="mb-2 flex flex-wrap items-center gap-3">
                          <span className="font-mono text-xs font-semibold tracking-wider text-[#0878e8]">
                            SECTION {section.number}
                          </span>
                          <span className="h-px w-8 bg-slate-200" />
                        </div>

                        <h3 className="text-xl font-bold leading-snug text-[#082a4a] sm:text-2xl">
                          {section.title}
                        </h3>

                        <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                          {section.description}
                        </p>

                        <ul className="mt-5 space-y-3">
                          {section.points.map((point) => (
                            <li
                              key={point}
                              className="flex items-start gap-3 text-sm leading-7 text-slate-600"
                            >
                              <CheckCircle2
                                size={17}
                                className="mt-1 shrink-0 text-[#0878e8]"
                              />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* BILLING SUPPORT CTA */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid overflow-hidden rounded-3xl bg-[#082a4a] lg:grid-cols-[1fr_0.8fr]">
          <div className="p-7 sm:p-10 lg:p-12">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-blue-200">
              <Headphones size={14} />
              Billing assistance
            </div>

            <h2 className="max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl">
              Need help with a payment or cancellation?
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-8 text-slate-300 sm:text-base">
              Contact Lakshmi Durga Solutions so we can review your request
              and guide you on the next steps. For faster assistance, share
              your name, service details, payment date, and reason for
              contacting us.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact-us/"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0878e8] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Request Support <ArrowRight size={16} />
              </Link>

              <a
                href="https://wa.me/919393452444"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <MessageCircle size={17} />
                WhatsApp
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          <div className="relative min-h-64 lg:min-h-full">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85"
              alt="Payment and customer service assistance"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#082a4a]/80 via-[#082a4a]/20 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-[#082a4a]/15 lg:to-[#082a4a]/35" />

            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-[#061e35]/75 p-5 backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-blue-300">
                  <Mail size={21} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Have your details ready
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-300">
                    Service name, payment date, and transaction reference.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
<ScrollToTop/>
    </main>
  );
}