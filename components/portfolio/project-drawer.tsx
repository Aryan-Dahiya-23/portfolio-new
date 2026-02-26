import Image from "next/image";

import type { ExperienceProject } from "@/types/portfolio";

type ProjectDrawerProps = {
  activeProject: ExperienceProject | null;
  onClose: () => void;
};

export function ProjectDrawer({ activeProject, onClose }: ProjectDrawerProps) {
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/45 transition-opacity duration-300 ${
          activeProject ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
      />

      <aside
        className={`fixed inset-0 z-50 h-full w-full overflow-y-auto bg-[#fffaf6] p-4 shadow-2xl transition-transform duration-300 sm:p-8 ${
          activeProject ? "translate-y-0" : "translate-y-full"
        }`}
        aria-hidden={!activeProject}
      >
        {activeProject ? (
          <div className="space-y-6 pb-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <p className="heading-kicker">Project Details</p>
                <h3 className="mt-2 break-words text-2xl font-semibold tracking-tight sm:text-3xl">
                  {activeProject.title}
                </h3>
              </div>
              <div className="flex w-full flex-wrap items-center gap-2 sm:w-auto">
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[var(--brand)] px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90 sm:w-auto"
                >
                  Live Demo
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex w-full items-center justify-center rounded-full border border-[var(--line)] px-4 py-2 text-sm font-medium transition hover:bg-white sm:w-auto"
                >
                  Close
                </button>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
              {activeProject.overview}
            </p>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                Gallery
              </h4>
              {activeProject.gallery.length > 0 ? (
                <div className="grid gap-3 sm:grid-cols-2">
                  {activeProject.gallery.map((image, imageIndex) => (
                    <div
                      key={image}
                      className="group aspect-[16/10] overflow-hidden rounded-2xl border border-[var(--line)] bg-gradient-to-br from-[#ffe9d6] via-[#efe8ff] to-[#dff3ff] p-3"
                    >
                      <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/60 bg-white shadow-sm">
                        <Image
                          src={image}
                          alt={`${activeProject.title} screenshot ${imageIndex + 1}`}
                          width={1200}
                          height={750}
                          className="h-full w-full object-contain bg-white transition duration-300 group-hover:scale-[1.02]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-xl border border-[var(--line)] bg-white/70 px-4 py-6 text-sm text-[var(--text-muted)]">
                  No gallery images added yet.
                </div>
              )}
            </div>

          </div>
        ) : null}
      </aside>
    </>
  );
}
