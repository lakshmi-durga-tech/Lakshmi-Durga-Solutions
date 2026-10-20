
"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Plus,
  FileText,
  Globe,
  Clock,
  Pencil,
  Trash2,
  LogOut,
  RefreshCw,
} from "lucide-react";

type BlogPost = {
  id: string;
  title: string;
  slug: string;
  category: string;
  status: "draft" | "published";
  created_at: string;
  published_at: string | null;
};

type ApiResponse = {
  error?: string;
  posts?: BlogPost[];
  success?: boolean;
};

export default function AdminBlogDashboard() {
  const router = useRouter();

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [loggingOut, setLoggingOut] = useState(false);

  const loadPosts = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/blog/posts", {
        method: "GET",
        cache: "no-store",
      });

      if (response.status === 401) {
        router.replace("/admin/login");
        return;
      }

      const result: ApiResponse = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to load blog posts.");
      }

      setPosts(result.posts ?? []);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Blog posts load cheyyalekapoyam. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    void loadPosts();
  }, [loadPosts]);

  async function handleLogout() {
    if (loggingOut) return;

    setLoggingOut(true);

    try {
      await fetch("/api/admin/logout", {
        method: "POST",
      });
    } catch (err) {
      console.error("Logout request failed:", err);
    } finally {
      router.replace("/admin/login");
      router.refresh();
    }
  }

  async function deletePost(post: BlogPost) {
    if (deletingId) return;

    const confirmed = window.confirm(
      `"${post.title}" blog ni permanently delete cheyyala? Ee action ni undo cheyyalem.`
    );

    if (!confirmed) return;

    setDeletingId(post.id);
    setError("");

    try {
      const response = await fetch("/api/admin/blog/posts", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: post.id,
        }),
      });

      if (response.status === 401) {
        router.replace("/admin/login");
        return;
      }

      const result: ApiResponse = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Blog delete cheyyadam fail ayyindi.");
      }

      setPosts((currentPosts) =>
        currentPosts.filter((item) => item.id !== post.id)
      );
    } catch (err) {
      window.alert(
        err instanceof Error
          ? err.message
          : "Network error. Please try again."
      );
    } finally {
      setDeletingId(null);
    }
  }

  const published = posts.filter(
    (post) => post.status === "published"
  ).length;

  const drafts = posts.filter(
    (post) => post.status === "draft"
  ).length;

  return (
    <main className="min-h-screen bg-[#f4f8fc]">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <img
              src="/images/LDS-Logo.jpg"
              alt="Lakshmi Durga Solutions"
              className="h-11 w-11 rounded-lg object-contain"
            />

            <div>
              <h1 className="font-bold text-[#082a4a]">
                Blog Dashboard
              </h1>
              <p className="text-xs text-slate-500">
                Lakshmi Durga Solutions
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            disabled={loggingOut}
            className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <LogOut size={16} />
            <span>{loggingOut ? "Logging out..." : "Logout"}</span>
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-bold text-[#082a4a] sm:text-3xl">
              Manage Blogs
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Create, edit and manage your website articles.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => void loadPosts()}
              disabled={loading}
              className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <RefreshCw
                size={17}
                className={loading ? "animate-spin" : ""}
              />
              Refresh
            </button>

            <Link
              href="/admin/blog/new"
              className="flex items-center gap-2 rounded-xl bg-[#0878e8] px-5 py-3 font-semibold text-white transition hover:bg-[#0667c7]"
            >
              <Plus size={19} />
              Create Blog
            </Link>
          </div>
        </div>

        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          <StatCard
            label="Total Blogs"
            value={posts.length}
            icon={<FileText size={22} />}
          />

          <StatCard
            label="Published"
            value={published}
            icon={<Globe size={22} />}
          />

          <StatCard
            label="Drafts"
            value={drafts}
            icon={<Clock size={22} />}
          />
        </div>

        <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
            <h3 className="font-bold text-[#082a4a]">
              All Blog Posts
            </h3>

            <span className="text-xs text-slate-500">
              {posts.length} {posts.length === 1 ? "article" : "articles"}
            </span>
          </div>

          {loading ? (
            <div className="p-8 text-center text-slate-500">
              <RefreshCw
                size={24}
                className="mx-auto mb-3 animate-spin"
              />
              Loading blog posts...
            </div>
          ) : error ? (
            <div className="p-8 text-center">
              <p className="text-sm text-red-600">{error}</p>

              <button
                type="button"
                onClick={() => void loadPosts()}
                className="mt-4 rounded-lg bg-[#0878e8] px-4 py-2 font-medium text-white transition hover:bg-[#0667c7]"
              >
                Try Again
              </button>
            </div>
          ) : posts.length === 0 ? (
            <div className="px-6 py-14 text-center">
              <FileText
                size={38}
                className="mx-auto mb-3 text-slate-300"
              />

              <h4 className="font-semibold text-[#082a4a]">
                No blogs yet
              </h4>

              <p className="mt-2 text-sm text-slate-500">
                Create your first article to get started.
              </p>

              <Link
                href="/admin/blog/new"
                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#0878e8] px-4 py-2.5 font-medium text-white transition hover:bg-[#0667c7]"
              >
                <Plus size={17} />
                Create First Blog
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] text-left text-sm">
                <thead className="bg-slate-50 text-slate-500">
                  <tr>
                    <th className="px-5 py-4 font-medium">Title</th>
                    <th className="px-5 py-4 font-medium">Category</th>
                    <th className="px-5 py-4 font-medium">Status</th>
                    <th className="px-5 py-4 font-medium">Date</th>
                    <th className="px-5 py-4 font-medium">Actions</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {posts.map((post) => (
                    <tr
                      key={post.id}
                      className="transition hover:bg-slate-50"
                    >
                      <td className="max-w-xs px-5 py-4">
                        <p className="truncate font-semibold text-[#082a4a]">
                          {post.title}
                        </p>

                        <p className="mt-1 truncate text-xs text-slate-400">
                          /blog/{post.slug}/
                        </p>
                      </td>

                      <td className="px-5 py-4 text-slate-600">
                        {post.category || "Uncategorized"}
                      </td>

                      <td className="px-5 py-4">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            post.status === "published"
                              ? "bg-green-50 text-green-700"
                              : "bg-amber-50 text-amber-700"
                          }`}
                        >
                          {post.status === "published"
                            ? "Published"
                            : "Draft"}
                        </span>
                      </td>

                      <td className="whitespace-nowrap px-5 py-4 text-slate-500">
                        {post.created_at
                          ? new Date(post.created_at).toLocaleDateString(
                              "en-IN"
                            )
                          : "—"}
                      </td>

                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <Link
                            href={`/admin/blog/edit/${post.id}`}
                            title="Edit blog"
                            aria-label={`Edit ${post.title}`}
                            className="rounded-lg border border-slate-200 p-2 text-[#0878e8] transition hover:bg-blue-50"
                          >
                            <Pencil size={16} />
                          </Link>

                          {post.status === "published" && (
                            <Link
                              href={`/blog/${post.slug}/`}
                              target="_blank"
                              rel="noreferrer"
                              title="View published blog"
                              aria-label={`View ${post.title}`}
                              className="rounded-lg border border-slate-200 p-2 text-slate-600 transition hover:bg-slate-100"
                            >
                              <Globe size={16} />
                            </Link>
                          )}

                          <button
                            type="button"
                            onClick={() => void deletePost(post)}
                            disabled={deletingId !== null}
                            title="Delete blog"
                            aria-label={`Delete ${post.title}`}
                            className="rounded-lg border border-slate-200 p-2 text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            {deletingId === post.id ? (
                              <RefreshCw
                                size={16}
                                className="animate-spin"
                              />
                            ) : (
                              <Trash2 size={16} />
                            )}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

function StatCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: number;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-slate-500">{label}</p>

        <span className="rounded-xl bg-blue-50 p-2 text-[#0878e8]">
          {icon}
        </span>
      </div>

      <p className="text-3xl font-bold text-[#082a4a]">{value}</p>
    </div>
  );
}
