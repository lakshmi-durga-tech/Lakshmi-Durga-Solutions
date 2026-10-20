
"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type BlogStatus = "draft" | "published";

export default function NewBlogPage() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [slugEdited, setSlugEdited] = useState(false);
  const [category, setCategory] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [seoTitle, setSeoTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [keywords, setKeywords] = useState("");

  const [savingStatus, setSavingStatus] = useState<BlogStatus | null>(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function slugify(value: string) {
    return value
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
  }

  function handleTitleChange(value: string) {
    setTitle(value);
    if (!slugEdited) {
      setSlug(slugify(value));
    }
    if (!seoTitle) {
      setSeoTitle(value);
    }
  }
  function saveDraft() {
  const form = document.querySelector("form");
  if (!form) return;

  const event = new Event("submit", {
    bubbles: true,
    cancelable: true,
  });

  form.dispatchEvent(event);
}

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
    status: BlogStatus
  ) {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!title.trim() || !slug.trim() || !category.trim()) {
      setError("Please fill in the title, URL slug and category.");
      return;
    }

    if (!excerpt.trim() || !content.trim()) {
      setError("Please enter the short description and full blog content.");
      return;
    }

    setSavingStatus(status);

    try {
      const response = await fetch("/api/admin/blog/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
        body: JSON.stringify({
          title: title.trim(),
          slug: slug.trim().toLowerCase(),
          category: category.trim(),
          excerpt: excerpt.trim(),
          content: content.trim(),
          seo_title: seoTitle.trim() || title.trim(),
          meta_description: metaDescription.trim() || excerpt.trim(),
          keywords: keywords
            .split(",")
            .map((keyword) => keyword.trim())
            .filter(Boolean),
          status,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        if (response.status === 401) {
          router.replace("/admin/login");
          return;
        }
        setError(result.error || "Unable to save the blog post.");
        return;
      }

      setSuccess(
        status === "published"
          ? "Blog published successfully!"
          : "Blog saved as draft successfully!"
      );

      router.push("/admin/blog");
      router.refresh();
    } catch (err) {
      console.error("Create blog failed:", err);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSavingStatus(null);
    }
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100";

  const labelClass = "text-sm font-semibold text-slate-700";

  return (
    <main className="min-h-screen bg-[#f4f8fc] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Page header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              href="/admin/blog"
              className="mb-3 inline-flex items-center gap-2 text-sm font-medium text-[#0878e8] hover:underline"
            >
              <span aria-hidden="true">←</span> Back to Blog Dashboard
            </Link>

            <h1 className="text-3xl font-bold tracking-tight text-[#082a4a] sm:text-4xl">
              Create New Blog
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Write, optimize and publish your next article for Lakshmi Durga
              Solutions.
            </p>
          </div>

          <div className="w-fit rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-semibold text-[#0878e8]">
            TEXT-ONLY EDITOR
          </div>
        </div>

        <form
          onSubmit={(event) => handleSubmit(event, "published")}
          className="space-y-6"
        >
          {/* Blog details */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-[#082a4a]">
                Blog Details
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Add the basic information readers will see.
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <label htmlFor="title" className={labelClass}>
                  Blog Title *
                </label>
                <input
                  id="title"
                  value={title}
                  onChange={(event) => handleTitleChange(event.target.value)}
                  maxLength={200}
                  required
                  placeholder="e.g. How to Choose the Right Business Solution"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="slug" className={labelClass}>
                  URL Slug *
                </label>
                <div className="mt-2 flex items-stretch overflow-hidden rounded-xl border border-slate-200 bg-slate-50 focus-within:border-blue-500">
                  <span className="flex items-center border-r border-slate-200 px-3 text-xs text-slate-500 sm:px-4">
                    /blog/
                  </span>
                  <input
                    id="slug"
                    value={slug}
                    onChange={(event) => {
                      setSlug(slugify(event.target.value));
                      setSlugEdited(true);
                    }}
                    maxLength={220}
                    required
                    placeholder="your-blog-url"
                    className="min-w-0 flex-1 bg-white px-3 py-3 text-sm text-slate-800 outline-none"
                  />
                </div>
                <p className="mt-2 text-xs text-slate-500">
                  Use lowercase English letters, numbers and hyphens.
                </p>
              </div>

              <div>
                <label htmlFor="category" className={labelClass}>
                  Category *
                </label>
                <input
                  id="category"
                  value={category}
                  onChange={(event) => setCategory(event.target.value)}
                  maxLength={100}
                  required
                  placeholder="e.g. Business, Technology, Education"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="excerpt" className={labelClass}>
                  Short Description *
                </label>
                <textarea
                  id="excerpt"
                  value={excerpt}
                  onChange={(event) => setExcerpt(event.target.value)}
                  maxLength={500}
                  required
                  rows={3}
                  placeholder="Write a short summary of this article..."
                  className={inputClass + " resize-y"}
                />
                <p className="mt-1 text-right text-xs text-slate-400">
                  {excerpt.length}/500
                </p>
              </div>
            </div>
          </section>

          {/* Blog content */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-[#082a4a]">
                Article Content
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Write the complete article. Images and file uploads are not
                used.
              </p>
            </div>

            <div>
              <label htmlFor="content" className={labelClass}>
                Full Blog Content *
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(event) => setContent(event.target.value)}
                maxLength={100000}
                required
                rows={18}
                placeholder={`Write your article here...\n\nYou can separate paragraphs with blank lines.\n\nIntroduction\n\nMain points\n\nConclusion`}
                className={inputClass + " resize-y leading-7"}
              />
              <div className="mt-2 flex flex-wrap justify-between gap-2 text-xs text-slate-400">
                <span>Paragraphs and line breaks are supported.</span>
                <span>{content.length.toLocaleString()} / 100,000</span>
              </div>
            </div>
          </section>

          {/* SEO */}
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-[#082a4a]">
                SEO Settings
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Add search-friendly information for your article.
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <label htmlFor="seoTitle" className={labelClass}>
                  SEO Title
                </label>
                <input
                  id="seoTitle"
                  value={seoTitle}
                  onChange={(event) => setSeoTitle(event.target.value)}
                  maxLength={200}
                  placeholder="Search engine title"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="metaDescription" className={labelClass}>
                  Meta Description
                </label>
                <textarea
                  id="metaDescription"
                  value={metaDescription}
                  onChange={(event) =>
                    setMetaDescription(event.target.value)
                  }
                  maxLength={320}
                  rows={3}
                  placeholder="Briefly describe this article for search engines..."
                  className={inputClass + " resize-y"}
                />
                <p className="mt-1 text-right text-xs text-slate-400">
                  {metaDescription.length}/320
                </p>
              </div>

              <div>
                <label htmlFor="keywords" className={labelClass}>
                  SEO Keywords
                </label>
                <input
                  id="keywords"
                  value={keywords}
                  onChange={(event) => setKeywords(event.target.value)}
                  placeholder="business solutions, technology, services"
                  className={inputClass}
                />
                <p className="mt-2 text-xs text-slate-500">
                  Separate each keyword with a comma.
                </p>
              </div>
            </div>
          </section>

          {/* Feedback */}
          {error && (
            <div
              role="alert"
              className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              {error}
            </div>
          )}

          {success && (
            <div
              role="status"
              className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700"
            >
              {success}
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col-reverse gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-5">
            <Link
              href="/admin/blog"
              className="rounded-xl border border-slate-200 px-5 py-3 text-center text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
            >
              Cancel
            </Link>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
  type="button"
  disabled={savingStatus !== null}
  onClick={() => {
    const form = document.querySelector("form");
    if (!form) return;

    if (!form.reportValidity()) return;

    const fakeEvent = {
      preventDefault: () => {},
    } as FormEvent<HTMLFormElement>;

    void handleSubmit(fakeEvent, "draft");
  }}
  className="rounded-xl border border-[#0878e8] px-5 py-3 text-sm font-semibold text-[#0878e8] transition hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-60"
>
  {savingStatus === "draft" ? "Saving Draft..." : "Save Draft"}
</button>

              <button
                type="submit"
                disabled={savingStatus !== null}
                className="rounded-xl bg-[#0878e8] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0666c7] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {savingStatus === "published"
                  ? "Publishing..."
                  : "Publish Blog"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
