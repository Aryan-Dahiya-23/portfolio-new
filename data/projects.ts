import type { Project } from "@/types/portfolio";

export const projectItems: Project[] = [

  {
    id: "audioverse-ecommerce",
    title: "Audioverse - An Ecommerce App",
    summary:
      "Built a full-stack ecommerce platform with payments, product discovery, and responsive UX.",
    overview:
      "Audioverse is a MERN-based ecommerce application covering end-to-end shopping workflows. The app includes product exploration, checkout, and transaction handling with a responsive interface optimized for different devices.",
    highlights: [
      "Built full-stack architecture using React, Node.js, Express, and MongoDB.",
      "Integrated Stripe for secure and reliable payment processing.",
      "Implemented product search, filtering, and sorting for faster discovery.",
      "Designed responsive UI flows for consistent experience across devices.",
    ],
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
      "JavaScript",
    ],
    image: "/projects/audioverse.jpeg",
    gallery: ["/projects/ai-notes.svg", "/projects/ai-notes-detail.svg"],
    liveUrl: "https://ecommerce-deploy-lft5.vercel.app",
    repoUrl: "https://github.com/Aryan-Dahiya-23/Audioverse",
  },
  {
    id: "resume-pilot",
    title: "ResumePilot - AI Resume Reviewer",
    summary: "Built AI platform to review resumes, give feedback and track applications in one dashboard.",
    overview:
      "ResumePilot helps candidates improve resume quality and manage their job search workflow. Users can upload resumes, receive AI-driven suggestions, monitor resume scores over time, and track applications across pipeline stages like saved, applied, interview, and offer.",
    highlights: [
      "Implemented resume upload and parsing pipeline with asynchronous background processing.",
      "Built AI review workflow to generate resume scores, suggestions, and rewrite guidance.",
      "Created job tracking system with status updates, filters, search, and pagination.",
      "Integrated Clerk authentication with protected dashboard routes and user-scoped data.",
    ],
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
    gallery: [
      "/projects/resume-pilot.jpeg",
      "/projects/resume-pilot-1.jpeg",
      "/projects/resume-pilot-2.jpeg",
      "/projects/resume-pilot-3.jpeg",
    ],
    liveUrl: "https://resume-pilot-aryan.vercel.app",
    repoUrl: "https://github.com/Aryan-Dahiya-23/resume-pilot",
  },

  {
    id: "evently-event-booking",
    title: "Evently - Event Booking Application",
    summary:
      "Built an event booking platform with auth, validation, payments, and scalable listing flows.",
    overview:
      "Evently is a modern event booking application with secure auth and robust validation. It supports event discovery, booking workflows, and payment handling with maintainable UI patterns and scalable data rendering.",
    highlights: [
      "Integrated Clerk for secure authentication and user management.",
      "Used Zod for strong validation and improved data integrity.",
      "Built reusable and consistent UI components using ShadCN.",
      "Implemented Stripe payments, pagination, and dynamic booking workflows.",
    ],
    stack: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Stripe",
      "Clerk",
      "Zod",
      "ShadCN",
    ],
    image: "/projects/evently.jpeg",
    gallery: [
      "/projects/evently.jpeg",
      "/projects/evently-1.jpeg",
      "/projects/evently-2.jpeg",
      "/projects/evently-2.jpeg",

    ],
    liveUrl: "https://evently-aryan.vercel.app",
    repoUrl: "https://github.com/Aryan-Dahiya-23/evently",
  },
  {
    id: "nexus-chat-app",
    title: "Nexus - Chat Application",
    summary:
      "Created a real-time chat app with messaging, video calling, media sharing, and caching.",
    overview:
      "Nexus is a communication-focused application designed for real-time interactions. It includes instant messaging, video chat, and media workflows with optimized data fetching for responsive user experiences.",
    highlights: [
      "Implemented real-time messaging with Socket.IO for instant communication.",
      "Used React Query caching to improve responsiveness and data consistency.",
      "Integrated WebRTC-based video chat for live user interactions.",
      "Enabled Cloudinary-backed media storage and retrieval for shared content.",
    ],
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
    gallery: ["/projects/ai-notes.svg", "/projects/ai-notes-detail.svg"],
    liveUrl: "https://nexus-aryan.vercel.app",
    repoUrl: "https://github.com/Aryan-Dahiya-23/nexus",
  },
  {
    id: "sociopedia-social-media",
    title: "Sociopedia - Social Media App",
    summary:
      "Developed a social platform with secure auth, media sharing and performance-focused data access.",
    overview:
      "Sociopedia is a full-stack social media application focused on secure user interactions and rich content sharing. It supports user authentication, media uploads, and advanced discovery patterns while maintaining responsive performance.",
    highlights: [
      "Implemented JWT-based authentication and authorization for user-specific access.",
      "Enabled multimedia upload and sharing workflows for richer engagement.",
      "Built advanced search and filtering for faster user/content discovery.",
      "Optimized queries and frontend rendering for smoother performance.",
    ],
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Cloudinary",
      "JWT",
    ],
    image: "/projects/sociopedia.webp",
    gallery: [
      "/projects/support-dashboard.svg",
      "/projects/support-dashboard-detail.svg",
    ],
    liveUrl: "https://sociopedia-aryan.vercel.app",
    repoUrl: "https://github.com/Aryan-Dahiya-23/sociopedia",
  },
  {
    id: "stash-wallet",
    title: "Stash - Self-Custody Solana Wallet",
    summary:
      "Built a self-custody Solana wallet prototype with wallet creation/import, secure transaction flows, and token/NFT management interfaces.",
    overview:
      "Stash is a communication-light, security-focused crypto wallet prototype designed to simplify Solana asset management. It supports creating or importing wallets, password-protected access, send/receive flows, and user-friendly identity features like unique wallet-linked names, with additional interfaces for NFTs, vault storage, and token swapping.",
    highlights: [
      "Implemented wallet creation and import flows using seed phrase and private key support.",
      "Added password lock and pre-transaction password verification (2FA-style confirmation) for safer transfers.",
      "Built send/receive SOL workflows with usability-focused UI and wallet-linked unique name generation.",
      "Designed NFT, vault, and token swap interfaces to extend portfolio and asset management capabilities.",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "MongoDB",
      "Solana Web3.js",
      "Tailwind CSS",
      "Radix UI"
    ],
    image: "/projects/stash.webp",
    gallery: [
      "/projects/support-dashboard.svg",
      "/projects/support-dashboard-detail.svg",
    ],
    liveUrl: "https://stashwallet.vercel.app/wallet",
    repoUrl: "https://github.com/Aryan-Dahiya-23/Stash",
  }
];
