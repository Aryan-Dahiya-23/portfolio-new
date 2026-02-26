"use client";

import type { ExperienceItem, ExperienceProject } from "@/types/portfolio";

type ExperienceSectionProps = {
  items: ExperienceItem[];
  projects: ExperienceProject[];
  onOpenProject: (project: ExperienceProject) => void;
};

export function ExperienceSection({
  items,
  projects,
  onOpenProject,
}: ExperienceSectionProps) {
  return (
    <section id="experience" className="surface-card px-4 py-5 sm:px-8 sm:py-6">
      <p className="heading-kicker">Experience</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">Recent Roles</h2>
      <div className="relative mt-5 sm:mt-6">
        <div className="absolute bottom-3 left-2.5 top-3 w-px bg-[var(--line)] sm:left-3" />
        <ul className="space-y-5">
          {items.map((item) => {
            const relatedProjects = projects.filter((project) =>
              item.projectIds.includes(project.id),
            );

            return (
              <li key={item.id} className="relative pl-8 sm:pl-10">
                <span className="absolute left-0 top-2 h-5 w-5 rounded-full border border-[var(--line)] bg-white p-1 sm:top-2.5 sm:h-6 sm:w-6 sm:p-1.5">
                  <span className="block h-full w-full rounded-full bg-[var(--brand)]" />
                </span>
                <article className="rounded-xl border border-[var(--line)] bg-white/70 px-4 py-4 sm:px-5">
                  <p className="text-sm text-[var(--text-muted)]">{item.period}</p>
                  <h3 className="break-words text-base font-semibold tracking-tight sm:text-lg">
                    {item.role} · {item.company}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">{item.location}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                    {item.summary}
                  </p>
                  <div className="mt-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[var(--accent)]">
                      Tech Used
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {item.techStack.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full border border-[var(--line)] bg-white px-2.5 py-1 text-xs text-[var(--text-muted)]"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-[var(--text-muted)]">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>

                  {relatedProjects.length > 0 ? (
                    <div className="mt-4 space-y-3">
                      <p className="text-xs font-semibold uppercase tracking-wide text-[var(--accent)]">
                        Projects Built In This Role
                      </p>
                      <div className="grid gap-3 md:grid-cols-2">
                        {relatedProjects.map((project) => (
                          <article
                            key={project.id}
                            className="rounded-xl border border-[var(--line)] bg-white px-3 py-3 sm:px-4"
                          >
                            <h4 className="break-words text-sm font-semibold tracking-tight">
                              {project.title}
                            </h4>
                            <p className="mt-1 text-xs leading-relaxed text-[var(--text-muted)]">
                              {project.summary}
                            </p>
                            <button
                              type="button"
                              onClick={() => onOpenProject(project)}
                              className="mt-2 text-xs font-semibold text-[var(--accent)] hover:underline"
                            >
                              Open details
                            </button>
                          </article>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
