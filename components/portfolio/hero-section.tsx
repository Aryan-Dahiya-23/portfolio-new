"use client";

import type { MouseEvent } from "react";
import type { HeroData } from "@/types/portfolio";

type HeroSectionProps = {
  hero: HeroData;
};

export function HeroSection({ hero }: HeroSectionProps) {
  const isPrimarySectionLink = hero.primaryCta.href.startsWith("#");
  const isSecondarySectionLink = hero.secondaryCta.href.startsWith("#");
  const handleSectionClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
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

  return (
    <section className="surface-card relative overflow-hidden px-6 py-10 sm:px-10 sm:py-14">
      <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-[var(--brand-soft)] blur-2xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-20 h-56 w-56 rounded-full bg-[rgba(13,148,136,0.15)] blur-2xl" />

      <h1 className="fade-in delay-1 mt-3 max-w-3xl text-4xl font-semibold leading-tight sm:text-6xl">
        {hero.title}
      </h1>
      <p className="fade-in delay-2 mt-5 max-w-2xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
        {hero.description}
      </p>

      <div className="fade-in delay-3 mt-8 flex flex-wrap gap-3">
        <a
          href={hero.primaryCta.href}
          className="hero-cta-primary rounded-full bg-[var(--brand)] px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
          onClick={(event) => handleSectionClick(event, hero.primaryCta.href)}
          target={isPrimarySectionLink ? undefined : "_blank"}
          rel={isPrimarySectionLink ? undefined : "noreferrer"}
        >
          {hero.primaryCta.label}
        </a>
        <a
          href={hero.secondaryCta.href}
          className="rounded-full border border-[var(--line)] bg-white px-5 py-2.5 text-sm font-medium transition hover:bg-[var(--bg-soft)]"
          onClick={(event) => handleSectionClick(event, hero.secondaryCta.href)}
          target={isSecondarySectionLink ? undefined : "_blank"}
          rel={isSecondarySectionLink ? undefined : "noreferrer"}
        >
          {hero.secondaryCta.label}
        </a>
      </div>
    </section>
  );
}
