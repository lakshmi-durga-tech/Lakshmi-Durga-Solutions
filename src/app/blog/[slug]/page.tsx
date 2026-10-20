
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { createAdminClient } from "@/lib/supabase/admin";
import { ArrowRight } from "lucide-react";

import Header from "@/components/Header";
import AgencyHeader from "@/components/Header copy";
import ScrollToTop from "@/components/ScrollToTop";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

type BlogPost = {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  seo_title: string | null;
  meta_description: string | null;
  keywords: string[] | null;
  created_at: string;
  published_at: string | null;
};

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ source?: string | string[] }>;
};

async function getPost(slug: string): Promise<BlogPost | null> {
  const supabase = createAdminClient();

  const { data, error } = await supabase
    .from("blog_posts")
    .select(
      "id, title, slug, category, excerpt, content, seo_title, meta_description, keywords, created_at, published_at"
    )
    .eq("slug", slug)
    .eq("status", "published")
    .not("published_at", "is", null)
    .maybeSingle();

  if (error) {
    console.error("Blog detail fetch failed:", error.message);
    throw new Error("Unable to load this article.");
  }

  return data as BlogPost | null;
}

export async function generateMetadata({
  params,
}: Pick<PageProps, "params">): Promise<Metadata> {
  const { slug } = await params;

  let post: BlogPost | null;

  try {
    post = await getPost(slug);
  } catch {
    return {
      title: "Blog | Lakshmi Durga Solutions",
      description:
        "Explore insights and articles from Lakshmi Durga Solutions.",
    };
  }

  if (!post) {
    return {
      title: "Article Not Found | Lakshmi Durga Solutions",
      robots: { index: false, follow: false },
    };
  }

  const title = post.seo_title?.trim() || post.title;

  const description =
    post.meta_description?.trim() ||
    post.excerpt ||
    `Read ${post.title} on Lakshmi Durga Solutions.`;

  const siteUrl = (
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://lakshmidurgasolutions.com"
  ).replace(/\/$/, "");

  const canonicalUrl = `${siteUrl}/blog/${encodeURIComponent(post.slug)}`;

  return {
    title,
    description,
    keywords: post.keywords?.length ? post.keywords : undefined,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "article",
      title,
      description,
      url: canonicalUrl,
      siteName: "Lakshmi Durga Solutions",
      publishedTime: post.published_at || undefined,
    },
  };
}

function formatDate(date: string | null) {
  if (!date) return "";

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) return "";

  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(parsedDate);
}

