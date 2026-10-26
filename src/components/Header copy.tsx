
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "Services", href: "/services-us/" },
  { label: "Pricing", href: "/price/" },
  { label: "Blog", href: "/blog/?source=agency" },
  { label: "Contact", href: "/contact-us/?source=agency" },
  // { label: "Pay Online", href: "/pay-online/?source=agency" },
];

function getPath(href: string) {
  const path = href.split("?")[0];
  return path === "/" ? "/" : path.replace(/\/+$/, "");
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const closeMenu = () => setOpen(false);

  const isActive = (href: string) => {
    if (!mounted || !pathname) return false;

    return getPath(pathname) === getPath(href);
  };

  const linkClass = (href: string) =>
    `relative py-2 text-sm font-medium transition-colors duration-200
    after:absolute after:bottom-0 after:left-0 after:h-[2px]
    after:bg-[#0878e8] after:transition-all after:duration-200
    ${
      isActive(href)
        ? "text-[#0878e8] after:w-full"
        : "text-slate-600 after:w-0 hover:text-[#0878e8] hover:after:w-full"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Company Logo */}
        <a
          href="/ad-agency/"
          onClick={closeMenu}
          aria-label="Lakshmi Durga Solutions Ad Agency Home"
          className="flex min-w-0 items-center gap-3"
        >
          <img
            src="/images/LDS-Logo.jpg"
            alt="Lakshmi Durga Solutions logo"
            width={180}
            height={60}
            className="h-11 w-auto max-w-[150px] object-contain sm:max-w-[180px]"
          />

          <span className="hidden border-l border-slate-200 pl-3 leading-tight sm:block">
            <span className="block text-sm font-bold tracking-tight text-[#082a4a]">
              Lakshmi Durga
            </span>

            <span className="mt-1 block text-xs font-medium tracking-[0.12em] text-slate-500">
              SOLUTIONS
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Ad Agency navigation"
          className="hidden items-center gap-5 lg:flex xl:gap-7"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={linkClass(link.href)}
            >
              {link.label}
            </a>
          ))}

          <a
            href="/contact-us/?source=agency"
            className="modern-button inline-flex items-center gap-2 rounded-md bg-[#0878e8] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#0666c7]"
          >
            Get a Quote
            <ArrowUpRight size={16} />
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setOpen((previous) => !previous)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="agency-mobile-navigation"
          className="inline-flex items-center justify-center border border-slate-200 p-2.5 text-[#082a4a] transition-colors hover:border-[#0878e8] hover:text-[#0878e8] lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav
          id="agency-mobile-navigation"
          aria-label="Ad Agency mobile navigation"
          className="border-t border-slate-200 bg-white px-4 py-4 shadow-lg sm:px-6 lg:hidden"
        >
          <div className="mx-auto grid max-w-7xl gap-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`border-b px-3 py-3 text-sm font-medium transition-colors
                  ${
                    isActive(link.href)
                      ? "border-blue-200 bg-blue-50 text-[#0878e8]"
                      : "border-slate-100 text-slate-700 hover:bg-slate-50 hover:text-[#0878e8]"
                  }`}
              >
                <span className="flex items-center justify-between">
                  {link.label}

                  {isActive(link.href) && (
                    <span
                      className="ml-3 h-[2px] w-6 bg-[#0878e8]"
                      aria-hidden="true"
                    />
                  )}
                </span>
              </a>
            ))}

            <a
              href="/contact-us/?source=agency"
              onClick={closeMenu}
              className="mt-3 flex items-center justify-center gap-2 rounded-md bg-[#0878e8] px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#0666c7]"
            >
              Get a Quote
              <ArrowUpRight size={16} />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
