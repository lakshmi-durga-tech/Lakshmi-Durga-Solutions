
"use client";

import { useEffect, useMemo, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Header from "@/components/Header";
import AgencyHeader from "@/components/Header copy";

type BlogPost = {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  created_at: string;
  published_at: string | null;
};

function formatDate(date: string | null) {
  if (!date) return "";

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) return "";

  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(parsedDate);
}

function BlogContent() {
  const searchParams = useSearchParams();
  const source = searchParams.get("source");

  const isAgency = source === "agency";

  const sourceQuery = isAgency
    ? "?source=agency"
    : source === "virtual-operator"
      ? "?source=virtual-operator"
      : "";

  const homeHref = isAgency
    ? "/ad-agency/"
    : source === "virtual-operator"
      ? "/virtual-operator/"
      : "/";

  const contactHref = isAgency
    ? "/contact-us/?source=agency"
    : source === "virtual-operator"
      ? "/contact-us/?source=virtual-operator"
      : "/contact-us/";

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadPosts() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("/api/blog/posts", {
          method: "GET",
          cache: "no-store",
          signal: controller.signal,
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || "Unable to load blog posts.");
        }

        setPosts(Array.isArray(result.posts) ? result.posts : []);
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") {
          return;
        }

        console.error("Public blog loading failed:", err);
        setError("We couldn't load the articles. Please try again.");
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadPosts();

    return () => controller.abort();
  }, []);

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(
        posts
          .map((post) => post.category?.trim())
          .filter((category): category is string => Boolean(category))
      )
    );

    return ["All", ...uniqueCategories];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    const term = search.trim().toLowerCase();

    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" ||
        post.category === selectedCategory;

      const matchesSearch =
        !term ||
        post.title.toLowerCase().includes(term) ||
        (post.excerpt || "").toLowerCase().includes(term) ||
        (post.category || "").toLowerCase().includes(term);

      return matchesCategory && matchesSearch;
    });
  }, [posts, search, selectedCategory]);

  return (
    <>
      {/* Header selected according to source */}
      {isAgency ? <AgencyHeader /> : <Header />}

      <main className="min-h-screen bg-[#f4f8fc]">
        {/* Hero section */}
        <section className="relative overflow-hidden bg-[#082a4a] px-5 py-20 text-white sm:py-28">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-28 h-80 w-80 rounded-full bg-[#0878e8]/20 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-36 -left-20 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl"
          />

          <div className="relative mx-auto max-w-6xl">
            <Link
              href={homeHref}
              className="mb-8 inline-flex items-center gap-2 text-sm text-blue-200 transition hover:text-white"
            >
              <span aria-hidden="true">←</span>
              Back to Home
            </Link>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-blue-300">
              LDS Insights &amp; Resources
            </p>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
              Ideas That Help You
              <span className="block text-[#69b4ff]">
                Move Forward.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
              Explore practical insights, helpful guides and updates
              from Lakshmi Durga Solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-blue-100">
              <span className="rounded-full border border-white/20 px-4 py-2">
                Practical Guides
              </span>
              <span className="rounded-full border border-white/20 px-4 py-2">
                Business Insights
              </span>
              <span className="rounded-full border border-white/20 px-4 py-2">
                Latest Articles
              </span>
            </div>
          </div>
        </section>

        {/* Blog listing */}
        <section className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-[#0878e8]">
                Our Blog
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#082a4a] sm:text-4xl">
                Explore Our Articles
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
                Discover useful information, practical ideas and the
                latest updates from our team.
              </p>
            </div>

            <div className="w-full md:max-w-sm">
              <label htmlFor="blog-search" className="sr-only">
                Search blog articles
              </label>

              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition focus-within:border-[#0878e8]">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-5 w-5 shrink-0 text-slate-400"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="m16 16 4 4" />
                </svg>

                <input
                  id="blog-search"
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search articles..."
                  className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                />
              </div>
            </div>
          </div>

          {/* Loading skeleton */}
          {loading && (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="animate-pulse rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <div className="h-5 w-24 rounded bg-slate-200" />
                  <div className="mt-5 h-7 w-full rounded bg-slate-200" />
                  <div className="mt-3 h-4 w-4/5 rounded bg-slate-100" />
                  <div className="mt-2 h-4 w-full rounded bg-slate-100" />
                  <div className="mt-8 h-4 w-28 rounded bg-slate-200" />
                </div>
              ))}
            </div>
          )}

          {/* API error */}
          {!loading && error && (
            <div className="rounded-2xl border border-red-200 bg-white p-8 text-center">
              <h3 className="text-lg font-bold text-[#082a4a]">
                Unable to Load Articles
              </h3>

              <p className="mt-3 text-sm text-red-700">{error}</p>

              <button
                type="button"
                onClick={() => window.location.reload()}
                className="mt-5 rounded-xl bg-[#0878e8] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0666c7]"
              >
                Try Again
              </button>
            </div>
          )}

          {/* No published posts */}
          {!loading && !error && posts.length === 0 && (
            <div className="rounded-2xl border border-slate-200 bg-white px-6 py-16 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-2xl text-[#0878e8]">
                <span aria-hidden="true">✦</span>
              </div>

              <h3 className="mt-5 text-xl font-bold text-[#082a4a]">
                Articles Coming Soon
              </h3>

              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
                We are preparing helpful articles for you. Please
                check back soon for our latest updates and insights.
              </p>

              <Link
                href={homeHref}
                className="mt-6 inline-flex rounded-xl bg-[#0878e8] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0666c7]"
              >
                Visit Homepage
              </Link>
            </div>
          )}

          {/* Category filters */}
          {!loading && !error && posts.length > 0 && (
            <div className="mb-8 flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  aria-pressed={selectedCategory === category}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    selectedCategory === category
                      ? "bg-[#0878e8] text-white shadow-sm"
                      : "border border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-[#0878e8]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}

          {/* Published blog cards */}
          {!loading && !error && filteredPosts.length > 0 && (
            <>
              <p className="mb-5 text-sm text-slate-500">
                Showing {filteredPosts.length}{" "}
                {filteredPosts.length === 1 ? "article" : "articles"}
              </p>

              <div className="grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-[#0878e8]">
                        {post.category || "General"}
                      </span>

                      <time
                        dateTime={post.published_at || post.created_at}
                        className="text-xs text-slate-400"
                      >
                        {formatDate(post.published_at || post.created_at)}
                      </time>
                    </div>

                    <h3 className="mt-5 text-xl font-bold leading-snug text-[#082a4a] transition group-hover:text-[#0878e8]">
                      {post.title}
                    </h3>

                    <p className="mt-3 flex-1 whitespace-pre-line text-sm leading-7 text-slate-600">
                      {post.excerpt}
                    </p>

                    <div className="mt-6 border-t border-slate-100 pt-4">
                      <Link
                        href={`/blog/${encodeURIComponent(post.slug)}${sourceQuery}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#0878e8] transition hover:gap-3"
                      >
                        Read Article
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}

          {/* No search results */}
          {!loading &&
            !error &&
            posts.length > 0 &&
            filteredPosts.length === 0 && (
              <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center">
                <h3 className="text-lg font-bold text-[#082a4a]">
                  No Matching Articles
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Try another search term or choose a different category.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setSelectedCategory("All");
                  }}
                  className="mt-5 rounded-xl bg-[#0878e8] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0666c7]"
                >
                  Clear Filters
                </button>
              </div>
            )}
        </section>

        {/* Contact CTA */}
        <section className="px-5 pb-16">
          <div className="mx-auto max-w-6xl rounded-3xl bg-[#082a4a] px-6 py-10 text-center text-white sm:px-12 sm:py-14">
            <p className="text-sm font-bold uppercase tracking-wider text-blue-300">
              Let&apos;s Connect
            </p>

            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              Have Questions About Our Services?
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-blue-100 sm:text-base">
              Get in touch with Lakshmi Durga Solutions to discuss
              your requirements.
            </p>

            <Link
              href={contactHref}
              className="mt-6 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#082a4a] transition hover:bg-blue-50"
            >
              Contact Us
            </Link>
          </div>
        </section>
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
                <Link
                  href={
                    isAgency
                      ? "/ad-agency/"
                      : source === "virtual-operator"
                        ? "/about-us/"
                        : "/about-us/"
                  }
                  className="footer-link"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href={isAgency ? "/services-us/" : "/services/"}
                  className="footer-link"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link href={`/blog/${sourceQuery}`} className="footer-link">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href={isAgency ? "/price/" : "/pricing/"}
                  className="footer-link"
                >
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
    </>
  );
}

export default function BlogPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#f4f8fc]" aria-label="Loading blog">
          <div className="mx-auto max-w-6xl px-5 py-20">
            Loading blog...
          </div>
        </div>
      }
    >
      <BlogContent />
    </Suspense>
  );
}
