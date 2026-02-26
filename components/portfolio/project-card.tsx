import Image from "next/image";

import type { Project } from "@/types/portfolio";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const hasLiveUrl = project.liveUrl && project.liveUrl !== "#";
  const hasRepoUrl = project.repoUrl && project.repoUrl !== "#";

  return (
    <article
      className="surface-card flex h-full min-w-0 flex-col px-4 py-4 transition duration-200 hover:shadow-[0_16px_28px_rgba(20,20,20,0.12)] sm:px-5 sm:py-5"
    >
      <div className="group">
        {hasLiveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open live demo for ${project.title}`}
            className="block"
          >
            <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-xl border border-[var(--line)] bg-white/60">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                width={1200}
                height={720}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
              />
            </div>
          </a>
        ) : (
          <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-xl border border-[var(--line)] bg-white/60">
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              width={1200}
              height={720}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
            />
          </div>
        )}
        <h3 className="break-words text-lg font-semibold tracking-tight sm:text-xl">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
          {project.summary}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 6).map((item) => (
            <li
              key={item}
              className="rounded-full border border-[var(--line)] px-2.5 py-1 text-xs text-[var(--text-muted)]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-5">
        {hasLiveUrl || hasRepoUrl ? (
          <div className="flex flex-wrap items-center justify-end gap-2">
            {hasLiveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full bg-[var(--brand)] px-3.5 py-1.5 text-xs font-semibold text-white shadow-[0_6px_12px_rgba(219,58,52,0.24)] transition hover:translate-y-[-1px] hover:shadow-[0_9px_18px_rgba(219,58,52,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]/35"
              >
                Live Demo
              </a>
            )}
            {hasRepoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-[var(--line)] bg-white px-3.5 py-1.5 text-xs font-semibold text-[var(--text-muted)] transition hover:bg-[var(--bg-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/35"
              >
                GitHub
              </a>
            )}
          </div>
        ) : (
          <p className="text-right text-xs font-medium text-[var(--text-muted)]">
            Links coming soon
          </p>
        )}
      </div>
    </article>
  );
}
