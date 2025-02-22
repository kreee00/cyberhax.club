import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "CYBERHAX",
  DESCRIPTION: "Welcome to Astro Sphere, a portfolio and blog for designers and developers.",
  AUTHOR: "Akram Faisal",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "About", 
    HREF: "/about-us", 
  },
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
  { 
    TEXT: "Sponsors", 
    HREF: "/sponsor", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "hello@cyberhax.club",
    HREF: "mailto:hello@cyberhax.club",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "cyberhaxutp",
    HREF: "https://github.com/cyberhaxutp"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "CYBERHAX UTP",
    HREF: "https://www.linkedin.com/company/cyberhaxutp",
  },
  { 
    NAME: "Instagram",
    ICON: "instagram",
    TEXT: "cyberhaxutp",
    HREF: "https://instagram.com/cyberhaxutp",
  },
  { 
    NAME: "Linktree",
    ICON: "linktree",
    TEXT: "cyberhaxutp",
    HREF: "https://linktr.ee/cyberhaxutp",
  },
]

