import type { ReactNode } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  ChevronRight,
  LockKeyhole,
  Database,
  Cookie,
  Share2,
  UserRoundCheck,
  ExternalLink,
  Mail,
  MessageCircle,
  ArrowRight,
  FileText,
} from "lucide-react";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";

const sections = [
  { id: "introduction", title: "Introduction", icon: ShieldCheck },
  { id: "information", title: "Information We Collect", icon: Database },
  { id: "usage", title: "How We Use Information", icon: UserRoundCheck },
  { id: "cookies", title: "Cookies & Analytics", icon: Cookie },
  { id: "sharing", title: "Sharing Information", icon: Share2 },
  { id: "security", title: "Data Security", icon: LockKeyhole },
  { id: "rights", title: "Your Rights", icon: UserRoundCheck },
  { id: "third-party", title: "Third-Party Links", icon: ExternalLink },
  { id: "updates", title: "Policy Updates", icon: FileText },
  { id: "contact", title: "Contact Us", icon: Mail },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f4f8fc] text-slate-700">
        <section className="relative overflow-hidden bg-[#082a4a]">
          <div aria-hidden="true" className="absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#0878e8]/20 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-32 left-1/4 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl" />
          <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-blue-100">
                <ShieldCheck size={17} /> Legal &amp; Privacy
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Your privacy.<span className="mt-2 block text-[#65b2ff]">Our responsibility.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/85 sm:text-lg">
                Learn how Lakshmi Durga Solutions handles information when you visit our website or contact our team.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-blue-100/80">
                <span className="inline-flex items-center gap-2"><LockKeyhole size={16} /> Privacy-focused approach</span>
                <span className="hidden text-white/40 sm:inline">•</span>
                <span>Vijayawada, Andhra Pradesh, India</span>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-5 pt-6 sm:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="transition hover:text-[#0878e8]">Home</Link>
            <ChevronRight size={15} />
            <span className="font-medium text-[#082a4a]">Privacy Policy</span>
          </nav>
        </div>

        <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
          <div className="grid gap-4 sm:grid-cols-3">
            <OverviewCard icon={<ShieldCheck size={22} />} title="Transparency">Understand what information may be collected when you contact us or use our website.</OverviewCard>
            <OverviewCard icon={<LockKeyhole size={22} />} title="Responsible handling">We aim to handle shared information responsibly and use reasonable security measures.</OverviewCard>
            <OverviewCard icon={<MessageCircle size={22} />} title="Contact & support">Contact our team if you have questions about information shared through this website.</OverviewCard>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8">
          <div className="grid items-start gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
            <aside className="lg:sticky lg:top-24">
              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0878e8]">On this page</p>
                <nav className="mt-4 space-y-1" aria-label="Policy sections">
                  {sections.map((section, index) => {
                    const Icon = section.icon;
                    return (
                      <a key={section.id} href={`#${section.id}`} className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition hover:bg-blue-50 hover:text-[#0878e8]">
                        <span className="w-5 text-xs text-slate-400">{String(index + 1).padStart(2, "0")}</span>
                        <Icon size={16} className="shrink-0 text-slate-400 group-hover:text-[#0878e8]" />
                        <span>{section.title}</span>
                      </a>
                    );
                  })}
                </nav>
                <div className="mt-5 rounded-xl bg-[#f4f8fc] p-4">
                  <p className="text-sm font-semibold text-[#082a4a]">Have a question?</p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">Our team can help with privacy-related enquiries.</p>
                  <Link href="/contact-us/" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#0878e8] hover:underline">Contact us <ArrowRight size={15} /></Link>
                </div>
              </div>
            </aside>

            <article className="min-w-0 rounded-2xl border border-slate-200 bg-white px-5 py-8 shadow-sm sm:px-9 sm:py-10 lg:px-12">
              <div className="border-b border-slate-100 pb-7">
                <p className="text-sm font-semibold text-[#0878e8]">LAKSHMI DURGA SOLUTIONS</p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#082a4a] sm:text-3xl">Privacy Policy</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">This policy explains how we handle information shared through our website, enquiry forms, quote requests, and business communications.</p>
                <p className="mt-4 text-xs leading-5 text-slate-500">Please review this policy and contact us if you have questions about how your information is handled.</p>
              </div>

              <div className="divide-y divide-slate-100">
                <PolicySection id="introduction" number="01" title="Introduction">
                  Lakshmi Durga Solutions respects your privacy. This Privacy Policy describes how we may collect, use, disclose, and safeguard information when you visit our website, submit an enquiry, request a quote, or communicate with us about our services.
                </PolicySection>
                <PolicySection id="information" number="02" title="Information We Collect">
                  We may collect personal and business information that you voluntarily provide, including:
                  <PolicyList items={["Name and contact details, such as phone number and email address.", "Organisation or business name.", "Service requirements, enquiry details, and information included in messages.", "Limited technical information, which may include browser type, device information, IP address, and website usage data."]} />
                </PolicySection>
                <PolicySection id="usage" number="03" title="How We Use Information">
                  Information may be used for legitimate business and website-related purposes, including:
                  <PolicyList items={["Responding to enquiries and quotation requests.", "Providing and improving our services.", "Communicating about projects, support, and service updates.", "Maintaining internal business and administrative records.", "Understanding website performance and user experience.", "Meeting applicable legal and regulatory obligations."]} />
                </PolicySection>
                <PolicySection id="cookies" number="04" title="Cookies and Website Analytics">
                  Our website may use cookies or similar technologies to support essential functionality, understand visitor behaviour, and improve website performance. You can manage or restrict cookies through your browser settings, although some website functions may be affected.
                </PolicySection>
                <PolicySection id="sharing" number="05" title="Sharing of Information">
                  We do not sell your personal information. Information may be shared when reasonably necessary to operate the website, deliver requested services, work with service providers, or comply with applicable laws, legal processes, or government requests.
                </PolicySection>
                <PolicySection id="security" number="06" title="Data Security">
                  We take reasonable administrative and technical measures intended to help protect information against unauthorised access, misuse, alteration, or disclosure. However, no method of internet transmission or electronic storage is completely secure, and absolute security cannot be guaranteed.
                </PolicySection>
                <PolicySection id="rights" number="07" title="Your Rights">
                  Subject to applicable law and relevant operational requirements, you may contact us to request access to, correction of, or deletion of personal information you have shared with us. We will review and respond to requests in accordance with applicable requirements.
                </PolicySection>
                <PolicySection id="third-party" number="08" title="Third-Party Links">
                  Our website may contain links to third-party websites. Those websites operate independently, and we are not responsible for their content or privacy practices. Please review the privacy policies of external websites you choose to visit.
                </PolicySection>
                <PolicySection id="updates" number="09" title="Policy Updates">
                  We may update this Privacy Policy to reflect changes in our practices, services, or applicable legal requirements. Updates will be published on this page. Please revisit this page periodically to review the current policy.
                </PolicySection>
                <PolicySection id="contact" number="10" title="Contact Us">
                  If you have questions about this Privacy Policy or how information is handled, contact Lakshmi Durga Solutions through our website contact page.
                  <Link href="/contact-us/" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#0878e8] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0665c4] focus:outline-none focus:ring-4 focus:ring-blue-100">Contact our team <ArrowRight size={16} /></Link>
                </PolicySection>
              </div>
              <div className="mt-4 rounded-xl border border-blue-100 bg-[#f4f8fc] p-4 text-xs leading-6 text-slate-500">
                Before publishing, ensure this policy accurately reflects the information the business actually collects, the tools it uses, and its applicable legal obligations.
              </div>
            </article>
          </div>
        </section>

        <section className="px-5 pb-16 sm:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-3xl bg-[#082a4a] p-7 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-[#65b2ff]">WE'RE HERE TO HELP</p>
              <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">Need help or have a privacy question?</h2>
              <p className="mt-3 text-sm leading-7 text-blue-100/80 sm:text-base">Contact Lakshmi Durga Solutions for questions about information you have shared or for general service enquiries.</p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <Link href="/contact-us/" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#082a4a] transition hover:bg-blue-50">Contact Us <ArrowRight size={16} /></Link>
              <Link href="/" className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Back to Home</Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function OverviewCard({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#0878e8]">{icon}</div>
      <h2 className="font-semibold text-[#082a4a]">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">{children}</p>
    </div>
  );
}

function PolicySection({ id, number, title, children }: { id: string; number: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 py-7">
      <div className="flex items-start gap-4">
        <span className="flex h-9 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-xs font-bold text-[#0878e8]">{number}</span>
        <h2 className="pt-1 text-lg font-bold leading-7 text-[#082a4a] sm:text-xl">{title}</h2>
      </div>
      <div className="mt-4 text-sm leading-8 text-slate-600 sm:text-[15px]">{children}</div>
    </section>
  );
}

function PolicyList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-7 text-slate-600 sm:text-[15px]">
          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0878e8]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-[#061e35] px-5 py-12 text-white sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_1fr] lg:gap-16">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            {/* Keep this image path aligned with the logo in your public folder. */}
            <img src="/images/LDS-Logo.jpg" alt="Lakshmi Durga Solutions logo" className="h-12 w-12 rounded-xl bg-white object-contain p-1" />
            <span className="font-extrabold">Lakshmi Durga Solutions</span>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">Lakshmi Durga Solutions provides professional virtual computer operator, DTP, data entry, design, and digital support services for institutions and businesses in Vijayawada.</p>
          <a href="https://wa.me/919393452444" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-200 transition hover:text-white"><MessageCircle size={17} /> Chat with our team <ArrowRight size={15} /></a>
          <a href="mailto:lakshmidurgasolutions@gmail.com" className="mt-3 flex items-center gap-2 text-sm text-slate-300 hover:text-white"><Mail size={16} /> lakshmidurgasolutions@gmail.com</a>
        </div>
        <div>
          <h3 className="font-bold">Company</h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about-us/" className="hover:text-white">About Us</Link></li>
            <li><Link href="/blog/" className="hover:text-white">Blog</Link></li>
            <li><Link href="/privacy-policy/" className="hover:text-white">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold">Services &amp; Support</h3>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            <li><Link href="/services/" className="hover:text-white">Services</Link></li>
            <li><Link href="/pricing/" className="hover:text-white">Pricing</Link></li>
            <li><Link href="/contact-us/" className="hover:text-white">Contact Us</Link></li>
            <li><Link href="/terms-and-conditions/" className="hover:text-white">Terms &amp; Conditions</Link></li>
            <li><Link href="/refund-cancellation/" className="hover:text-white">Refund &amp; Cancellation Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-slate-400">
        <p>© {new Date().getFullYear()} Lakshmi Durga Solutions. All rights reserved.</p>
        <p className="mt-2">Your Trusted Computer &amp; Digital Solutions Partner</p>
      </div>
    </footer>
   
  );
}
