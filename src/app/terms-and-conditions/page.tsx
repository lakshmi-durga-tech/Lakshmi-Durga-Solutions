import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileCheck2,
  FileText,
  Gavel,
  Headphones,
  Mail,
  MessageCircle,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";

const sections = [
  {
    id: "acceptance",
    number: "01",
    title: "Acceptance of Terms",
    icon: FileCheck2,
    content:
      "By accessing this website or using our services, you agree to these Terms and Conditions. If you do not agree with any part of these terms, please discontinue using our website and services.",
  },
  {
    id: "services",
    number: "02",
    title: "Our Services",
    icon: CheckCircle2,
    content:
      "Lakshmi Durga Solutions provides business and digital services as described on this website. Service scope, deliverables, timelines, and charges will be communicated and confirmed before work begins.",
  },
  {
    id: "payments",
    number: "03",
    title: "Payments & Refunds",
    icon: ShieldCheck,
    content:
      "Customers must follow the payment schedule agreed upon for their project. Any advance payment, cancellation, refund, or additional charge will be handled according to the specific agreement communicated before confirmation.",
  },
  {
    id: "responsibilities",
    number: "04",
    title: "Customer Responsibilities",
    icon: UserCheck,
    content:
      "Customers are responsible for providing accurate information, necessary documents, content, approvals, and access required for the requested service. Delays in providing these materials may affect project delivery timelines.",
  },
  {
    id: "intellectual-property",
    number: "05",
    title: "Intellectual Property",
    icon: FileText,
    content:
      "Website content, branding, designs, documents, and other deliverables may be subject to intellectual property rights. Ownership, permitted usage, and any third-party asset licences will depend on the project agreement and applicable law.",
  },
  {
    id: "third-party",
    number: "06",
    title: "Third-Party Services",
    icon: ArrowUpRight,
    content:
      "Our website or services may use or link to third-party platforms, payment providers, hosting services, or external websites. Their availability, policies, and practices are governed by their respective terms and privacy policies.",
  },
  {
    id: "availability",
    number: "07",
    title: "Website Availability",
    icon: Clock3,
    content:
      "We aim to keep our website accessible and our information up to date. However, uninterrupted availability cannot be guaranteed. Maintenance, technical issues, network problems, or circumstances beyond our control may temporarily affect access.",
  },
  {
    id: "liability",
    number: "08",
    title: "Limitation of Liability",
    icon: Gavel,
    content:
      "To the extent permitted by applicable law, Lakshmi Durga Solutions will not be liable for indirect or consequential losses arising from website access or service use. Nothing in these terms excludes liability that cannot legally be excluded.",
  },
  {
    id: "changes",
    number: "09",
    title: "Changes to These Terms",
    icon: FileText,
    content:
      "We may update these Terms and Conditions when our services, business practices, or legal requirements change. Updated terms will be published on this page with a revised effective date where appropriate.",
  },
  {
    id: "contact",
    number: "10",
    title: "Contact & Questions",
    icon: Headphones,
    content:
      "If you have questions about these Terms and Conditions or a service agreement, contact our team through the contact details provided on our website.",
  },
];

const quickLinks = [
  { id: "acceptance", label: "Acceptance of Terms" },
  { id: "services", label: "Our Services" },
  { id: "payments", label: "Payments & Refunds" },
  { id: "responsibilities", label: "Customer Responsibilities" },
  { id: "intellectual-property", label: "Intellectual Property" },
  { id: "third-party", label: "Third-Party Services" },
  { id: "availability", label: "Website Availability" },
  { id: "liability", label: "Limitation of Liability" },
  { id: "changes", label: "Changes to Terms" },
  { id: "contact", label: "Contact & Questions" },
];