export default async function BlogArticlePage({
  params,
  searchParams,
}: PageProps) {
  const [{ slug }, query] = await Promise.all([params, searchParams]);

  // Only accept recognized source values.
  const sourceValue = Array.isArray(query.source)
    ? query.source[0]
    : query.source;

  const source =
    sourceValue === "agency" ||
    sourceValue === "virtual-operator"
      ? sourceValue
      : "default";

  const isAgency = source === "agency";

  const homeHref =
    source === "agency"
      ? "/ad-agency/"
      : source === "virtual-operator"
        ? "/virtual-operator/"
        : "/";

  const blogHref =
    source === "default"
      ? "/blog/"
      : `/blog/?source=${source}`;

  const contactHref =
    source === "default"
      ? "/contact-us/"
      : `/contact-us/?source=${source}`;

  const aboutHref =
    source === "agency"
      ? "/about/"
      : "/about-us/";

  const servicesHref =
    source === "agency"
      ? "/services-us/"
      : source === "virtual-operator"
        ? "/services/"
        : "/services/";

  const pricingHref =
    source === "agency"
      ? "/price/"
      : "/pricing/";

  const payOnlineHref =
    source === "default"
      ? "/pay-online/"
      : `/pay-online/?source=${source}`;

  let post: BlogPost | null;

  try {
    post = await getPost(slug);
  } catch {
    throw new Error("Unable to load the article. Please try again later.");
  }

  if (!post) {
    notFound();
  }

  const siteUrl = (
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://lakshmidurgasolutions.com"
  ).replace(/\/$/, "");

  const articleUrl =
    `${siteUrl}/blog/${encodeURIComponent(post.slug)}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description:
      post.meta_description?.trim() || post.excerpt || post.title,
    datePublished: post.published_at || post.created_at,
    dateModified: post.published_at || post.created_at,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    author: {
      "@type": "Organization",
      name: "Lakshmi Durga Solutions",
    },
    publisher: {
      "@type": "Organization",
      name: "Lakshmi Durga Solutions",
      url: siteUrl,
    },
  };

  return (
    <>
      {/* Header selected using the originating website */}
      {isAgency ? <AgencyHeader /> : <Header />}

      <main className="min-h-screen bg-[#f4f8fc]">
        {/* Article heading */}
        <section className="bg-[#082a4a] px-5 py-14 text-white sm:py-20">
          <div className="mx-auto max-w-4xl">
            <Link
              href={blogHref}
              className="inline-flex items-center gap-2 text-sm text-blue-200 transition hover:text-white"
            >
              <span aria-hidden="true">←</span>
              Back to All Articles
            </Link>

            <div className="mt-8">
              <span className="inline-flex rounded-full border border-blue-300/30 bg-blue-400/10 px-3 py-1.5 text-xs font-bold text-blue-200">
                {post.category || "General"}
              </span>
            </div>

            <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
              {post.title}
            </h1>

            {post.excerpt && (
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
                {post.excerpt}
              </p>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-blue-200">
              <span>Lakshmi Durga Solutions</span>
              <span aria-hidden="true">•</span>
              <time dateTime={post.published_at || post.created_at}>
                {formatDate(post.published_at || post.created_at)}
              </time>
            </div>
          </div>
        </section>

        {/* Article content */}
        <section className="px-5 py-10 sm:py-14">
          <article className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white px-6 py-8 shadow-sm sm:px-12 sm:py-12">
            <div className="mb-8 border-b border-slate-100 pb-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#0878e8]">
                Article
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Insights and information from Lakshmi Durga Solutions
              </p>
            </div>

            <div className="whitespace-pre-wrap break-words text-base leading-8 text-slate-700 [overflow-wrap:anywhere]">
              {post.content}
            </div>

            <div className="mt-10 border-t border-slate-100 pt-6">
              <p className="text-sm text-slate-500">
                Share this article with someone who may find it useful.
              </p>

              <a
                href={`https://wa.me/?text=${encodeURIComponent(
                  `${post.title}\n${articleUrl}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#0878e8] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0666c7]"
              >
                Share on WhatsApp
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        </section>

        {/* Contact CTA */}
        <section className="px-5 pb-16">
          <div className="mx-auto max-w-4xl rounded-3xl bg-[#082a4a] px-6 py-10 text-center text-white sm:px-10">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Need More Information?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-blue-100">
              Contact Lakshmi Durga Solutions to discuss your questions
              and requirements.
            </p>

            <Link
              href={contactHref}
              className="mt-6 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#082a4a] transition hover:bg-blue-50"
            >
              Contact Us
            </Link>
          </div>
        </section>

        {/* Structured data for search engines */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </main>

      {/* Footer */}
      <footer className="services-footer">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href={homeHref} className="inline-flex items-center gap-3">
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
              href={contactHref}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#082a4a] transition hover:bg-blue-100"
            >
              Talk to Our Team <ArrowRight size={17} />
            </Link>
          </div>

          {/* Company links */}
          <div>
            <h3 className="font-bold text-white">Company</h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li>
                <Link href={homeHref} className="footer-link">
                  Home
                </Link>
              </li>

              <li>
                <Link href={aboutHref} className="footer-link">
                  About Us
                </Link>
              </li>

              <li>
                <Link href={servicesHref} className="footer-link">
                  Services
                </Link>
              </li>

              <li>
                <Link href={blogHref} className="footer-link">
                  Blog
                </Link>
              </li>

              <li>
                <Link href={pricingHref} className="footer-link">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Support links */}
          <div>
            <h3 className="font-bold text-white">Help &amp; Policies</h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              <li>
                <Link href={contactHref} className="footer-link">
                  Contact Us
                </Link>
              </li>

              <li>
                <Link href="/privacy-policy/" className="footer-link">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms-and-conditions/"
                  className="footer-link"
                >
                  Terms &amp; Conditions
                </Link>
              </li>

              <li>
                <Link
                  href="/refund-cancellation/"
                  className="footer-link"
                >
                  Refund &amp; Cancellation
                </Link>
              </li>

              <li>
                <Link href={payOnlineHref} className="footer-link">
                  Pay Online
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

        {/* Copyright */}
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
    </>
  );
}
