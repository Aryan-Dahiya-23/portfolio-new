import type { ContactData } from "@/types/portfolio";

type ContactSectionProps = {
  contact: ContactData;
};

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="surface-card px-4 py-7 text-center sm:px-10 sm:py-8"
    >
      <p className="heading-kicker">Contact</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
        {contact.heading}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm text-[var(--text-muted)] sm:text-base">
        {contact.description}
      </p>
      <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <a
          href={`mailto:${contact.email}`}
          aria-label={`Email ${contact.email}`}
          className="inline-flex w-full items-center justify-center rounded-full bg-[var(--text)] px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text)]/35 sm:w-auto"
        >
          {contact.emailButtonLabel}
        </a>
        {contact.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full border border-[var(--line)] bg-white px-5 py-2.5 text-sm font-medium transition hover:bg-[var(--bg-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/35 sm:w-auto"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
