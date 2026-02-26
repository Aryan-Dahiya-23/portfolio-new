"use client";

import { motion } from "framer-motion";
import type { ExperienceItem, Project } from "@/types/portfolio";

type ExperienceSectionProps = {
  items: ExperienceItem[];
  projects: Project[];
  onOpenProject: (project: Project) => void;
};

export function ExperienceSection({
  items,
  projects,
  onOpenProject,
}: ExperienceSectionProps) {
  return (
    <section id="experience" className="surface-card px-6 py-6 sm:px-8">
      <p className="heading-kicker">Experience</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight">Recent Roles</h2>
      <div className="relative mt-6">
        <div className="absolute bottom-3 left-3 top-3 w-px bg-[var(--line)]" />
        <ul className="space-y-5">
          {items.map((item, index) => {
            const relatedProjects = projects.filter((project) =>
              item.projectIds.includes(project.id),
            );

            return (
              <motion.li
                key={item.id}
                className="relative pl-10"
                initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{
                  duration: 0.6,
                  ease: [0.2, 0.7, 0.2, 1],
                  delay: 0.12 + index * 0.08,
                }}
              >
                <span className="absolute left-0 top-2.5 h-6 w-6 rounded-full border border-[var(--line)] bg-white p-1.5">
                  <span className="block h-full w-full rounded-full bg-[var(--brand)]" />
                </span>
                <article className="rounded-xl border border-[var(--line)] bg-white/70 px-5 py-4">
                  <p className="text-sm text-[var(--text-muted)]">{item.period}</p>
                  <h3 className="text-lg font-semibold tracking-tight">
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
                            className="rounded-xl border border-[var(--line)] bg-white px-4 py-3"
                          >
                            <h4 className="text-sm font-semibold tracking-tight">
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
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
