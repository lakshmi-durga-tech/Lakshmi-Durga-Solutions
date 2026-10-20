
"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  
async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  setError("");
  setLoading(true);

  try {
    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
      body: JSON.stringify({
        email: email.trim().toLowerCase(),
        password,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      setError(result.error || "Login failed. Please try again.");
      return;
    }

    // Confirm that the browser received and can send the session cookie.
    const sessionResponse = await fetch("/api/admin/session", {
      method: "GET",
      credentials: "same-origin",
      cache: "no-store",
    });

    const session = await sessionResponse.json();

    if (!sessionResponse.ok || !session.authenticated) {
      setError("Login succeeded, but the session was not detected. Please try again.");
      return;
    }

    // Use a full navigation after the session is confirmed.
    window.location.href = "/admin/blog";
  } catch (error) {
    console.error("Admin login navigation failed:", error);
    setError("Unable to complete login. Please try again.");
  } finally {
    setLoading(false);
  }
}


  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f4f8fc] px-4 py-10">
      <section className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-7 shadow-xl sm:p-9">
        <div className="mb-6 flex flex-col items-center text-center">
          <div className="mb-4 flex h-20 w-20 items-center justify-center">
            <img
              src="/images/LDS-Logo.jpg"
              alt="Lakshmi Durga Solutions Logo"
              className="h-full w-full rounded-xl object-contain"
            />
          </div>

          <h1 className="text-2xl font-bold text-[#082a4a]">
            Admin Login
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Lakshmi Durga Solutions Blog Dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Email Address
            </label>

            <input
              id="email"
              type="email"
              autoComplete="username"
              required
              maxLength={254}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter admin email"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0878e8] focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-semibold text-slate-700"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              maxLength={1024}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-[#0878e8] focus:ring-2 focus:ring-blue-100"
            />
          </div>

          {error && (
            <p
              role="alert"
              className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-[#0878e8] px-4 py-3 font-semibold text-white transition hover:bg-[#0665c4] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-slate-400">
          Authorized administrators only
        </p>
      </section>
    </main>
  );
}
