"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "./CartContext";
import { useLanguage } from "./LanguageContext";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Technology", href: "/#technology" },
  { label: "Moto", href: "/moto" },
  { label: "Snow", href: "/snow" },
  { label: "App", href: "/app" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { openCart, cartCount } = useCart();
  const { t } = useLanguage();

  return (
    <nav aria-label="Main" className="fixed inset-x-0 top-0 z-50 bg-graphite text-paper">
      <div className="wrap flex h-11 items-center justify-between">
        <Link href="/" aria-label="Sentio" className="flex items-center gap-2 py-2" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.svg" alt="" width={18} height={20} className="logo-mark h-5 w-auto" />
          <span className="text-[0.9375rem] font-medium tracking-tight">Sentio</span>
        </Link>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="text-[0.8125rem] transition-opacity hover:opacity-60">
              {t(link.label)}
            </Link>
          ))}
        </div>

        <div className="-mr-2 flex items-center md:mr-0 md:gap-1">
          <LanguageToggle />
          <ThemeToggle />
          <button
            type="button"
            onClick={openCart}
            aria-label={`${t("Your cart")}: ${cartCount}`}
            className="h-11 px-2 text-[0.8125rem] transition-opacity hover:opacity-60"
          >
            {t("Cart")}
            {cartCount > 0 && <span className="ml-1 text-amber">{cartCount}</span>}
          </button>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={t(open ? "Close menu" : "Open menu")}
            className="grid size-11 place-items-center md:hidden"
          >
            {open ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="h-[calc(100svh-44px)] bg-graphite md:hidden">
          <div className="wrap flex flex-col pt-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rule py-4 text-[1.75rem] leading-tight tracking-tight"
              >
                {t(link.label)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
