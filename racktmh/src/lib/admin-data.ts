// Admin Data Types and Structures

export interface PageSection {
  id: string;
  type: "hero" | "content" | "gallery" | "team" | "cta" | "testimonial" | "faq" | "form" | "stats";
  title?: string;
  description?: string;
  content?: string;
  backgroundColor?: string;
  textColor?: string;
  order: number;
  isVisible: boolean;
}

export interface PageData {
  id: string;
  slug: string;
  title: string;
  description: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
  sections: PageSection[];
  seo?: {
    metaDescription: string;
    keywords: string[];
    ogImage?: string;
  };
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  order: number;
  isVisible: boolean;
  children?: NavigationItem[];
}

export interface SiteConfig {
  siteName: string;
  siteDescription: string;
  logo?: string;
  primaryColor: string;
  secondaryColor: string;
  navigation: NavigationItem[];
  socialLinks?: Record<string, string>;
}

export interface ComponentTemplate {
  id: string;
  name: string;
  category: "header" | "footer" | "card" | "form" | "section" | "button";
  code: string;
  preview?: string;
  description: string;
}

// Mock data for pages
export const mockPages: PageData[] = [
  {
    id: "home",
    slug: "home",
    title: "Home",
    description: "Club homepage with hero section and overview",
    published: true,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-15"),
    sections: [
      {
        id: "hero-1",
        type: "hero",
        title: "Creating lasting change through service, leadership, and fellowship.",
        description: "A concise community-first club for young leaders in Kathmandu",
        backgroundColor: "var(--primary)",
        order: 1,
        isVisible: true,
      },
      {
        id: "section-2",
        type: "content",
        title: "About Us",
        description: "Service, leadership, and fellowship in one small club.",
        content: "A Rotaract club shaped by practical service...",
        order: 2,
        isVisible: true,
      },
    ],
    seo: {
      metaDescription: "Rotaract Club of Kathmandu Height - Service, Leadership, Fellowship",
      keywords: ["rotaract", "kathmandu", "service", "leadership"],
    },
  },
  {
    id: "about",
    slug: "about",
    title: "About Us",
    description: "Information about the Rotaract club",
    published: true,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-15"),
    sections: [
      {
        id: "about-hero",
        type: "hero",
        title: "About Rotaract Club of Kathmandu Height",
        description: "Our history, mission, and values",
        order: 1,
        isVisible: true,
      },
    ],
  },
  {
    id: "team",
    slug: "team",
    title: "Our Team",
    description: "Club leadership and members",
    published: true,
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-15"),
    sections: [
      {
        id: "team-hero",
        type: "hero",
        title: "Meet the Team",
        description: "Leadership and active members",
        order: 1,
        isVisible: true,
      },
      {
        id: "team-directory",
        type: "team",
        title: "Team Directory",
        order: 2,
        isVisible: true,
      },
    ],
  },
];

// Mock site configuration
export const mockSiteConfig: SiteConfig = {
  siteName: "Rotaract Club of Kathmandu Height",
  siteDescription: "Creating lasting change through service, leadership, and fellowship",
  primaryColor: "#1a1a1a",
  secondaryColor: "#d91f63",
  navigation: [
    { id: "nav-1", label: "Home", href: "/", order: 1, isVisible: true },
    { id: "nav-2", label: "About Us", href: "/about", order: 2, isVisible: true },
    { id: "nav-3", label: "Our Team", href: "/team", order: 3, isVisible: true },
    { id: "nav-4", label: "Impact", href: "/impact", order: 4, isVisible: true },
    { id: "nav-5", label: "Contact", href: "/contact", order: 5, isVisible: true },
    { id: "nav-6", label: "Join Us", href: "/join", order: 6, isVisible: true },
  ],
};

// Component templates
export const componentTemplates: ComponentTemplate[] = [
  {
    id: "button-primary",
    name: "Primary Button",
    category: "button",
    description: "Standard primary action button",
    code: `<button className="px-6 py-3 bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--rotaract-dark)] text-white rounded-full font-semibold hover:shadow-lg transition-all">
  Click Me
</button>`,
  },
  {
    id: "card-default",
    name: "Content Card",
    category: "card",
    description: "Standard content card with title and description",
    code: `<div className="rounded-[2rem] p-6 bg-surface border border-border hover:shadow-xl transition-all">
  <h3 className="text-xl font-bold mb-2">Card Title</h3>
  <p className="text-muted-foreground">Card description goes here</p>
</div>`,
  },
  {
    id: "section-container",
    name: "Section Container",
    category: "section",
    description: "Main section wrapper for page content",
    code: `<section className="section-shell">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* Content goes here */}
  </div>
</section>`,
  },
];
