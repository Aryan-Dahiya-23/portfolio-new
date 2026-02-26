import type { ContactData, HeroData, NavItem } from "@/types/portfolio";

export const siteName = "Aryan Dahiya";

export const navItems: NavItem[] = [
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const heroData: HeroData = {
  title: "Building polished products that feel fast, sharp, and intentional.",
  description:
    "I'm a software engineer focused on building reliable systems, scalable architecture, and clear product outcomes.",
  primaryCta: {
    label: "View Projects",
    href: "#projects",
  },
  secondaryCta: {
    label: "Download Resume",
    href: "/resume-aryan-dahiya.pdf",
  },
};

export const contactData: ContactData = {
  heading: "Let's Build Something Meaningful",
  description:
    "Have an interesting product, role, or collaboration in mind? Reach out and let's talk.",
  email: "aryan23dahiya@gmail.com",
  emailButtonLabel: "Email Me",
  links: [
    { label: "GitHub", href: "https://github.com/Aryan-Dahiya-23" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aryan-dahiya-a72320249" },
    { label: "Twitter", href: "https://x.com/aryandahiya23" },
  ],
};
