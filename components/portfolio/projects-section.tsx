import type { Project } from "@/types/portfolio";
import { ProjectCard } from "@/components/portfolio/project-card";

type ProjectsSectionProps = {
  projects: Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="space-y-4">
      <div>
        <p className="heading-kicker">Selected Work</p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight">Projects</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            animationDelayMs={120 + index * 110}
          />
        ))}
      </div>
    </section>
  );
}
