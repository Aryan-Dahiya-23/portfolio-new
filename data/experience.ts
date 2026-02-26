import type { ExperienceItem, ExperienceProject } from "@/types/portfolio";

export const experienceProjects: ExperienceProject[] = [
  {
    id: "sendit-marketplace",
    title: "SendIT Marketplace",
    summary:
      "Built a customer-facing marketplace for product discovery, checkout, and subscription transactions.",
    overview:
      "A production marketplace application at SendIT Markets focused on buyer-side commerce journeys. The platform covers catalog browsing, product detail views, cart/checkout flows, and transaction handling with wallet-enabled payment integrations.",
    gallery: [
      "/experience/sendit/home-page.jpeg",
      "/experience/sendit/product-page.jpeg",
      "/experience/sendit/cards-page.jpeg",
      "/experience/sendit/categories-page.jpeg",
      "/experience/sendit/message-page.jpeg",
      "/experience/sendit/testimonial-page.jpeg",
    ],
    liveUrl: "https://www.sendit.markets",
  },
  {
    id: "sendit-seller-dashboard",
    title: "SendIT Seller Dashboard",
    summary:
      "Built a seller operations dashboard for listings, order management, and performance analytics.",
    overview:
      "A dedicated seller-facing workspace at SendIT Markets for day-to-day operations. It centralizes product listing management, order tracking, analytics insights, and account-level controls with secure role-based access.",
    gallery: [
      "/experience/sendit/dashboard-overview.jpeg",
      "/experience/sendit/dashboard-reviews.jpeg",
      "/experience/sendit/dashboard-orders.jpeg",
      "/experience/sendit/dashboard-message.jpeg",
      "/experience/sendit/dashboard-new.jpeg",
      "/experience/sendit/dashboard-deliverables.jpeg",
    ],
    liveUrl: "https://dashboard.sendit.markets",
  },
  {
    id: "law-firm-dashboard",
    title: "Law Firm Document Dashboard",
    summary:
      "Built secure case/document workflows with scalable file handling and metadata search.",
    overview:
      "A document-heavy legal operations dashboard developed as a freelance engagement. The system supports case-level document management, secure file uploads, retrieval at scale, and efficient filtering/search across structured metadata.",
    gallery: [
      "/experience/resolvex/resolvex-1.jpeg",
      "/experience/resolvex/resolvex-3.jpeg",
      "/experience/resolvex/resolvex-4.jpeg",
      "/experience/resolvex/resolvex-5.jpeg",
    ],
    liveUrl: "https://resolvex.co.in",
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    id: "sendit-markets-founding-engineer",
    role: "Founding Engineer",
    company: "SendIT Markets",
    period: "Jan 2025 - Jan 2026",
    location: "Dubai, UAE - Remote",
    summary:
      "Built core product systems across frontend and backend, owning delivery for seller workflows and platform integrations.",
    points: [
      "Built responsive UI in Next.js (React + TypeScript) and developed the Seller Dashboard from scratch (listings, orders, analytics).",
      "Used React Query to improve data retrieval speed by ~40% and reduce server requests by ~30%.",
      "Built Web3 wallet integration using web3.js and integrated payments/subscriptions for transaction workflows.",
      "Designed and implemented an end-to-end messaging system between buyers and sellers for direct communication and faster issue resolution.",
      "Built and maintained REST APIs in Go, supporting dashboard workflows and core product integrations.",
      "Implemented role-based access control (RBAC) and improved API reliability with better validation and error handling.",
      "Contributed to growth outcomes that supported a $300K+ pre-seed raise, 2K+ seller onboarding, and $20K+ in marketplace sales.",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "React Query",
      "web3.js",
      "Go",
      "REST APIs",
    ],
    projectIds: ["sendit-marketplace", "sendit-seller-dashboard"],
  },
  {
    id: "law-firm-dashboard-freelance",
    role: "Freelance Full-Stack Developer",
    company: "Law Firm Dashboard",
    period: "Jul 2025 - Sep 2025",
    location: "Delhi, India - Remote",
    summary:
      "Delivered a document-heavy internal dashboard focused on secure file workflows and scalable data handling.",
    points: [
      "Built a document-heavy dashboard using Next.js and React Query for fast, smooth data-driven UI.",
      "Developed Node.js REST APIs for case and document management workflows.",
      "Designed Prisma + PostgreSQL schema for structured metadata storage, filtering, and search.",
      "Implemented S3 storage + file streaming to support secure uploads and large file retrieval (PDFs/images).",
      "Optimized performance using pagination, efficient queries, and scalable document handling patterns.",
    ],
    techStack: [
      "Next.js",
      "React Query",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "S3",
      "File Streaming",
    ],
    projectIds: ["law-firm-dashboard"],
  },
];
