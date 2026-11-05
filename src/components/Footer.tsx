"use client";

import Link from "next/link";

const columns = [
  {
    title: "Goggles",
    links: [
      { label: "Sentio Moto", href: "/moto" },
      { label: "Sentio Snow", href: "/snow" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Technology", href: "/#technology" },
      { label: "Safety", href: "/#safety" },
      { label: "Sentio App", href: "/app" },
      { label: "Questions", href: "/#questions" },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="updates" className="scroll-mt-11 bg-graphite text-paper">
      <div className="wrap pb-8 pt-16 md:pt-24">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-6">
            <h2 className="statement">Be first on the hill.</h2>
            <p className="body-copy mt-3 max-w-md text-stone">Launch dates, early pricing and firmware updates.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-8 flex max-w-md border-b border-paper/40">
              <label htmlFor="updates-email" className="sr-only">
                Email address
              </label>
              <input
                id="updates-email"
                type="email"
                autoComplete="email"
                placeholder="Email address"
                className="min-h-12 w-full bg-transparent text-base text-paper outline-none placeholder:text-stone"
              />
              <button type="submit" className="min-h-12 shrink-0 pl-4 text-[0.9375rem]">
                Sign up →
              </button>
            </form>
          </div>

          {columns.map((column) => (
            <div key={column.title} className="md:col-span-3">
              <h3 className="hud-label text-stone">{column.title}</h3>
              <ul className="mt-4">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="block py-1.5 text-[0.9375rem] transition-opacity hover:opacity-60">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rule mt-16 flex items-center justify-between pt-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.svg" alt="Sentio" width={18} height={20} className="h-5 w-auto" />
          <p className="hud-label text-stone">© {new Date().getFullYear()} Sentio</p>
        </div>
      </div>
    </footer>
  );
}
