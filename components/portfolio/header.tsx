import type { NavItem } from "@/types/portfolio";

type HeaderProps = {
  siteName: string;
  navItems: NavItem[];
};

export function Header({ siteName, navItems }: HeaderProps) {
  return (
    <header className="container-grid mb-14 fade-in">
      <nav className="surface-card flex items-center justify-between px-5 py-4 sm:px-7">
        <p className="font-semibold tracking-tight">{siteName}</p>
        <div className="flex items-center gap-5 text-sm text-[var(--text-muted)]">
          {navItems.map((item) => {
            const isSectionLink = item.href.startsWith("#");

            return (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-[var(--text)]"
                target={isSectionLink ? undefined : "_blank"}
                rel={isSectionLink ? undefined : "noreferrer"}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
