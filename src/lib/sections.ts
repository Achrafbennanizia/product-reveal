export const SECTIONS = [
  { id: "top", label: "Rise" },
  { id: "shift", label: "Science" },
  { id: "system", label: "Method" },
  { id: "materials", label: "Specs" },
  { id: "proof", label: "Proof" },
  { id: "order", label: "Order" },
] as const;

export type SectionId = (typeof SECTIONS)[number]["id"];
