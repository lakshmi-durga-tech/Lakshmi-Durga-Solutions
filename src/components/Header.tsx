

"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us/" },
  { label: "Services", href: "/services/" },
  { label: "For Whom We Support", href: "/industries/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "Blog", href: "/blog/?source=virtual-operator" },
  { label: "Connect With Us", href: "" },
];

const contactOptions = [
  {
    label: "Individual",
    href: "/contact-individual/",
  },
  {
    label: "Any Organisation / Office",
    href: "/contact-organisation/",
  },
  {
    label: "School / College / Institution / Coaching Center",
    href: "/contact-institution/",
  },
];

function getPath(href: string) {
  const path = href.split("?")[0];
  return path === "/" ? "/" : path.replace(/\/+$/, "");
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => {
    setOpen(false);
    setContactOpen(false);
  };

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  const isActive = (href: string) => {
    const currentPath = getPath(pathname || "/");
    return currentPath === getPath(href);
  };

  const isContactActive =
    getPath(pathname || "/") === "/contact-us" ||
    contactOptions.some((option) => isActive(option.href));

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
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Company Logo */}
        <a
          href="/virtual-operator/"
          onClick={closeMenu}
          aria-label="Lakshmi Durga Solutions Virtual Operator Home"
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
          aria-label="Virtual Operator navigation"
          className="hidden items-center gap-5 lg:flex xl:gap-7"
        >
          {links.map((link) =>
            link.label === "Connect With Us" ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setContactOpen(true)}
                onMouseLeave={() => setContactOpen(false)}
              >
                <a
                  href={link.href}
                  aria-current={isContactActive ? "page" : undefined}
                  aria-haspopup="true"
                  aria-expanded={contactOpen}
                  onFocus={() => setContactOpen(true)}
                  onKeyDown={(event) => {
                    if (event.key === "Escape") {
                      setContactOpen(false);
                    }
                  }}
                  className={`${linkClass(link.href)} inline-flex items-center gap-1 ${
                    isContactActive ? "text-[#0878e8]" : ""
                  }`}
                >
                  Connect With Us
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-200 ${
                      contactOpen ? "rotate-180" : ""
                    }`}
                  />
                </a>

                {/* Contact Dropdown */}
                <div
                  className={`absolute left-1/2 top-full z-[60] w-80 -translate-x-1/2 pt-3 transition-all duration-200 ${
                    contactOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible translate-y-2 opacity-0"
                  }`}
                >
                  <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
                    {contactOptions.map((option) => (
                      <a
                        key={option.href}
                        href={option.href}
                        onClick={() => setContactOpen(false)}
                        className={`block rounded-lg px-4 py-3 text-sm leading-5 transition-colors hover:bg-blue-50 hover:text-[#0878e8] ${
                          isActive(option.href)
                            ? "bg-blue-50 font-semibold text-[#0878e8]"
                            : "text-slate-700"
                        }`}
                      >
                        {option.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={linkClass(link.href)}
              >
                {link.label}
              </a>
            )
          )}

          <a
            href="/contact-us/?source=virtual-operator"
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
          aria-controls="virtual-operator-mobile-navigation"
          className="inline-flex items-center justify-center border border-slate-200 p-2.5 text-[#082a4a] transition-colors hover:border-[#0878e8] hover:text-[#0878e8] lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav
          id="virtual-operator-mobile-navigation"
          aria-label="Virtual Operator mobile navigation"
          className="max-h-[calc(100vh-76px)] overflow-y-auto border-t border-slate-200 bg-white px-4 py-4 shadow-lg sm:px-6 lg:hidden"
        >
          <div className="mx-auto grid max-w-7xl gap-1">
            {links.map((link) =>
              link.label === "Connect With Us" ? (
                <div key={link.label} className="border-b border-slate-100">
                  <button
                    type="button"
                    onClick={() =>
                      setContactOpen((previous) => !previous)
                    }
                    aria-expanded={contactOpen}
                    className={`flex w-full items-center justify-between px-3 py-3 text-left text-sm font-medium transition-colors ${
                      isContactActive
                        ? "text-[#0878e8]"
                        : "text-slate-700 hover:bg-slate-50 hover:text-[#0878e8]"
                    }`}
                  >
                    Connect With Us
                    <ChevronDown
                      size={17}
                      className={`transition-transform duration-200 ${
                        contactOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {contactOpen && (
                    <div className="mb-2 ml-3 border-l-2 border-blue-100 pl-2">
                      {contactOptions.map((option) => (
                        <a
                          key={option.href}
                          href={option.href}
                          onClick={closeMenu}
                          aria-current={
                            isActive(option.href) ? "page" : undefined
                          }
                          className={`block rounded-md px-3 py-3 text-sm leading-5 transition-colors ${
                            isActive(option.href)
                              ? "bg-blue-50 font-semibold text-[#0878e8]"
                              : "text-slate-600 hover:bg-slate-50 hover:text-[#0878e8]"
                          }`}
                        >
                          {option.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`border-b px-3 py-3 text-sm font-medium transition-colors ${
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
              )
            )}

            <a
              href="/contact-us/?source=virtual-operator"
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



