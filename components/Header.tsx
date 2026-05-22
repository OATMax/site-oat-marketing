import Link from "next/link";
import Image from "next/image";

const NAV = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[var(--neutral-50)]/85 backdrop-blur">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-[1340px] items-center justify-between px-5 py-4 md:px-10"
      >
        <Link href="/" className="flex items-center" aria-label="OAT Marketing, home">
          <Image src="/brand/oat-logo.png" alt="OAT Marketing" width={104} height={40} priority className="h-8 w-auto md:h-9" />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-medium text-primary/70 transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Get in touch
        </Link>
      </nav>

      {/* Mobile nav: native details disclosure, no JS */}
      <details className="border-t border-black/5 md:hidden">
        <summary className="cursor-pointer list-none px-5 py-3 text-sm font-medium text-primary/70">
          Menu
        </summary>
        <ul className="flex flex-col gap-1 px-5 pb-4">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="block py-2 text-sm font-medium text-primary/80">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </details>
    </header>
  );
}
