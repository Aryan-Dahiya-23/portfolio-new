export type NavItem = {
  label: string;
  href: string;
};

export type HeroData = {
  title: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
};

export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  points: string[];
  techStack: string[];
  projectIds: string[];
};

export type PersonalProject = {
  id: string;
  title: string;
  summary: string;
  stack: string[];
  image: string;
  liveUrl: string;
  repoUrl: string;
};

export type ExperienceProject = {
  id: string;
  title: string;
  summary: string;
  overview: string;
  gallery: string[];
  liveUrl: string;
};

export type ContactLink = {
  label: string;
  href: string;
};

export type ContactData = {
  heading: string;
  description: string;
  email: string;
  emailButtonLabel: string;
  links: ContactLink[];
};
