"use client";

import { useEffect, useState } from "react";

import { ContactSection } from "@/components/portfolio/contact-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { Header } from "@/components/portfolio/header";
import { HeroSection } from "@/components/portfolio/hero-section";
import { ProjectDrawer } from "@/components/portfolio/project-drawer";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { contactData, heroData, navItems, siteName } from "@/data/site";
import { experienceItems, experienceProjects } from "@/data/experience";
import { projectItems } from "@/data/projects";
import { skillItems } from "@/data/skills";
import type { Project } from "@/types/portfolio";

export function PortfolioPage() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!activeProject) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeProject]);

  return (
    <>
      <div className="pb-16 pt-8 sm:pt-12">
        <Header siteName={siteName} navItems={navItems} />
        <div className="h-5 sm:h-8" aria-hidden="true" />

        <main className="container-grid space-y-6 sm:space-y-8">
          <HeroSection hero={heroData} />
          <SkillsSection skills={skillItems} />
          <ExperienceSection
            items={experienceItems}
            projects={experienceProjects}
            onOpenProject={setActiveProject}
          />
          <ProjectsSection projects={projectItems} />
          <ContactSection contact={contactData} />
        </main>
      </div>

      <ProjectDrawer activeProject={activeProject} onClose={() => setActiveProject(null)} />
    </>
  );
}
