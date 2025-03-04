import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "CYBERHAX",
  DESCRIPTION: "Welcome to CYBERHAX official website",
  AUTHOR: "Akram Faisal",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Collection on CTF write-ups, members' achievements and interesting topics.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects or workshops we have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Partner Page
export const PARTNER: Page = {
  TITLE: "Partners and Sponsors",
  DESCRIPTION: "Our partners and sponsors.",
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
    TEXT: "Partners", 
    HREF: "/partners", 
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

