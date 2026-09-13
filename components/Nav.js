"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { CLUB_NAME, SHOW_LOGO } from "../data/config";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/resources", label: "Resources" },
  { href: "/join", label: "Join" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur border-b border-hairline">
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 max-w-[220px] md:max-w-none"
        >
          {SHOW_LOGO && (
            <Image
              src="/MHAC%20logo.png"
              alt={`${CLUB_NAME} logo`}
              width={36}
              height={36}
              className="h-9 w-9 object-contain shrink-0"
              priority
            />
          )}
          <span className="font-serif text-lg md:text-xl tracking-tight text-navy leading-tight">
            {CLUB_NAME}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10" aria-label="Primary">
          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative text-sm font-medium pb-1 transition-colors ${
                  active ? "text-navy" : "text-ink/70 hover:text-navy"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-stone" />
                )}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="md:hidden inline-flex flex-col justify-center gap-1.5 w-10 h-10 shrink-0"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-[1.5px] bg-navy transition-transform ${
              open ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] bg-navy transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-[1.5px] bg-navy transition-transform ${
              open ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-out border-t border-hairline ${
          open ? "max-h-72" : "max-h-0 border-t-0"
        }`}
      >
        <ul className="px-6 py-4 flex flex-col gap-4">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block text-base font-medium text-ink py-1"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
