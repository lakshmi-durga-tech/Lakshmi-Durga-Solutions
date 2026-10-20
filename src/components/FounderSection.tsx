
"use client";

import Image from "next/image";
import Link from "next/link";

type FounderSectionProps = {
  servicesHref?: string;
};

const founder = {
  name: "Mr. Bandi Chandra Sekhar Rao",
  designation: "Founder & Proprietor",
  degree : "Bsc (Information Technology)",
  company: "Lakshmi Durga Solutions",
  image: "/images/founder.jpeg",
};

export default function FounderSection({
  servicesHref = "/services/",
}: FounderSectionProps) {
  return (
    <section id="founder" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Founder Photo */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl bg-blue-100" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-slate-200 bg-slate-100">
              <Image
                src={founder.image}
                alt={`${founder.name}, Founder of ${founder.company}`}
                fill
                sizes="(max-width: 1024px) 90vw, 400px"
                className="object-cover object-top"
              />
            </div>

            <div className="absolute -bottom-3 left-4 right-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-lg sm:left-6 sm:right-6">
              <h3 className="font-bold text-[#082a4a]">
                {founder.name}
              </h3>
               <p className="mt-1 text-sm text-slate-500">
                {founder.degree}
              </p>
              <p className="mt-1 text-sm text-slate-500">
                {founder.designation}
              </p>
             
            </div>
          </div>

          {/* Founder Details */}
          <div className="mt-5 lg:mt-0">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#0878e8]">
              Leadership &amp; Experience
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-[#082a4a] sm:text-4xl">
              Meet Our Founder
            </h2>

            <h3 className="mt-3 text-xl font-semibold text-[#0878e8]">
              {founder.name} . <span className="mt-1 text-sm font-medium text-slate-500">{founder.degree}</span>
            </h3>

            <p className="mt-1 text-sm font-medium text-slate-500">
              {founder.designation} · {founder.company}
            </p>

            <div className="mt-6 space-y-4 text-[15px] leading-7 text-slate-600">
              <p>
                Mr. Bandi Chandra Sekhar Rao is a seasoned IT professional
                with over 20 years of industry experience, including
                experience as a{" "}
                <strong className="font-semibold text-slate-700">
                  Computer Section Administrator
                </strong>{" "}
                across various organizations. He is the Founder and
                Proprietor of Lakshmi Durga Solutions, established
                in March 2021 in Vijayawada, Andhra Pradesh, India.
              </p>

              <p>
                With over five years of domain expertise, Lakshmi
                Durga Solutions provides IT, digital, and remote
                office support services to schools, colleges,
                coaching academies, and businesses across India.
                We work as a virtual administrative support partner,
                helping organizations manage daily tasks efficiently
                and cost-effectively.
              </p>

              <p>
                Our services include accurate data entry and document
                typing in English, Telugu, and Hindi; MIS data analysis
                and reporting; academic material formatting and
                Desktop Publishing (DTP); logo design; and basic
                software development support.
              </p>

              <p>
                Under Mr. Rao&apos;s leadership, our team focuses on
                accuracy, flexibility, and timely delivery. We are
                available daily from 6:00 AM to 10:00 PM IST to
                support institutional and business requirements.
              </p>
            </div>

            {/* Experience Highlights */}
            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-2xl font-bold text-[#082a4a]">
                  20+
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Years of Industry Experience
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-2xl font-bold text-[#082a4a]">
                  2021
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Year Established
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-2xl font-bold text-[#082a4a]">
                  6 AM–10 PM
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Daily Support Hours
                </p>
              </div>
            </div>

            {/* Monthly Support Pricing */}
            <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <p className="text-sm font-semibold text-[#082a4a]">
                Dedicated Monthly Support
              </p>

              <p className="mt-1 text-2xl font-bold text-[#0878e8]">
                Starting at ₹7,000/month
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                Flexible support plans for ongoing requirements,
                with customized quotes available for individual
                and on-demand projects.
              </p>
            </div>

            {/* Navigate to the page specified by the parent */}
            <Link
              href={servicesHref}
              className="mt-7 inline-flex items-center justify-center rounded-xl bg-[#0878e8] px-6 py-3.5 font-semibold text-white transition hover:bg-blue-700"
            >
              Explore Our Services
              <span className="ml-2" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
