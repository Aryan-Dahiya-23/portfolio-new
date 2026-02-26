import type { PersonalProject } from "@/types/portfolio";

export const projectItems: PersonalProject[] = [
  {
    id: "audioverse-ecommerce",
    title: "Audioverse - An Ecommerce App",
    summary:
      "Built a full-stack ecommerce platform with payments, product discovery, and responsive UX.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JavaScript"],
    image: "/projects/audioverse.jpeg",
    liveUrl: "https://ecommerce-deploy-lft5.vercel.app",
    repoUrl: "https://github.com/Aryan-Dahiya-23/Audioverse",
  },
  {
    id: "resume-pilot",
    title: "ResumePilot - AI Resume Reviewer",
    summary:
      "Built AI platform to review resumes, give feedback and track applications in one dashboard.",
    stack: [
      "Next.js",
      "TypeScript",
      "React Query",
      "Prisma",
      "PostgreSQL",
      "Supabase",
      "Clerk",
      "Inngest",
    ],
    image: "/projects/resume-pilot.jpeg",
    liveUrl: "https://resume-pilot-aryan.vercel.app",
    repoUrl: "https://github.com/Aryan-Dahiya-23/resume-pilot",
  },
  {
    id: "evently-event-booking",
    title: "Evently - Event Booking Application",
    summary:
      "Built an event booking platform with auth, validation, payments, and scalable listing flows.",
    stack: ["Next.js", "Node.js", "MongoDB", "Stripe", "Clerk", "Zod", "ShadCN"],
    image: "/projects/evently.jpeg",
    liveUrl: "https://evently-aryan.vercel.app",
    repoUrl: "https://github.com/Aryan-Dahiya-23/evently",
  },
  {
    id: "nexus-chat-app",
    title: "Nexus - Chat Application",
    summary:
      "Created a real-time chat app with messaging, video calling, media sharing, and caching.",
    stack: [
      "React",
      "Node.js",
      "MongoDB",
      "React Query",
      "WebRTC",
      "Socket.IO",
      "Passport.js",
    ],
    image: "/projects/nexus.png",
    liveUrl: "https://nexus-aryan.vercel.app",
    repoUrl: "https://github.com/Aryan-Dahiya-23/nexus",
  },
  {
    id: "sociopedia-social-media",
    title: "Sociopedia - Social Media App",
    summary:
      "Developed a social platform with secure auth, media sharing and performance-focused data access.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Cloudinary", "JWT"],
    image: "/projects/sociopedia.webp",
    liveUrl: "https://sociopedia-aryan.vercel.app",
    repoUrl: "https://github.com/Aryan-Dahiya-23/sociopedia",
  },
  {
    id: "stash-wallet",
    title: "Stash - Self-Custody Solana Wallet",
    summary:
      "Built a self-custody Solana wallet prototype with wallet creation/import, secure transaction flows, and token/NFT management interfaces.",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "MongoDB",
      "Solana Web3.js",
      "Tailwind CSS",
      "Radix UI",
    ],
    image: "/projects/stash.webp",
    liveUrl: "https://stashwallet.vercel.app/wallet",
    repoUrl: "https://github.com/Aryan-Dahiya-23/Stash",
  },
];
