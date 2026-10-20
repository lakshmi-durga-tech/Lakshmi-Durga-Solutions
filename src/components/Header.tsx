
"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us/" },
  { label: "Services", href: "/services/" },
  { label: "Industries", href: "/industries/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "Blog", href: "/blog/?source=virtual-operator" },
  { label: "Contact", href: "/contact-us/?source=virtual-operator" },
  //{ label: "Pay Online", href: "/pay-online/?source=virtual-operator" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

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
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-[#0878e8] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#0878e8] after:transition-all after:duration-200 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}

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
          className="border-t border-slate-200 bg-white px-4 py-4 shadow-lg sm:px-6 lg:hidden"
        >
          <div className="mx-auto grid max-w-7xl gap-1">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="border-b border-slate-100 px-3 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#0878e8]"
              >
                {link.label}
              </a>
            ))}

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