export default function TermsConditionsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f8fc] text-slate-800">
      <Header />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#061e35]">
        <div className="absolute inset-0 -z-20">
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=85"
            alt="Business professionals reviewing documents"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-25"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061e35] via-[#082a4a]/95 to-[#082a4a]/65" />

        <div className="pointer-events-none absolute -right-20 -top-32 h-96 w-96 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-5 -top-16 h-64 w-64 rounded-full border border-white/10" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-24">
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-sm font-medium text-blue-100 backdrop-blur">
              <ShieldCheck size={16} />
              Clear Terms. Trusted Service.
            </div>

            <div className="mb-4 flex items-center gap-2 text-sm text-blue-200">
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
              <ChevronRight size={14} />
              <span className="text-white">Terms & Conditions</span>
            </div>

            <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Terms &
              <span className="block text-blue-400">Conditions</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Transparency builds trust. Please review the terms that explain
              how our website and services work, and what you can expect when
              working with Lakshmi Durga Solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#terms-content"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0878e8] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition hover:-translate-y-0.5 hover:bg-blue-500"
              >
                Read the Terms
                <ArrowDownRight size={17} />
              </a>

              <Link
                href="/contact-us/"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Contact Us
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-300">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-400" />
                Clear communication
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-400" />
                Service transparency
              </span>
            </div>
          </div>

          {/* HERO IMAGE CARD */}
          <div className="relative mx-auto w-full max-w-lg lg:ml-auto">
            <div className="absolute -inset-4 rounded-[2rem] border border-white/10" />

            <div className="relative overflow-hidden rounded-[1.7rem] border border-white/15 bg-white/10 p-2 shadow-2xl shadow-black/30 backdrop-blur-sm">
              <div className="relative h-64 overflow-hidden rounded-[1.25rem] sm:h-80">
                <Image
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85"
                  alt="Professional team working together"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061e35]/90 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5">
                  <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                    Our commitment
                  </div>
                  <h2 className="max-w-sm text-2xl font-semibold leading-snug text-white">
                    Building professional relationships on clear terms.
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 p-3">
                <div className="rounded-xl bg-white/[0.08] p-4">
                  <ShieldCheck className="mb-3 text-blue-300" size={23} />
                  <p className="text-sm font-semibold text-white">
                    Transparency
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-300">
                    Expectations made clear
                  </p>
                </div>

                <div className="rounded-xl bg-white/[0.08] p-4">
                  <UserCheck className="mb-3 text-blue-300" size={23} />
                  <p className="text-sm font-semibold text-white">
                    Accountability
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-300">
                    Clear responsibilities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500 via-sky-300 to-transparent" />
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0878e8]">
              Before you begin
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#082a4a] sm:text-4xl">
              A clear understanding makes every project better.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-slate-600">
              These Terms and Conditions describe the general rules for using
              the Lakshmi Durga Solutions website and engaging with our
              services. Project-specific quotations, proposals, invoices, or
              written agreements may provide additional details for individual
              services.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Please read the relevant sections carefully before placing an
              order or confirming a project.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: FileText,
              title: "Clear Expectations",
              text: "Understand the general conditions before engaging our services.",
            },
            {
              icon: ShieldCheck,
              title: "Responsible Use",
              text: "Use our website and services lawfully and responsibly.",
            },
            {
              icon: MessageCircle,
              title: "Open Communication",
              text: "Contact our team when you need clarification about a service.",
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
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* TERMS CONTENT */}
      <section
        id="terms-content"
        className="scroll-mt-24 border-y border-slate-200 bg-white"
      >
        <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0878e8]">
              Terms of service
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#082a4a] sm:text-4xl">
              The details that matter
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              Explore each section below to understand the conditions
              applicable to website use and service engagement.
            </p>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-12">
            {/* TABLE OF CONTENTS */}
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
                  {quickLinks.map((link, index) => (
                    <a
                      key={link.id}
                      href={`#${link.id}`}
                      className="group flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-600 transition hover:bg-white hover:text-[#0878e8] hover:shadow-sm"
                    >
                      <span className="w-5 shrink-0 font-mono text-xs text-slate-400 group-hover:text-[#0878e8]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1">{link.label}</span>
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
                    Need clarification?
                  </p>
                  <p className="mt-1 text-xs leading-6 text-slate-600">
                    Our team can help answer questions about our services.
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

            {/* TERMS SECTIONS */}
            <div className="space-y-5">
              {sections.map((section) => {
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
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}

              <div className="rounded-2xl border border-blue-100 bg-[#f1f7ff] p-6 sm:p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#0878e8] shadow-sm">
                    <Headphones size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#082a4a]">
                      Have questions about these terms?
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Reach out to us before proceeding if you need clarification
                      about a service or project agreement.
                    </p>
                  </div>
                  <Link
                    href="/contact-us/"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#0878e8] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0664c5]"
                  >
                    Get in touch <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRIVACY LINK */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="relative isolate overflow-hidden rounded-3xl bg-[#082a4a] p-7 sm:p-10 lg:p-12">
          <div className="absolute -right-16 -top-24 -z-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-blue-200">
                <ShieldCheck size={14} />
                Your information matters
              </div>

              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Want to understand how we handle your data?
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                Please review our Privacy Policy for information about how
                personal information may be collected, used, and protected.
              </p>
            </div>

            <Link
              href="/privacy-policy/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#082a4a] transition hover:bg-blue-50"
            >
              Privacy Policy <ArrowUpRight size={17} />
            </Link>
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