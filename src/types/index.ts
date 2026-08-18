/* Shared TypeScript types used across data files and components. */

export type PageId =
  | "home"
  | "about"
  | "storytelling"
  | "social-impact"
  | "speaking"
  | "media"
  | "resources"
  | "contact";

export type Project = {
  title: string;
  hook: string;
  role: string;
  year: string;
  img: string;
};
