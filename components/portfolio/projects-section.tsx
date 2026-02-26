import type { PersonalProject } from "@/types/portfolio";
import { ProjectCard } from "@/components/portfolio/project-card";

type ProjectsSectionProps = {
  projects: PersonalProject[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="space-y-4">
      <div>
        <p className="heading-kicker">Selected Work</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">Projects</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
