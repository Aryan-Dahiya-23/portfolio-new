import type { ContactData } from "@/types/portfolio";

type ContactSectionProps = {
  contact: ContactData;
};

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section
      id="contact"
      className="surface-card px-6 py-8 text-center sm:px-10"
    >
      <p className="heading-kicker">Contact</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight">
        {contact.heading}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-[var(--text-muted)]">
        {contact.description}
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <a
          href={`mailto:${contact.email}`}
          aria-label={`Email ${contact.email}`}
          className="rounded-full bg-[var(--text)] px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--text)]/35"
        >
          {contact.emailButtonLabel}
        </a>
        {contact.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[var(--line)] bg-white px-5 py-2.5 text-sm font-medium transition hover:bg-[var(--bg-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/35"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
