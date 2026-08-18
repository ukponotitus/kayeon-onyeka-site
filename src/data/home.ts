/* Home page data — floating fragments and featured project cards. */

import { PageId } from "@/types";

export const FRAGMENTS = [
  { t: "in the margin", sz: "text-[110px]", top: "6%",  left: "-4%",  op: 0.04, rot: "-2deg" },
  { t: "between",       sz: "text-[75px]",  top: "17%", right: "3%",  op: 0.05, rot: "1.5deg" },
  { t: "silence",       sz: "text-[190px]", top: "34%", left: "18%",  op: 0.028,rot: "0deg" },
  { t: "and everything",sz: "text-[85px]",  top: "54%", left: "-3%",  op: 0.04, rot: "-1deg" },
  { t: "unsaid",        sz: "text-[155px]", top: "64%", right: "-1%", op: 0.035,rot: "2deg" },
  { t: "I build from",  sz: "text-[65px]",  bottom:"16%",left: "14%", op: 0.045,rot: "0deg" },
  { t: "borrowed light",sz: "text-[105px]", bottom:"4%", right: "8%", op: 0.03, rot: "-1.5deg" },
] as const;

export const HOME_FEATURED = [
  {
    label: "Spoken Word",
    title: "Fragments of Fire",
    desc: "A critically acclaimed spoken word performance touring venues across the UK and West Africa — exploring identity, inheritance, and the stories we carry in our bodies.",
    img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=640&h=420&fit=crop&auto=format",
    page: "storytelling" as PageId,
  },
  {
    label: "Social Impact",
    title: "The Narrators Programme",
    desc: "A youth storytelling initiative reaching 2,400+ young people across Nigeria and the UK, using narrative as a tool for healing, leadership, and civic identity.",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=640&h=420&fit=crop&auto=format",
    page: "social-impact" as PageId,
  },
  {
    label: "Recognition",
    title: "Commonwealth Youth Award",
    desc: "Named a Commonwealth Youth Award finalist for outstanding contribution to youth development through creative and community-based programming.",
    img: "https://images.unsplash.com/photo-1567427018140-fcf5065aad2?w=640&h=420&fit=crop&auto=format",
    page: "media" as PageId,
  },
  {
    label: "Speaking",
    title: "TEDx Lagos: The Politics of Story",
    desc: "A widely shared talk exploring how narrative shapes civic identity — and why the stories we tell are acts of power.",
    img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=640&h=420&fit=crop&auto=format",
    page: "speaking" as PageId,
  },
];
