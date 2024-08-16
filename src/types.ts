export type Page = {
  TITLE: string
  DESCRIPTION: string
}

export interface Site extends Page {
  AUTHOR: string
}

export type Links = {
  TEXT: string
  HREF: string
}[]

export type Socials = {
  NAME: string
  ICON: string
  TEXT: string
  HREF: string
}[]

export interface Social {
  twitter?: string
  blog?: string
  github?: string
}

export interface User {
  avatar: string
  name: string
  title: string
  description: string
  social: Social
}