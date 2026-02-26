"use client";

import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import type { NavItem } from "@/types/portfolio";

type HeaderProps = {
  siteName: string;
  navItems: NavItem[];
};

export function Header({ siteName, navItems }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const canUseDOM = typeof document !== "undefined";

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
    closeMenu = false,
  ) => {
    if (closeMenu) {
      setIsOpen(false);
    }

    if (!href.startsWith("#")) {
      return;
    }

    const targetId = href.slice(1);
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });

    if (window.location.hash !== href) {
      window.history.pushState(null, "", href);
    }
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <header className="container-grid mb-10 fade-in sm:mb-14">
      <nav className="surface-card flex items-center justify-between px-4 py-3 sm:px-7 sm:py-4">
        <p className="max-w-[70vw] truncate text-sm font-semibold tracking-tight sm:max-w-none sm:text-base">
          {siteName}
        </p>
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--line)] bg-white text-[var(--text-muted)] sm:hidden"
          onClick={() => setIsOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-5 w-5"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>

        <div className="hidden items-center gap-4 text-sm text-[var(--text-muted)] sm:flex">
          {navItems.map((item) => {
            const isSectionLink = item.href.startsWith("#");

            return (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-[var(--text)]"
                target={isSectionLink ? undefined : "_blank"}
                rel={isSectionLink ? undefined : "noreferrer"}
                onClick={(event) => handleNavClick(event, item.href)}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </nav>

      {canUseDOM
        ? createPortal(
            <AnimatePresence>
              {isOpen ? (
                <>
                  <motion.button
                    type="button"
                    aria-label="Close menu overlay"
                    className="fixed inset-0 z-[90] bg-black/35 sm:hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setIsOpen(false)}
                  />
                  <motion.aside
                    className="fixed right-0 top-0 z-[100] h-dvh w-[86vw] max-w-xs overflow-y-auto border-l border-[var(--line)] bg-white p-5 shadow-2xl sm:hidden"
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <p className="font-semibold tracking-tight">{siteName}</p>
                      <button
                        type="button"
                        aria-label="Close menu"
                        className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--line)]"
                        onClick={() => setIsOpen(false)}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="h-5 w-5"
                        >
                          <path d="M6 6L18 18M6 18L18 6" />
                        </svg>
                      </button>
                    </div>

                    <div className="space-y-2">
                      {navItems.map((item) => {
                        const isSectionLink = item.href.startsWith("#");

                        return (
                          <a
                            key={`mobile-${item.href}`}
                            href={item.href}
                            className="block rounded-lg px-3 py-2.5 text-sm text-[var(--text-muted)] transition hover:bg-[var(--bg-soft)] hover:text-[var(--text)]"
                            target={isSectionLink ? undefined : "_blank"}
                            rel={isSectionLink ? undefined : "noreferrer"}
                            onClick={(event) =>
                              handleNavClick(event, item.href, true)
                            }
                          >
                            {item.label}
                          </a>
                        );
                      })}
                    </div>
                  </motion.aside>
                </>
              ) : null}
            </AnimatePresence>,
            document.body,
          )
        : null}
    </header>
  );
}
