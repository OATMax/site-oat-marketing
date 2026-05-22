"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.08] bg-[var(--neutral-50)] shadow-sm">
      <nav aria-label="Primary" className="mx-auto flex max-w-[1340px] items-center justify-between px-5 py-3.5 md:px-10">
        <Link href="/" className="flex items-center" aria-label="OAT Marketing — home">
          <Image src="/brand/oat-logo.png" alt="OAT Marketing" width={104} height={40} priority className="h-8 w-auto md:h-9" />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-sm font-medium text-primary/70 transition-colors hover:text-primary">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 md:inline-flex"
          >
            Get in touch
          </Link>

          {/* Hamburger (mobile only) */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="-mr-1 inline-flex h-10 w-10 items-center justify-center rounded-md text-primary md:hidden"
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div id="mobile-menu" className="border-t border-black/[0.06] bg-[var(--neutral-50)] md:hidden">
          <ul className="flex flex-col px-5 py-2">
            {NAV.map((item) => (
              <li key={item.href} className="border-b border-black/[0.04] last:border-0">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 text-[15px] font-medium text-primary/80"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-5 pb-5 pt-1">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-primary px-5 py-3.5 text-center text-sm font-semibold text-white"
            >
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
