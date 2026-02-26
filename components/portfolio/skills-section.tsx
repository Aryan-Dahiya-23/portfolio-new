type SkillsSectionProps = {
  skills: string[];
};

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="surface-card overflow-hidden px-4 py-5 sm:px-8 sm:py-6">
      <p className="heading-kicker">Skills</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
        Core engineering toolkit
      </h2>
      <div className="skills-marquee mt-5">
        <div className="skills-track">
          {[...skills, ...skills].map((skill, index) => (
            <span key={`${skill}-${index}`} className="skill-pill">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
