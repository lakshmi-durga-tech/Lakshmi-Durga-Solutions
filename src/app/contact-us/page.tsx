
import Link from "next/link";
import {
  UserRound,
  Building2,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    title: "Individual",
    description: "For personal requirements and individual services.",
    href: "/contact-individual/",
    Icon: UserRound,
  },
  {
    title: "Organisation / Office",
    description: "For businesses, companies, offices and organisations.",
    href: "/contact-organisation/",
    Icon: Building2,
  },
  {
    title: "School / College / Institution",
    description: "For schools, colleges, institutions and coaching centres.",
    href: "/contact-institution/",
    Icon: GraduationCap,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-14">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
          Lakshmi Durga Solutions
        </p>

        <h1 className="mt-3 text-3xl font-bold text-[#082a4a] sm:text-4xl">
          How can we help you?
        </h1>

        <p className="mt-3 text-slate-600">
          Select the category that best matches your requirement.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {categories.map(({ title, description, href, Icon }) => (
            <Link
              key={href}
              href={href}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <Icon size={25} />
              </div>

              <h2 className="mt-5 text-lg font-bold text-[#082a4a]">
                {title}
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {description}
              </p>

              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">
                Continue <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
