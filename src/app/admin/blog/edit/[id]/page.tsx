
"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  Save,
  Eye,
  FileText,
  LoaderCircle,
} from "lucide-react";

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
  status: "draft" | "published";
  created_at: string;
  published_at: string | null;
};

type ApiResponse = {
  error?: string;
  posts?: BlogPost[];
  post?: BlogPost;
  success?: boolean;
};

export default function EditBlogPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const id = params.id;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [seoTitle, setSeoTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [status, setStatus] = useState<"draft" | "published">("draft");

  useEffect(() => {
    const controller = new AbortController();

    async function loadPost() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("/api/admin/blog/posts", {
          method: "GET",
          cache: "no-store",
          signal: controller.signal,
        });

        if (response.status === 401) {
          router.replace("/admin/login");
          return;
        }

        const result: ApiResponse = await response.json();

        if (!response.ok) {
          throw new Error(result.error || "Blog details load cheyyalekapoyam.");
        }

        // Supports APIs that return either a post list or a single post.
        const post =
          result.post ??
          result.posts?.find((item) => item.id === id);

        if (!post) {
          throw new Error(
            "Blog dorakaledu. API lo blog fields return avutunnayo check cheyyandi."
          );
        }

        setTitle(post.title ?? "");
        setSlug(post.slug ?? "");
        setCategory(post.category ?? "");
        setExcerpt(post.excerpt ?? "");
        setContent(post.content ?? "");
        setSeoTitle(post.seo_title ?? "");
        setMetaDescription(post.meta_description ?? "");
        setKeywords((post.keywords ?? []).join(", "));
        setStatus(post.status ?? "draft");
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") return;

        setError(
          err instanceof Error
            ? err.message
            : "Blog details load cheyyalekapoyam."
        );
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    if (id) void loadPost();

    return () => controller.abort();
  }, [id, router]);

  function makeSlug(value: string) {
    return value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
  }

  async function handleSave(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (saving) return;

    setSaving(true);
    setError("");
    setMessage("");

    try {
      const cleanedSlug = makeSlug(slug);

      if (!title.trim() || !cleanedSlug || !content.trim()) {
        throw new Error("Title, slug, and full content required.");
      }

      const response = await fetch("/api/admin/blog/posts", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          title: title.trim(),
          slug: cleanedSlug,
          category: category.trim(),
          excerpt: excerpt.trim(),
          content,
          seo_title: seoTitle.trim() || null,
          meta_description: metaDescription.trim() || null,
          keywords: keywords
            .split(",")
            .map((keyword) => keyword.trim())
            .filter(Boolean),
          status,
        }),
      });

      if (response.status === 401) {
        router.replace("/admin/login");
        return;
      }

      const result: ApiResponse = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Blog update cheyyadam fail ayyindi.");
      }

      setMessage("Blog successfully update ayyindi.");

      // Refresh dashboard data after a successful update.
      router.refresh();
      router.push("/admin/blog");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Network error. Please try again."
      );
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#f4f8fc] px-5">
        <div className="text-center">
          <LoaderCircle
            size={32}
            className="mx-auto animate-spin text-[#0878e8]"
          />
          <p className="mt-3 text-sm text-slate-600">
            Loading blog details...
          </p>
        </div>
      </main>
    );
  }

  if (error && !title) {
    return (
      <main className="min-h-screen bg-[#f4f8fc] px-5 py-16">
        <div className="mx-auto max-w-xl rounded-2xl border border-slate-200 bg-white p-8 text-center">
          <p className="font-semibold text-red-600">{error}</p>
          <Link
            href="/admin/blog"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#0878e8] px-5 py-3 text-sm font-semibold text-white"
          >
            <ArrowLeft size={16} />
            Back to Dashboard
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f4f8fc]">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <img
              src="/images/LDS-Logo.jpg"
              alt="Lakshmi Durga Solutions"
              className="h-11 w-11 rounded-lg object-contain"
            />
            <div>
              <h1 className="font-bold text-[#082a4a]">Edit Blog</h1>
              <p className="text-xs text-slate-500">
                Lakshmi Durga Solutions
              </p>
            </div>
          </div>

          <Link
            href="/admin/blog"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Dashboard</span>
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <div className="mb-7">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#0878e8]">
            Content Management
          </p>
          <h2 className="mt-2 text-2xl font-bold text-[#082a4a] sm:text-3xl">
            Edit Article
          </h2>
          <p className="mt-2 text-sm text-slate-500">
            Update blog content and SEO details. Changes apply after saving.
          </p>
        </div>

        <form onSubmit={handleSave} className="space-y-6">
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
            <div className="mb-6 flex items-center gap-3 border-b border-slate-100 pb-4">
              <FileText className="text-[#0878e8]" size={22} />
              <h3 className="font-bold text-[#082a4a]">
                Article Information
              </h3>
            </div>

            <div className="space-y-5">
              <Field label="Blog Title" required>
                <input
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className={inputClass}
                  placeholder="Enter blog title"
                />
              </Field>

              <Field label="URL Slug" required>
                <input
                  required
                  value={slug}
                  onChange={(e) => setSlug(makeSlug(e.target.value))}
                  className={inputClass}
                  placeholder="your-blog-url"
                />
                <p className="mt-2 break-all text-xs text-slate-500">
                  Public URL: /blog/{makeSlug(slug) || "your-blog-url"}
                </p>
              </Field>

              <Field label="Category">
                <input
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className={inputClass}
                  placeholder="e.g. Business, Technology, Guides"
                />
              </Field>

              <Field label="Short Excerpt">
                <textarea
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  rows={3}
                  className={inputClass}
                  placeholder="Short summary shown on the blog listing page"
                />
              </Field>

              <Field label="Full Blog Content" required>
                <textarea
                  required
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={16}
                  className={`${inputClass} leading-7`}
                  placeholder="Write the complete article here..."
                />
                <p className="mt-2 text-xs text-slate-500">
                  Text-only content. Line breaks are preserved on the article page.
                </p>
              </Field>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
            <h3 className="mb-6 border-b border-slate-100 pb-4 font-bold text-[#082a4a]">
              SEO Settings
            </h3>

            <div className="space-y-5">
              <Field label="SEO Title">
                <input
                  value={seoTitle}
                  onChange={(e) => setSeoTitle(e.target.value)}
                  className={inputClass}
                  placeholder="SEO title (optional)"
                />
              </Field>

              <Field label="Meta Description">
                <textarea
                  value={metaDescription}
                  onChange={(e) => setMetaDescription(e.target.value)}
                  rows={3}
                  className={inputClass}
                  placeholder="Short description for search engines"
                />
              </Field>

              <Field label="Keywords">
                <input
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  className={inputClass}
                  placeholder="keyword one, keyword two, keyword three"
                />
                <p className="mt-2 text-xs text-slate-500">
                  Separate keywords with commas.
                </p>
              </Field>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
            <h3 className="mb-5 font-bold text-[#082a4a]">
              Publishing Status
            </h3>

            <Field label="Status">
              <select
                value={status}
                onChange={(e) =>
                  setStatus(e.target.value as "draft" | "published")
                }
                className={inputClass}
              >
                <option value="draft">Draft — not visible publicly</option>
                <option value="published">Published — visible publicly</option>
              </select>
            </Field>

            <p className="mt-3 text-xs leading-5 text-slate-500">
              Publishing makes the article eligible to appear on the public
              blog. Saving as draft removes it from the public listing.
            </p>
          </section>

          {error && (
            <div
              role="alert"
              className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              {error}
            </div>
          )}

          {message && (
            <div
              role="status"
              className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700"
            >
              {message}
            </div>
          )}

          <div className="flex flex-col-reverse justify-end gap-3 sm:flex-row">
            <Link
              href="/admin/blog"
              className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Cancel
            </Link>

            {status === "published" && slug && (
              <Link
                href={`/blog/${encodeURIComponent(makeSlug(slug))}`}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-5 py-3 text-sm font-semibold text-[#0878e8] transition hover:bg-blue-100"
              >
                <Eye size={17} />
                View Article
              </Link>
            )}

            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0878e8] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0667c7] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {saving ? (
                <LoaderCircle size={17} className="animate-spin" />
              ) : (
                <Save size={17} />
              )}
              {saving ? "Saving Changes..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

const inputClass =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#0878e8] focus:ring-2 focus:ring-blue-100";

function Field({
  label,
  required = false,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>
      {children}
    </div>
  );
}
