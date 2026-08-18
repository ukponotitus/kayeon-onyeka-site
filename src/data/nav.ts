/* Navigation items — drives the Nav component and Footer links. */

import { PageId } from "@/types";

export const NAV_ITEMS: { label: string; page: PageId }[] = [
  { label: "About", page: "about" },
  { label: "Storytelling", page: "storytelling" },
  { label: "Social Impact", page: "social-impact" },
  { label: "Speaking", page: "speaking" },
  { label: "Media", page: "media" },
  { label: "Resources", page: "resources" },
  { label: "Contact", page: "contact" },
];
